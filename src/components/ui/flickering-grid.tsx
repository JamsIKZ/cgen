"use client";

import { cn, colorWithOpacity, getRGBA } from "@/lib/utils";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string; // Can be any valid CSS color including hex, rgb, rgba, hsl, var(--color)
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
  text?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: number | string;
}

interface GridParams {
  cols: number;
  rows: number;
  squares: Float32Array;
  dpr: number;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 3,
  gridGap = 3,
  flickerChance = 0.1, // Reduced flicker chance
  color = "#B4B4B4",
  width,
  height,
  className,
  maxOpacity = 0.15,
  text = "",
  fontSize = 140,
  fontWeight = 600,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const animationFrameIdRef = useRef<number>();
  const gridParamsRef = useRef<GridParams | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Convert any CSS color to rgba for optimal canvas performance
  const memoizedColor = useMemo(() => {
    return getRGBA(color);
  }, [color]);

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number,
    ) => {
      ctx.clearRect(0, 0, width, height);

      // Only create text mask if text is provided
      let maskCtx: CanvasRenderingContext2D | null = null;
      let maskCanvas: HTMLCanvasElement | null = null;
      
      if (text) {
        maskCanvas = document.createElement("canvas");
        maskCanvas.width = width;
        maskCanvas.height = height;
        maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
        
        if (maskCtx) {
          maskCtx.save();
          maskCtx.scale(dpr, dpr);
          maskCtx.fillStyle = "white";
          maskCtx.font = `${fontWeight} ${fontSize}px "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
          maskCtx.textAlign = "center";
          maskCtx.textBaseline = "middle";
          maskCtx.fillText(text, width / (2 * dpr), height / (2 * dpr));
          maskCtx.restore();
        }
      }

      // Batch by opacity for better performance
      const opacityGroups: {[key: string]: {x: number, y: number}[]} = {};
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * (squareSize + gridGap) * dpr;
          const y = j * (squareSize + gridGap) * dpr;
          
          let hasText = false;
          if (maskCtx && maskCanvas) {
            const squareWidth = squareSize * dpr;
            const squareHeight = squareSize * dpr;
            const maskData = maskCtx.getImageData(
              x,
              y,
              squareWidth,
              squareHeight,
            ).data;
            hasText = maskData.some(
              (value, index) => index % 4 === 0 && value > 0,
            );
          }

          const opacity = squares[i * rows + j];
          const finalOpacity = hasText
            ? Math.min(1, opacity * 3 + 0.4)
            : opacity;
          
          // Round opacity to reduce number of fillStyle changes
          const roundedOpacity = Math.round(finalOpacity * 100) / 100;
          const key = roundedOpacity.toString();
          
          if (!opacityGroups[key]) {
            opacityGroups[key] = [];
          }
          
          opacityGroups[key].push({ x, y });
        }
      }
      
      // Draw squares with the same opacity in batches
      Object.entries(opacityGroups).forEach(([opacity, positions]) => {
        ctx.fillStyle = colorWithOpacity(memoizedColor, parseFloat(opacity));
        
        for (const { x, y } of positions) {
          ctx.fillRect(x, y, squareSize * dpr, squareSize * dpr);
        }
      });
      
      // Clean up
      if (maskCanvas) {
        maskCanvas = null;
      }
    },
    [memoizedColor, squareSize, gridGap, text, fontSize, fontWeight],
  );

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      // Reduce the number of squares for better performance
      const scale = 1;
      const cols = Math.ceil((width * scale) / (squareSize + gridGap));
      const rows = Math.ceil((height * scale) / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, maxOpacity],
  );

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      // Limit the number of updates per frame for better performance
      const maxUpdatesPerFrame = Math.min(squares.length * 0.1, 100);
      let updates = 0;
      
      for (let i = 0; i < squares.length && updates < maxUpdatesPerFrame; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
          updates++;
        }
      }
    },
    [flickerChance, maxOpacity],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
      gridParamsRef.current = setupCanvas(canvas, newWidth, newHeight);
    };

    updateCanvasSize();

    const animate = (time: number) => {
      if (!isInView) {
        animationFrameIdRef.current = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = Math.min((time - lastTimeRef.current) / 1000, 0.1); // Cap deltaTime
      lastTimeRef.current = time;

      if (gridParamsRef.current) {
        updateSquares(gridParamsRef.current.squares, deltaTime);
        drawGrid(
          ctx,
          canvas.width,
          canvas.height,
          gridParamsRef.current.cols,
          gridParamsRef.current.rows,
          gridParamsRef.current.squares,
          gridParamsRef.current.dpr,
        );
      }
      
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    intersectionObserver.observe(canvas);
    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn(`h-full w-full ${className}`)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  );
};

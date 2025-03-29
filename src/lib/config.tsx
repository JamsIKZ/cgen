import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Cal AI",
  description: "Smart scheduling powered by AI.",
  cta: "Get Started",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "AI Calendar",
    "Smart Scheduling",
    "Productivity",
    "Time Management",
  ],
  links: {
    email: "support@calai.app",
    twitter: "https://twitter.com/calaiapp",
    discord: "https://discord.gg/calaiapp",
    github: "https://github.com/calaiapp",
    instagram: "https://instagram.com/calaiapp",
  },
  nav: {
    links: [
      { id: 1, name: "Home", href: "#hero" },
      { id: 2, name: "How it Works", href: "#bento" },
      { id: 3, name: "Features", href: "#features" },
      { id: 4, name: "Pricing", href: "#pricing" },
    ],
  },
  hero: {
    badgeIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-[#364153]"
      >
        <path d="M7.62758 1.09876C7.74088 1.03404 7.8691 1 7.99958 1C8.13006 1 8.25828 1.03404 8.37158 1.09876L13.6216 4.09876C13.7363 4.16438 13.8316 4.25915 13.8979 4.37347C13.9642 4.48779 13.9992 4.6176 13.9992 4.74976C13.9992 4.88191 13.9642 5.01172 13.8979 5.12604C13.8316 5.24036 13.7363 5.33513 13.6216 5.40076L8.37158 8.40076C8.25828 8.46548 8.13006 8.49952 7.99958 8.49952C7.8691 8.49952 7.74088 8.46548 7.62758 8.40076L2.37758 5.40076C2.26287 5.33513 2.16753 5.24036 2.10123 5.12604C2.03492 5.01172 2 4.88191 2 4.74976C2 4.6176 2.03492 4.48779 2.10123 4.37347C2.16753 4.25915 2.26287 4.16438 2.37758 4.09876L7.62758 1.09876Z" />
        <path d="M2.56958 7.23928L2.37758 7.34928C2.26287 7.41491 2.16753 7.50968 2.10123 7.624C2.03492 7.73831 2 7.86813 2 8.00028C2 8.13244 2.03492 8.26225 2.10123 8.37657C2.16753 8.49089 2.26287 8.58566 2.37758 8.65128L7.62758 11.6513C7.74088 11.716 7.8691 11.75 7.99958 11.75C8.13006 11.75 8.25828 11.716 8.37158 11.6513L13.6216 8.65128C13.7365 8.58573 13.8321 8.49093 13.8986 8.3765C13.965 8.26208 14 8.13211 14 7.99978C14 7.86745 13.965 7.73748 13.8986 7.62306C13.8321 7.50864 13.7365 7.41384 13.6216 7.34828L13.4296 7.23828L9.11558 9.70328C8.77568 9.89744 8.39102 9.99956 7.99958 9.99956C7.60814 9.99956 7.22347 9.89744 6.88358 9.70328L2.56958 7.23928Z" />
        <path d="M2.37845 10.5993L2.57045 10.4893L6.88445 12.9533C7.22435 13.1474 7.60901 13.2496 8.00045 13.2496C8.39189 13.2496 8.77656 13.1474 9.11645 12.9533L13.4305 10.4883L13.6225 10.5983C13.7374 10.6638 13.833 10.7586 13.8994 10.8731C13.9659 10.9875 14.0009 11.1175 14.0009 11.2498C14.0009 11.3821 13.9659 11.5121 13.8994 11.6265C13.833 11.7409 13.7374 11.8357 13.6225 11.9013L8.37245 14.9013C8.25915 14.966 8.13093 15 8.00045 15C7.86997 15 7.74175 14.966 7.62845 14.9013L2.37845 11.9013C2.2635 11.8357 2.16795 11.7409 2.10148 11.6265C2.03501 11.5121 2 11.3821 2 11.2498C2 11.1175 2.03501 10.9875 2.10148 10.8731C2.16795 10.7586 2.2635 10.6638 2.37845 10.5983V10.5993Z" />
      </svg>
    ),
    badge: "Introducing CineGen Protocol",
    title: "Decentralizing Access to AI-Generated Media",
    description:
      "CineGen ($CGEN) introduces a decentralized, permissionless protocol on Solana that enables users to fund and access AI-generated media through a tokenized system.",
    cta: {
      primary: {
        text: "Join Waitlist",
        href: "#",
      }
    },
  },
  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        name: "OpenAI",
        logo: null
      },
      {
        id: 2,
        name: "Claude",
        logo: null
      },
      {
        id: 3,
        name: "Grok",
        logo: null
      },
      {
        id: 4,
        name: "CGEN",
        logo: null
      },
      {
        id: 5,
        name: "Solana",
        logo: null
      },
      {
        id: 6,
        name: "Jupiter",
        logo: null
      },
      {
        id: 7,
        name: "Phantom",
        logo: null
      },
      {
        id: 8,
        name: "Dexscreener",
        logo: null
      },
    ],
  },
  featureSection: {
    title: "How CineGen Works",
    description:
      "The CineGen protocol simplifies funding and accessing AI-generated media in three seamless steps",
    items: [
      {
        id: 1,
        title: "Fund a Media Generation Request",
        content:
          "Users stake $CGEN tokens to fund an AI generation request—whether it's an image, animation, or cinematic render.",
        image:
          "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        title: "AI Model Executes the Job",
        content:
          "Decentralized GPU compute pools process requests, optimizing cost-efficiency and execution speed for high-quality media generation.",
        image:
          "https://images.unsplash.com/photo-1686170287433-c95faf6d3608?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8fA%3D%3D",
      },
      {
        id: 3,
        title: "On-Chain Delivery & Licensing",
        content:
          "Finalized outputs are delivered via smart contracts, with licensing metadata secured on Solana for verifiable ownership.",
        image:
          "https://images.unsplash.com/photo-1720378042271-60aff1e1c538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        title: "Tokenized Governance",
        content:
          "$CGEN holders shape the ecosystem by voting on model access tiers, GPU provider selection, and licensing frameworks.",
        image:
          "https://images.unsplash.com/photo-1666882990322-e7f3b8df4f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      },
    ],
  },
  bentoSection: {
    title: "The CineGen Protocol",
    description:
      "CineGen ($CGEN) establishes a Decentralized AI Funding & Access Network for AI-generated media on Solana.",
    items: [
      {
        id: 1,
        content: <FirstBentoAnimation />,
        title: "Funding AI Content Generation",
        description:
          "Users stake $CGEN to propose and vote on AI-generated projects. Smart contracts allocate funds to GPU compute pools.",
      },
      {
        id: 2,
        content: (
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_50%)] -translate-y-20">
            <SecondBentoAnimation />
          </div>
        ),

        title: "Tokenized AI Compute Credits",
        description:
          "$CGEN tokens function as compute credits, granting access to decentralized AI generation engines with pay-per-use metering.",
      },
      {
        id: 3,
        content: (
          <ThirdBentoAnimation
            data={[20, 30, 25, 45, 40, 55, 75]}
            toolTipValues={[
              1234, 1678, 2101, 2534, 2967, 3400, 3833, 4266, 4700, 5133,
            ]}
          />
        ),
        title: "Decentralized Content Ownership",
    description:
          "Every generated image/video is hashed on-chain, ensuring verifiable ownership with an NFT Licensing Layer.",
      },
      {
        id: 4,
        content: <FourthBentoAnimation once={false} />,
        title: "Solana Smart Contracts",
        description:
          "Our protocol leverages Solana's speed and low fees, with decentralized compute nodes distributing AI workloads among GPU providers.",
      },
    ],
  },
  benefits: [
      {
        id: 1,
      text: "Save hours each week with AI-optimized scheduling.",
      image: "/Device-6.png",
      },
      {
        id: 2,
      text: "Reduce scheduling conflicts and double-bookings.",
      image: "/Device-7.png",
      },
      {
        id: 3,
      text: "Improve work-life balance with smart time allocation.",
      image: "/Device-8.png",
      },
      {
        id: 4,
      text: "Increase productivity with AI-driven time management insights.",
      image: "/Device-1.png",
    },
  ],
  growthSection: {
    title: "Roadmap & Future Growth",
    description:
      "CineGen ($CGEN) is on a mission to redefine how AI-generated media is funded, accessed, and owned through our phased development approach.",
    items: [
      {
        id: 1,
        content: (
          <div
            className="relative flex size-full items-center justify-center overflow-hidden transition-all duration-300 hover:[mask-image:none] hover:[webkit-mask-image:none]"
            style={{
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              maskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          >
            <div className="absolute top-[55%] md:top-[58%] left-[55%] md:left-[57%] -translate-x-1/2 -translate-y-1/2  size-full z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="227"
                height="244"
                viewBox="0 0 227 244"
        fill="none"
                className="size-[90%] md:size-[85%] object-contain fill-background"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M104.06 3.61671C106.656 1.28763 110.017 0 113.5 0C116.983 0 120.344 1.28763 122.94 3.61671C148.459 26.5711 180.325 41.2118 214.322 45.6008C217.66 46.0312 220.736 47.6398 222.999 50.1383C225.262 52.6369 226.563 55.862 226.67 59.2357C227.947 96.7468 218.612 133.854 199.744 166.267C180.877 198.68 153.248 225.074 120.052 242.398C118.028 243.454 115.779 244.003 113.498 244C111.216 243.997 108.969 243.441 106.948 242.379C73.7524 225.055 46.1231 198.661 27.2556 166.248C8.38807 133.835 -0.947042 96.7279 0.329744 59.2168C0.441295 55.8464 1.74484 52.6258 4.00715 50.1311C6.26946 47.6365 9.34293 46.0306 12.6777 45.6008C46.6725 41.2171 78.5389 26.5832 104.06 3.63565V3.61671Z"
                />
      </svg>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <svg
        xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="80"
                viewBox="0 0 81 80"
                className="fill-background"
              >
                <g filter="url(#filter0_iiii_2_34)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5 36V28C20.5 22.6957 22.6071 17.6086 26.3579 13.8579C30.1086 10.1071 35.1957 8 40.5 8C45.8043 8 50.8914 10.1071 54.6421 13.8579C58.3929 17.6086 60.5 22.6957 60.5 28V36C62.6217 36 64.6566 36.8429 66.1569 38.3431C67.6571 39.8434 68.5 41.8783 68.5 44V64C68.5 66.1217 67.6571 68.1566 66.1569 69.6569C64.6566 71.1571 62.6217 72 60.5 72H20.5C18.3783 72 16.3434 71.1571 14.8431 69.6569C13.3429 68.1566 12.5 66.1217 12.5 64V44C12.5 41.8783 13.3429 39.8434 14.8431 38.3431C16.3434 36.8429 18.3783 36 20.5 36ZM52.5 28V36H28.5V28C28.5 24.8174 29.7643 21.7652 32.0147 19.5147C34.2652 17.2643 37.3174 16 40.5 16C43.6826 16 46.7348 17.2643 48.9853 19.5147C51.2357 21.7652 52.5 24.8174 52.5 28Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_iiii_2_34"
                    x="10.5"
                    y="6"
                    width="60"
                    height="70"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="-2" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_innerShadow_2_34"
                      result="effect2_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_innerShadow_2_34"
                      result="effect3_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="-1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_innerShadow_2_34"
                      result="effect4_innerShadow_2_34"
                    />
                  </filter>
                </defs>
      </svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="size-full"
            >
              <FlickeringGrid
                className="size-full"
                gridGap={4}
                squareSize={2}
                maxOpacity={0.5}
              />
            </motion.div>
          </div>
        ),

        title: "Phase 1: Protocol Launch (Q2 2025)",
    description:
          "Token launch & fair distribution, compute payment smart contracts, and first-gen AI models integrated for media generation.",
      },
      {
        id: 2,
        content: (
          <div className="relative flex size-full items-center justify-center overflow-hidden">
            <SecondBentoAnimation />
          </div>
        ),
        title: "Phase 2: Expansion (Q3 2025)",
    description:
          "On-chain licensing & NFT metadata, DAO governance activation, and partnerships with decentralized GPU providers.",
      },
      {
        id: 3,
        content: (
          <div className="p-4">
            <ThirdBentoAnimation
              data={[25, 40, 35, 55, 60, 75, 85]}
              toolTipValues={[
                10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
              ]}
            />
          </div>
        ),
        title: "Phase 3: Full Decentralization (2026)",
    description:
          "Permissionless AI model uploads, AI-generated media marketplace, and revenue-sharing mechanisms for creators.",
      },
    ],
  },
  quoteSection: {
    quote:
      "CGEN has transformed our daily operations. Tasks that once consumed hours now complete in moments, freeing our team to focus on creativity and strategic growth.",
    author: {
      name: "Alex Johnson",
      role: "CTO, Innovatech",
      image: "https://randomuser.me/api/portraits/men/91.jpg",
    },
  },
  pricing: {
    title: "Token Utility Tiers",
    description:
      "Stake $CGEN tokens to unlock enhanced features and benefits in the protocol.",
    pricingItems: [
      {
        name: "Basic",
        href: "#",
        price: "1,000",
        period: "CGEN",
        yearlyPrice: "10,000",
        features: [
          "Basic AI model access",
          "Standard generation speed",
          "Community templates",
          "Basic NFT minting",
        ],
        description: "Perfect for individual creators",
        buttonText: "Coming Soon",
        buttonColor: "bg-accent text-primary",
        isPopular: false,
      },
      {
        name: "Creator",
        href: "#",
        price: "5,000",
        period: "CGEN",
        yearlyPrice: "50,000",
        features: [
          "Priority AI processing",
          "Advanced model access",
          "Custom templates",
          "Batch NFT minting",
          "Revenue sharing",
          "Early access to models",
          "Community voting rights",
          "Premium support",
        ],
        description: "Ideal for professional creators and small studios",
        buttonText: "Coming Soon",
        buttonColor: "bg-secondary text-white",
        isPopular: true,
      },
      {
        name: "Studio",
        href: "#",
        price: "25,000",
        period: "CGEN",
        yearlyPrice: "250,000",
        features: [
          "Dedicated compute resources",
          "Custom model training",
          "White-label options",
          "API access",
          "Enterprise support",
        ],
        description: "Best for production studios and enterprises",
        buttonText: "Coming Soon",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: false,
      },
    ],
  },
  testimonials: [
    {
      id: "1",
      name: "Alex Rivera",
      role: "Digital Artist",
      img: "https://randomuser.me/api/portraits/men/91.jpg",
      description: (
        <p>
          CineGen&apos;s decentralized GPU access has revolutionized my creative workflow.
          <Highlight>
            I can now generate high-quality AI art at a fraction of the cost.
          </Highlight>{" "}
          The token staking model makes it incredibly accessible.
        </p>
      ),
    },
    {
      id: "2",
      name: "Samantha Lee",
      role: "Animation Studio Director",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      description: (
        <p>
          The NFT licensing system in CineGen has transformed how we monetize our AI-generated content.
          <Highlight>Clear ownership and revenue sharing built right into the protocol.</Highlight>{" "}
          It&apos;s exactly what the industry needed.
        </p>
      ),
    },
    {
      id: "3",
      name: "Raj Patel",
      role: "Independent Game Developer",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      description: (
        <p>
          CineGen&apos;s pay-per-use model is perfect for our budget.
          <Highlight>We only pay for the GPU time we actually use.</Highlight>{" "}
          The Solana integration makes transactions instant and nearly free.
        </p>
      ),
    },
    {
      id: "4",
      name: "Emily Chen",
      role: "Content Creation Agency",
      img: "https://randomuser.me/api/portraits/women/83.jpg",
      description: (
        <p>
          CineGen&apos;s decentralized compute pools have eliminated our GPU bottlenecks.
          <Highlight>Batch processing is now seamless and efficient.</Highlight>{" "}
          Essential for large-scale content production.
        </p>
      ),
    },
    {
      id: "5",
      name: "Michael Brown",
      role: "AI Model Developer",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      description: (
        <p>
          The protocol&apos;s model marketplace has given our AI models real utility.
          <Highlight>
            Creators can easily access and compensate for model usage.
          </Highlight>{" "}
          A game-changer for AI model distribution.
        </p>
      ),
    },
    {
      id: "6",
      name: "Linda Wu",
      role: "Media Production Lead",
      img: "https://randomuser.me/api/portraits/women/5.jpg",
      description: (
        <p>
          CineGen&apos;s governance system gives us a real voice in protocol development.
          <Highlight>
            Our token stake lets us influence which AI models to integrate next.
          </Highlight>{" "}
          True decentralized collaboration.
        </p>
      ),
    },
    {
      id: "7",
      name: "Carlos Gomez",
      role: "NFT Artist",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
      description: (
        <p>
          The on-chain verification of AI-generated art through CineGen is brilliant.
          <Highlight>
            Every piece has provable authenticity and clear licensing terms.
          </Highlight>{" "}
          Perfect for the NFT space.
        </p>
      ),
    },
    {
      id: "8",
      name: "Aisha Khan",
      role: "Creative Director",
      img: "https://randomuser.me/api/portraits/women/56.jpg",
      description: (
        <p>
          CineGen&apos;s Creator tier has transformed our studio&apos;s capabilities.
          <Highlight>
            Priority processing and advanced model access accelerate our workflow.
          </Highlight>{" "}
          The staking requirement is worth every token.
        </p>
      ),
    },
    {
      id: "9",
      name: "Tom Chen",
      role: "GPU Infrastructure Provider",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
      description: (
        <p>
          CineGen&apos;s network is highly profitable.
          <Highlight>
            The protocol&apos;s fair distribution of rewards incentivizes reliable service.
          </Highlight>{" "}
          A well-designed system.
        </p>
      ),
    },
    {
      id: "10",
      name: "Sofia Patel",
      role: "Web3 Developer",
      img: "https://randomuser.me/api/portraits/women/73.jpg",
      description: (
        <p>
          Building on CineGen&apos;s smart contracts is a breeze.
          <Highlight>
            The Solana integration enables fast, low-cost transactions.
          </Highlight>{" "}
          Perfect for decentralized applications.
        </p>
      ),
    },
    {
      id: "11",
      name: "Jake Morrison",
      role: "VFX Supervisor",
      img: "https://randomuser.me/api/portraits/men/25.jpg",
      description: (
        <p>
          CineGen&apos;s Studio tier gives us the dedicated resources we need.
          <Highlight>
            Custom model training and API access streamline our VFX pipeline.
          </Highlight>{" "}
          Enterprise-grade capabilities.
        </p>
      ),
    },
    {
      id: "12",
      name: "Nadia Ali",
      role: "Digital Content Creator",
      img: "https://randomuser.me/api/portraits/women/78.jpg",
      description: (
        <p>
          The Basic tier is perfect for getting started with AI generation.
          <Highlight>Community templates and standard speeds are great for learning.</Highlight>{" "}
          An accessible entry point for creators.
        </p>
      ),
    },
    {
      id: "13",
      name: "Omar Farooq",
      role: "DeFi Protocol Founder",
      img: "https://randomuser.me/api/portraits/men/54.jpg",
      description: (
        <p>
          CineGen&apos;s tokenomics model is well thought out.
          <Highlight>
            The staking and governance mechanisms create perfect alignment.
          </Highlight>{" "}
          A sustainable protocol design.
        </p>
      ),
    },
  ],
  faqSection: {
    title: "Frequently Asked Questions",
    description:
      "Common questions about the CineGen protocol, token utility, and features. If you need more information, join our community channels.",
    faQitems: [
      {
        id: 1,
        question: "What is CineGen ($CGEN)?",
        answer:
          "CineGen ($CGEN) is a decentralized protocol built on Solana that enables users to fund and access AI-generated media through a tokenized system. It combines GPU compute pools, NFT licensing, and DAO governance to create a permissionless ecosystem for AI-powered content creation.",
      },
      {
        id: 2,
        question: "How does the token staking system work?",
        answer:
          "Users stake $CGEN tokens to access different protocol tiers. Basic tier requires 1,000 CGEN, Creator tier 5,000 CGEN, and Studio tier 25,000 CGEN. Staked tokens grant access to AI models, voting rights, and revenue sharing opportunities based on your tier level.",
      },
      {
        id: 3,
        question: "How is content ownership verified?",
        answer:
          "Every piece of AI-generated content is hashed and stored on the Solana blockchain. Our NFT Licensing Layer creates verifiable ownership records, enabling clear attribution and automated royalty distribution for creators.",
      },
      {
        id: 4,
        question: "Can I provide GPU resources to the network?",
        answer:
          "Yes, CineGen allows GPU providers to join the network and earn rewards. Providers stake CGEN tokens as collateral, receive compute jobs through smart contracts, and earn fees based on their contribution to the network.",
      },
      {
        id: 5,
        question: "When will token staking be available?",
        answer:
          "Token staking and protocol features will launch in phases starting Q2 2025. Follow our official channels for announcements about token distribution, staking mechanisms, and feature activations.",
      },
      {
        id: 6,
        question: "What types of AI models are supported?",
        answer:
          "CineGen supports various AI models for image, video, and interactive media generation. The protocol will launch with popular open-source models and gradually expand to include premium proprietary models through partnerships and community governance.",
      },
    ],
  },
  ctaSection: {
    id: "cta",
    title: "Fund. Create. Own.",
    backgroundImage: "/agent-cta-background.png",
    button: {
      text: "Join the Waitlist",
      href: "#",
    },
    subtext: "Be first to access the future of AI-generated media",
  },
  footerLinks: [
    {
      title: "Protocol",
      links: [
        { id: 1, title: "Documentation", url: "#" },
        { id: 2, title: "Whitepaper", url: "#" },
        { id: 3, title: "GitHub", url: "#" }
      ]
    },
    {
      title: "Community",
      links: [
        { id: 4, title: "Discord", url: "#" },
        { id: 5, title: "Twitter", url: "#" },
        { id: 6, title: "Blog", url: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { id: 7, title: "FAQ", url: "#faq" },
        { id: 8, title: "Terms", url: "#" },
        { id: 9, title: "Privacy", url: "#" }
      ]
    }
  ],
};

export type SiteConfig = typeof siteConfig;

"use client";

import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="relative mx-4 rounded-xl border border-border bg-background p-6 shadow-lg">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="size-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl font-semibold tracking-tight mb-2">Join the Waitlist</h2>
                <p className="text-muted-foreground mb-6">
                  Be the first to access CineGen's decentralized AI media generation protocol.
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex flex-col gap-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="h-10 w-full rounded-md border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      />
                      <button
                        type="submit"
                        className="bg-secondary h-10 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-full px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
                      >
                        Join Waitlist
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <h3 className="text-xl font-medium mb-2">🎉 You&apos;re on the list!</h3>
                    <p className="text-muted-foreground">
                      We&apos;ll notify you when CineGen launches.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 
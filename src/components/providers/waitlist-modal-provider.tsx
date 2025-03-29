"use client";

import { createContext, useContext, useState } from "react";
import { WaitlistModal } from "@/components/ui/waitlist-modal";

interface WaitlistModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const WaitlistModalContext = createContext<WaitlistModalContextType | undefined>(
  undefined
);

export function WaitlistModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <WaitlistModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <WaitlistModal isOpen={isOpen} onClose={closeModal} />
    </WaitlistModalContext.Provider>
  );
}

export function useWaitlistModal() {
  const context = useContext(WaitlistModalContext);
  if (context === undefined) {
    throw new Error("useWaitlistModal must be used within a WaitlistModalProvider");
  }
  return context;
} 
"use client";

import Link from "next/link";
import CartItem from "./CartItem";
import MagneticButton from "@/components/ui/MagneticButton";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

import { motion } from "framer-motion";

export default function CartDrawer() {
  const items = useCartStore((state) => state.items);

  const removeItem = useCartStore((state) => state.removeItem);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          <ShoppingBag className="w-6 h-6" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              {items.length}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex
            flex-col
            w-full
            sm:max-w-lg
            border-l
            border-border
            bg-background/95
            backdrop-blur-xl
            animate-in
            slide-in-from-right
            duration-300"
      >
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto mt-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-muted">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <CartItem item={item} />
              </motion.div>
            ))
          )}
        </div>
        <div className="border-t pt-6 space-y-4">
          <div className="flex justify-between font-semibold text-lg">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <MagneticButton>
            <Link
              href="/checkout"
              className="flex
                bg-primary
              text-white
                text-center
                p-3
                rounded-2xl
                font-medium
                transition-all
                duration-200
                hover:opacity-90
                hover:scale-[1.01]
                active:scale-[0.98]"
            >
              Go to Checkout
            </Link>
          </MagneticButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}

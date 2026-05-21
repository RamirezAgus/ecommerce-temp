"use client";

import { motion } from "framer-motion";

import type { HTMLMotionProps } from "framer-motion";

type Props = {
  children: React.ReactNode;
} & HTMLMotionProps<"button">;

export default function MagneticButton({
  children,
  className,
  ...props
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.015,
        y: -1,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 18,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}
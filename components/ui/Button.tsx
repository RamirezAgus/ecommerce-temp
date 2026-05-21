import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 shadow-sm",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:opacity-90 hover:shadow-md",

        destructive: "bg-destructive text-white hover:opacity-90",

        outline:
          "border border-border bg-background hover:bg-muted hover:text-foreground",

        secondary: "bg-secondary text-secondary-foreground hover:opacity-90",

        ghost: "hover:bg-muted hover:text-foreground",

        link: "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default: "h-11 px-6 py-2",

        sm: "h-9 rounded-xl px-4 text-xs",

        lg: "h-12 rounded-2xl px-8 text-base",

        icon: "size-11",
      },
    },

    defaultVariants: {
      variant: "default",

      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

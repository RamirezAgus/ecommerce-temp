import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export default function Button({
  children,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        px-4 py-2 rounded-lg text-sm font-medium transition
        ${
          variant === "default"
            ? "bg-primary text-white hover:opacity-90"
            : "border border-border text-foreground hover:bg-muted"
        }
        ${className}
      `}
      {...props} // 👈 CLAVE
    >
      {children}
    </button>
  );
}
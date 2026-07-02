import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-text-alt brutal-border-alt brutal-shadow-alt active:translate-x-[3px] active:translate-y-[3px] active:shadow-none hover:-translate-y-0.5",
        destructive:
          "bg-red-600 text-white brutal-border brutal-shadow active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
        outline:
          "bg-transparent text-text brutal-border brutal-shadow hover:bg-accent hover:text-text-alt active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
        secondary:
          "bg-bg-alt text-text-alt brutal-border-alt brutal-shadow-alt hover:bg-surface-alt active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
        ghost:
          "bg-transparent text-text hover:text-accent hover:bg-black/5",
        link:
          "text-accent underline-offset-4 hover:underline underline decoration-2",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 py-1.5 text-[10px]",
        lg: "h-13 px-8 py-3 text-sm",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

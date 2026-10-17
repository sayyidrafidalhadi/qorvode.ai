import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-transparent bg-clip-padding font-mono font-medium outline-none transition-[background-color,border-color,color,transform] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-bg hover:bg-[color-mix(in_oklch,var(--color-accent),white_14%)]",
        secondary:
          "border-border-strong bg-surface text-text hover:bg-surface-2",
        outline:
          "border-border-strong bg-transparent text-text hover:bg-surface",
        ghost: "bg-transparent text-text hover:bg-surface hover:text-accent",
        destructive:
          "border-border-strong bg-bg text-text hover:bg-surface-2",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 text-[15px] [&_svg:not([class*='size-'])]:size-5",
        sm: "h-9 px-4 text-[13px] [&_svg:not([class*='size-'])]:size-4",
        lg: "h-11 px-6 text-[15px] [&_svg:not([class*='size-'])]:size-5",
        icon: "size-10 p-0",
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

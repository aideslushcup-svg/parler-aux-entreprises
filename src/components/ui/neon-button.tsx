import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-foreground mx-auto text-center rounded-full cursor-pointer transition-all duration-200",
    {
        variants: {
            variant: {
                default: "bg-primary/5 hover:bg-primary/0 border-primary/20",
                solid: "bg-primary hover:bg-primary/90 text-primary-foreground border-transparent hover:border-foreground/50",
                ghost: "border-transparent bg-transparent hover:border-zinc-600 hover:bg-white/10",
                outline: "border-2 border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
                "solid-light": "bg-primary text-primary-foreground border-transparent hover:brightness-90",
            },
            size: {
                default: "px-7 py-2.5 text-sm font-semibold",
                sm: "px-4 py-1.5 text-sm",
                lg: "px-10 py-3.5 text-base font-semibold",
                xl: "px-10 py-4 text-lg font-semibold",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    neon?: boolean;
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = true, size, variant, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                <span className={cn("absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent hidden", neon && "block")} />
                {children}
                <span className={cn("absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent hidden", neon && "block")} />
            </button>
        );
    }
)

Button.displayName = 'Button';

export { Button, buttonVariants };

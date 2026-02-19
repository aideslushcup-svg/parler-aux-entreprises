import React, { forwardRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: 'default' | 'sm' | 'lg' | 'xl';
  variant?: 'default' | 'outline';
  showIcon?: boolean;
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ label, children, onClick, className, size = 'default', variant = 'default', showIcon = true, ...props }, ref) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
      onClick?.(e);
    };

    const sizeClasses = {
      sm: 'glow-btn-sm',
      default: 'glow-btn-default',
      lg: 'glow-btn-lg',
      xl: 'glow-btn-xl',
    };

    const variantClasses = {
      default: 'glow-btn',
      outline: 'glow-btn-outline',
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn(variantClasses[variant], sizeClasses[size], className)}
        onClick={handleClick}
        data-state={isClicked ? "clicked" : undefined}
        {...props}
      >
        <span className="flex items-center justify-center gap-1.5">
          {children || label || "Réserver"}
          {showIcon && variant === 'default' && <Sparkles size={size === 'sm' ? 14 : 16} className="ml-0.5" />}
        </span>
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";

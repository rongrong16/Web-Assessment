"use client";

import * as React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlobalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
  className?: string;
}

export const GlobalButton: React.FC<GlobalButtonProps> = ({
  children,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  size = "md",
  isLoading = false,
  asChild = false,
  className = "",
  ...props
}) => {
  const variantStyles = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-blue-900",
    secondary:
      "bg-[var(--color-secondary)] text-[var(--color-text)] hover:bg-yellow-400",
    accent: "bg-[var(--color-accent)] text-white hover:bg-blue-600",
    outline:
      "border border-[var(--color-border)] text-[var(--color-text)] hover:bg-gray-100",
    ghost: "bg-transparent hover:bg-gray-100 text-[var(--color-text)]",
  };

  const sizeStyles = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const classes = cn(
    "font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {isLoading ? (
        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4 mr-2" />
      ) : (
        Icon && iconPosition === "left" && <Icon className="w-4 h-4 mr-2" />
      )}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 ml-2" />}
    </>
  );

  return asChild ? (
    <span className={classes}>{content}</span>
  ) : (
    <ShadcnButton className={classes} {...props}>
      {content}
    </ShadcnButton>
  );
};

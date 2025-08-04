import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={`bg-white rounded-xl overflow-hidden ${className ?? ""}`}>{children}</div>;
}

export function CardContent({ children, className }: CardProps) {
  return <div className={className}>{children}</div>;
}
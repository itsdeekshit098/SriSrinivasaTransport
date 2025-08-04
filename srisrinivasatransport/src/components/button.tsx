import React from "react";

export function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-[#42b0d5] text-black py-2 px-4 rounded-md hover:bg-[#67BFDD] transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}


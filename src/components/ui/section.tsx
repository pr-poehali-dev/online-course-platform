
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section
      className={cn("py-16 md:py-24", className)}
      {...props}
    >
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;

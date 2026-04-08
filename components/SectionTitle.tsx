import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  icon?: ReactNode;
  className?: string;
  title: string;
}

export const SectionTitle = ({ icon, title, className }: Props) => {
  return (
    <div className={cn("flex items-center gap-4 mb-10", className)}>
      {icon || (
        <span className="text-4xl text-foreground/70 leading-none">*</span>
      )}
      <h2 className="text-lg uppercase leading-none">{title}</h2>
    </div>
  );
};

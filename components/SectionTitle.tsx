import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  icon?: ReactNode;
  className?: string;
  title: string;
}

export const SectionTitle = ({ icon, title, className }: Props) => {
  return (
    <div className={cn("flex items-center gap-4 mb-10", className)}>
      {icon && icon}
      <h2 className="text-xl uppercase leading-none">{title}</h2>
    </div>
  );
};

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className }: SectionProps) => {
  return (
    <section id={id} className={cn("scroll-mt-20", className)}>
      {title && (
        <h2 className="text-3xl font-bold mb-6 docs-heading">{title}</h2>
      )}
      {children}
    </section>
  );
};

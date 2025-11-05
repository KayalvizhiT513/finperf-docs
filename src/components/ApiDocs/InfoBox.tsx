import { AlertCircle, CheckCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoBoxProps {
  type?: "info" | "success" | "warning";
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const InfoBox = ({ type = "info", title, children, className }: InfoBoxProps) => {
  const styles = {
    info: {
      container: "bg-primary/5 border-primary/20",
      icon: "text-primary",
      Icon: Info,
    },
    success: {
      container: "bg-success/5 border-success/20",
      icon: "text-success",
      Icon: CheckCircle,
    },
    warning: {
      container: "bg-warning/5 border-warning/20",
      icon: "text-warning",
      Icon: AlertCircle,
    },
  };

  const { container, icon, Icon } = styles[type];

  return (
    <div className={cn("rounded-lg border p-4", container, className)}>
      <div className="flex gap-3">
        <Icon className={cn("h-5 w-5 mt-0.5 flex-shrink-0", icon)} />
        <div className="flex-1">
          {title && <h4 className="font-semibold mb-1 text-docs-heading">{title}</h4>}
          <div className="text-sm text-docs-text">{children}</div>
        </div>
      </div>
    </div>
  );
};

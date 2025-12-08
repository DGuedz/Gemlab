import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";

interface QuickAction {
  label: string;
  description?: string;
  icon: LucideIcon;
  onClick: () => void;
  variant?: "default" | "primary" | "secondary";
}

interface QuickActionsProps {
  title?: string;
  actions: QuickAction[];
}

export function QuickActions({ title = "Ações Rápidas", actions }: QuickActionsProps) {
  const getButtonClass = (variant?: string) => {
    switch (variant) {
      case "primary":
        return "bg-[#006b4f] text-white hover:bg-[#014733]";
      case "secondary":
        return "bg-[#caa34b] text-white hover:bg-[#b8923f]";
      default:
        return "border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white";
    }
  };

  return (
    <Card className="p-6 border-2 border-[#e5e7eb]">
      <h3 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-4">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Button
              key={index}
              variant={action.variant === "default" ? "outline" : "default"}
              onClick={action.onClick}
              className={`h-auto py-4 flex-col items-start gap-2 ${getButtonClass(action.variant)}`}
            >
              <div className="flex items-center gap-2 w-full">
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span className="font-['Inter'] font-semibold text-sm">
                  {action.label}
                </span>
              </div>
              {action.description && (
                <span className="font-['Inter'] text-xs opacity-90 text-left w-full">
                  {action.description}
                </span>
              )}
            </Button>
          );
        })}
      </div>
    </Card>
  );
}

import { ReactNode } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  badge?: {
    text: string;
    variant?: "default" | "success" | "warning" | "error";
  };
  actions?: ReactNode;
  onBack?: () => void;
  breadcrumbs?: Array<{
    label: string;
    onClick?: () => void;
    active?: boolean;
  }>;
  gradient?: boolean;
}

export function PageHeader({
  title,
  subtitle,
  icon: Icon,
  badge,
  actions,
  onBack,
  breadcrumbs,
  gradient = false,
}: PageHeaderProps) {
  const getBadgeClass = () => {
    switch (badge?.variant) {
      case "success":
        return "bg-green-100 text-green-700";
      case "warning":
        return "bg-orange-100 text-orange-700";
      case "error":
        return "bg-red-100 text-red-700";
      default:
        return "bg-[#006b4f] text-white";
    }
  };

  return (
    <div
      className={`${
        gradient
          ? "bg-gradient-to-r from-[#006b4f] to-[#014733] text-white"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        {/* Main Header Content */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              {onBack && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onBack}
                  className={`${
                    gradient
                      ? "border-white/30 text-white hover:bg-white/20"
                      : "border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                  }`}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              )}

              {Icon && (
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    gradient
                      ? "bg-white/20"
                      : "bg-[#006b4f]/10"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      gradient ? "text-white" : "text-[#006b4f]"
                    }`}
                  />
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h1
                    className={`font-['Montserrat'] text-2xl lg:text-3xl font-bold ${
                      gradient ? "text-white" : "text-[#1b1b1b]"
                    }`}
                  >
                    {title}
                  </h1>
                  {badge && (
                    <Badge className={getBadgeClass()}>
                      {badge.text}
                    </Badge>
                  )}
                </div>
                {subtitle && (
                  <p
                    className={`font-['Inter'] text-sm ${
                      gradient ? "text-gray-200" : "text-gray-600"
                    }`}
                  >
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

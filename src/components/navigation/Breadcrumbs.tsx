import { ChevronRight, Home } from "lucide-react";
import { Button } from "../ui/button";

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-1 text-sm" aria-label="Breadcrumb">
      <Button
        variant="ghost"
        size="sm"
        onClick={items[0]?.onClick}
        className="h-8 px-2 text-gray-600 hover:text-[#006b4f] hover:bg-[#006b4f]/10"
      >
        <Home className="h-4 w-4" />
      </Button>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 text-gray-400" />
          {item.active ? (
            <span className="font-['Inter'] px-2 py-1 font-semibold text-[#006b4f]">
              {item.label}
            </span>
          ) : (
            <button
              onClick={item.onClick}
              className="font-['Inter'] px-2 py-1 text-gray-600 hover:text-[#006b4f] transition-colors"
            >
              {item.label}
            </button>
          )}
        </div>
      ))}
    </nav>
  );
}

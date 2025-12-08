import { ReactNode, useState } from "react";
import { Info } from "lucide-react";

interface TooltipProps {
  content: string | ReactNode;
  children?: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  showIcon?: boolean;
}

export function Tooltip({ content, children, position = "top", showIcon = true }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-[#1b1b1b]",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-[#1b1b1b]",
    left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-[#1b1b1b]",
    right: "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-[#1b1b1b]"
  };

  return (
    <div className="relative inline-flex items-center">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help inline-flex items-center"
      >
        {children || (showIcon && <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" />)}
      </div>
      
      {isVisible && (
        <div className={`absolute z-50 ${positionClasses[position]} pointer-events-none`}>
          <div className="bg-[#1b1b1b] text-white text-sm rounded-lg px-4 py-3 shadow-xl max-w-xs animate-in fade-in duration-200">
            <div className="font-['Inter'] leading-relaxed">
              {content}
            </div>
          </div>
          <div className={`absolute w-0 h-0 border-8 ${arrowClasses[position]}`} />
        </div>
      )}
    </div>
  );
}

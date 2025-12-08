import { Toaster as Sonner } from "sonner@2.0.3";

export function Toaster() {
  return (
    <Sonner
      position="top-right"
      toastOptions={{
        style: {
          fontFamily: "'Inter', sans-serif",
        },
        classNames: {
          toast: "border-2",
          title: "text-sm font-semibold",
          description: "text-xs",
          success: "border-emerald-500 bg-emerald-50 text-emerald-900",
          error: "border-red-500 bg-red-50 text-red-900",
          warning: "border-yellow-500 bg-yellow-50 text-yellow-900",
          info: "border-blue-500 bg-blue-50 text-blue-900",
        },
      }}
      richColors
    />
  );
}

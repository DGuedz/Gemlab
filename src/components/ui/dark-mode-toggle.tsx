import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../../contexts/DarkModeContext";

export function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg border-2 border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 dark:bg-gray-900 transition-colors"
      aria-label="Toggle dark mode"
      title={isDark ? "Modo Claro" : "Modo Escuro"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
    </button>
  );
}
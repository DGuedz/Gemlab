import { MainApp } from "./components/MainApp";
import { AuthProvider } from "./contexts/AuthContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { AuthModal } from "./components/AuthModal";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <DarkModeProvider>
      <AuthProvider>
        <MainApp />
        <AuthModal />
        <Toaster />
      </AuthProvider>
    </DarkModeProvider>
  );
}
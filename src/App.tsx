import { Router } from "./components/Router";
import { AuthProvider } from "./contexts/AuthContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { AuthModal } from "./components/AuthModal";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <DarkModeProvider>
      <AuthProvider>
        <Router />
        <AuthModal />
        <Toaster />
      </AuthProvider>
    </DarkModeProvider>
  );
}
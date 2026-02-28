import { MainApp } from "./components/MainApp";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthModal } from "./components/AuthModal";

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
      <AuthModal />
    </AuthProvider>
  );
}
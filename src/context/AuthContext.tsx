import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AuthContextData {
  usuario: string | null;
  login: (nome: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<string | null>(null);

  function login(nome: string) {
    setUsuario(nome);
  }

  function logout() {
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }

  return context;
}

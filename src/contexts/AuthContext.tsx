import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  full_name: string;
  role: "admin" | "student";
  college_name?: string;
  sector?: string;
  batch_id?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
  isAdmin: boolean;
}

interface SignupData {
  email: string;
  password: string;
  full_name: string;
  role: "admin" | "student";
  college_name?: string;
  sector?: string;
  invite_code?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_INVITE_CODE = "SKILLBRIDGE2026";

// Demo users for development (will be replaced with Supabase)
const DEMO_USERS: User[] = [
  { id: "admin-1", email: "admin@skillbridge.com", full_name: "Admin User", role: "admin" },
  { id: "student-1", email: "student@skillbridge.com", full_name: "Rahul Sharma", role: "student", college_name: "IIT Delhi", sector: "AI_GenAI", batch_id: "batch-1" },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("lms_user");
    if (saved) {
      try { setUser(JSON.parse(saved)); } catch {}
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Demo login - will be replaced with Supabase auth
    const found = DEMO_USERS.find(u => u.email === email);
    if (!found) throw new Error("Invalid credentials");
    setUser(found);
    localStorage.setItem("lms_user", JSON.stringify(found));
  };

  const signup = async (data: SignupData) => {
    if (data.role === "admin" && data.invite_code !== ADMIN_INVITE_CODE) {
      throw new Error("Invalid admin invite code");
    }
    const newUser: User = {
      id: crypto.randomUUID(),
      email: data.email,
      full_name: data.full_name,
      role: data.role,
      college_name: data.college_name,
      sector: data.sector,
    };
    setUser(newUser);
    localStorage.setItem("lms_user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("lms_user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, isAdmin: user?.role === "admin" }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

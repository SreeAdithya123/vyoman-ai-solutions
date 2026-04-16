import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface Props {
  children: React.ReactNode;
  requiredRole?: "admin" | "student";
}

export function ProtectedRoute({ children, requiredRole }: Props) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="lms-theme min-h-screen bg-lms-bg flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lms-primary" />
      </div>
    );
  }

  if (!user) return <Navigate to="/lms/login" replace />;
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to={user.role === "admin" ? "/lms/admin" : "/lms/dashboard"} replace />;
  }

  return <>{children}</>;
}

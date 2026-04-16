import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { GraduationCap, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export default function LmsLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Welcome back!");
      // Demo: check email to determine redirect
      if (email.includes("admin")) navigate("/lms/admin");
      else navigate("/lms/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lms-theme min-h-screen bg-lms-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <GraduationCap className="h-12 w-12 text-lms-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-lms-text">SkillBridge Academy</h1>
          <p className="text-lms-text-dim mt-1">Sign in to your account</p>
        </div>

        <div className="bg-lms-card border border-lms-border rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-lms-text-muted text-sm mb-1 block">Email</label>
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-4 py-2.5 text-lms-text placeholder:text-lms-text-dim focus:outline-none focus:border-lms-primary transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-lms-text-muted text-sm mb-1 block">Password</label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"} required value={password} onChange={e => setPassword(e.target.value)}
                  className="w-full bg-lms-bg border border-lms-border rounded-lg px-4 py-2.5 text-lms-text placeholder:text-lms-text-dim focus:outline-none focus:border-lms-primary transition-colors pr-10"
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-3 text-lms-text-dim hover:text-lms-text">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit" disabled={loading}
              className="w-full bg-lms-primary text-lms-primary-foreground font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-lms-text-dim">
            <p>Demo: <code className="text-lms-primary">admin@skillbridge.com</code> or <code className="text-lms-primary">student@skillbridge.com</code></p>
            <p className="mt-1">(any password)</p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lms-text-dim text-sm">
              Don't have an account? <Link to="/lms/signup" className="text-lms-primary hover:underline">Sign up</Link>
            </p>
          </div>
        </div>

        <p className="text-center text-lms-text-dim text-xs mt-6">
          Part of <Link to="/" className="text-lms-primary hover:underline">vyoman.tech</Link> ecosystem
        </p>
      </div>
    </div>
  );
}

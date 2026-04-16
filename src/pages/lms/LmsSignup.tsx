import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { GraduationCap } from "lucide-react";
import { toast } from "sonner";

const sectors = ["Programming", "AI_GenAI", "Embedded", "UI_UX"];

export default function LmsSignup() {
  const [form, setForm] = useState({ email: "", password: "", full_name: "", role: "student" as "admin" | "student", college_name: "", sector: "AI_GenAI", invite_code: "" });
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const update = (field: string, val: string) => setForm(f => ({ ...f, [field]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(form);
      toast.success("Account created!");
      navigate(form.role === "admin" ? "/lms/admin" : "/lms/dashboard");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lms-theme min-h-screen bg-lms-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <GraduationCap className="h-12 w-12 text-lms-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-lms-text">Create Account</h1>
          <p className="text-lms-text-dim mt-1">Join SkillBridge Academy</p>
        </div>

        <div className="bg-lms-card border border-lms-border rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-lms-text-muted text-sm mb-1 block">Full Name</label>
              <input type="text" required value={form.full_name} onChange={e => update("full_name", e.target.value)}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-4 py-2.5 text-lms-text focus:outline-none focus:border-lms-primary transition-colors" />
            </div>
            <div>
              <label className="text-lms-text-muted text-sm mb-1 block">Email</label>
              <input type="email" required value={form.email} onChange={e => update("email", e.target.value)}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-4 py-2.5 text-lms-text focus:outline-none focus:border-lms-primary transition-colors" />
            </div>
            <div>
              <label className="text-lms-text-muted text-sm mb-1 block">Password</label>
              <input type="password" required value={form.password} onChange={e => update("password", e.target.value)}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-4 py-2.5 text-lms-text focus:outline-none focus:border-lms-primary transition-colors" minLength={6} />
            </div>

            {/* Role */}
            <div>
              <label className="text-lms-text-muted text-sm mb-1 block">Role</label>
              <div className="flex gap-3">
                {(["student", "admin"] as const).map(r => (
                  <button key={r} type="button" onClick={() => update("role", r)}
                    className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-all ${form.role === r ? "border-lms-primary bg-lms-primary/15 text-lms-primary" : "border-lms-border text-lms-text-dim hover:border-lms-text-dim"}`}>
                    {r === "student" ? "Student" : "Admin"}
                  </button>
                ))}
              </div>
            </div>

            {form.role === "student" && (
              <>
                <div>
                  <label className="text-lms-text-muted text-sm mb-1 block">College Name</label>
                  <input type="text" value={form.college_name} onChange={e => update("college_name", e.target.value)}
                    className="w-full bg-lms-bg border border-lms-border rounded-lg px-4 py-2.5 text-lms-text focus:outline-none focus:border-lms-primary transition-colors" />
                </div>
                <div>
                  <label className="text-lms-text-muted text-sm mb-1 block">Sector</label>
                  <select value={form.sector} onChange={e => update("sector", e.target.value)}
                    className="w-full bg-lms-bg border border-lms-border rounded-lg px-4 py-2.5 text-lms-text focus:outline-none focus:border-lms-primary transition-colors">
                    {sectors.map(s => <option key={s} value={s}>{s.replace("_", " / ")}</option>)}
                  </select>
                </div>
              </>
            )}

            {form.role === "admin" && (
              <div>
                <label className="text-lms-text-muted text-sm mb-1 block">Admin Invite Code</label>
                <input type="text" required value={form.invite_code} onChange={e => update("invite_code", e.target.value)}
                  className="w-full bg-lms-bg border border-lms-border rounded-lg px-4 py-2.5 text-lms-text focus:outline-none focus:border-lms-primary transition-colors"
                  placeholder="Enter invite code" />
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full bg-lms-primary text-lms-primary-foreground font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50">
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-lms-text-dim text-sm">
              Already have an account? <Link to="/lms/login" className="text-lms-primary hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

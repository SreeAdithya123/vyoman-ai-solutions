import { useState } from "react";
import { LmsLayout } from "@/components/lms/LmsLayout";
import { demoBatches } from "@/lib/lms-data";
import { Link } from "react-router-dom";
import { Plus, Edit, Users, Calendar } from "lucide-react";
import { toast } from "sonner";

export default function BatchManagement() {
  const [batches, setBatches] = useState(demoBatches);
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ name: "", sector: "AI_GenAI", duration_months: 2, start_date: "", end_date: "" });

  const createBatch = () => {
    if (!form.name || !form.start_date) { toast.error("Fill required fields"); return; }
    setBatches([...batches, { ...form, id: `batch-${Date.now()}`, is_active: true }]);
    setShowCreate(false);
    setForm({ name: "", sector: "AI_GenAI", duration_months: 2, start_date: "", end_date: "" });
    toast.success("Batch created!");
  };

  return (
    <LmsLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-lms-text">Batch Management</h1>
        <button onClick={() => setShowCreate(!showCreate)}
          className="flex items-center gap-2 bg-lms-primary text-lms-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
          <Plus className="h-4 w-4" /> New Batch
        </button>
      </div>

      {showCreate && (
        <div className="bg-lms-card border border-lms-border rounded-xl p-6 mb-6">
          <h3 className="text-lms-text font-semibold mb-4">Create New Batch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-lms-text-dim text-sm block mb-1">Batch Name</label>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary" placeholder="e.g. AI GenAI Batch May 2026" />
            </div>
            <div>
              <label className="text-lms-text-dim text-sm block mb-1">Sector</label>
              <select value={form.sector} onChange={e => setForm({ ...form, sector: e.target.value })}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary">
                {["Programming", "AI_GenAI", "Embedded", "UI_UX"].map(s => <option key={s} value={s}>{s.replace("_", " / ")}</option>)}
              </select>
            </div>
            <div>
              <label className="text-lms-text-dim text-sm block mb-1">Start Date</label>
              <input type="date" value={form.start_date} onChange={e => setForm({ ...form, start_date: e.target.value })}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary" />
            </div>
            <div>
              <label className="text-lms-text-dim text-sm block mb-1">End Date</label>
              <input type="date" value={form.end_date} onChange={e => setForm({ ...form, end_date: e.target.value })}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary" />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={createBatch} className="bg-lms-primary text-lms-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">Create</button>
            <button onClick={() => setShowCreate(false)} className="text-lms-text-dim px-4 py-2 rounded-lg text-sm hover:text-lms-text">Cancel</button>
          </div>
        </div>
      )}

      <div className="grid gap-4">
        {batches.map(b => (
          <div key={b.id} className="bg-lms-card border border-lms-border rounded-xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${b.is_active ? "bg-lms-success" : "bg-lms-text-dim"}`} />
              <div>
                <p className="text-lms-text font-semibold">{b.name}</p>
                <div className="flex items-center gap-3 mt-1 text-sm text-lms-text-dim">
                  <span className="text-xs bg-lms-primary/15 text-lms-primary px-2 py-0.5 rounded-full">{b.sector.replace("_", " / ")}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{b.duration_months} months</span>
                  <span>{b.start_date} → {b.end_date}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link to={`/lms/admin/batches/${b.id}/classes`}
                className="text-lms-primary hover:underline text-sm flex items-center gap-1">
                <Edit className="h-4 w-4" /> Classes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </LmsLayout>
  );
}

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LmsLayout } from "@/components/lms/LmsLayout";
import { demoClasses, demoBatches } from "@/lib/lms-data";
import { Plus, Video, FileText, GripVertical } from "lucide-react";
import { toast } from "sonner";

export default function ClassManagement() {
  const { batchId } = useParams();
  const batch = demoBatches.find(b => b.id === batchId);
  const [classes, setClasses] = useState(demoClasses.filter(c => c.batch_id === batchId));
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", week_number: 1, video_url: "" });

  const addClass = () => {
    if (!form.title) { toast.error("Title required"); return; }
    setClasses([...classes, { ...form, id: `class-${Date.now()}`, batch_id: batchId || "", order_index: classes.length + 1 }]);
    setShowAdd(false);
    setForm({ title: "", description: "", week_number: 1, video_url: "" });
    toast.success("Class added!");
  };

  return (
    <LmsLayout>
      <div className="flex items-center gap-2 text-sm text-lms-text-dim mb-6">
        <Link to="/lms/admin/batches" className="hover:text-lms-primary">Batches</Link>
        <span>/</span>
        <span className="text-lms-text">{batch?.name || "Batch"}</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-lms-text">Class Management</h1>
        <button onClick={() => setShowAdd(!showAdd)}
          className="flex items-center gap-2 bg-lms-primary text-lms-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
          <Plus className="h-4 w-4" /> Add Class
        </button>
      </div>

      {showAdd && (
        <div className="bg-lms-card border border-lms-border rounded-xl p-6 mb-6">
          <h3 className="text-lms-text font-semibold mb-4">Add New Class</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="text-lms-text-dim text-sm block mb-1">Title</label>
              <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary" />
            </div>
            <div className="md:col-span-2">
              <label className="text-lms-text-dim text-sm block mb-1">Description</label>
              <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={3}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary resize-none" />
            </div>
            <div>
              <label className="text-lms-text-dim text-sm block mb-1">Week Number</label>
              <input type="number" min={1} value={form.week_number} onChange={e => setForm({ ...form, week_number: parseInt(e.target.value) })}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary" />
            </div>
            <div>
              <label className="text-lms-text-dim text-sm block mb-1">Video URL</label>
              <input value={form.video_url} onChange={e => setForm({ ...form, video_url: e.target.value })}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary" placeholder="Upload to Supabase Storage" />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={addClass} className="bg-lms-primary text-lms-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">Add Class</button>
            <button onClick={() => setShowAdd(false)} className="text-lms-text-dim px-4 py-2 rounded-lg text-sm hover:text-lms-text">Cancel</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {classes.sort((a, b) => a.order_index - b.order_index).map(cls => (
          <div key={cls.id} className="bg-lms-card border border-lms-border rounded-xl p-4 flex items-center gap-4">
            <GripVertical className="h-5 w-5 text-lms-text-dim cursor-grab shrink-0" />
            <div className="w-10 h-10 rounded-lg bg-lms-primary/15 flex items-center justify-center shrink-0">
              <Video className="h-5 w-5 text-lms-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-lms-text-dim text-xs">Week {cls.week_number} • #{cls.order_index}</span>
              </div>
              <p className="text-lms-text font-medium truncate">{cls.title}</p>
            </div>
            <Link to={`/lms/admin/classes/${cls.id}/assessment`}
              className="text-lms-accent hover:underline text-sm flex items-center gap-1 shrink-0">
              <FileText className="h-4 w-4" /> Assessment
            </Link>
          </div>
        ))}
      </div>
    </LmsLayout>
  );
}

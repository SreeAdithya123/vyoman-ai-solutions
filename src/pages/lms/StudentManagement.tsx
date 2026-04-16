import { useState } from "react";
import { LmsLayout } from "@/components/lms/LmsLayout";
import { demoStudents } from "@/lib/lms-data";
import { Search, Download, Upload } from "lucide-react";
import { toast } from "sonner";

export default function StudentManagement() {
  const [search, setSearch] = useState("");
  const [sectorFilter, setSectorFilter] = useState("all");

  const filtered = demoStudents.filter(s => {
    const matchSearch = s.full_name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase());
    const matchSector = sectorFilter === "all" || s.sector === sectorFilter;
    return matchSearch && matchSector;
  });

  const exportCSV = () => {
    const header = "Name,Email,College,Sector,Batch,Progress\n";
    const rows = filtered.map(s => `${s.full_name},${s.email},${s.college_name},${s.sector},${s.batch_id},${s.progress}%`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "students.csv"; a.click();
    toast.success("CSV exported!");
  };

  return (
    <LmsLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-lms-text">Student Management</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border border-lms-border text-lms-text-muted px-3 py-2 rounded-lg text-sm hover:border-lms-primary hover:text-lms-primary transition-colors">
            <Upload className="h-4 w-4" /> Import CSV
          </button>
          <button onClick={exportCSV} className="flex items-center gap-2 bg-lms-primary text-lms-primary-foreground px-3 py-2 rounded-lg text-sm font-medium hover:opacity-90">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-lms-text-dim" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search students..."
            className="w-full bg-lms-card border border-lms-border rounded-lg pl-9 pr-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary" />
        </div>
        <select value={sectorFilter} onChange={e => setSectorFilter(e.target.value)}
          className="bg-lms-card border border-lms-border rounded-lg px-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary">
          <option value="all">All Sectors</option>
          {["Programming", "AI_GenAI", "Embedded", "UI_UX"].map(s => <option key={s} value={s}>{s.replace("_", " / ")}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-lms-card border border-lms-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-lms-border">
              <th className="text-left p-4 text-lms-text-dim font-medium">Name</th>
              <th className="text-left p-4 text-lms-text-dim font-medium">Email</th>
              <th className="text-left p-4 text-lms-text-dim font-medium hidden md:table-cell">College</th>
              <th className="text-left p-4 text-lms-text-dim font-medium">Sector</th>
              <th className="text-left p-4 text-lms-text-dim font-medium">Progress</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <tr key={s.id} className="border-b border-lms-border/50 hover:bg-lms-primary/5 transition-colors">
                <td className="p-4 text-lms-text font-medium">{s.full_name}</td>
                <td className="p-4 text-lms-text-muted">{s.email}</td>
                <td className="p-4 text-lms-text-muted hidden md:table-cell">{s.college_name}</td>
                <td className="p-4"><span className="text-xs bg-lms-primary/15 text-lms-primary px-2 py-0.5 rounded-full">{s.sector.replace("_", " / ")}</span></td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-lms-bg rounded-full h-1.5"><div className="bg-lms-primary h-1.5 rounded-full" style={{ width: `${s.progress}%` }} /></div>
                    <span className="text-lms-text-dim text-xs">{s.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className="text-center text-lms-text-dim py-8">No students found</p>}
      </div>
    </LmsLayout>
  );
}

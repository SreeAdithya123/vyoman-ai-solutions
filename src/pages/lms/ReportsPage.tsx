import { LmsLayout } from "@/components/lms/LmsLayout";
import { demoBatches, demoStudents } from "@/lib/lms-data";
import { Download, BarChart3 } from "lucide-react";
import { toast } from "sonner";

export default function ReportsPage() {
  const batchReports = demoBatches.map(b => {
    const students = demoStudents.filter(s => s.batch_id === b.id);
    const avg = students.length ? Math.round(students.reduce((s, st) => s + st.progress, 0) / students.length) : 0;
    return { ...b, studentCount: students.length, avgProgress: avg };
  });

  const exportReport = () => {
    const header = "Batch,Sector,Students,Avg Progress,Status\n";
    const rows = batchReports.map(b => `${b.name},${b.sector},${b.studentCount},${b.avgProgress}%,${b.is_active ? "Active" : "Inactive"}`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "reports.csv"; a.click();
    toast.success("Report exported!");
  };

  return (
    <LmsLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-lms-text">Reports</h1>
        <button onClick={exportReport} className="flex items-center gap-2 bg-lms-primary text-lms-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      {/* Batch Reports */}
      <div className="grid gap-4">
        {batchReports.map(b => (
          <div key={b.id} className="bg-lms-card border border-lms-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lms-text font-semibold">{b.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs bg-lms-primary/15 text-lms-primary px-2 py-0.5 rounded-full">{b.sector.replace("_", " / ")}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${b.is_active ? "bg-lms-success/15 text-lms-success" : "bg-lms-border text-lms-text-dim"}`}>
                    {b.is_active ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-lms-primary/30" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-lms-text-dim text-xs">Students</p>
                <p className="text-lms-text text-xl font-bold">{b.studentCount}</p>
              </div>
              <div>
                <p className="text-lms-text-dim text-xs">Avg. Progress</p>
                <p className="text-lms-primary text-xl font-bold">{b.avgProgress}%</p>
              </div>
              <div>
                <p className="text-lms-text-dim text-xs">Duration</p>
                <p className="text-lms-text text-xl font-bold">{b.duration_months}mo</p>
              </div>
            </div>
            <div className="mt-4 w-full bg-lms-bg rounded-full h-2">
              <div className="bg-lms-primary h-2 rounded-full transition-all" style={{ width: `${b.avgProgress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </LmsLayout>
  );
}

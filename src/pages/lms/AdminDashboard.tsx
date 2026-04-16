import { LmsLayout } from "@/components/lms/LmsLayout";
import { demoBatches, demoStudents } from "@/lib/lms-data";
import { Users, FolderOpen, BarChart3, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const activeCount = demoBatches.filter(b => b.is_active).length;
  const avgProgress = Math.round(demoStudents.reduce((s, st) => s + st.progress, 0) / demoStudents.length);

  const stats = [
    { icon: Users, label: "Total Students", value: demoStudents.length, color: "text-lms-primary" },
    { icon: FolderOpen, label: "Active Batches", value: activeCount, color: "text-lms-accent" },
    { icon: BarChart3, label: "Avg. Progress", value: `${avgProgress}%`, color: "text-lms-success" },
    { icon: TrendingUp, label: "Completion Rate", value: "35%", color: "text-lms-primary" },
  ];

  return (
    <LmsLayout>
      <h1 className="text-2xl font-bold text-lms-text mb-6">Admin Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(s => (
          <div key={s.label} className="bg-lms-card border border-lms-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <s.icon className={`h-5 w-5 ${s.color}`} />
              <span className="text-lms-text-dim text-sm">{s.label}</span>
            </div>
            <p className="text-2xl font-bold text-lms-text">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Students */}
      <h2 className="text-lg font-semibold text-lms-text mb-4">Recent Students</h2>
      <div className="bg-lms-card border border-lms-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-lms-border">
              <th className="text-left p-4 text-lms-text-dim font-medium">Name</th>
              <th className="text-left p-4 text-lms-text-dim font-medium">College</th>
              <th className="text-left p-4 text-lms-text-dim font-medium">Sector</th>
              <th className="text-left p-4 text-lms-text-dim font-medium">Progress</th>
            </tr>
          </thead>
          <tbody>
            {demoStudents.slice(0, 5).map(s => (
              <tr key={s.id} className="border-b border-lms-border/50">
                <td className="p-4 text-lms-text">{s.full_name}</td>
                <td className="p-4 text-lms-text-muted">{s.college_name}</td>
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
      </div>
    </LmsLayout>
  );
}

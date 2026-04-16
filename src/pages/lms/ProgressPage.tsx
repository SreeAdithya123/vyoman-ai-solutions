import { LmsLayout } from "@/components/lms/LmsLayout";
import { ProgressCircle } from "@/components/lms/ProgressCircle";
import { demoClasses, demoStudentProgress } from "@/lib/lms-data";
import { CheckCircle2, Circle, PlayCircle } from "lucide-react";

export default function ProgressPage() {
  const classes = demoClasses.filter(c => c.batch_id === "batch-1");
  const completedCount = Object.values(demoStudentProgress).filter(p => p.completed).length;
  const overallProgress = Math.round((completedCount / classes.length) * 100);
  const weeks = [...new Set(classes.map(c => c.week_number))].sort();

  return (
    <LmsLayout>
      <h1 className="text-2xl font-bold text-lms-text mb-6">Your Progress</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-lms-card border border-lms-border rounded-xl p-6 flex items-center gap-6">
          <ProgressCircle percentage={overallProgress} size={100} strokeWidth={7} />
          <div>
            <p className="text-lms-text text-xl font-bold">{completedCount}/{classes.length} Classes</p>
            <p className="text-lms-text-dim text-sm">completed successfully</p>
          </div>
        </div>
        <div className="bg-lms-card border border-lms-border rounded-xl p-6">
          <h3 className="text-lms-text font-semibold mb-3">Stats</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-lms-text-dim">Videos Watched</span><span className="text-lms-text">{Object.values(demoStudentProgress).filter(p => p.video_watched).length}</span></div>
            <div className="flex justify-between"><span className="text-lms-text-dim">Assessments Passed</span><span className="text-lms-success">{Object.values(demoStudentProgress).filter(p => p.assessment_passed).length}</span></div>
            <div className="flex justify-between"><span className="text-lms-text-dim">Avg. Score</span><span className="text-lms-primary">{Math.round(Object.values(demoStudentProgress).filter(p => p.assessment_score).reduce((sum, p) => sum + (p.assessment_score || 0), 0) / (Object.values(demoStudentProgress).filter(p => p.assessment_score).length || 1))}%</span></div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <h2 className="text-lg font-semibold text-lms-text mb-4">Progress Timeline</h2>
      <div className="space-y-1">
        {weeks.map(week => (
          <div key={week} className="mb-6">
            <p className="text-lms-primary text-xs uppercase tracking-wider font-semibold mb-3">Week {week}</p>
            {classes.filter(c => c.week_number === week).map(cls => {
              const p = demoStudentProgress[cls.id];
              return (
                <div key={cls.id} className="flex items-center gap-4 py-3 border-l-2 pl-4 ml-2 border-lms-border">
                  {p?.completed ? <CheckCircle2 className="h-5 w-5 text-lms-success shrink-0" /> :
                    p ? <PlayCircle className="h-5 w-5 text-lms-primary shrink-0" /> :
                    <Circle className="h-5 w-5 text-lms-text-dim shrink-0" />}
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${p?.completed ? "text-lms-success" : "text-lms-text"}`}>{cls.title}</p>
                    {p && <p className="text-xs text-lms-text-dim">{p.completed ? `Score: ${p.assessment_score}%` : `${p.watch_percentage}% watched`}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </LmsLayout>
  );
}

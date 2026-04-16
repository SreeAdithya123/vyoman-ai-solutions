import { LmsLayout } from "@/components/lms/LmsLayout";
import { demoClasses, demoStudentProgress } from "@/lib/lms-data";
import { Link } from "react-router-dom";
import { CheckCircle2, PlayCircle, Lock } from "lucide-react";

export default function ClassList() {
  const classes = demoClasses.filter(c => c.batch_id === "batch-1");
  const weeks = [...new Set(classes.map(c => c.week_number))].sort();

  return (
    <LmsLayout>
      <h1 className="text-2xl font-bold text-lms-text mb-6">My Classes</h1>
      {weeks.map(week => (
        <div key={week} className="mb-8">
          <h2 className="text-sm font-semibold text-lms-primary uppercase tracking-wider mb-3">Week {week}</h2>
          <div className="grid gap-3">
            {classes.filter(c => c.week_number === week).map((cls, idx) => {
              const progress = demoStudentProgress[cls.id];
              const isCompleted = progress?.completed;
              const allClasses = classes.filter(c => c.week_number <= week);
              const clsIdx = allClasses.findIndex(c => c.id === cls.id);
              const prevCompleted = clsIdx === 0 || demoStudentProgress[allClasses[clsIdx - 1]?.id]?.completed;
              const isLocked = !prevCompleted && !progress;

              return (
                <Link key={cls.id} to={isLocked ? "#" : `/lms/classes/${cls.id}`}
                  className={`bg-lms-card border rounded-xl p-5 transition-all ${isLocked ? "border-lms-border opacity-50 cursor-not-allowed" : "border-lms-border hover:border-lms-primary/50"}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${isCompleted ? "bg-lms-success/20 text-lms-success" : isLocked ? "bg-lms-border/30 text-lms-text-dim" : "bg-lms-primary/15 text-lms-primary"}`}>
                      {isCompleted ? <CheckCircle2 className="h-6 w-6" /> : isLocked ? <Lock className="h-5 w-5" /> : <PlayCircle className="h-6 w-6" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-lms-text font-semibold">{cls.title}</p>
                      <p className="text-lms-text-dim text-sm mt-1">{cls.description}</p>
                    </div>
                    {progress && (
                      <div className="text-right">
                        <div className="w-16 bg-lms-bg rounded-full h-1.5">
                          <div className="bg-lms-primary h-1.5 rounded-full" style={{ width: `${progress.watch_percentage}%` }} />
                        </div>
                        <p className="text-lms-text-dim text-xs mt-1">{progress.watch_percentage}%</p>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </LmsLayout>
  );
}

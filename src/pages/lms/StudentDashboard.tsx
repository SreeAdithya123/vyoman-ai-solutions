import { useAuth } from "@/contexts/AuthContext";
import { LmsLayout } from "@/components/lms/LmsLayout";
import { ProgressCircle } from "@/components/lms/ProgressCircle";
import { demoClasses, demoStudentProgress } from "@/lib/lms-data";
import { Link } from "react-router-dom";
import { BookOpen, CheckCircle2, Clock, PlayCircle, Lock } from "lucide-react";

export default function StudentDashboard() {
  const { user } = useAuth();
  const classes = demoClasses.filter(c => c.batch_id === (user?.batch_id || "batch-1"));
  const completedCount = Object.values(demoStudentProgress).filter(p => p.completed).length;
  const overallProgress = Math.round((completedCount / classes.length) * 100);

  return (
    <LmsLayout>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-lms-text">Welcome back, {user?.full_name?.split(" ")[0] || "Student"} 👋</h1>
        <p className="text-lms-text-dim mt-1">AI & GenAI Batch - April 2026 • {user?.sector?.replace("_", " / ") || "AI / GenAI"}</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-lms-card border border-lms-border rounded-xl p-6 flex items-center gap-4">
          <ProgressCircle percentage={overallProgress} size={80} strokeWidth={6} />
          <div>
            <p className="text-lms-text font-semibold text-lg">Overall Progress</p>
            <p className="text-lms-text-dim text-sm">{completedCount} of {classes.length} classes done</p>
          </div>
        </div>
        <div className="bg-lms-card border border-lms-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-5 w-5 text-lms-primary" />
            <p className="text-lms-text font-semibold">Next Class</p>
          </div>
          <p className="text-lms-text-muted text-sm">Data Preprocessing & Feature Engineering</p>
          <p className="text-lms-text-dim text-xs mt-1">Week 2 • Module 3</p>
        </div>
        <div className="bg-lms-card border border-lms-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="h-5 w-5 text-lms-accent" />
            <p className="text-lms-text font-semibold">Program Timeline</p>
          </div>
          <div className="w-full bg-lms-bg rounded-full h-2 mt-3">
            <div className="bg-lms-primary h-2 rounded-full transition-all" style={{ width: "25%" }} />
          </div>
          <p className="text-lms-text-dim text-xs mt-2">Week 2 of 8 • 6 weeks remaining</p>
        </div>
      </div>

      {/* Class List */}
      <h2 className="text-lg font-semibold text-lms-text mb-4">Your Classes</h2>
      <div className="space-y-3">
        {classes.map((cls, idx) => {
          const progress = demoStudentProgress[cls.id];
          const isCompleted = progress?.completed;
          const isInProgress = progress && !progress.completed && progress.watch_percentage > 0;
          const prevCompleted = idx === 0 || demoStudentProgress[classes[idx - 1].id]?.completed;
          const isLocked = !prevCompleted && !progress;

          return (
            <Link
              key={cls.id}
              to={isLocked ? "#" : `/lms/classes/${cls.id}`}
              className={`block bg-lms-card border rounded-xl p-4 transition-all ${isLocked ? "border-lms-border opacity-50 cursor-not-allowed" : "border-lms-border hover:border-lms-primary/50"}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isCompleted ? "bg-lms-success/20" : isInProgress ? "bg-lms-primary/20" : isLocked ? "bg-lms-border/50" : "bg-lms-primary/10"}`}>
                  {isCompleted ? <CheckCircle2 className="h-5 w-5 text-lms-success" /> :
                    isLocked ? <Lock className="h-5 w-5 text-lms-text-dim" /> :
                    <PlayCircle className="h-5 w-5 text-lms-primary" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-lms-text-dim text-xs">Week {cls.week_number}</span>
                    {isCompleted && <span className="text-xs bg-lms-success/20 text-lms-success px-2 py-0.5 rounded-full">Completed</span>}
                    {isInProgress && <span className="text-xs bg-lms-primary/20 text-lms-primary px-2 py-0.5 rounded-full">In Progress</span>}
                  </div>
                  <p className="text-lms-text font-medium truncate">{cls.title}</p>
                  <p className="text-lms-text-dim text-sm truncate">{cls.description}</p>
                </div>
                {progress && !isCompleted && (
                  <div className="text-right shrink-0">
                    <p className="text-lms-primary text-sm font-medium">{progress.watch_percentage}%</p>
                    <p className="text-lms-text-dim text-xs">watched</p>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </LmsLayout>
  );
}

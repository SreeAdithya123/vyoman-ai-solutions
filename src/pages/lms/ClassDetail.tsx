import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LmsLayout } from "@/components/lms/LmsLayout";
import { demoClasses, demoAssessments, demoStudentProgress } from "@/lib/lms-data";
import { gradeAssessment } from "@/lib/lms-utils";
import { toast } from "sonner";
import { Play, CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";

export default function ClassDetail() {
  const { id } = useParams();
  const cls = demoClasses.find(c => c.id === id);
  const assessment = demoAssessments.find(a => a.class_id === id);
  const progress = demoStudentProgress[id || ""];

  const [watchPercent, setWatchPercent] = useState(progress?.watch_percentage || 0);
  const [videoWatched, setVideoWatched] = useState(progress?.video_watched || false);
  const [attendanceMarked, setAttendanceMarked] = useState(progress?.attendance_marked || false);
  const [showAssessment, setShowAssessment] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<{ score: number; passed: boolean; correct: number; total: number } | null>(
    progress?.assessment_score ? { score: progress.assessment_score, passed: progress.assessment_passed || false, correct: 0, total: 0 } : null
  );

  if (!cls) return <LmsLayout><p className="text-lms-text">Class not found</p></LmsLayout>;

  const currentIdx = demoClasses.findIndex(c => c.id === id);
  const nextClass = demoClasses[currentIdx + 1];

  const simulateWatch = () => {
    let pct = watchPercent;
    const interval = setInterval(() => {
      pct += 10;
      if (pct >= 100) { pct = 100; clearInterval(interval); }
      setWatchPercent(pct);
    }, 300);
  };

  const markWatched = () => {
    if (watchPercent < 80) { toast.error("Watch at least 80% of the video first"); return; }
    setVideoWatched(true);
    toast.success("Video marked as watched!");
  };

  const markAttendance = () => {
    setAttendanceMarked(true);
    toast.success("Attendance marked!");
  };

  const submitAssessment = () => {
    if (!assessment) return;
    const correct = assessment.questions.map(q => q.correct_option_index);
    const res = gradeAssessment(answers, correct);
    setResult(res);
    if (res.passed) toast.success(`Passed! Score: ${res.score}%`);
    else toast.error(`Failed. Score: ${res.score}%. Need 70% to pass.`);
  };

  return (
    <LmsLayout>
      <div className="max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-lms-text-dim mb-6">
          <Link to="/lms/classes" className="hover:text-lms-primary">My Classes</Link>
          <span>/</span>
          <span className="text-lms-text">Week {cls.week_number} - {cls.title}</span>
        </div>

        <h1 className="text-2xl font-bold text-lms-text mb-2">{cls.title}</h1>
        <p className="text-lms-text-dim mb-6">{cls.description}</p>

        {/* Video Player */}
        <div className="bg-lms-card border border-lms-border rounded-xl overflow-hidden mb-6">
          <div className="aspect-video bg-lms-bg flex items-center justify-center relative">
            <div className="text-center">
              <Play className="h-16 w-16 text-lms-primary mx-auto mb-3 opacity-60" />
              <p className="text-lms-text-dim">Video Player</p>
              <p className="text-lms-text-dim text-xs mt-1">(Video will be loaded from Supabase Storage)</p>
              {!videoWatched && (
                <button onClick={simulateWatch}
                  className="mt-4 bg-lms-primary text-lms-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
                  Simulate Watching
                </button>
              )}
            </div>
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-lms-border">
              <div className="bg-lms-primary h-full transition-all duration-300" style={{ width: `${watchPercent}%` }} />
            </div>
          </div>
          <div className="p-4 flex items-center justify-between">
            <span className="text-lms-text-dim text-sm">{watchPercent}% watched</span>
            <div className="flex gap-3">
              {!videoWatched && (
                <button onClick={markWatched} disabled={watchPercent < 80}
                  className="bg-lms-primary/15 text-lms-primary px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-40 hover:bg-lms-primary/25 transition-colors">
                  Mark as Watched
                </button>
              )}
              {videoWatched && !attendanceMarked && (
                <button onClick={markAttendance}
                  className="bg-lms-success/15 text-lms-success px-4 py-2 rounded-lg text-sm font-medium hover:bg-lms-success/25 transition-colors">
                  Mark Attendance
                </button>
              )}
              {videoWatched && <CheckCircle2 className="h-5 w-5 text-lms-success" />}
            </div>
          </div>
        </div>

        {/* Assessment Section */}
        {assessment && (
          <div className="bg-lms-card border border-lms-border rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-lms-text">{assessment.title}</h2>
              {result && (
                <span className={`text-sm px-3 py-1 rounded-full ${result.passed ? "bg-lms-success/20 text-lms-success" : "bg-lms-error/20 text-lms-error"}`}>
                  Score: {result.score}%
                </span>
              )}
            </div>

            {!videoWatched ? (
              <div className="flex items-center gap-3 text-lms-text-dim">
                <AlertCircle className="h-5 w-5" />
                <p>Complete the video first to unlock the assessment</p>
              </div>
            ) : !showAssessment && !result ? (
              <button onClick={() => { setShowAssessment(true); setAnswers(new Array(assessment.questions.length).fill(-1)); }}
                className="bg-lms-accent text-lms-accent-foreground px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Take Assessment
              </button>
            ) : showAssessment && !result ? (
              <div className="space-y-6">
                {assessment.questions.map((q, qi) => (
                  <div key={q.id}>
                    <p className="text-lms-text font-medium mb-3">{qi + 1}. {q.question_text}</p>
                    <div className="space-y-2">
                      {q.options.map((opt, oi) => (
                        <label key={oi}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${answers[qi] === oi ? "border-lms-primary bg-lms-primary/10" : "border-lms-border hover:border-lms-text-dim"}`}>
                          <input type="radio" name={`q-${qi}`} checked={answers[qi] === oi}
                            onChange={() => { const a = [...answers]; a[qi] = oi; setAnswers(a); }}
                            className="sr-only" />
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${answers[qi] === oi ? "border-lms-primary" : "border-lms-text-dim"}`}>
                            {answers[qi] === oi && <div className="w-2 h-2 rounded-full bg-lms-primary" />}
                          </div>
                          <span className="text-lms-text-muted text-sm">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <button onClick={submitAssessment} disabled={answers.some(a => a === -1)}
                  className="bg-lms-accent text-lms-accent-foreground px-6 py-2.5 rounded-lg font-medium hover:opacity-90 disabled:opacity-40 transition-opacity">
                  Submit Assessment
                </button>
              </div>
            ) : result ? (
              <div className={`p-4 rounded-lg ${result.passed ? "bg-lms-success/10 border border-lms-success/30" : "bg-lms-error/10 border border-lms-error/30"}`}>
                <p className={`font-medium ${result.passed ? "text-lms-success" : "text-lms-error"}`}>
                  {result.passed ? "🎉 Congratulations! You passed!" : "❌ You didn't pass. Try again."}
                </p>
                <p className="text-lms-text-dim text-sm mt-1">Score: {result.score}% (Passing: {assessment.passing_score}%)</p>
                {!result.passed && (
                  <button onClick={() => { setResult(null); setShowAssessment(true); setAnswers(new Array(assessment.questions.length).fill(-1)); }}
                    className="mt-3 text-lms-primary text-sm hover:underline">
                    Retry Assessment
                  </button>
                )}
              </div>
            ) : null}
          </div>
        )}

        {/* Next Class */}
        {nextClass && result?.passed && (
          <Link to={`/lms/classes/${nextClass.id}`}
            className="flex items-center justify-between bg-lms-card border border-lms-primary/30 rounded-xl p-4 hover:border-lms-primary/60 transition-colors">
            <div>
              <p className="text-lms-text-dim text-xs">Next Up</p>
              <p className="text-lms-text font-medium">{nextClass.title}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-lms-primary" />
          </Link>
        )}
      </div>
    </LmsLayout>
  );
}

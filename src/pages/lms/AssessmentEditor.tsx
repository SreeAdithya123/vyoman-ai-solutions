import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LmsLayout } from "@/components/lms/LmsLayout";
import { demoAssessments, demoClasses } from "@/lib/lms-data";
import { Plus, Trash2, Save } from "lucide-react";
import { toast } from "sonner";
import type { Question } from "@/lib/lms-data";

export default function AssessmentEditor() {
  const { classId } = useParams();
  const cls = demoClasses.find(c => c.id === classId);
  const existing = demoAssessments.find(a => a.class_id === classId);
  const [title, setTitle] = useState(existing?.title || `Assessment for ${cls?.title || "Class"}`);
  const [passingScore, setPassingScore] = useState(existing?.passing_score || 70);
  const [questions, setQuestions] = useState<Question[]>(existing?.questions || []);

  const addQuestion = () => {
    setQuestions([...questions, { id: `q-${Date.now()}`, question_text: "", options: ["", "", "", ""], correct_option_index: 0 }]);
  };

  const updateQuestion = (idx: number, field: string, val: any) => {
    const q = [...questions];
    (q[idx] as any)[field] = val;
    setQuestions(q);
  };

  const updateOption = (qi: number, oi: number, val: string) => {
    const q = [...questions];
    q[qi].options[oi] = val;
    setQuestions(q);
  };

  const removeQuestion = (idx: number) => {
    setQuestions(questions.filter((_, i) => i !== idx));
  };

  const save = () => {
    if (questions.some(q => !q.question_text || q.options.some(o => !o))) {
      toast.error("Fill all question fields");
      return;
    }
    toast.success("Assessment saved!");
  };

  return (
    <LmsLayout>
      <div className="flex items-center gap-2 text-sm text-lms-text-dim mb-6">
        <Link to="/lms/admin/batches" className="hover:text-lms-primary">Batches</Link>
        <span>/</span>
        <span className="text-lms-text">{cls?.title || "Class"} - Assessment</span>
      </div>

      <div className="max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-lms-text">Assessment Editor</h1>
          <button onClick={save} className="flex items-center gap-2 bg-lms-success text-lms-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
            <Save className="h-4 w-4" /> Save
          </button>
        </div>

        <div className="bg-lms-card border border-lms-border rounded-xl p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-lms-text-dim text-sm block mb-1">Title</label>
              <input value={title} onChange={e => setTitle(e.target.value)}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary" />
            </div>
            <div>
              <label className="text-lms-text-dim text-sm block mb-1">Passing Score (%)</label>
              <input type="number" min={0} max={100} value={passingScore} onChange={e => setPassingScore(parseInt(e.target.value))}
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary" />
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {questions.map((q, qi) => (
            <div key={q.id} className="bg-lms-card border border-lms-border rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <span className="text-lms-primary text-sm font-medium">Question {qi + 1}</span>
                <button onClick={() => removeQuestion(qi)} className="text-lms-error hover:opacity-80"><Trash2 className="h-4 w-4" /></button>
              </div>
              <input value={q.question_text} onChange={e => updateQuestion(qi, "question_text", e.target.value)} placeholder="Enter question..."
                className="w-full bg-lms-bg border border-lms-border rounded-lg px-3 py-2 text-lms-text text-sm focus:outline-none focus:border-lms-primary mb-3" />
              <div className="space-y-2">
                {q.options.map((opt, oi) => (
                  <div key={oi} className="flex items-center gap-2">
                    <button onClick={() => updateQuestion(qi, "correct_option_index", oi)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${q.correct_option_index === oi ? "border-lms-success bg-lms-success/20" : "border-lms-border"}`}>
                      {q.correct_option_index === oi && <div className="w-2.5 h-2.5 rounded-full bg-lms-success" />}
                    </button>
                    <input value={opt} onChange={e => updateOption(qi, oi, e.target.value)} placeholder={`Option ${oi + 1}`}
                      className="flex-1 bg-lms-bg border border-lms-border rounded-lg px-3 py-1.5 text-lms-text text-sm focus:outline-none focus:border-lms-primary" />
                  </div>
                ))}
              </div>
              <p className="text-lms-text-dim text-xs mt-2">Click the circle to mark the correct answer</p>
            </div>
          ))}
        </div>

        <button onClick={addQuestion}
          className="mt-4 flex items-center gap-2 border border-dashed border-lms-border text-lms-text-dim hover:border-lms-primary hover:text-lms-primary px-4 py-3 rounded-xl w-full justify-center text-sm transition-colors">
          <Plus className="h-4 w-4" /> Add Question
        </button>
      </div>
    </LmsLayout>
  );
}

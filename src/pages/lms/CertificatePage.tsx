import { useAuth } from "@/contexts/AuthContext";
import { LmsLayout } from "@/components/lms/LmsLayout";
import { generateCertificate } from "@/lib/lms-utils";
import { demoClasses, demoStudentProgress } from "@/lib/lms-data";
import { Award, Download, Lock } from "lucide-react";
import { toast } from "sonner";

export default function CertificatePage() {
  const { user } = useAuth();
  const classes = demoClasses.filter(c => c.batch_id === "batch-1");
  const completedCount = Object.values(demoStudentProgress).filter(p => p.completed).length;
  const allDone = completedCount === classes.length;

  const download = (type: "course" | "project" | "internship") => {
    generateCertificate({
      studentName: user?.full_name || "Student",
      batchName: "AI & GenAI Batch - April 2026",
      sector: user?.sector || "AI_GenAI",
      completionDate: new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" }),
      type,
    });
    toast.success(`${type} certificate downloaded!`);
  };

  const certs = [
    { type: "course" as const, title: "Course Completion", desc: "Certifies completion of all course modules and assessments" },
    { type: "project" as const, title: "Project Excellence", desc: "Certifies successful completion of the capstone project" },
    { type: "internship" as const, title: "Internship Certificate", desc: "Official internship completion certificate for your records" },
  ];

  return (
    <LmsLayout>
      <h1 className="text-2xl font-bold text-lms-text mb-2">Certificates</h1>
      <p className="text-lms-text-dim mb-8">
        {allDone ? "Congratulations! Download your certificates below." : `Complete all ${classes.length} classes to unlock certificates. (${completedCount}/${classes.length} done)`}
      </p>

      <div className="grid gap-4 max-w-2xl">
        {certs.map(cert => (
          <div key={cert.type} className={`bg-lms-card border rounded-xl p-6 flex items-center gap-4 ${allDone ? "border-lms-accent/30" : "border-lms-border opacity-60"}`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${allDone ? "bg-lms-accent/20" : "bg-lms-border/30"}`}>
              {allDone ? <Award className="h-6 w-6 text-lms-accent" /> : <Lock className="h-6 w-6 text-lms-text-dim" />}
            </div>
            <div className="flex-1">
              <p className="text-lms-text font-semibold">{cert.title}</p>
              <p className="text-lms-text-dim text-sm">{cert.desc}</p>
            </div>
            <button onClick={() => download(cert.type)} disabled={!allDone}
              className="bg-lms-accent text-lms-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-40 flex items-center gap-2 transition-opacity">
              <Download className="h-4 w-4" /> Download
            </button>
          </div>
        ))}
      </div>
    </LmsLayout>
  );
}

import jsPDF from "jspdf";

interface CertificateData {
  studentName: string;
  batchName: string;
  sector: string;
  completionDate: string;
  type: "course" | "project" | "internship";
}

export function generateCertificate(data: CertificateData) {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();

  // Background
  doc.setFillColor(11, 31, 58);
  doc.rect(0, 0, w, h, "F");

  // Border
  doc.setDrawColor(4, 192, 255);
  doc.setLineWidth(2);
  doc.rect(10, 10, w - 20, h - 20);
  doc.setLineWidth(0.5);
  doc.rect(14, 14, w - 28, h - 28);

  // Title
  doc.setTextColor(4, 192, 255);
  doc.setFontSize(14);
  doc.text("SKILLBRIDGE ACADEMY", w / 2, 35, { align: "center" });

  doc.setTextColor(255, 195, 14);
  doc.setFontSize(28);
  const titles = { course: "Certificate of Completion", project: "Project Excellence Certificate", internship: "Internship Certificate" };
  doc.text(titles[data.type], w / 2, 55, { align: "center" });

  // Body
  doc.setTextColor(226, 232, 240);
  doc.setFontSize(12);
  doc.text("This is to certify that", w / 2, 75, { align: "center" });

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text(data.studentName, w / 2, 92, { align: "center" });

  doc.setTextColor(226, 232, 240);
  doc.setFontSize(12);
  const bodyLines = [
    `has successfully completed the ${data.type === "internship" ? "paid training internship" : data.type} program`,
    `in ${data.sector.replace("_", " / ")} under ${data.batchName}`,
    `on ${data.completionDate}`,
  ];
  bodyLines.forEach((line, i) => doc.text(line, w / 2, 108 + i * 8, { align: "center" }));

  // Accent line
  doc.setDrawColor(255, 195, 14);
  doc.setLineWidth(0.8);
  doc.line(w / 2 - 50, 140, w / 2 + 50, 140);

  // Footer
  doc.setTextColor(100, 120, 150);
  doc.setFontSize(9);
  doc.text("Part of vyoman.tech ecosystem", w / 2, h - 25, { align: "center" });
  doc.text("www.vyoman.tech", w / 2, h - 19, { align: "center" });

  doc.save(`SkillBridge_${data.type}_${data.studentName.replace(/\s/g, "_")}.pdf`);
}

export function gradeAssessment(answers: number[], correctAnswers: number[]): { score: number; passed: boolean; total: number; correct: number } {
  const correct = answers.filter((a, i) => a === correctAnswers[i]).length;
  const score = Math.round((correct / correctAnswers.length) * 100);
  return { score, passed: score >= 70, total: correctAnswers.length, correct };
}

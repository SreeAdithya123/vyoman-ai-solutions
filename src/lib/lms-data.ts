// Demo data for development — will be replaced with Supabase queries

export interface Batch {
  id: string;
  name: string;
  sector: string;
  duration_months: number;
  start_date: string;
  end_date: string;
  is_active: boolean;
}

export interface LmsClass {
  id: string;
  batch_id: string;
  week_number: number;
  title: string;
  description: string;
  video_url: string;
  order_index: number;
}

export interface Assessment {
  id: string;
  class_id: string;
  title: string;
  questions: Question[];
  passing_score: number;
}

export interface Question {
  id: string;
  question_text: string;
  options: string[];
  correct_option_index: number;
}

export interface StudentProgress {
  class_id: string;
  video_watched: boolean;
  watch_percentage: number;
  attendance_marked: boolean;
  completed: boolean;
  assessment_score?: number;
  assessment_passed?: boolean;
}

export const demoBatches: Batch[] = [
  { id: "batch-1", name: "AI & GenAI Batch - April 2026", sector: "AI_GenAI", duration_months: 2, start_date: "2026-04-01", end_date: "2026-05-31", is_active: true },
  { id: "batch-2", name: "Programming Batch - April 2026", sector: "Programming", duration_months: 2, start_date: "2026-04-01", end_date: "2026-05-31", is_active: true },
  { id: "batch-3", name: "UI/UX Design Batch - March 2026", sector: "UI_UX", duration_months: 1, start_date: "2026-03-01", end_date: "2026-03-31", is_active: false },
  { id: "batch-4", name: "Embedded Systems - April 2026", sector: "Embedded", duration_months: 2, start_date: "2026-04-01", end_date: "2026-05-31", is_active: true },
];

export const demoClasses: LmsClass[] = [
  { id: "class-1", batch_id: "batch-1", week_number: 1, title: "Introduction to AI & Machine Learning", description: "Fundamentals of AI, history, and real-world applications. Understanding the difference between AI, ML, and Deep Learning.", video_url: "", order_index: 1 },
  { id: "class-2", batch_id: "batch-1", week_number: 1, title: "Python for AI – Essentials", description: "Python basics, NumPy, Pandas, and data manipulation fundamentals for AI development.", video_url: "", order_index: 2 },
  { id: "class-3", batch_id: "batch-1", week_number: 2, title: "Data Preprocessing & Feature Engineering", description: "Cleaning data, handling missing values, feature selection, and transformation techniques.", video_url: "", order_index: 3 },
  { id: "class-4", batch_id: "batch-1", week_number: 2, title: "Supervised Learning – Regression & Classification", description: "Linear regression, logistic regression, decision trees, and model evaluation metrics.", video_url: "", order_index: 4 },
  { id: "class-5", batch_id: "batch-1", week_number: 3, title: "Neural Networks & Deep Learning Basics", description: "Perceptrons, backpropagation, activation functions, and building your first neural network.", video_url: "", order_index: 5 },
  { id: "class-6", batch_id: "batch-1", week_number: 3, title: "Introduction to Generative AI", description: "Understanding transformers, GPT architecture, and the revolution of generative models.", video_url: "", order_index: 6 },
  { id: "class-7", batch_id: "batch-1", week_number: 4, title: "Prompt Engineering & LLM Applications", description: "Mastering prompt design, few-shot learning, chain-of-thought, and building LLM-powered apps.", video_url: "", order_index: 7 },
  { id: "class-8", batch_id: "batch-1", week_number: 4, title: "Final Project & Capstone", description: "Build and present your own AI/GenAI project using the skills learned throughout the internship.", video_url: "", order_index: 8 },
];

export const demoAssessments: Assessment[] = [
  {
    id: "assess-1", class_id: "class-1", title: "Module 1 Quiz: AI Fundamentals",
    passing_score: 70,
    questions: [
      { id: "q1", question_text: "What does AI stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Applied Informatics"], correct_option_index: 1 },
      { id: "q2", question_text: "Which of the following is a subset of AI?", options: ["Cloud Computing", "Machine Learning", "Blockchain", "Cybersecurity"], correct_option_index: 1 },
      { id: "q3", question_text: "What type of learning uses labeled data?", options: ["Unsupervised", "Reinforcement", "Supervised", "Transfer"], correct_option_index: 2 },
      { id: "q4", question_text: "Who is considered the father of AI?", options: ["Alan Turing", "John McCarthy", "Elon Musk", "Andrew Ng"], correct_option_index: 1 },
      { id: "q5", question_text: "Which is NOT an application of AI?", options: ["Image recognition", "Manual data entry", "Natural language processing", "Self-driving cars"], correct_option_index: 1 },
    ],
  },
  {
    id: "assess-2", class_id: "class-2", title: "Module 2 Quiz: Python for AI",
    passing_score: 70,
    questions: [
      { id: "q6", question_text: "Which library is used for numerical computing in Python?", options: ["Django", "Flask", "NumPy", "Requests"], correct_option_index: 2 },
      { id: "q7", question_text: "What does Pandas primarily handle?", options: ["Web scraping", "Data manipulation", "Game development", "Network programming"], correct_option_index: 1 },
      { id: "q8", question_text: "What is a DataFrame?", options: ["A function", "A loop structure", "A 2D data structure", "A variable type"], correct_option_index: 2 },
      { id: "q9", question_text: "Which method reads a CSV file in Pandas?", options: ["pd.open_csv()", "pd.read_csv()", "pd.load()", "pd.import_csv()"], correct_option_index: 1 },
      { id: "q10", question_text: "What is the output of len([1,2,3])?", options: ["2", "3", "4", "Error"], correct_option_index: 1 },
    ],
  },
];

export const demoStudentProgress: Record<string, StudentProgress> = {
  "class-1": { class_id: "class-1", video_watched: true, watch_percentage: 100, attendance_marked: true, completed: true, assessment_score: 80, assessment_passed: true },
  "class-2": { class_id: "class-2", video_watched: true, watch_percentage: 100, attendance_marked: true, completed: true, assessment_score: 90, assessment_passed: true },
  "class-3": { class_id: "class-3", video_watched: true, watch_percentage: 65, attendance_marked: false, completed: false },
  "class-4": { class_id: "class-4", video_watched: false, watch_percentage: 0, attendance_marked: false, completed: false },
};

export const demoStudents = [
  { id: "student-1", full_name: "Rahul Sharma", email: "rahul@example.com", college_name: "IIT Delhi", sector: "AI_GenAI", batch_id: "batch-1", progress: 45 },
  { id: "student-2", full_name: "Priya Patel", email: "priya@example.com", college_name: "NIT Trichy", sector: "AI_GenAI", batch_id: "batch-1", progress: 62 },
  { id: "student-3", full_name: "Arjun Nair", email: "arjun@example.com", college_name: "BITS Pilani", sector: "AI_GenAI", batch_id: "batch-1", progress: 30 },
  { id: "student-4", full_name: "Sneha Reddy", email: "sneha@example.com", college_name: "VIT Vellore", sector: "Programming", batch_id: "batch-2", progress: 55 },
  { id: "student-5", full_name: "Karthik Kumar", email: "karthik@example.com", college_name: "IIIT Hyderabad", sector: "Programming", batch_id: "batch-2", progress: 78 },
  { id: "student-6", full_name: "Ananya Singh", email: "ananya@example.com", college_name: "DTU Delhi", sector: "Embedded", batch_id: "batch-4", progress: 20 },
];

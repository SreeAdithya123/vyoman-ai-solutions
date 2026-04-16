import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/lms/ProtectedRoute";

// Marketing site
import Index from "./pages/Index.tsx";
import Team from "./pages/Team.tsx";
import NotFound from "./pages/NotFound.tsx";

// LMS pages
import LmsLogin from "./pages/lms/LmsLogin.tsx";
import LmsSignup from "./pages/lms/LmsSignup.tsx";
import StudentDashboard from "./pages/lms/StudentDashboard.tsx";
import ClassList from "./pages/lms/ClassList.tsx";
import ClassDetail from "./pages/lms/ClassDetail.tsx";
import ProgressPage from "./pages/lms/ProgressPage.tsx";
import ProfilePage from "./pages/lms/ProfilePage.tsx";
import CertificatePage from "./pages/lms/CertificatePage.tsx";
import AdminDashboard from "./pages/lms/AdminDashboard.tsx";
import BatchManagement from "./pages/lms/BatchManagement.tsx";
import ClassManagement from "./pages/lms/ClassManagement.tsx";
import AssessmentEditor from "./pages/lms/AssessmentEditor.tsx";
import StudentManagement from "./pages/lms/StudentManagement.tsx";
import ReportsPage from "./pages/lms/ReportsPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Marketing site */}
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />

            {/* LMS Auth */}
            <Route path="/lms/login" element={<LmsLogin />} />
            <Route path="/lms/signup" element={<LmsSignup />} />

            {/* LMS Student */}
            <Route path="/lms/dashboard" element={<ProtectedRoute requiredRole="student"><StudentDashboard /></ProtectedRoute>} />
            <Route path="/lms/classes" element={<ProtectedRoute requiredRole="student"><ClassList /></ProtectedRoute>} />
            <Route path="/lms/classes/:id" element={<ProtectedRoute requiredRole="student"><ClassDetail /></ProtectedRoute>} />
            <Route path="/lms/progress" element={<ProtectedRoute requiredRole="student"><ProgressPage /></ProtectedRoute>} />
            <Route path="/lms/certificate" element={<ProtectedRoute requiredRole="student"><CertificatePage /></ProtectedRoute>} />

            {/* LMS Admin */}
            <Route path="/lms/admin" element={<ProtectedRoute requiredRole="admin"><AdminDashboard /></ProtectedRoute>} />
            <Route path="/lms/admin/batches" element={<ProtectedRoute requiredRole="admin"><BatchManagement /></ProtectedRoute>} />
            <Route path="/lms/admin/batches/:batchId/classes" element={<ProtectedRoute requiredRole="admin"><ClassManagement /></ProtectedRoute>} />
            <Route path="/lms/admin/classes/:classId/assessment" element={<ProtectedRoute requiredRole="admin"><AssessmentEditor /></ProtectedRoute>} />
            <Route path="/lms/admin/students" element={<ProtectedRoute requiredRole="admin"><StudentManagement /></ProtectedRoute>} />
            <Route path="/lms/admin/reports" element={<ProtectedRoute requiredRole="admin"><ReportsPage /></ProtectedRoute>} />

            {/* LMS Shared */}
            <Route path="/lms/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

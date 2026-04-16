import { useAuth } from "@/contexts/AuthContext";
import { LmsLayout } from "@/components/lms/LmsLayout";
import { User, Mail, Building, BookOpen, Calendar } from "lucide-react";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <LmsLayout>
      <h1 className="text-2xl font-bold text-lms-text mb-6">Profile</h1>
      <div className="bg-lms-card border border-lms-border rounded-xl p-6 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-lms-primary/20 flex items-center justify-center">
            <User className="h-8 w-8 text-lms-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-lms-text">{user?.full_name}</h2>
            <p className="text-lms-text-dim text-sm capitalize">{user?.role}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-lms-text-dim" />
            <div>
              <p className="text-lms-text-dim text-xs">Email</p>
              <p className="text-lms-text text-sm">{user?.email}</p>
            </div>
          </div>
          {user?.college_name && (
            <div className="flex items-center gap-3">
              <Building className="h-4 w-4 text-lms-text-dim" />
              <div>
                <p className="text-lms-text-dim text-xs">College</p>
                <p className="text-lms-text text-sm">{user?.college_name}</p>
              </div>
            </div>
          )}
          {user?.sector && (
            <div className="flex items-center gap-3">
              <BookOpen className="h-4 w-4 text-lms-text-dim" />
              <div>
                <p className="text-lms-text-dim text-xs">Sector</p>
                <p className="text-lms-text text-sm">{user?.sector.replace("_", " / ")}</p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-3">
            <Calendar className="h-4 w-4 text-lms-text-dim" />
            <div>
              <p className="text-lms-text-dim text-xs">Member Since</p>
              <p className="text-lms-text text-sm">April 2026</p>
            </div>
          </div>
        </div>
      </div>
    </LmsLayout>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  LayoutDashboard, BookOpen, BarChart3, User, Award, Users,
  FolderOpen, FileText, LogOut, GraduationCap, ChevronLeft, ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const studentLinks = [
  { to: "/lms/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/lms/classes", icon: BookOpen, label: "My Classes" },
  { to: "/lms/progress", icon: BarChart3, label: "Progress" },
  { to: "/lms/certificate", icon: Award, label: "Certificate" },
  { to: "/lms/profile", icon: User, label: "Profile" },
];

const adminLinks = [
  { to: "/lms/admin", icon: LayoutDashboard, label: "Overview" },
  { to: "/lms/admin/batches", icon: FolderOpen, label: "Batches" },
  { to: "/lms/admin/students", icon: Users, label: "Students" },
  { to: "/lms/admin/reports", icon: FileText, label: "Reports" },
  { to: "/lms/profile", icon: User, label: "Profile" },
];

export function LmsSidebar() {
  const { user, logout, isAdmin } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const links = isAdmin ? adminLinks : studentLinks;

  return (
    <aside className={cn(
      "bg-lms-sidebar border-r border-lms-border flex flex-col h-screen sticky top-0 transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="p-4 border-b border-lms-border flex items-center gap-3">
        <GraduationCap className="h-8 w-8 text-lms-primary shrink-0" />
        {!collapsed && (
          <div>
            <h1 className="text-lms-text font-bold text-lg leading-tight">SkillBridge</h1>
            <p className="text-lms-text-dim text-xs">Academy</p>
          </div>
        )}
      </div>

      {/* Nav Links */}
      <nav className="flex-1 p-3 space-y-1">
        {links.map(link => {
          const isActive = location.pathname === link.to ||
            (link.to !== "/lms/admin" && location.pathname.startsWith(link.to));
          return (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all",
                isActive
                  ? "bg-lms-primary/15 text-lms-primary font-medium"
                  : "text-lms-text-muted hover:bg-lms-primary/5 hover:text-lms-text"
              )}
            >
              <link.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{link.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* User & Logout */}
      <div className="p-3 border-t border-lms-border space-y-2">
        {!collapsed && user && (
          <div className="px-3 py-2">
            <p className="text-lms-text text-sm font-medium truncate">{user.full_name}</p>
            <p className="text-lms-text-dim text-xs truncate">{user.email}</p>
          </div>
        )}
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-lms-error hover:bg-lms-error/10 w-full transition-all"
        >
          <LogOut className="h-5 w-5 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-full py-1 text-lms-text-dim hover:text-lms-text transition-colors"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>
    </aside>
  );
}

import { LmsSidebar } from "./LmsSidebar";

export function LmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lms-theme min-h-screen bg-lms-bg flex w-full">
      <LmsSidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

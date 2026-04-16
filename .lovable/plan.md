

## Build SkillBridge Academy LMS — Full Production System

The LMS will live under `/lms/` routes alongside the existing Vyoman marketing site. This is a large build covering auth, database, admin dashboard, student dashboard, class player, assessments, progress tracking, and certificates.

### Color Theme & Branding

- Primary: Deep Navy `#0B1F3A`, Secondary: Cyan `#04C0FF`, Accent: Orange `#FFC30E`
- Background: `#0F172A` dark navy, Text: `#FFFFFF` / `#E2E8F0`
- New CSS variables added to `index.css` under a `.lms-theme` scope or as additional variables
- All LMS pages use dark navy theme with cyan accents

### Database (Supabase Cloud — 7 tables + roles)

1. **user_roles** — `user_id`, `role` (enum: admin, student) — per security best practices
2. **profiles** — `id`, `full_name`, `email`, `college_name`, `sector` (enum), `batch_id`, `avatar_url`, `created_at`
3. **batches** — `id`, `name`, `sector`, `duration_months`, `start_date`, `end_date`, `is_active`, `created_at`
4. **classes** — `id`, `batch_id`, `week_number`, `title`, `description`, `video_url`, `order_index`, `created_at`
5. **assessments** — `id`, `class_id`, `title`, `questions` (jsonb), `passing_score`, `created_at`
6. **student_progress** — `id`, `user_id`, `class_id`, `video_watched`, `watch_percentage`, `attendance_marked`, `completed_at`
7. **assessment_submissions** — `id`, `user_id`, `assessment_id`, `answers` (jsonb), `score`, `passed`, `submitted_at`

RLS policies: Students see only their batch data and own progress. Admins have full access via `has_role()` security definer function. Auto-create profile trigger on signup.

### Authentication

- Email/password signup with role selection (admin requires invite code)
- Google OAuth login
- Auth pages: `/lms/login`, `/lms/signup`
- Protected route wrapper checking auth + role
- Session management via `onAuthStateChange`

### Pages & Routes (all under `/lms/`)

| Route | Component | Role |
|---|---|---|
| `/lms/login` | LmsLogin | Public |
| `/lms/signup` | LmsSignup | Public |
| `/lms/dashboard` | StudentDashboard | Student |
| `/lms/classes` | ClassList | Student |
| `/lms/classes/:id` | ClassDetail (video + assessment) | Student |
| `/lms/progress` | ProgressPage | Student |
| `/lms/profile` | ProfilePage | Both |
| `/lms/certificate` | CertificatePage | Student |
| `/lms/admin` | AdminDashboard | Admin |
| `/lms/admin/batches` | BatchManagement | Admin |
| `/lms/admin/batches/:id/classes` | ClassManagement | Admin |
| `/lms/admin/classes/:id/assessment` | AssessmentEditor | Admin |
| `/lms/admin/students` | StudentManagement | Admin |
| `/lms/admin/reports` | ReportsPage | Admin |

### Layout

- `LmsLayout` wrapper with dark sidebar navigation (icons + labels, collapsible)
- Student sidebar: Dashboard, My Classes, Progress, Profile
- Admin sidebar: Overview, Batches, Students, Reports, Profile
- Top bar with user avatar, notifications bell, logout

### Core Components

- **StudentDashboard**: Welcome card, overall progress circle, weekly class cards, batch progress bar
- **ClassDetail**: HTML5 video player with watch tracking, "Mark as Watched" (after 80%), attendance button, MCQ assessment interface (unlocked after watching), auto-grading with instant feedback, next class preview (locked state)
- **AdminDashboard**: Stats cards (total students, active batches, avg completion), recent activity
- **BatchManagement**: CRUD table for batches with sector/duration filters
- **ClassManagement**: Ordered list of classes per batch, drag or reorder, video upload to Supabase Storage
- **AssessmentEditor**: Add/edit MCQ questions (question text, 4 options, correct answer), set passing score
- **StudentManagement**: Student table with search, filter by batch/sector, CSV import, view individual progress
- **ReportsPage**: Batch-wise completion rates, average scores, CSV export
- **CertificatePage**: 3 certificates (Course, Project, Internship) generated as PDF via jsPDF
- **ProgressPage**: Visual timeline of all classes with completion status

### Key Logic

- Class unlock: Next class locked until previous assessment passed (configurable by admin)
- Video tracking: Track watch percentage, enable "Mark as Watched" at 80%
- Assessment: Auto-grade MCQs, store score, mark pass/fail at 70% threshold
- Completion: Class complete = video watched + assessment passed. Program complete = all classes done
- Certificate: Generate PDF with student name, batch, sector, completion date

### Files Created (~30 new files)

- `src/pages/lms/` — All LMS page components
- `src/components/lms/` — Shared LMS components (sidebar, layout, progress circle, video player, quiz interface)
- `src/hooks/` — `useAuth`, `useRole`, `useStudentProgress`, `useBatches`
- `src/contexts/AuthContext.tsx` — Auth state provider
- `src/lib/lms-utils.ts` — Certificate generation, grading logic
- `src/integrations/supabase/` — Updated types
- SQL migrations for all 7 tables + RLS + triggers + enums + storage bucket

### Files Modified

- `src/App.tsx` — Add all `/lms/*` routes with auth guards
- `src/index.css` — Add LMS theme CSS variables
- `tailwind.config.ts` — Add LMS brand colors

### Technical Notes

- Roles stored in separate `user_roles` table (never on profiles) with `has_role()` security definer function
- Supabase Storage bucket `lms-videos` for video uploads
- Uses existing shadcn components (cards, tables, tabs, progress, accordion, dialog) plus new LMS-specific components
- Mobile responsive with collapsible sidebar
- Toast notifications via sonner for all user actions


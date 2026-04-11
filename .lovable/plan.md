

## Plan: Team Page + Clickable Contact Links

### 1. Move Team Section to a Separate Page

- **Create `src/pages/Team.tsx`** — new page rendering `Navbar`, `TeamSection`, and `Footer`
- **Update `src/App.tsx`** — add route `<Route path="/team" element={<Team />} />`
- **Update `src/pages/Index.tsx`** — remove `TeamSection` import and usage
- **Update `src/components/Navbar.tsx`** — change "Our Team" from `href="#team"` to a React Router `Link` to `/team`
- **Update `src/components/Footer.tsx`** — same change for "Our Team" link

### 2. Make Contact Details Clickable

In **`src/components/CTASection.tsx`**:
- **Email**: Wrap in `<a href="mailto:sreeadithya.ndd@gmail.com">` so clicking opens the user's email client with a compose window
- **Phone**: Wrap in `<a href="https://wa.me/917013271894">` so clicking opens WhatsApp chat ready to send a message

### Files Modified
- `src/pages/Team.tsx` (new)
- `src/App.tsx`
- `src/pages/Index.tsx`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/CTASection.tsx`


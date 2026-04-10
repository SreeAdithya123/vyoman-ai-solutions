

## Add Team Member Photos

### Overview
Replace initials-based avatars with actual photos for all 5 team members. Photos will be cropped to circles using `object-cover` and `object-top` positioning to ensure faces are centered and clearly visible.

### Photo Mapping
- `image-8.png` → K. Sree Adithya (CEO)
- `image-9.png` → G. Yohan Raju (Head of Marketing)
- `image-10.png` → B. Maha Lakshmi (AI R&D Intern)
- `image-11.png` → Y. Chiranjeevi (AI Research Intern)
- `image-12.png` → S. Srisanth (AI Research Intern)

### Steps

**1. Copy images to `src/assets/team/`**
Copy all 5 uploaded images into the project under `src/assets/team/` with descriptive names (e.g., `adithya.png`, `yohan.png`, etc.).

**2. Update `src/components/TeamSection.tsx`**
- Import all 5 images as ES6 modules
- Add an `image` field to the `TeamMember` interface
- Replace `AvatarFallback` with `AvatarImage` using `object-cover object-top` CSS to ensure faces are aligned properly within the circular avatar
- Keep `AvatarFallback` as a loading fallback
- Increase avatar sizes slightly for better photo visibility (e.g., `h-20 w-20` for all members)

### Files
- **Copy**: 5 images to `src/assets/team/`
- **Edit**: `src/components/TeamSection.tsx`


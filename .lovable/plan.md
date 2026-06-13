## Objective
Add a new "View CV (Canva)" button to the Hero section, placed alongside the existing Download CV button.

## Link
- Canva public view link: `https://canva.link/gx4ol8xrfbg73th`

## Changes
- **File**: `src/components/Hero.tsx`
- **Action**: Insert a new `<a>` element between the existing "Download CV" and "Get in Touch" buttons in the button row (lines 81–88).
- **Styling**: Use the existing `btn-outline` class to match the current Download CV button style.
- **Icon**: Use `ExternalLink` from `lucide-react` to indicate it opens in a new tab.
- **Behavior**: `target="_blank" rel="noopener noreferrer"` for safe external navigation.

## Result
The Hero button row will show: **View Projects** | **Download Resume** | **Download CV** | **View CV (Canva)** | **Get in Touch** — all styled consistently.
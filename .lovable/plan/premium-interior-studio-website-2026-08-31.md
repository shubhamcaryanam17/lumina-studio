# Premium Interior Studio Website

## Overview
Build a complete, responsive one-page website for **Interior Studio** that feels like a real international luxury architecture practice: cinematic imagery, warm editorial styling, spacious layouts, refined motion, and conversion-focused calls to action.

## Experience
- Transparent sticky navigation over the hero, transitioning to a warm glass surface on scroll; desktop active-section state and full-screen mobile menu.
- Full-screen photographic hero with layered editorial typography, two CTAs, animated scroll cue, and floating studio statistics.
- Asymmetric About section, numbered editorial Services list with contextual image preview, and alternating cinematic project stories with category filters.
- Dark contrast section for differentiators, animated horizontal process timeline, and an interactive draggable Before/After transformation.
- Count-up statistics, auto-advancing testimonial slider, masonry gallery with keyboard-accessible lightbox, editorial philosophy and journal sections.
- Full-bleed closing CTA, validated floating-label enquiry form with success state, and a comprehensive premium footer.

## Visual System
- Exact requested palette: ivory, beige, charcoal, bronze, champagne, and white expressed as semantic OKLCH design tokens.
- Cormorant Garamond for display typography and Manrope for body/UI text.
- restrained radii, thin rules, strong whitespace, cinematic crops, and no generic card-grid treatment.
- Generated cohesive luxury interior photography stored locally and optimized with responsive sizing and lazy loading.

## Motion & Accessibility
- Subtle reveal, mask, parallax, hover zoom, underline, magnetic-button, count-up, timeline-progress, and hero image movement.
- Motion is reduced or disabled with `prefers-reduced-motion`; all interactions remain keyboard accessible.
- Semantic landmarks, one H1, labeled form controls, visible focus states, descriptive image alt text, and dialog semantics for the gallery.

## Technical Details
- Implement within the existing TanStack Start index route and global Tailwind v4 token system.
- Use React state/effects and browser observers for interactions without adding unnecessary runtime dependencies.
- Add route-specific title, description, Open Graph metadata, canonical semantic sections, and image dimensions to avoid layout shift.
- Validate the final page at desktop and mobile widths, including menu, project filters, comparison slider, testimonial controls, gallery lightbox, and contact form.

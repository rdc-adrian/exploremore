# ExploreMore Trip Creation Wireframe Flow

## User Flow Overview

```
Dashboard → New Trip → Destination → Dates → Preferences → Trip Ready → Overview
```

---

## Screen Sequence

### Screen 1: Dashboard (Main Entry Point)

**Path:** `app/(tabs)/index.tsx`

**Components:**

- Greeting header with time-based message
- Current trip card with:
  - Trip title & dates
  - Progress bar (percentage)
  - "Continue Planning" CTA (or "Start a New Trip" if no active trip)
- Quick action buttons (3 cols):
  - "+ New Trip"
  - "Plan Today"
  - "Explore"
- Upcoming trips section (list of cards)
- Inspiration section (horizontal scroll)
- Bottom navigation (tabs with icons)

**Design Notes:**

- Mobile-first, full-screen scroll
- Safe area padding (notch accommodation)
- Primary action: CTA in trip card
- Color scheme: Blue primary (#2b6ef6), light grays for UI

---

### Screen 2: Create Trip Intro

**Path:** `app/trip/create.tsx`
**Step Indicator:** 1 of 5

**Components:**

- Header with:
  - Step count badge (1 of 5)
  - Close button (back)
- Hero illustration placeholder (180px height box)
- Content section:
  - Large title: "Start Planning Your Trip"
  - Subtitle explaining the flow
  - Visual step overview (3 items: Destination → Dates → Preferences)
- Primary CTA: "Start Planning" (blue button, full width)

**Design Notes:**

- No header/navigation bar (modal-like experience)
- Focuses user on one primary action
- Steps overview shows progress structure
- Clean hierarchy: image → title → subtitle → steps → CTA

---

### Screen 3: Select Destination

**Path:** `app/trip/select-destination.tsx`
**Step Indicator:** 2 of 5

**Components:**

- Header (step badge + close)
- Title: "Where are you going?"
- Search input (placeholder: "Search city or country...")
- Popular destinations section:
  - Cards with:
    - Image placeholder (50×50)
    - Destination name (bold)
    - Country (gray, small)
    - Checkmark when selected
- Saved destinations section (collapsible/always shown if exists):
  - Same card layout as popular
- Primary CTA: "Continue" button (disabled until selection made)

**Behavior:**

- Single selection only
- Visual feedback on selected card (border color, background tint)
- CTA disables if no selection

**Design Notes:**

- Search persists but doesn't filter in wireframe
- Cards are tappable to select
- Clear affordance for selected state (checkmark + color change)

---

### Screen 4: Select Dates

**Path:** `app/trip/select-dates.tsx`
**Step Indicator:** 3 of 5

**Components:**

- Header (step badge + close)
- Title: "When are you traveling?"
- Calendar placeholder (280px height box with dashed border)
- Date range summary card with:
  - Two date buttons (Check-in / Check-out)
  - Visual separation
  - Duration summary (X nights)
- Flexible dates toggle card:
  - Label: "Flexible dates?"
  - Description: "Add ±1 day flexibility..."
  - Switch control
- Primary CTA: "Continue"

**Behavior:**

- Calendar is a placeholder (actual date picker can be integrated)
- Tapping date buttons would open date picker
- Nights auto-calculate from selected range
- Toggle switch shows on/off state

**Design Notes:**

- Date range visible at all times for confirmation
- Flexible dates as optional/secondary feature
- Visual hierarchy: calendar > dates > toggle

---

### Screen 5: Trip Preferences

**Path:** `app/trip/preferences.tsx`
**Step Indicator:** 4 of 5

**Components:**

- Header (step badge + close)
- Title: "Your Preferences"
- Travel pace selector (radio list, 3 options):
  - Relaxed → "Plenty of downtime & exploration"
  - Balanced → "Mix of activities & relaxation"
  - Fast → "Packed itinerary..."
  - Each has radio button + description
  - Selected state: border color + background tint
- Interests multi-select (tag grid, 6 tags):
  - Food & Dining
  - Culture & History
  - Nature
  - Shopping
  - Nightlife
  - Adventure
  - Selected tags change color (filled state)
- Budget level selector (radio list, 3 options):
  - Budget → "$"
  - Moderate → "$$"
  - Luxury → "$$$"
  - Same styling as pace
- Primary CTA: "Generate Trip"

**Behavior:**

- All preferences have defaults
- Multiple interests can be selected
- Radio buttons ensure single selection for pace & budget
- CTA is always enabled

**Design Notes:**

- Grouped by preference type (section headers)
- Clear visual differentiation: radio cards vs. tag grid
- Hints/descriptions help user understand each option

---

### Screen 6: Trip Ready Confirmation

**Path:** `app/trip/create/done.tsx`
**Step Indicator:** 5 of 5

**Components:**

- Header (step badge)
- Success icon (circular badge with checkmark, 80×80, blue bg)
- Title: "Your Trip is Ready!"
- Subtitle: "We've created a personalized itinerary..."
- Summary card with:
  - Image placeholder (140px)
  - Destination name (bold, large)
  - Date range (small, gray)
  - Meta grid (3 cols: Duration / Pace / Budget)
  - Interest tags (horizontal list, tagged/highlighted)
- Primary CTA: "View Trip Overview" (blue)
- Secondary CTA: "Back to Dashboard" (outlined)

**Behavior:**

- "View Trip Overview" navigates to `/trip/123/overview`
- "Back to Dashboard" returns to main app
- All trip info is read-only summary

**Design Notes:**

- Celebratory design: success icon, confirmation messaging
- Summary card emphasizes what was created
- Dual CTA: primary action (continue to trip) vs. secondary (return home)
- Clean visual conclusion to onboarding flow

---

## Design Guidelines Applied

✓ **Mobile-first:** All screens designed for 375–430px width  
✓ **One primary action per screen:** Clear CTA hierarchy  
✓ **Clear hierarchy & spacing:** Proper margins, readable typography  
✓ **Minimal styling:** Wireframe focused (boxes, borders, placeholders)  
✓ **Notch-safe:** Safe area padding on all screens  
✓ **Low-fidelity:** Placeholder illustrations/images, no complex graphics

---

## Color Palette (Used)

- **Primary:** #2b6ef6 (Blue)
- **Primary Light:** #eef4ff (Pale blue background)
- **Background:** #fff (White)
- **Surface:** #f6f7fb (Light gray)
- **Border:** #e3e6ee (Subtle gray)
- **Text:** #000 (Black)
- **Text Secondary:** #666 (Medium gray)

---

## Navigation Bridge

**From Dashboard to Trip Flow:**

```
Dashboard "/trip/create"
  ↓
Create Intro "/trip/create"
  ↓
Select Destination "/trip/select-destination"
  ↓
Select Dates "/trip/select-dates"
  ↓
Preferences "/trip/preferences"
  ↓
Trip Ready "/trip/create/done"
  ↓
Trip Overview "/trip/123/overview" OR back to Dashboard "(tabs)/index"
```

**Close/Back Button:**

- All screens (except done) have close button → navigates back via `router.back()`
- "Back to Dashboard" on done screen → `(tabs)/index`

---

## Implementation Notes

- All screens use `useSafeAreaInsets()` for notch accommodation
- Common spacing uses centralized `spacing` constants
- Colors reference shared `colors` object
- Placeholder components are ready for real content/APIs
- State management is local to each screen (can be lifted to context/store later)
- Disabled state on CTAs shows clear affordance (opacity + color change)

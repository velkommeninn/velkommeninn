# Velkommen Inn — Official Website

This is the official website for **Velkommen Inn**, a hotel in Clifton, TX (the Norwegian Capital of Texas).

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

---

## How to Update Website Content and Photos

All website content is centralized in `src/data/` files. You do **not** need to dig through page files to update text, phone numbers, addresses, or photos. Just edit the relevant file and rebuild.

### 1. Hotel Details (phone, address, email, check-in/out times)

Edit: **`src/data/site.ts`**

This file contains all core hotel facts:
- `HOTEL_PHONE` and `HOTEL_PHONE_HREF` — phone number (update both together)
- `HOTEL_EMAIL` — hotel email address
- `HOTEL_ADDRESS` — street address
- `CHECK_IN` / `CHECK_OUT` — check-in and check-out times
- `BREAKFAST_HOURS` — breakfast hours
- `BOOKING_URL` — the reservation system link
- `BOOK_DIRECT_MESSAGE` — the book-direct notice shown site-wide

### 2. Navigation Links

Edit: **`src/data/navigation.ts`**

Add, remove, or reorder nav links. Each entry has a `label` (displayed text) and `href` (URL path).

The `/official-booking-notice` link is intentionally hidden from the desktop header nav — it's accessible via the footer and direct URL.

### 3. Room Types

Edit: **`src/data/rooms.ts`**

Update room names, descriptions, badges (e.g. "ADA Accessible"), and photo paths. The `imageSrc` field points to a file in `public/images/rooms/`.

### 4. Amenities

Edit: **`src/data/amenities.ts`**

Three exports:
- `amenityGroups` — amenities shown on the `/amenities` page, organized by category
- `businessTravelFeatures` — features shown on the `/business-travel` page
- `groupAmenities` — features shown on the `/group-stays` page

### 5. Local Attractions

Edit: **`src/data/attractions.ts`**

Two exports:
- `attractionGroups` — all 17 attractions on the `/local-attractions` page, in 5 categories
- `homepageAttractionPreview` — a subset of 6 for any homepage preview

Each `AttractionPlace` has: `name`, `description`, `distance` (optional), `note` (optional).

### 6. FAQs

Edit: **`src/data/faqs.ts`**

Each FAQ has a `question` and `answer`. These are used on the `/faq` page and rendered with FAQPage schema markup.

### 7. Policies

Edit: **`src/data/policies.ts`**

- `petFees` — the pet fee schedule table
- `petRules` — bullet list of pet rules
- `petPolicySummary` — short summary items shown on the `/policies` page

### 8. SEO (page titles, descriptions, Open Graph)

Edit: **`src/data/seo.ts`**

Each page has its own entry with `title`, `description`, `canonical`, and `openGraph` data. Update these when you want to change what shows up in Google search results or social sharing previews.

### 9. Photos

Photos are organized in **`public/images/`** by category:

```
public/images/
  rooms/        — room photos (linked in src/data/rooms.ts)
  exterior/     — building exterior
  pool/         — pool area
  breakfast/    — breakfast area
  lobby/        — lobby and interior
  amenities/    — general amenity photos
  fitness/      — fitness center
  attractions/  — local attraction photos
  placeholder.svg — fallback shown when a photo is missing
```

**To add or replace a photo:**
1. Add the file to the appropriate subfolder under `public/images/`
2. If it's a room photo, update the `imageSrc` field in `src/data/rooms.ts`
3. If it's used in other components, update the relevant entry in `src/data/images.ts`

Photos must be web-optimized (JPEG or WebP recommended). The `HotelImage` component (`src/components/HotelImage.tsx`) will automatically show the placeholder if a photo file is missing.

---

## Development

```bash
npm run dev       # Start local dev server at http://localhost:3000
npm run build     # Production build (run this after changes to check for errors)
npm run lint      # Check for code issues
```

## Project Structure

```
src/
  app/            — Page routes (one folder per URL)
  components/     — Reusable UI components
  data/           — Editable content files (START HERE for content updates)
  lib/            — Utilities, schema helpers, and constants re-exports
public/
  images/         — Hotel photos organized by category
```

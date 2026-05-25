# Task Management Dashboard - Lab Activity

A sophisticated task management application demonstrating advanced Next.js 15+ features including parallel routing, intercepting routes, streaming with Suspense, error handling, and dynamic route parameters as Promises.

## Project Overview

This project implements a fully-featured dashboard with the following key technologies:

- **Framework:** Next.js 16.2.6 (compatible with 15+ features)
- **UI Framework:** React 19.2.4
- **Styling:** Tailwind CSS 4
- **TypeScript:** Full type safety throughout

## 🎯 Key Features Implemented

### 1. **Parallel Routing** (`/dashboard`)
- Dashboard route with two parallel slots: `@team` and `@analytics`
- Both slots load independently without blocking each other
- Team members display alongside analytics data
- Located at: `app/dashboard/`
  - `@team/` - Team members slot with error boundary
  - `@analytics/` - Analytics metrics slot with loading skeleton

### 2. **Streaming with Suspense**
- Analytics slot includes a 3-second simulated delay
- `loading.tsx` provides skeleton UI during loading
- Smooth loading state transitions with animated placeholders
- File: `app/dashboard/@analytics/loading.tsx`

### 3. **Intercepting Routes** (`/tasks`)
- Soft navigation modal for task details at `(.).[id]`
- Hard refresh (F5) shows full-page view at `[id]`
- Modal overlay with backdrop and close button
- Clicking tasks opens modal, preventing page navigation
- Files:
  - `app/tasks/page.tsx` - Task list
  - `app/tasks/(.).[id]/page.tsx` - Intercepted modal route
  - `app/tasks/[id]/page.tsx` - Full-page view

### 4. **Error Handling**
- Error boundary implemented in Team slot
- `error.tsx` catches component errors and displays reset button
- Simulated error can be triggered by uncommenting in `@team/page.tsx`
- File: `app/dashboard/@team/error.tsx`

### 5. **Route Resilience** (`/tasks/[id]`)
- `not-found.tsx` handles invalid task IDs
- Triggered automatically when fetching returns null
- `notFound()` function used for manual triggering
- User-friendly 404 page with back link
- File: `app/tasks/[id]/not-found.tsx`

### 6. **Dynamic Route Params as Promises** (Next.js 15 Compatibility)
- All dynamic routes properly handle params as Promises
- Client Components: Use `React.use(params)` to unwrap
- Server Components: Use `await params` (automatic unwrapping)
- Examples:
  - `app/tasks/(.).[id]/page.tsx` - Client component using `use()`
  - `app/tasks/[id]/page.tsx` - Server component using `use()`

## 📂 Project Structure

```
app/
├── layout.tsx                    # Root layout with metadata
├── page.tsx                      # Home page with feature showcase
├── globals.css                   # Global Tailwind styles
├── about/
│   └── page.tsx                  # About page
├── dashboard/
│   ├── layout.tsx                # Dashboard layout with parallel slots
│   ├── page.tsx                  # Dashboard main content
│   ├── @team/
│   │   ├── layout.tsx
│   │   ├── page.tsx             # Team members display
│   │   └── error.tsx            # Error boundary
│   └── @analytics/
│       ├── layout.tsx
│       ├── page.tsx             # Analytics metrics
│       └── loading.tsx          # 3-second delay skeleton
├── tasks/
│   ├── page.tsx                 # All tasks list
│   ├── (.).[id]/
│   │   ├── layout.tsx           # Modal container
│   │   └── page.tsx             # Intercepted modal route
│   └── [id]/
│       ├── page.tsx             # Full-page task detail
│       └── not-found.tsx        # 404 fallback
└── lib/
    └── mockData.ts              # Mock data and async fetchers
```

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 How to Test Features

### 1. **Test Parallel Routing**
- Navigate to `/dashboard`
- Observe both @team and @analytics slots load independently
- Team section loads in ~1 second
- Analytics loads after 3-second delay (showing skeleton)

### 2. **Test Streaming & Loading States**
- On `/dashboard`, watch the analytics skeleton appear
- After 3 seconds, real data replaces skeleton
- Demonstrates smooth loading state transitions

### 3. **Test Intercepting Routes**
- Go to `/tasks`
- Click any task card → Opens modal overlay (soft navigation)
- Press Escape or click × → Returns to list
- Press F5 (hard refresh) while in modal → Shows full-page view
- Direct link `/tasks/1` → Shows full-page view

### 4. **Test Error Handling**
- Navigate to `/dashboard`
- In `app/dashboard/@team/page.tsx`, change `shouldError` to `true`
- Restart dev server
- Team slot shows error message with "Try Again" button
- Click "Try Again" → Resets error state

### 5. **Test Route Resilience (not-found)**
- Navigate to `/tasks/999` (invalid ID)
- Custom 404 page appears with "Back to Tasks" link
- Mock data only has IDs 1-5

### 6. **Test Dynamic Params as Promises**
- Navigate to `/tasks/2` (full page)
- Params correctly unwrapped using `use()` in page
- No console errors about Promise params

## 📊 Mock Data

The application includes mock data for:
- **5 Tasks** with various statuses (pending, in-progress, completed)
- **5 Team Members** with roles and avatars
- **Analytics** with task statistics and completion rates

All data is seeded in `app/lib/mockData.ts` with simulated async fetchers that include realistic delays.

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Responsive Design** with mobile-first approach
- **Color-coded Status Badges** for tasks and priorities
- **Loading Animations** with pulse effects for skeletons
- **Interactive Hover States** for better UX

## 🔧 Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Key Implementation Details

### Parallel Slots Layout
The dashboard layout accepts props for each slot:
```tsx
interface DashboardLayoutProps {
  children: ReactNode;     // Default route segment
  team: ReactNode;         // @team slot
  analytics: ReactNode;    // @analytics slot
}
```

### Intercepting Modal
Uses Next.js route interception pattern `(.).[id]`:
- `.` - Match one segment level
- `.` prefix - Intercept navigation to this route

### Error Boundary Reset
Error components receive `reset` function to recover:
```tsx
export default function TeamError({ error, reset }: { error: Error; reset: () => void })
```

### Promise-based Params
Proper handling across component types:
```tsx
// Server Component - use await
const { id } = await params;

// Client Component - use React.use()
const { id } = use(params);
```

## 🧪 Testing Checklist

- [ ] Dashboard loads with parallel slots
- [ ] Analytics shows 3-second loading skeleton
- [ ] Team error boundary catches and shows errors
- [ ] Modal opens when clicking task (soft navigation)
- [ ] Modal closes with × or Escape
- [ ] Hard refresh shows full-page view
- [ ] Invalid task ID shows 404 page
- [ ] All links navigate correctly
- [ ] Responsive design works on mobile
- [ ] No console errors about Promise params

## 📚 Learning Resources

- [Next.js Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- [Next.js Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
- [React Suspense & Streaming](https://react.dev/reference/react/Suspense)
- [Next.js Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
- [Not Found Handling](https://nextjs.org/docs/app/api-reference/functions/not-found)

## 🚀 Deployment

The application is ready for deployment on Vercel or any Node.js hosting:

```bash
npm run build
npm start
```

Ensure environment variables are configured for your hosting platform.

## 📄 License

This is a lab activity project for educational purposes.

---

**Created:** May 2026
**Last Updated:** May 25, 2026

# SecureDash - Next.js Auth System

## Tech Stack
- Next.js (App Router)
- TypeScript & TailwindCSS
- Framer Motion (Animations)
- Next-Themes (Dark Mode)
- Jose (JWT Authentication)

## Features
- Protected Dashboard with Middleware
- Cookie-based SSR Authentication
- Responsive Sidebar with Animations
- Dark/Light Mode Support


🚀 Professional Dashboard & Auth System
A high-performance, full-stack application built with Next.js 15 (App Router), featuring robust authentication, database persistence, and smooth user experiences.

🛠 Tech Stack
Framework: Next.js 15 (App Router)

Language: TypeScript

Database: MongoDB (via Mongoose)

Auth: Bcrypt.js (Password Hashing) & Custom Cookie-based Sessions

State Management: Zustand (with Persistence middleware)

Styling: Tailwind CSS

Animations: Framer Motion

UI Components: Sonner (Toast Notifications)

Font: Geist (Next.js Google Fonts)

🏗 Key Features
Full-Stack Auth: Secure registration and login flow using password hashing.

Middleware Protection: Routes are guarded using Next.js Middleware to ensure secure user authentication.

Persistent Data: Profile management that syncs directly with MongoDB, ensuring data integrity after page refreshes.

State Synchronization: Automatic UI updates via Zustand and client-side hydration handling.

Advanced UI: Dark mode support, smooth page transitions, and loading states powered by Framer Motion.

Error Handling: Centralized notification system using Sonner for a seamless user experience.

📂 Project Architecture
The project follows a clean architectural pattern:

actions/: Contains server-side logic (Server Actions) for database and auth operations.

models/: Mongoose schemas defining the data structure.

store/: Zustand state management for global client-side data.

middleware.ts: Security layer controlling access to protected routes.

lib/: Configuration files (e.g., MongoDB connection).

🚀 Getting Started
Clone the repository.

Install dependencies: npm install

Set up your .env.local file with the following variables:

مقتطف الرمز
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_super_secret_string
Run the development server: npm run dev
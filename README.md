🚀 Full-Stack Authentication & Dashboard System
This project is a high-performance, secure, and modern web application built with Next.js 15 (App Router). It features a robust authentication system and a responsive, professional dashboard designed with a full-stack development mindset.

🎥 Project Walkthrough
Please watch this 2.5-minute video to see the project in action. The video demonstrates the smooth transitions, loading states, and the overall user experience:
👉 Watch the Project Demo

🛠 Tech Stack
I approached this as a Full-Stack Developer, integrating both frontend interactivity and server-side logic for optimal performance:

Framework: Next.js 15 (App Router)

Styling: TailwindCSS

Authentication: Cookie-based Auth (with Middleware protection)

State Management: Zustand (for global user state)

Form Validation: Zod + React Hook Form

Database: MongoDB

Animations: Framer Motion (for fluid page transitions and interactive elements)

Language: TypeScript (for full type safety)

✨ Key Features
Secure Authentication: Server-side login logic using Server Actions and secure HTTP-only cookies.

Middleware Protection: Intelligent route protection that validates authentication state on the server before rendering pages.

Responsive UI: A clean, mobile-first design that adapts to all screen sizes.

Dark Mode Support: A seamless theme switcher for enhanced user comfort.

Clean Architecture: Built using modular, reusable components and a clear separation of logic (Separation of Concerns).

Advanced UX: Fluid animations and clear loading states to provide immediate feedback.

📂 Folder Structure
The project follows clean architecture principles to ensure scalability:

Plaintext
/src
/app # App Router (Pages & Layouts)
/actions # Server Actions (Backend Logic)
/components # Reusable UI Components
/lib # Utilities (Database, Helpers)
/store # Zustand Stores
/types # TypeScript Definitions
💡 Why a Full-Stack Approach?
Building the backend logic (Server Actions + MongoDB) alongside the frontend allowed me to:

Maintain Full Control: Ensuring sensitive authentication logic is handled server-side to prevent client-side tampering.

Optimize Performance: Reducing unnecessary API round-trips by executing business logic directly on the server.

Data Integrity: Managing user sessions and preferences with a unified data flow between the client and the database.

🚀 Getting Started
Clone the repository.

Install dependencies:

Bash
npm install
Configure your environment variables in .env.local:

Plaintext
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start the development server:

Bash
npm run dev
This project was developed as a Technical Assessment to showcase professional full-stack engineering practices, focusing on clean code, security, and a superior user experience.

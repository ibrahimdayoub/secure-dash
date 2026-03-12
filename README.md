# 🚀 Secure Authentication & Dashboard System

This project is a **high-performance**, **secure**, and modern web application built with **Next.js 16** (App Router). It features a robust authentication system and a **responsive**, professional **dashboard**, showcasing a deep understanding of modern front-end architecture and **UI/UX** best practices.

---

> [!IMPORTANT]
> **🎥 Project Showcase:** Curious about the seamless transitions and refined UX? I highly recommend watching this 2-minute **[Demo Video](https://youtu.be/ghEIyoGWn_M)**. It provides a concise walkthrough of the authentication flow, protected routes, and the fluid animations that bring this dashboard to life.

---

## 🛠 Tech Stack

* **Language:** TypeScript (for full type safety)
* **Framework:** Next.js 16 (App Router)
* **Styling:** TailwindCSS
* **Animations:** Framer Motion (for fluid page transitions and interactive elements)
* **Authentication:** Cookie-based Auth (with Middleware protection)
* **State Management:** Zustand (for global user state)
* **Form Validation:** Zod + React Hook Form
* **Database:** MongoDB
  
---

## ✨ Features
* **Secure Authentication:** Server-side login logic using Server Actions and secure HTTP-only cookies.
* **Middleware Protection:** Intelligent route protection that validates authentication state on the server before rendering pages.
* **Responsive UI:** A clean, mobile-first design that adapts to all screen sizes.
* **Dark Mode Support:** A seamless theme switcher for enhanced user comfort.
* **Clean Architecture:** Built using modular, reusable components and a clear separation of logic (Separation of Concerns).
* **Advanced UX:** Fluid animations and clear loading states to provide immediate feedback.

---

## 📂 Project Structure
The project follows clean architecture principles to ensure scalability:

```text
├── /app            # App Router (Pages, Layouts & Route Handlers)
├── /actions        # Server Actions (Backend Logic & Server-side mutations)
├── /components     # Reusable, modular UI components (Presentational Layer)
├── /lib            # Shared utilities (DB connection, Auth helpers, Client configs)
├── /models         # Database Schemas & Data Structures (Mongoose/Prisma models)
├── /store          # Global state management using Zustand
├── /types          # TypeScript interfaces and type definitions
└── /middleware.ts  # Server-side route protection and authentication check
```

---

## 💡 Why a Full-Stack Approach?
Building the backend logic (Server Actions + MongoDB) alongside the frontend allowed me to:

* **Maintain Full Control:** Ensuring sensitive authentication logic is handled server-side to prevent client-side tampering.
* **Optimize Performance:** Reducing unnecessary API round-trips by executing business logic directly on the server.
* **Data Integrity:** Managing user sessions and preferences with a unified data flow between the client and the database.

---

## 🚦 Getting Started

**1. Prerequisites**
* Node.js & npm/yarn installed.

**2. Installation**
* Clone the repository and install dependencies:

```
git clone https://github.com/ibrahimdayoub/secure-dash.git
cd secure-dash
npm install
```

**3. Environment Variables**
* Create a .env file in the root directory and add:

```
NODE_ENV=development
MONGODB_URI=your_db_uri #e.g: mongodb://localhost:27017/secure-dash (Localhost)
```

**4. Run the App**

```
 npm run dev
```

---

This project fully implements secure cookie-based auth, SSR-protected routes, and responsive design with premium UX; please check out the 2-minute [demo](https://youtu.be/ghEIyoGWn_M) to see the professional architecture and animations in action, hope you enjoy the watch, and thank you!

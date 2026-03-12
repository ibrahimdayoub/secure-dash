import ThemeToggle from "@/components/ui/ThemeToggle";
import HomeLinks from '@/components/ui/HomeLinks';
import HomeTags from '@/components/ui/HomeTags';

export default function HomePage() {
  return (
    <div className="relative min-h-screen p-5 flex flex-col items-center justify-center bg-white dark:bg-[#0f172a] overflow-hidden transition-colors duration-300">
      {/* Blobs Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left - Orange Glow */}
        <div className="absolute -top-[10%] -left-[10%] w-160 h-160 bg-orange-500/20 rounded-full blur-[120px] animate-blob" />
        {/* Top Right - Soft Purple Glow */}
        <div className="absolute top-[10%] -right-[5%] w-140 h-140 bg-purple-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        {/* Bottom Center - Deep Indigo/Pink Glow */}
        <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-200 h-120 bg-indigo-500/10 rounded-full blur-[130px] animate-blob animation-delay-4000" />
      </div>
      {/* Content */}
      <div className="relative max-w-5xl text-center space-y-10">
        {/* Intro */}
        <div className="space-y-5">
          <ThemeToggle />
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter">
            <span className="text-slate-800 dark:text-white">Secure</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">{" "} Dash</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Authentication refined. Modern, secure, and built with precision to power your next big idea.
          </p>
        </div>
        {/* Feature Tags */}
        <HomeTags />
        {/* Action Buttons */}
        <HomeLinks />
        {/* Footer Hint */}
        <div className="pt-10 text-slate-600 dark:text-slate-400 text-sm font-bold uppercase tracking-widest">
          Next.js (App Router) • TailwindCSS • Zod • Server Actions • Zustand • MongoDB
        </div>
      </div>
    </div >
  );
}
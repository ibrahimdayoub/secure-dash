import SettingRows from '@/components/ui/SettingRows';

export const metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <div className="max-w-5xl p-7.5 space-y-10 min-h-screen">
      {/* Header */}
      <p className="lg:text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
        <span className='lg:text-2xl font-bold'>M</span>anage your account security,<br />
        Personal preferences, and system notification settings from here.
      </p>
      {/* Settings */}
      <SettingRows />
    </div>
  )
}

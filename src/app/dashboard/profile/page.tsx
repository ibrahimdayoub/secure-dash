import UpdateProfileForm from '@/components/forms/UpdateProfileForm';

export const metadata = { title: "Profile" };

export default function ProfilePage() {
  return (
    <div className="max-w-3xl p-7.5 space-y-10 min-h-screen">
      {/* Header */}
      <p className="lg:text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
        <span className='lg:text-2xl font-bold'>K</span>eep your personal profile <br />
        Updated to ensure your account information and preferences are always accurate.
      </p>
      {/* Form */}
      <UpdateProfileForm />
    </div>
  )
}
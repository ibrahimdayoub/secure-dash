'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, User, AtSign } from 'lucide-react';
import { updateCurrentUser } from '@/actions/user';
import { useAuthStore } from '@/store/useAuthStore';
import { cn } from '@/lib/utils';

const updateProfileSchema = z.object({
    name: z
        .string()
        .min(3, "Name must be at least 3 characters"),
    username: z.string()
        .min(3, "Username must be at least 3 characters")
        .regex(/^[a-z0-9_-]+$/, "Only small letters, numbers, - and _ allowed"),
});

type UpdateProfileFormValues = z.infer<typeof updateProfileSchema>;

export default function UpdateProfileForm() {
    const { user, setUser } = useAuthStore()
    const [isPending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdateProfileFormValues>({
        resolver: zodResolver(updateProfileSchema),
        mode: "onBlur",
        values: {
            name: user?.name || "",
            username: user?.username || "",
        }
    });

    const onSubmit = (data: any) => {
        startTransition(async () => {
            const res = await updateCurrentUser(data);

            if (res.success && res.user) {
                setUser(res.user);
                toast.success("Profile has been updated succesfully");
            } else {
                setUser(null);
                toast.error(res.error || "An unknown error occurred");
            }
        });
    };

    if (!user) {
        return null;
    }

    return (
        <div className="p-3.5 py-5 space-y-5 lg:space-y-7.5 bg-slate-200/25 dark:bg-slate-800/25 border border-slate-200 dark:border-slate-800 rounded-xl transition-all">
            {/* Profile */}
            <div className="flex items-center gap-3.5 cursor-pointer">
                <div className="w-15 h-15 shrink-0 flex items-center justify-center bg-linear-to-br from-purple-600 to-orange-600 text-white text-lg font-bold rounded-lg shadow-lg">
                    {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{user.name}</h3>
                    <p className="text-orange-600 dark:text-purple-600 font-medium">{user.email}</p>
                </div>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                    <label className="block text-xs lg:text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest ml-1.25">
                        Full Name
                    </label>
                    <div className="relative flex items-center">
                        <User className="absolute left-2.5 text-slate-500" size={20} />
                        <input
                            {...register("name")}
                            placeholder="John Doe"
                            className={cn(
                                "w-full ps-10 pe-3.5 py-2.5 text-sm rounded-xl border outline-none transition-all bg-slate-100 dark:bg-slate-800/50 text-slate-800 dark:text-white focus:ring-2",
                                errors.name
                                    ? "border-red-500 focus:ring-transparent"
                                    : "border-slate-200 dark:border-slate-800 focus:ring-purple-600/25 focus:border-purple-600"
                            )}
                        />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message as string}</p>}
                </div>
                {/* User Name */}
                <div className="space-y-1.5">
                    <label className="block text-xs lg:text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest ml-1.25">
                        User Name
                    </label>
                    <div className="relative flex items-center">
                        <AtSign className="absolute left-2.5 text-slate-500" size={20} />
                        <input
                            {...register("username")}
                            placeholder="johndoe"
                            className={cn(
                                "w-full ps-10 pe-3.5 py-2.5 text-sm rounded-xl border outline-none transition-all bg-slate-100 dark:bg-slate-800/50 text-slate-800 dark:text-white focus:ring-2",
                                errors.username
                                    ? "border-red-500 focus:ring-transparent"
                                    : "border-slate-200 dark:border-slate-800 focus:ring-orange-600/25 focus:border-orange-600"
                            )}
                        />
                    </div>
                    {errors.username && <p className="text-red-500 text-xs mt-1 ml-1">{errors.username.message as string}</p>}
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isPending}
                    className={cn(
                        "w-full md:w-auto px-7.5 py-2.5 flex items-center justify-center gap-2.5 text-white font-bold text-lg tracking-wider rounded-xl shadow-xl shadow-purple-600/25 transform transition-all active:scale-95 group",
                        isPending
                            ? "bg-purple-600 dark:bg-purple-400 cursor-not-allowed"
                            : "bg-linear-to-r from-purple-600 to-orange-600 hover:shadow-purple-600/50 cursor-pointer"
                    )}
                >
                    {
                        isPending ? (
                            <>
                                <Loader2 className="animate-spin" size={25} />
                                Saving...
                            </>
                        ) : (
                            "Save Changes"
                        )
                    }
                </button>
            </form>
        </div>
    )
}
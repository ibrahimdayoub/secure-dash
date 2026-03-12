'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast'
import { Bell, Database, ShieldCheck, User, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

type SettingOption = {
    id: number;
    key: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    iconBgColor: string;
};

type SettingRowProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    iconBgColor: string;
    enabled: boolean;
    onChange: (val: boolean) => void;
};

type SwitchProps = {
    enabled: boolean;
    onChange: (val: boolean) => void;
}

export default function SettingRows() {
    const options: SettingOption[] = [
        { id: 1, key: 'notifications', icon: <Bell size={20} />, title: "Notifications", description: "Receive real-time updates via email", iconBgColor: "bg-purple-100 dark:bg-purple-800/20 text-purple-600" },
        { id: 2, key: 'publicProfile', icon: <User size={20} />, title: "Public Profile", description: "Make your profile visible to others", iconBgColor: "bg-orange-100 dark:bg-orange-800/20 text-orange-600" },
        { id: 3, key: 'twoFactor', icon: <ShieldCheck size={20} />, title: "Two-Factor Authentication", description: "Add an extra layer of security", iconBgColor: "bg-blue-100 dark:bg-blue-800/20 text-blue-600" },
        { id: 4, key: 'autoSync', icon: <Database size={20} />, title: "Auto-Sync Data", description: "Sync your workspace automatically", iconBgColor: "bg-emerald-100 dark:bg-emerald-800/20 text-emerald-600" },
        { id: 5, key: 'powerSaver', icon: <Zap size={20} />, title: "Power Saver Mode", description: "Reduce performance to save battery", iconBgColor: "bg-amber-100 dark:bg-amber-800/20 text-amber-600" },
    ];

    const [settings, setSettings] = useState({
        notifications: true,
        publicProfile: false,
        twoFactor: true,
        autoSync: false,
        powerSaver: true,
    });

    const toggleSetting = (key: keyof typeof settings) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));

        setTimeout(() => {
            const settingName = options.find(o => o.key === key)?.title;
            toast.success(`${settingName} has been updated successfully`);
        }, 1000);
    };

    return (
        <div className="p-3.5 space-y-5 bg-slate-200/25 dark:bg-slate-800/25 border border-slate-200 dark:border-slate-800 rounded-xl transition-all">
            {options.map((option, index) => (
                <div key={option.id}>
                    <SettingRow
                        icon={option.icon}
                        title={option.title}
                        description={option.description}
                        iconBgColor={option.iconBgColor}
                        enabled={settings[Object.keys(settings)[index] as keyof typeof settings]}
                        onChange={() => toggleSetting(Object.keys(settings)[index] as keyof typeof settings)}
                    />
                    {index < options.length - 1 && <hr className="my-5 border-slate-100 dark:border-slate-800" />}
                </div>
            ))}
        </div>
    )
}

// Helpers ----------------------------------------------------------------------------------------

function SettingRow({ icon, title, description, iconBgColor, enabled, onChange }: SettingRowProps) {
    return (
        <div className="flex items-center justify-between group">
            <div className="flex items-center gap-3.5">
                <div className={cn("p-2.5 rounded-lg group-hover:scale-110 transition-all ", iconBgColor)}>
                    {icon}
                </div>
                <div className='space-y-1'>
                    <h3 className="font-bold text-slate-800 dark:text-white">{title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
                </div>
            </div>
            <Switch enabled={enabled} onChange={onChange} />
        </div>
    )
}

function Switch({ enabled, onChange }: SwitchProps) {
    return (
        <button
            onClick={() => onChange(!enabled)}
            className={cn(
                "w-14 h-8 px-1 flex items-center rounded-full transition-all relative cursor-pointer",
                enabled ? "bg-linear-to-r from-purple-600 to-orange-600" : "bg-slate-300 dark:bg-slate-600"
            )}
        >
            <div className={cn(
                "w-6 h-6 bg-white rounded-full shadow-md transition-all",
                enabled ? "translate-x-6" : "translate-x-0"
            )} />
        </button>
    )
}
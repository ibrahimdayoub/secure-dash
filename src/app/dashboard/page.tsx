import { Users, MessageSquare, ShieldCheck, MoreHorizontal, Activity, ArrowUpRight, ArrowDownRight, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
    const stats = [
        { id: 1, title: "Total Users", value: "2,543", icon: <Users size={20} />, change: "+12.5%", positive: true },
        { id: 2, title: "Active Chats", value: "128", icon: <MessageSquare size={20} />, change: "+5.2%", positive: true },
        { id: 3, title: "Security Score", value: "98%", icon: <ShieldCheck size={20} />, change: "-0.2%", positive: false },
        { id: 4, title: "System Load", value: "42%", icon: <Activity size={20} />, change: "+2.4%", positive: false },
    ];

    const recentUsers = [
        { id: 1, name: "Elena Rodriguez", role: "Admin", status: "Online", email: "elena.rod@techcorp.com" },
        { id: 2, name: "Marcus Thompson", role: "Editor", status: "Offline", email: "m.thompson@mediahub.io" },
        { id: 3, name: "Sarah Jenkins", role: "Support", status: "Online", email: "s.jenkins@helpline.net" }
    ];

    const systemLogs = [
        { id: 1, title: "UI/UX Design Prototypes Finalized", time: "Completed", type: 'success' },
        { id: 2, title: "Backend Infrastructure Setup", time: "Completed", type: 'success' },
        { id: 3, title: "API Integration & Documentation", time: "In Progress", type: 'info' },
        { id: 4, title: "Security Audit & Bug Fixing", time: "Pending", type: 'warning' },
        { id: 5, title: "Final Production Deployment", time: "Scheduled", type: 'info' },
    ];

    return (
        <div className="p-7.5 space-y-10 min-h-screen">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between lg:items-end gap-5">
                <p className="lg:text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className='lg:text-2xl font-bold'>W</span>elcome back,<br />
                    Here’s a quick snapshot of your system performance and recent activity.
                </p>
                <button
                    className="px-3.5 py-2.5 rounded-lg bg-linear-to-r from-purple-600 to-orange-600 text-white font-bold hover:shadow-lg hover:shadow-purple-600/25 transition-all cursor-pointer"
                >
                    Export Report
                </button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    stats.map((stat) => (
                        <div key={stat.id} className="p-3.5 space-y-5 bg-slate-200/25 dark:bg-slate-800/25 hover:bg-orange-600/10 hover:dark:bg-purple-600/10 border border-slate-200 dark:border-slate-800 rounded-xl transition-all group">
                            <div className="flex justify-between items-start">
                                <div className="p-2.5 bg-white dark:bg-[#0f172a] text-slate-500 rounded-lg shadow-sm">{stat.icon}</div>
                                <span className={cn("text-xs group-hover:text-sm font-bold flex items-center transition-all", stat.positive ? "text-green-500" : "text-red-500")}>
                                    {stat.positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                    {stat.change}
                                </span>
                            </div>
                            <div className='space-y-1'>
                                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.title}</p>
                                <p className="text-3xl font-black text-slate-800 dark:text-white">{stat.value}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* Users + Logs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5">
                {/* Users */}
                <div className="lg:col-span-2 p-5 space-y-5 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-xl">
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm lg:text-lg font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Recent Users</h3>
                        <button className="text-slate-500 hover:text-orange-600 hover:dark:text-purple-600 transition-all cursor-pointer">
                            <MoreHorizontal />
                        </button>
                    </div>
                    <div className="space-y-5">
                        {recentUsers.map((user) => (
                            <div
                                key={user.id}
                                className="p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 bg-slate-200/25 dark:bg-slate-800/25 hover:bg-orange-600/10 hover:dark:bg-purple-600/10 rounded-xl transition-all"
                            >
                                {/* User Info */}
                                <div className="flex items-center gap-2.5 group cursor-pointer">
                                    <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-linear-to-br from-purple-600 to-orange-600 text-white font-bold rounded-lg shadow-lg">
                                        {user.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className='space-y-1'>
                                        <p className="font-bold text-slate-800 dark:text-white group-hover:text-orange-600 group-hover:dark:text-purple-600 transition-all">{user.name}</p>
                                        <p className="text-xs text-slate-500 font-medium">{user.email}</p>
                                    </div>
                                </div>
                                {/* Role & Status*/}
                                <div className="w-full lg:w-auto lg:min-w-50 flex items-center justify-between gap-10">
                                    <span className="flex justify-center items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">
                                        <CheckCheck size={20} />{user.role}
                                    </span>
                                    <div className="flex items-center gap-2.5">
                                        <span className={cn(
                                            "w-2.5 h-2.5 rounded-full",
                                            user.status === "Online" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-slate-500"
                                        )} />
                                        <span className="text-sm font-bold text-slate-500">
                                            {user.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Logs */}
                <div className="p-5 space-y-5 bg-slate-200/25 dark:bg-slate-800/25 border border-slate-200 dark:border-slate-800 rounded-xl">
                    <h3 className="text-sm lg:text-lg font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">System Logs</h3>
                    <div className="space-y-5">
                        {systemLogs.map((log) => (
                            <div key={log.id} className="pl-3.5 flex gap-5 border-l-2 border-slate-200 dark:border-slate-800 relative">
                                <div className={cn(
                                    "absolute -left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-[#0f172a]",
                                    log.type === 'success' && "bg-green-500",
                                    log.type === 'warning' && "bg-amber-500",
                                    log.type === 'info' && "bg-purple-500"
                                )} />
                                <div className='space-y-1'>
                                    <p className="text-sm font-bold text-slate-800 dark:text-white">{log.title}</p>
                                    <p className="text-xs text-slate-500">{log.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
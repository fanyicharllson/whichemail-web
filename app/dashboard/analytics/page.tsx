"use client"

import StatCard from "@/components/dashboard/stat-card"
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp, Users, Shield, Zap } from "lucide-react"

const activityData = [
  { month: "Jan", accounts: 12, emails: 8 },
  { month: "Feb", accounts: 15, emails: 10 },
  { month: "Mar", accounts: 18, emails: 14 },
  { month: "Apr", accounts: 22, emails: 18 },
  { month: "May", accounts: 24, emails: 19 },
  { month: "Jun", accounts: 28, emails: 22 },
]

const categoryData = [
  { name: "Development", value: 8, fill: "#3b82f6" },
  { name: "Communication", value: 5, fill: "#8b5cf6" },
  { name: "Productivity", value: 6, fill: "#ec4899" },
  { name: "Design", value: 3, fill: "#f59e0b" },
  { name: "Other", value: 2, fill: "#10b981" },
]

const topEmailsData = [
  { email: "user@gmail.com", accounts: 12, usage: 95 },
  { email: "user@github.com", accounts: 6, usage: 72 },
  { email: "user@outlook.com", accounts: 4, usage: 54 },
  { email: "user@yahoo.com", accounts: 2, usage: 31 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 pb-24">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Analytics</h1>
        <p className="text-slate-400">Insights and statistics about your account management</p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Accounts"
          value="24"
          trend="up"
          change="+2 this month"
          icon={<Users size={24} className="text-blue-400" />}
        />
        <StatCard label="Security Score" value="94%" icon={<Shield size={24} className="text-blue-400" />} />
        <StatCard
          label="Unique Emails"
          value="18"
          trend="up"
          change="+1 new"
          icon={<TrendingUp size={24} className="text-blue-400" />}
        />
        <StatCard label="Active Categories" value="12" icon={<Zap size={24} className="text-blue-400" />} />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/20 transition-colors">
          <h2 className="text-lg font-bold text-slate-100 mb-6">Account Growth Trend</h2>
          <ChartContainer
            config={{
              accounts: { label: "Accounts", color: "#3b82f6" },
              emails: { label: "Emails", color: "#8b5cf6" },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="accounts"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="emails"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  dot={{ fill: "#8b5cf6", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        {/* Category Breakdown */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/20 transition-colors">
          <h2 className="text-lg font-bold text-slate-100 mb-6">Services by Category</h2>
          <ChartContainer config={{}} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {categoryData.map((category) => (
              <div key={category.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.fill }}></div>
                <span className="text-xs text-slate-400">
                  {category.name} ({category.value})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Emails Used */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/20 transition-colors">
        <h2 className="text-lg font-bold text-slate-100 mb-6">Top Used Emails</h2>
        <div className="space-y-4">
          {topEmailsData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-100 truncate">{item.email}</p>
                <p className="text-xs text-slate-400">{item.accounts} accounts using this email</p>
              </div>
              <div className="w-32">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-700/50 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-linear-to-r from-blue-500 to-blue-600 h-full transition-all duration-500"
                      style={{ width: `${item.usage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-slate-400 font-medium">{item.usage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-slate-100 mb-4">Security Insights</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-slate-300 text-sm">
            <span className="text-green-400 font-bold mt-1">✓</span>
            <span>Your security score is excellent. Keep up with regular password updates.</span>
          </li>
          <li className="flex items-start gap-3 text-slate-300 text-sm">
            <span className="text-yellow-400 font-bold mt-1">!</span>
            <span>1 account lacks a secure password. Consider enabling password protection.</span>
          </li>
          <li className="flex items-start gap-3 text-slate-300 text-sm">
            <span className="text-blue-400 font-bold mt-1">ℹ</span>
            <span>You're using 4 different email addresses. Consider consolidating for easier management.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

import type { ReactNode } from "react"

interface StatCardProps {
  label: string
  value: string | number
  change?: string
  icon: ReactNode
  trend?: "up" | "down"
}

export default function StatCard({ label, value, change, icon, trend }: StatCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium mb-2">{label}</p>
          <h3 className="text-3xl font-bold text-slate-100">{value}</h3>
          {change && (
            <p className={`text-xs font-medium mt-2 ${trend === "up" ? "text-green-400" : "text-red-400"}`}>
              {trend === "up" ? "↑" : "↓"} {change}
            </p>
          )}
        </div>
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-colors">
          {icon}
        </div>
      </div>
    </div>
  )
}

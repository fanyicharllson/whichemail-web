"use client"

import { useMemo } from "react"

interface PasswordStrengthIndicatorProps {
  password: string
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const { strength, label, color } = useMemo(() => {
    let score = 0

    if (password.length >= 8) score++
    if (password.length >= 12) score++
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++
    if (/\d/.test(password)) score++
    if (/[^a-zA-Z\d]/.test(password)) score++

    if (score <= 2) return { strength: 25, label: "Weak", color: "bg-red-500" }
    if (score <= 3) return { strength: 50, label: "Fair", color: "bg-amber-500" }
    if (score <= 4) return { strength: 75, label: "Good", color: "bg-blue-500" }
    return { strength: 100, label: "Strong", color: "bg-green-500" }
  }, [password])

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-600 dark:text-slate-400">Password Strength</span>
        <span
          className={`font-medium ${
            label === "Weak"
              ? "text-red-600"
              : label === "Fair"
                ? "text-amber-600"
                : label === "Good"
                  ? "text-blue-600"
                  : "text-green-600"
          }`}
        >
          {label}
        </span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
        <div className={`h-full ${color} transition-all duration-300`} style={{ width: `${strength}%` }}></div>
      </div>
    </div>
  )
}

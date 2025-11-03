"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface ChatMessageProps {
  message: {
    id: number
    type: "user" | "ai"
    content: string
  }
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (message.type === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-xs lg:max-w-md xl:max-w-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl px-4 py-3 shadow-lg shadow-blue-500/10">
          <p className="text-sm md:text-base">{message.content}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-start">
      <div className="max-w-xs lg:max-w-md xl:max-w-lg group">
        <div className="bg-slate-700/50 border border-slate-600 text-slate-100 rounded-2xl px-4 py-3">
          <p className="text-sm md:text-base">{message.content}</p>
        </div>
        <button
          onClick={handleCopy}
          className="mt-2 flex items-center gap-1 text-xs text-slate-400 hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-400" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Send, Search, Shield, MessageSquare } from "lucide-react"
import { Input } from "@/components/ui/input"
import ChatMessage from "@/components/dashboard/chat-message"

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Hello! I'm WhichEmail AI Assistant. I can help you find accounts, recover forgotten emails, and answer questions about managing your credentials. What can I help you with today?",
    },
  ])
  const [input, setInput] = useState("")
  const [mode, setMode] = useState<"general" | "search" | "recovery">("general")

  const modeConfig = {
    general: {
      title: "General Chat",
      description: "Ask me questions about your credentials and accounts",
      icon: MessageSquare,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-400",
    },
    search: {
      title: "Smart Search",
      description: "Ask me anything to find your accounts quickly",
      icon: Search,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      textColor: "text-emerald-400",
    },
    recovery: {
      title: "Account Recovery",
      description: "I'll help you recover forgotten account information",
      icon: Shield,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      textColor: "text-orange-400",
    },
  }

  const suggestedQueries = {
    general: ["Which email did I use for GitHub?", "Show me all accounts with Gmail", "What's my security score?"],
    search: ["Find all Discord accounts", "Search accounts by category", "Show Development services"],
    recovery: ["I forgot my Vercel password", "Which email for my Slack account?", "Help me recover my Figma email"],
  }

  const handleSend = () => {
    if (!input.trim()) return

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        type: "user",
        content: input,
      },
    ])

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          type: "ai",
          content:
            "I understood your request. This is where the AI response would appear after connecting to your backend.",
        },
      ])
    }, 500)

    setInput("")
  }

  const handleSuggestedQuery = (query: string) => {
    setInput(query)
  }

  const currentMode = modeConfig[mode]
  const IconComponent = currentMode.icon

  return (
    <div className="h-full flex flex-col pb-24 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">AI Assistant</h1>
        <p className="text-slate-400">Choose a mode to get started</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(["general", "search", "recovery"] as const).map((m) => {
          const config = modeConfig[m]
          const isActive = mode === m
          return (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`relative p-4 rounded-2xl border-2 transition-all duration-300 overflow-hidden group cursor-pointer ${
                isActive
                  ? `${config.bgColor} ${config.borderColor} border-opacity-100`
                  : "bg-slate-800 border-slate-700 hover:border-slate-600"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="relative space-y-2">
                <div className={`flex items-center gap-2 ${isActive ? config.textColor : "text-slate-400"}`}>
                  <IconComponent size={20} />
                  <span className="font-semibold text-sm md:text-base">{config.title}</span>
                </div>
                <p className={`text-xs md:text-sm ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                  {config.description}
                </p>
              </div>
              {isActive && (
                <div className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r ${config.color}`} />
              )}
            </button>
          )
        })}
      </div>

      {/* Chat Container */}
      <div
        className={`flex-1 border-2 rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${modeConfig[mode].bgColor} ${modeConfig[mode].borderColor}`}
      >
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {messages.length === 1 && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-8">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentMode.color} flex items-center justify-center text-white`}
              >
                <IconComponent size={32} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-2">{currentMode.title}</h2>
                <p className="text-slate-400 text-sm md:text-base">{currentMode.description}</p>
              </div>

              <div className="w-full max-w-2xl space-y-3">
                <p className="text-sm text-slate-400 font-medium">Try asking:</p>
                <div className="grid gap-2">
                  {suggestedQueries[mode].map((query, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestedQuery(query)}
                      className={`p-3 text-left border-2 rounded-xl transition-all duration-300 text-sm md:text-base ${modeConfig[mode].bgColor} ${modeConfig[mode].borderColor} hover:border-opacity-100 text-slate-300 hover:text-slate-100`}
                    >
                      {query}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} mode={mode} />
          ))}
        </div>

        {/* Input Area */}
        <div
          className={`border-t-2 p-3 md:p-4 backdrop-blur transition-all duration-300 ${modeConfig[mode].bgColor} ${modeConfig[mode].borderColor}`}
        >
          <div className="flex gap-2 md:gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder={`Ask ${currentMode.title.toLowerCase()}...`}
              className="bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-500 text-sm md:text-base"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={`p-2 md:p-3 bg-gradient-to-r ${currentMode.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0`}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

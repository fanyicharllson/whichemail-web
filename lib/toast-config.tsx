"use client"

import type { ReactNode } from "react"
import { Toaster, toast } from "sonner"

export function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster
        position="top-right"
        theme="dark"
        richColors
        toastOptions={{
          style: {
            background: "rgba(15, 23, 42, 0.95)",
            border: "1px solid rgba(71, 85, 105, 0.5)",
            borderRadius: "10px",
            backdropFilter: "blur(10px)",
            padding: "16px",
            fontSize: "14px",
          },
          className: "font-sans",
        }}
      />
      {children}
    </>
  )
}

export { toast }

"use client"

import { useEffect, useState } from "react"
import { useContent } from "@/contexts/content-context"
import { createPortal } from "react-dom"

export function DevTools() {
  const { refreshContent, isRefreshing } = useContent()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted || process.env.NODE_ENV !== "development") return null

  const devToolsContainer = document.getElementById("dev-tools-container")
  if (!devToolsContainer) return null

  return createPortal(
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={refreshContent}
        disabled={isRefreshing}
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 transition-colors"
      >
        {isRefreshing ? "Refreshing..." : "Refresh Content"}
      </button>
    </div>,
    devToolsContainer,
  )
}

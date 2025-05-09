"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type ContentContextType = {
  refreshContent: () => Promise<void>
  isRefreshing: boolean
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export function ContentProvider({ children }: { children: ReactNode }) {
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Simplified refresh function that just calls the API
  const refreshContent = async () => {
    try {
      setIsRefreshing(true)
      const response = await fetch("/api/content/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to refresh content")
      }

      // Force a client-side navigation to refresh the page
      window.location.reload()
    } catch (error) {
      console.error("Error refreshing content:", error)
    } finally {
      setIsRefreshing(false)
    }
  }

  return <ContentContext.Provider value={{ refreshContent, isRefreshing }}>{children}</ContentContext.Provider>
}

export function useContent() {
  const context = useContext(ContentContext)
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider")
  }
  return context
}

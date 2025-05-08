"use client"

import type React from "react"

import { createContext, useContext, useCallback } from "react"
import { useRouter } from "next/navigation"

type ContentContextType = {
  refreshContent: () => Promise<void>
}

const ContentContext = createContext<ContentContextType>({
  refreshContent: async () => {},
})

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const refreshContent = useCallback(async () => {
    try {
      // Call the refresh API endpoint
      const response = await fetch("/api/content/refresh", {
        method: "POST",
      })

      if (!response.ok) {
        throw new Error("Failed to refresh content")
      }

      // Refresh the current page
      router.refresh()

      console.log("Content refreshed successfully")
    } catch (error) {
      console.error("Error refreshing content:", error)
    }
  }, [router])

  return <ContentContext.Provider value={{ refreshContent }}>{children}</ContentContext.Provider>
}

export const useContent = () => useContext(ContentContext)

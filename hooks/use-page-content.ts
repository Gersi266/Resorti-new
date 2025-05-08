"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

interface UsePageContentResult {
  content: any
  loading: boolean
  error: string | null
  refetch: () => void
}

export function usePageContent(page: string): UsePageContentResult {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { language } = useLanguage()

  const fetchContent = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/content/${page}?lang=${language}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch content: ${response.statusText}`)
      }
      const data = await response.json()
      setContent(data)
    } catch (err: any) {
      console.error(`Error fetching ${page} content:`, err)
      setError(err.message || "Failed to load content")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContent()
  }, [page, language])

  return { content, loading, error, refetch: fetchContent }
}

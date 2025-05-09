import { NextResponse } from "next/server"
import { clearContentCache } from "@/lib/content-loader"

export async function POST() {
  try {
    // Clear the content cache
    clearContentCache()

    return NextResponse.json({ success: true, message: "Content cache cleared successfully" })
  } catch (error) {
    console.error("Error clearing content cache:", error)
    return NextResponse.json({ success: false, message: "Failed to clear content cache" }, { status: 500 })
  }
}

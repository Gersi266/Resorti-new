import { type NextRequest, NextResponse } from "next/server"
import { loadContent } from "@/lib/content-loader"

export async function GET(request: NextRequest, { params }: { params: { page: string } }) {
  const { page } = params
  const language = request.nextUrl.searchParams.get("lang") || "en"

  try {
    const content = await loadContent(page, language)
    return NextResponse.json(content)
  } catch (error) {
    console.error(`Error loading content for ${page}:`, error)

    // Return a proper error response
    return NextResponse.json({ error: `Failed to load content for ${page}` }, { status: 500 })
  }
}

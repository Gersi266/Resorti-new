import { type NextRequest, NextResponse } from "next/server"
import path from "path"
import fs from "fs"

export async function GET(request: NextRequest, { params }: { params: { page: string } }) {
  try {
    const page = params.page
    const searchParams = request.nextUrl.searchParams
    const language = searchParams.get("language") || "en"

    // Determine the file path based on language
    const filePath = path.join(process.cwd(), "content", language === "en" ? `${page}.json` : `${page}-al.json`)

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 })
    }

    // Read and parse the content file
    const content = JSON.parse(fs.readFileSync(filePath, "utf8"))

    return NextResponse.json(content)
  } catch (error) {
    console.error("Error fetching content:", error)
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 })
  }
}

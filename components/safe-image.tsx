"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface SafeImageProps extends Omit<ImageProps, "src"> {
  src: string | null | undefined
  fallbackSrc?: string
  alt: string
  fill?: boolean
  className?: string
}

export default function SafeImage({
  src,
  fallbackSrc = "/placeholder.svg",
  alt,
  fill,
  className,
  width,
  height,
  ...props
}: SafeImageProps) {
  // Add this function at the beginning of the component
  const normalizeSrc = (src: string) => {
    // Remove "/Paradise-main/public" prefix if it exists
    if (src && src.startsWith("/Paradise-main/public")) {
      return src.replace("/Paradise-main/public", "")
    }
    return src
  }

  const [error, setError] = useState(false)

  // Enhance error handling for image paths

  // Update the finalSrc determination to be more robust
  const finalSrc =
    !error && src && typeof src === "string" && src.trim() !== "" ? src : fallbackSrc || "/placeholder.svg"

  // Add additional validation
  if (!finalSrc) {
    return null
  }

  // Ensure we're not trying to use a directory as an image
  try {
    new URL(finalSrc, window.location.origin)
  } catch (e) {
    console.error(`Invalid image path: ${finalSrc}`)
    return null
  }

  // Ensure alt text is never empty
  const accessibleAlt = alt || "Panorama Resort image"

  return (
    <Image
      src={normalizeSrc(finalSrc) || "/placeholder.svg"}
      alt={accessibleAlt}
      className={cn("object-cover", className)}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      onError={() => setError(true)}
      {...props}
    />
  )
}

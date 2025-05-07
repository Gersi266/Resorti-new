"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface ClientSafeImageProps extends Omit<ImageProps, "src"> {
  src: string | null | undefined
  fallbackSrc?: string
  alt: string
}

export default function ClientSafeImage({
  src,
  fallbackSrc = "/placeholder.svg",
  alt,
  ...props
}: ClientSafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(src && typeof src === "string" && src.trim() !== "" ? src : null)

  // If src is empty, null, or undefined, use fallbackSrc or null
  const finalSrc = imgSrc || fallbackSrc || null

  // If we don't have a valid src, don't render the image at all
  if (finalSrc === null) {
    return null
  }

  return (
    <Image
      {...props}
      src={finalSrc || "/placeholder.svg"}
      alt={alt || "Image"}
      onError={() => {
        // If image fails to load, try the fallback
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc)
        } else {
          // If fallback also fails, set to null to not render
          setImgSrc(null)
        }
      }}
    />
  )
}

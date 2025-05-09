"use client"

import Image, { type ImageProps } from "next/image"

type BasicImageProps = Omit<ImageProps, "onError">

export default function BasicImage(props: BasicImageProps) {
  return <Image {...props} />
}

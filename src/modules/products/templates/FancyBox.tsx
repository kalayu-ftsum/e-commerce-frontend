"use client"
import React, { useRef, useEffect, PropsWithChildren } from "react"

import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

import { Carousel as NativeCarousel } from "@fancyapps/ui"
import "@fancyapps/ui/dist/carousel/carousel.css"

import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js"
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css"
import "./style.css"
import type { OptionsType } from "@fancyapps/ui/types/Fancybox/options"

interface Props {
  delegate?: string
  options?: Partial<OptionsType>
}

function Fancybox(props: PropsWithChildren<Props>) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    const delegate = props.delegate || "[data-fancybox]"
    const options = props.options || {}

    NativeFancybox.bind(container, delegate, options)

    return () => {
      NativeFancybox.unbind(container)
      NativeFancybox.close()
    }
  })

  return <div ref={containerRef}>{props.children}</div>
}

interface Props {
  options?: Partial<OptionsType>
}

const defaults: Partial<OptionsType> = {
  Thumbs: {
    type: "classic",
  },
}

function Carousel(props: PropsWithChildren<Props>) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const options = {
      ...defaults,
      ...(props.options || {}),
    }

    const instance = new NativeCarousel(container, options, { Thumbs })

    return () => {
      instance.destroy()
    }
  })

  return (
    <div className="f-carousel" ref={containerRef}>
      {props.children}
    </div>
  )
}

export default function ImageViewer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Fancybox
        // Sample options
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Carousel
          // Sample options

          options={{}}
        >
          {children}
        </Carousel>
      </Fancybox>
    </div>
  )
}

import { useState } from "react"

export function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%")
  const [showZoom, setShowZoom] = useState(false)
  const zoomContainerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = zoomContainerRef.current
      ? zoomContainerRef.current.getBoundingClientRect()
      : { left: 0, top: 0, width: 0, height: 0 }
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setBackgroundPosition(`${x}% ${y}%`)
  }

  return (
    <div
      className="zoom-container"
      ref={zoomContainerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
    >
      <img src={src} alt={alt} className="zoom-image w-20 h-16 object-cover" />
      <div
        className="zoom-result"
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: backgroundPosition,
          display: showZoom ? "block" : "none",
        }}
      />
    </div>
  )
}

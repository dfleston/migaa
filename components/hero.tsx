"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0019.jpg-1Hi3WSoe60DzoZ8LehAbx9X4WaUQML.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0014.jpg-pjI9FGrWiFqKclxDjfr7Le65dg0BDl.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0015.jpg-v7SK2JJaG7Tg2WQ6VFziZifSACa5pv.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0018.jpg-wTUGnbxuHxtqzOifNVczYawc9ANkM3.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0024.jpg-bsGC7dlbfHzkjzcBoZTy1TJ5x5yoSS.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0023.jpg-abW1tfZHKxBBUg3JU0Q67AQn5MXuI6.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0020.jpg-AUpSNvYFLKYZmLlAzwEgK4ipBTDBXn.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0017.jpg-kuOo6Bj3ONy7y2VJbOaJnXpQLhYCIT.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0016.jpg-5sDDGAIrDjLgKEAfsJGyapisOUGGvF.jpeg",
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <div className="max-w-4xl px-4 md:px-0">
          <div className="mb-4 inline-block">
            <div className="relative">
              <div className="absolute -left-4 -right-4 -top-4 h-[1px] w-[calc(100%+32px)] bg-gold/50"></div>
              <div className="absolute -bottom-4 -left-4 -right-4 h-[1px] w-[calc(100%+32px)] bg-gold/50"></div>
              <span className="font-serif text-sm uppercase tracking-[0.3em] text-gold">Exclusive Luxury Property</span>
            </div>
          </div>
          <h1 className="mb-6 font-display text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Elegant Villa at
            <br />
            Migaa Golf Estate
          </h1>
          <p className="mx-auto mb-10 max-w-2xl font-serif text-xl leading-relaxed text-white/90">
            Experience refined living in a pristine natural environment with lifetime golf membership and panoramic
            views
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="border-2 border-gold bg-transparent px-8 py-6 text-sm font-medium uppercase tracking-wider text-white hover:bg-gold hover:text-white"
            >
              Schedule a Viewing
            </Button>
           
          </div>
        </div>
      </div>

      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-3 text-white transition-all hover:bg-black/50 hover:border-white/50"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-3 text-white transition-all hover:bg-black/50 hover:border-white/50"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-[3px] w-8 transition-all ${index === currentImage ? "bg-gold" : "bg-white/40"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


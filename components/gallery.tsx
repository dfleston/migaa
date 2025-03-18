"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0019.jpg-1Hi3WSoe60DzoZ8LehAbx9X4WaUQML.jpeg",
    alt: "Front view of luxury villa with covered parking",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0014.jpg-pjI9FGrWiFqKclxDjfr7Le65dg0BDl.jpeg",
    alt: "Side view of villa showing architectural details",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0015.jpg-v7SK2JJaG7Tg2WQ6VFziZifSACa5pv.jpeg",
    alt: "Front entrance with elegant columns and parking area",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0018.jpg-wTUGnbxuHxtqzOifNVczYawc9ANkM3.jpeg",
    alt: "Aerial view of villa with swimming pool and patio",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0024.jpg-bsGC7dlbfHzkjzcBoZTy1TJ5x5yoSS.jpeg",
    alt: "Backyard view with swimming pool and lounge area",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0023.jpg-abW1tfZHKxBBUg3JU0Q67AQn5MXuI6.jpeg",
    alt: "Pool and patio area with outdoor furniture",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="bg-white py-24" id="gallery">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <div className="relative">
              <div className="absolute -left-4 -top-3 h-[1px] w-16 bg-gold"></div>
              <span className="font-serif text-sm uppercase tracking-[0.3em] text-gold">Photo Gallery</span>
            </div>
          </div>
          <h2 className="mb-6 font-display text-4xl font-medium text-gray-900 md:text-5xl">Explore the Property</h2>
          <p className="mx-auto max-w-3xl font-serif text-lg leading-relaxed text-gray-600">
            Discover the beauty and elegance of this stunning villa through our curated gallery of images.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="font-display text-xl">{image.alt}</h3>
                <div className="mt-2 h-[1px] w-12 bg-gold"></div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              aria-label="Close dialog"
            >
              <X size={24} />
            </button>
            {selectedImage && (
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged property view"
                className="h-auto w-full rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}


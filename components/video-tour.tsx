import React from "react"

export default function VideoTour() {
  return (
    <section className="bg-gray-50 py-24" id="video-tour">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <div className="relative">
              <div className="absolute -left-4 -top-3 h-[1px] w-16 bg-gold"></div>
              <span className="font-serif text-sm uppercase tracking-[0.3em] text-gold">Virtual Tour</span>
            </div>
          </div>
          <h2 className="mb-6 font-display text-4xl font-medium text-gray-900 md:text-5xl">Experience sumptous Golf in tropical climate </h2>
          <p className="mx-auto max-w-3xl font-serif text-lg leading-relaxed text-gray-600">
            Take a virtual tour of this magnificent development and experience the luxury firsthand.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            {/* Video iframe - direct YouTube embed */}
            <iframe
              src="https://www.youtube.com/embed/LjHLnmSrLXg?si=eBmlyZ5-1uCL9MOm"
              title="Luxury Villa Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
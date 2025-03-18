import { Check } from "lucide-react"

export default function PropertyOverview() {
  const features = [
    "6 Luxurious Bedrooms",
    "Private Swimming Pool",
    "Spacious Outdoor Terrace",
    "Modern Architectural Design",
    "Lush Landscaped Gardens",
    "Covered Parking Area",
    "High-End Finishes",
    "Panoramic Golf Course Views",
  ]

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-block">
              <div className="relative">
                <div className="absolute -left-4 -top-3 h-[1px] w-16 bg-gold"></div>
                <span className="font-serif text-sm uppercase tracking-[0.3em] text-gold">Property Overview</span>
              </div>
            </div>
            <h2 className="mb-8 font-display text-4xl font-medium leading-tight text-gray-900 md:text-5xl">
              Exquisite Luxury Villa in Migaa Golf Estate
            </h2>
            <p className="mb-6 font-serif text-lg leading-relaxed text-gray-700">
              This elegant villa is located within Migaa, an 18-acre golf course in Kiambu county, Kenya. Just a
              30-minute drive from Nairobi's central business district and with 4 international schools within a
              10-minute drive, this property offers convenience without compromising on tranquility.
            </p>
            <p className="mb-8 font-serif text-lg leading-relaxed text-gray-700">
              Set within a 770-acre natural environment where half will be preserved as green areas, this home offers a
              unique opportunity to live in harmony with nature while enjoying modern luxury amenities.
            </p>
            <div className="mt-4">
              <a
                href="#contact"
                className="group inline-flex items-center border-b border-gold pb-1 font-medium text-gold transition-all hover:border-gold/70 hover:text-gold/80"
              >
                <span>Schedule a viewing</span>
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-8 md:gap-y-12">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250313-WA0018.jpg-wTUGnbxuHxtqzOifNVczYawc9ANkM3.jpeg"
                alt="Aerial view of villa with swimming pool"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="font-display text-2xl">Elegant Architecture</h3>
                <p className="font-serif">Timeless design with modern amenities</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gold/10">
                    <Check className="h-3.5 w-3.5 text-gold" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


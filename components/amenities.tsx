import { Card, CardContent } from "@/components/ui/card"
import {
  Droplets,
  Zap,
  Wifi,
  RouteIcon as Road,
  Building2,
  ClubIcon as GolfIcon,
  Building,
  Hospital,
} from "lucide-react"

export default function Amenities() {
  const currentAmenities = [
    {
      icon: <Droplets className="h-8 w-8 text-gold" />,
      title: "Water Supply",
      description: "Reliable water connection for all your needs",
    },
    {
      icon: <Zap className="h-8 w-8 text-gold" />,
      title: "Power",
      description: "Stable electricity supply throughout the estate",
    },
    {
      icon: <Wifi className="h-8 w-8 text-gold" />,
      title: "Internet Connectivity",
      description: "High-speed internet access for modern living",
    },
    {
      icon: <Road className="h-8 w-8 text-gold" />,
      title: "Internal Cabro Roads",
      description: "Well-maintained roads throughout the development",
    },
    {
      icon: <Building2 className="h-8 w-8 text-gold" />,
      title: "Clubhouse",
      description: "Exclusive clubhouse for residents and their guests",
    },
    {
      icon: <GolfIcon className="h-8 w-8 text-gold" />,
      title: "Lifetime Golf Membership",
      description: "Enjoy lifetime golf membership for your entire family",
    },
  ]

  const upcomingAmenities = [
    {
      icon: <Hospital className="h-8 w-8 text-gold" />,
      title: "Ubora Hospital",
      description: "Cardiometabolic hospital coming soon",
    },
    {
      icon: <GolfIcon className="h-8 w-8 text-gold" />,
      title: "Sports Facility",
      description: "State-of-the-art sports facility in development",
    },
    {
      icon: <Building className="h-8 w-8 text-gold" />,
      title: "Commercial Center",
      description: "Convenient shopping and services planned",
    },
  ]

  return (
    <section className="bg-gray-50 py-24" id="amenities">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <div className="relative">
              <div className="absolute -left-4 -top-3 h-[1px] w-16 bg-gold"></div>
              <span className="font-serif text-sm uppercase tracking-[0.3em] text-gold">Amenities</span>
            </div>
          </div>
          <h2 className="mb-6 font-display text-4xl font-medium text-gray-900 md:text-5xl">Luxury Living Experience</h2>
          <p className="mx-auto max-w-3xl font-serif text-lg leading-relaxed text-gray-600">
            Enjoy a wide range of amenities and services designed to enhance your living experience.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-center font-display text-2xl font-medium text-gray-900">Current Amenities</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {currentAmenities.map((amenity, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none bg-white shadow-sm transition-all hover:shadow-md"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                    {amenity.icon}
                  </div>
                  <h4 className="mb-3 font-display text-xl font-medium text-gray-900">{amenity.title}</h4>
                  <p className="font-serif text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-12 text-center font-display text-2xl font-medium text-gray-900">Coming Soon to Migaa</h3>
          <div className="grid gap-8 sm:grid-cols-3">
            {upcomingAmenities.map((amenity, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none bg-white shadow-sm transition-all hover:shadow-md"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                    {amenity.icon}
                  </div>
                  <h4 className="mb-3 font-display text-xl font-medium text-gray-900">{amenity.title}</h4>
                  <p className="font-serif text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function PropertyDetails() {
  const features = [
    "Luxury Villa Design",
    "Private Swimming Pool",
    "Spacious Outdoor Terrace",
    "Modern Architecture",
    "Lush Landscaped Gardens",
    "Covered Parking Area",
    "High-End Finishes",
    "Panoramic Golf Course Views",
  ]

  return (
    <section className="bg-white py-20" id="property-details">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Exquisite Luxury Villa</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Nestled within the prestigious Migaa Golf Estate, this stunning villa offers the perfect blend of luxury,
            comfort, and natural beauty.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Property Overview</h3>
            <p className="mb-6 text-gray-700">
              This elegant villa is located within Migaa, an 18-acre golf course in Kiambu county, Kenya. Just a
              30-minute drive from Nairobi's central business district and with 4 international schools within a
              10-minute drive, this property offers convenience without compromising on tranquility.
            </p>
            <p className="mb-6 text-gray-700">
              Set within a 770-acre natural environment where half will be preserved as green areas, this home offers a
              unique opportunity to live in harmony with nature while enjoying modern luxury amenities.
            </p>
            <p className="text-gray-700">
              Located 23km from the CBD off Riabai Road in Kiambu, the development can be accessed through Kiambu Road
              branching off at Kiambu-Kamiti-Ruiru Road. Olearia Golf is centered on luxury living with a perfect blend
              to nature, and if you love golf, this is the best place to put up your family and retirement home.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Property Features</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Card key={index} className="border-emerald-100">
                  <CardContent className="flex items-center p-4">
                    <Check className="mr-2 h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">{feature}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <p className="font-medium text-emerald-700">
                At Olearia Golf: Choose a plot, choose a house design & choose a budget!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


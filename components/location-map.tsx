import { MapPin, Navigation, School, ShoppingBag, Building, Car } from "lucide-react"

export default function LocationMap() {
  return (
    <section className="bg-white py-24" id="location">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <div className="relative">
              <div className="absolute -left-4 -top-3 h-[1px] w-16 bg-gold"></div>
              <span className="font-serif text-sm uppercase tracking-[0.3em] text-gold">Location</span>
            </div>
          </div>
          <h2 className="mb-6 font-display text-4xl font-medium text-gray-900 md:text-5xl">Prime Location</h2>
          <p className="mx-auto max-w-3xl font-serif text-lg leading-relaxed text-gray-600">
            Strategically located in Kiambu county, just 30 minutes from Nairobi's central business district.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="aspect-square w-full overflow-hidden bg-gray-100">
                {/* Replace the placeholder with the embedded map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8696.96847058822!2d36.837962354696046!3d-1.1279239337323832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smigaa%20golf!5e1!3m2!1sen!2ses!4v1742286617426!5m2!1sen!2ses"
                  width="100%" // Make the width responsive
                  height="100%" // Make the height responsive
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-8 font-display text-3xl font-medium text-gray-900">Location Highlights</h3>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Navigation className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="mb-2 font-display text-xl font-medium text-gray-900">Convenient Access</h4>
                  <p className="font-serif text-gray-700">
                    Located 23km from the CBD off Riabai Road in Kiambu. The development can be accessed through Kiambu
                    Road branching off at Kiambu-Kamiti-Ruiru Road.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <School className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="mb-2 font-display text-xl font-medium text-gray-900">Nearby Schools</h4>
                  <p className="font-serif text-gray-700">
                    Four international schools within a 10-minute drive, including Woodcreek School, Nova Pioneer, and
                    Sabis Runda.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Building className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="mb-2 font-display text-xl font-medium text-gray-900">Healthcare Facilities</h4>
                  <p className="font-serif text-gray-700">
                    Easy access to RFH Kiambu Road, Aga Khan Kiambu Road Branch, and AAR hospitals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <ShoppingBag className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="mb-2 font-display text-xl font-medium text-gray-900">Shopping Centers</h4>
                  <p className="font-serif text-gray-700">
                    Nearby malls include Ciata Mall, Ridgeways Mall, Two Rivers, and the upcoming Runda Mall.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Car className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="mb-2 font-display text-xl font-medium text-gray-900">Travel Time</h4>
                  <p className="font-serif text-gray-700">
                    Just a 30-minute drive from Nairobi's central business district.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palmtree, Mountain, Users, Plane, HeartPulse, Sun, Building, Shield } from "lucide-react"

export default function WhyKenya() {
  const [activeTab, setActiveTab] = useState("holiday")

  const holidayFeatures = [
    {
      icon: <Palmtree className="h-6 w-6 text-gold" />,
      title: "Unparalleled Wildlife",
      description:
        "Witness the Great Migration in the Maasai Mara and experience thrilling safaris in diverse national parks.",
    },
    {
      icon: <Mountain className="h-6 w-6 text-gold" />,
      title: "Diverse Landscapes",
      description:
        "From snow-capped Mount Kenya to pristine beaches of Diani, Kenya offers a kaleidoscope of natural beauty.",
    },
    {
      icon: <Users className="h-6 w-6 text-gold" />,
      title: "Cultural Immersion",
      description: "Engage with rich traditions of the Maasai, Samburu, and other Kenyan communities.",
    },
    {
      icon: <Plane className="h-6 w-6 text-gold" />,
      title: "Adventure Awaits",
      description: "Enjoy hot air balloon safaris, white-water rafting, rock climbing, and more exciting activities.",
    },
  ]

  const retirementFeatures = [
    {
      icon: <Sun className="h-6 w-6 text-gold" />,
      title: "Ideal Climate",
      description:
        "Enjoy year-round pleasant temperatures, particularly in the highlands. Escape harsh winters forever.",
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-gold" />,
      title: "Modern Healthcare",
      description: "Access quality healthcare services in modern hospitals and clinics, particularly in major cities.",
    },
    {
      icon: <Shield className="h-6 w-6 text-gold" />,
      title: "Safety & Security",
      description: "Kenya has made significant strides in improving security, with thriving expat communities.",
    },
    {
      icon: <Building className="h-6 w-6 text-gold" />,
      title: "Investment Opportunities",
      description: "Explore various investment opportunities in real estate, tourism, and other growing sectors.",
    },
  ]

  return (
    <section className="bg-white py-24" id="why-kenya">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <div className="relative">
              <div className="absolute -left-4 -top-3 h-[1px] w-16 bg-gold"></div>
              <span className="font-serif text-sm uppercase tracking-[0.3em] text-gold">Discover Kenya</span>
            </div>
          </div>
          <h2 className="mb-6 font-display text-4xl font-medium text-gray-900 md:text-5xl">Your Paradise Found</h2>
          <p className="mx-auto max-w-3xl font-serif text-lg leading-relaxed text-gray-600">
            Imagine waking to the gentle warmth of the African sun, the air filled with the scent of blooming acacia.
            This isn't a dream. This is Kenya.
          </p>
        </div>

        <div className="relative mb-16 overflow-hidden rounded-lg">
          <div className="aspect-[21/9] w-full">
            <img
              src="/retired coffee.jpeg?height=900&width=2100"
              alt="Stunning panoramic view of the Maasai Mara with migrating wildebeest against a vibrant sunset"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-12 lg:p-16">
            <p className="mb-4 max-w-3xl font-serif text-xl leading-relaxed">
              Picture yourself sipping freshly brewed Kenyan coffee as you watch elephants roam freely in their natural
              habitat. Envision a life filled with vibrant culture, breathtaking landscapes, and a pace that rejuvenates
              the soul.
            </p>
            <div className="h-1 w-20 bg-gold"></div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="holiday" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-12 flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="holiday" className="font-medium">
                  For Holidaymakers
                </TabsTrigger>
                <TabsTrigger value="retirement" className="font-medium">
                  For Retirees
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="holiday" className="mt-0">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-6 font-display text-3xl font-medium text-gray-900">Adventure & Wonder</h3>
                  <p className="mb-8 font-serif text-lg leading-relaxed text-gray-700">
                    Kenya offers an unparalleled experience for holidaymakers seeking adventure, natural beauty, and
                    cultural immersion. From the iconic wildlife of the Maasai Mara to the pristine beaches of the
                    coast, every moment becomes a treasured memory.
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {holidayFeatures.map((feature, index) => (
                      <Card key={index} className="border-none bg-gray-50 shadow-sm">
                        <CardContent className="p-6">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                            {feature.icon}
                          </div>
                          <h4 className="mb-2 font-display text-xl font-medium text-gray-900">{feature.title}</h4>
                          <p className="font-serif text-gray-700">{feature.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button className="bg-gold px-8 py-6 text-sm font-medium uppercase tracking-wider hover:bg-gold/90">
                      Plan Your Adventure
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src="/mountkenya.jpeg?height=600&width=800"
                      alt="A pristine white sand beach in Diani with turquoise waters"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/rafting.jpg?height=300&width=400"
                        alt="Safari jeep with tourists watching elephants"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/night.webp?height=300&width=400"
                        alt="Traditional Maasai dance performance"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="retirement" className="mt-0">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-6 font-display text-3xl font-medium text-gray-900">
                    Tranquility & Quality of Life
                  </h3>
                  <p className="mb-8 font-serif text-lg leading-relaxed text-gray-700">
                    Kenya offers retirees an exceptional quality of life with its ideal climate, growing healthcare
                    infrastructure, and affordable living costs. Embrace a lifestyle of comfort, adventure, and natural
                    beauty in this East African paradise.
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {retirementFeatures.map((feature, index) => (
                      <Card key={index} className="border-none bg-gray-50 shadow-sm">
                        <CardContent className="p-6">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                            {feature.icon}
                          </div>
                          <h4 className="mb-2 font-display text-xl font-medium text-gray-900">{feature.title}</h4>
                          <p className="font-serif text-gray-700">{feature.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button className="bg-gold px-8 py-6 text-sm font-medium uppercase tracking-wider hover:bg-gold/90">
                      Explore Retirement Options
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src="/zebras.jpg?height=600&width=800"
                      alt="A modern hospital in Nairobi"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/beach.jpg?height=300&width=400"
                        alt="Retired couple enjoying coffee on a veranda with mountain views"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/golf_migaa.jpeg?height=300&width=400"
                        alt="Modern shopping mall in Nairobi"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-24">
          <div className="mb-12 text-center">
            <h3 className="mb-6 font-display text-3xl font-medium text-gray-900">Kenya's Unique Advantages</h3>
            <p className="mx-auto max-w-3xl font-serif text-lg leading-relaxed text-gray-600">
              Discover what makes Kenya an exceptional destination for both visitors and residents alike.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <h4 className="mb-3 font-display text-xl font-medium text-gray-900">English as Official Language</h4>
              <p className="font-serif text-gray-600">Easy communication for international travelers and retirees.</p>
            </div>

            <div className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <Plane className="h-8 w-8 text-gold" />
              </div>
              <h4 className="mb-3 font-display text-xl font-medium text-gray-900">Direct International Flights</h4>
              <p className="font-serif text-gray-600">Convenient access from major cities worldwide.</p>
            </div>

            <div className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h4 className="mb-3 font-display text-xl font-medium text-gray-900">Warm & Welcoming People</h4>
              <p className="font-serif text-gray-600">
                Kenyans are renowned for their hospitality and friendly nature.
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="mb-3 font-display text-xl font-medium text-gray-900">Growing Economy</h4>
              <p className="font-serif text-gray-600">
                Kenya is a regional economic powerhouse, offering stability and growth potential.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-8 font-serif text-xl italic text-gray-700">
            "Invest in your well-being. Invest in your dreams. Invest in Kenya."
          </p>
          <Button className="bg-gold px-10 py-6 text-sm font-medium uppercase tracking-wider hover:bg-gold/90">
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  )
}


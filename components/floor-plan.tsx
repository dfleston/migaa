"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FloorPlan() {
  const [activeTab, setActiveTab] = useState("ground")

  const rooms = {
    ground: [
      { name: "Guest Bedroom", size: "18 m²" },
      { name: "Kitchen", size: "22 m²" },
      { name: "Dining Room", size: "24 m²" },
      { name: "Lounge", size: "32 m²" },
      { name: "Pantry", size: "8 m²" },
    ],
    first: [
      { name: "Master Bedroom", size: "28 m²" },
      { name: "Bedroom 1", size: "18 m²" },
      { name: "Bedroom 2", size: "18 m²" },
      { name: "Bedroom 3", size: "16 m²" },
      { name: "Bedroom 4", size: "16 m²" },
      { name: "Family Room", size: "22 m²" },
    ],
  }

  return (
    <section className="bg-gray-50 py-24" id="floor-plan">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <div className="relative">
              <div className="absolute -left-4 -top-3 h-[1px] w-16 bg-gold"></div>
              <span className="font-serif text-sm uppercase tracking-[0.3em] text-gold">Floor Plans</span>
            </div>
          </div>
          <h2 className="mb-6 font-display text-4xl font-medium text-gray-900 md:text-5xl">
            Spacious 6-Bedroom Layout
          </h2>
          <p className="mx-auto max-w-3xl font-serif text-lg leading-relaxed text-gray-600">
            Explore the thoughtfully designed floor plans of this luxurious villa, featuring 6 bedrooms and generous
            living spaces.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="ground" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="ground" className="font-medium">
                  Ground Floor
                </TabsTrigger>
                <TabsTrigger value="first" className="font-medium">
                  First Floor
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ground" className="mt-0">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="col-span-2 overflow-hidden rounded-lg border border-gray-200 bg-white p-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-gray-100">
                    <img
                      src="/ground-001.jpg?height=800&width=1200"
                      alt="Ground floor plan"
                      className="h-full w-full object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-xl font-medium text-gray-900">Ground Floor Plan</h3>
                        <p className="text-gray-500">Showing living areas and guest bedroom</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="mb-6 font-display text-2xl font-medium text-gray-900">Ground Floor</h3>
                  <p className="mb-6 font-serif text-gray-700">
                    The ground floor features spacious living areas, a gourmet kitchen, formal dining room, and a guest
                    bedroom suite.
                  </p>

                  <div className="space-y-4">
                    {rooms.ground.map((room, index) => (
                      <div key={index} className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-900">{room.name}</span>
                        <span className="text-gray-500">{room.size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="first" className="mt-0">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="col-span-2 overflow-hidden rounded-lg border border-gray-200 bg-white p-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-gray-100">
                    <img
                      src="/first-002.jpg?height=800&width=1200"
                      alt="First floor plan"
                      className="h-full w-full object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-xl font-medium text-gray-900">First Floor Plan</h3>
                        <p className="text-gray-500">Showing bedrooms and family room</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="mb-6 font-display text-2xl font-medium text-gray-900">First Floor</h3>
                  <p className="mb-6 font-serif text-gray-700">
                    The first floor houses the master suite, four additional bedrooms, and a family room with stunning
                    views.
                  </p>

                  <div className="space-y-4">
                    {rooms.first.map((room, index) => (
                      <div key={index} className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-900">{room.name}</span>
                        <span className="text-gray-500">{room.size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}


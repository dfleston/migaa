import Hero from "@/components/hero"
import PropertyOverview from "@/components/property-overview"
import FloorPlan from "@/components/floor-plan"
import Gallery from "@/components/gallery"
import VideoTour from "@/components/video-tour"
import LocationMap from "@/components/location-map"
import WhyKenya from "@/components/why-kenya"
import BitcoinPayment from "@/components/bitcoin-payment"
import Amenities from "@/components/amenities"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PropertyOverview />
      <FloorPlan />
      <Gallery />
      <VideoTour />
      <LocationMap />
      <WhyKenya />
      <BitcoinPayment />
      <Amenities />
      <ContactForm />
      <Footer />
    </main>
  )
}


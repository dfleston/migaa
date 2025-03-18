import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="mb-6 font-display text-xl font-medium">Olearia Golf Estate</h3>
            <p className="mb-6 font-serif text-gray-400">
              Luxury living with a perfect blend to nature in the heart of Migaa Golf Estate, Kiambu County.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gold hover:text-gold"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gold hover:text-gold"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-display text-xl font-medium">Quick Links</h3>
            <ul className="space-y-3 font-serif">
              <li>
                <a href="#property-details" className="text-gray-400 transition-colors hover:text-gold">
                  Property Details
                </a>
              </li>
              <li>
                <a href="#floor-plan" className="text-gray-400 transition-colors hover:text-gold">
                  Floor Plans
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 transition-colors hover:text-gold">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#video-tour" className="text-gray-400 transition-colors hover:text-gold">
                  Video Tour
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-400 transition-colors hover:text-gold">
                  Location
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-400 transition-colors hover:text-gold">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 transition-colors hover:text-gold">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-xl font-medium">Nearby Amenities</h3>
            <ul className="space-y-3 font-serif">
              <li className="text-gray-400">Woodcreek School</li>
              <li className="text-gray-400">Nova Pioneer</li>
              <li className="text-gray-400">Sabis Runda</li>
              <li className="text-gray-400">RFH Kiambu Road</li>
              <li className="text-gray-400">Ciata Mall</li>
              <li className="text-gray-400">Two Rivers Mall</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-xl font-medium">Legal</h3>
            <ul className="space-y-3 font-serif">
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-gold">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-gold">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-gold">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-gold">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center">
          <div className="mb-8 flex items-center justify-center">
            <div className="flex items-center rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-300">
              <svg className="mr-2 h-5 w-5 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
              </svg>
              <span>Bitcoin and select cryptocurrencies accepted for payment</span>
            </div>
          </div>
          <p className="font-serif text-gray-400">
            &copy; {new Date().getFullYear()} Olearia Golf Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


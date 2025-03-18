import { Button } from "@/components/ui/button"

export default function BitcoinPayment() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
          <div className="grid md:grid-cols-5">
            <div className="flex items-center justify-center p-8 md:col-span-2">
              <div className="text-center md:text-left">
                <svg className="mx-auto h-20 w-20 text-gold md:mx-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
                </svg>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-white md:col-span-3">
              <div className="mb-4 inline-block">
                <div className="relative">
                  <div className="absolute -left-4 -top-3 h-[1px] w-16 bg-gold"></div>
                  <span className="font-serif text-sm uppercase tracking-[0.3em] text-gold">Payment Options</span>
                </div>
              </div>
              <h3 className="mb-4 font-display text-3xl font-medium">Bitcoin Accepted</h3>
              <p className="mb-6 font-serif text-lg leading-relaxed text-gray-300">
                We embrace innovation and offer flexible payment solutions. Bitcoin and other select cryptocurrencies
                are accepted for both property purchases and rental payments.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button className="border-2 border-gold bg-transparent px-8 py-6 text-sm font-medium uppercase tracking-wider text-white hover:bg-gold hover:text-white">
                  Learn More
                </Button>
                <Button className="bg-gold px-8 py-6 text-sm font-medium uppercase tracking-wider hover:bg-gold/90">
                  Contact Our Finance Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


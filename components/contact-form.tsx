"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Clock } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    alert("Thank you for your inquiry! We will contact you shortly.")
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <section className="bg-white py-24" id="contact">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <div className="relative">
              <div className="absolute -left-4 -top-3 h-[1px] w-16 bg-gold"></div>
              <span className="font-serif text-sm uppercase tracking-[0.3em] text-gold">Contact</span>
            </div>
          </div>
          <h2 className="mb-6 font-display text-4xl font-medium text-gray-900 md:text-5xl">Get in Touch</h2>
          <p className="mx-auto max-w-3xl font-serif text-lg leading-relaxed text-gray-600">
            Interested in this property? Contact our team to schedule a viewing or learn more.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <Card className="overflow-hidden border-none bg-white shadow-sm">
            <CardHeader className="bg-gray-50 pb-6 pt-8">
              <CardTitle className="font-display text-2xl font-medium">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="border-gray-300 py-6 focus:border-gold focus:ring-gold"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="border-gray-300 py-6 focus:border-gold focus:ring-gold"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="border-gray-300 py-6 focus:border-gold focus:ring-gold"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="I'm interested in this property and would like to schedule a viewing..."
                    rows={4}
                    className="border-gray-300 focus:border-gold focus:ring-gold"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold py-6 text-sm font-medium uppercase tracking-wider hover:bg-gold/90"
                >
                  Send Inquiry
                </Button>
                <div className="mt-6 flex items-center justify-center border-t border-gray-200 pt-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="mr-2 h-5 w-5 text-gold" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
                    </svg>
                    <span>Bitcoin and select cryptocurrencies accepted</span>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-8 font-display text-2xl font-medium text-gray-900">Contact Information</h3>

              <div className="mb-12 space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-display text-lg font-medium text-gray-900">Phone</h4>
                    <p className="font-serif text-gray-700">+254 (0) 700 000 000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-display text-lg font-medium text-gray-900">Email</h4>
                    <p className="font-serif text-gray-700">info@migaagolfestate.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-display text-lg font-medium text-gray-900">Office Hours</h4>
                    <p className="font-serif text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="font-serif text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="font-serif text-gray-700">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="overflow-hidden border-none bg-gray-900 text-white shadow-sm">
              <CardContent className="p-8">
                <h4 className="mb-3 font-display text-xl font-medium">Ready to Experience Luxury?</h4>
                <p className="mb-6 font-serif text-gray-300">
                  Schedule a private viewing of this exclusive property and experience the luxury firsthand.
                </p>
                <Button className="w-full bg-gold py-6 text-sm font-medium uppercase tracking-wider hover:bg-gold/90">
                  Book a Viewing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}


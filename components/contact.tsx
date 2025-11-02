"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, CalendarIcon, Clock } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string>("")

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleConfirmBooking = () => {
    if (selectedDate && selectedTime) {
      console.log("Consultation booked for:", selectedDate, "at", selectedTime)
      // Here you would typically send this to your backend
      setIsCalendarOpen(false)
      // Reset selections
      setSelectedDate(undefined)
      setSelectedTime("")
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Ready to <span className="text-primary">Get Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Contact us today for a consultation and discover how we can give you back your most valuable asset,{" "}
            <span className="text-primary font-semibold"> time</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card
              id="booking-form"
              className="border-border bg-gradient-to-br from-blue-50 to-pink-50 hover:from-blue-100 hover:to-pink-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@bluebell.lu</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Service Area</h3>
                  <p className="text-muted-foreground">Luxembourg</p>
                  <p className="text-sm text-muted-foreground">Remote services available worldwide</p>
                </div>
              </div>
            </div>

            <Card className="border-border bg-gradient-to-br from-blue-50 to-pink-50 hover:from-blue-100 hover:to-pink-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Ready to Start?</h3>
                <p className="mb-4 text-muted-foreground">
                  Schedule a complimentary consultation to discuss your needs and how we can help.
                </p>
                <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="default"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-200"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Schedule Consultation
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Schedule Your Consultation</DialogTitle>
                      <DialogDescription>
                        Choose a date and time that works best for you. We'll confirm your appointment shortly.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 py-4">
                      <div className="flex justify-center scale-90 sm:scale-100">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date() || date < new Date(new Date().setHours(0, 0, 0, 0))}
                          className="rounded-md border"
                        />
                      </div>

                      {selectedDate && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <Label>Select Time</Label>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                variant={selectedTime === time ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedTime(time)}
                                className={
                                  selectedTime === time ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"
                                }
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedDate && selectedTime && (
                        <div className="space-y-3">
                          <div className="p-3 bg-primary/10 rounded-md">
                            <p className="text-sm text-foreground">
                              <strong>Selected:</strong>{" "}
                              {selectedDate.toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}{" "}
                              at {selectedTime}
                            </p>
                          </div>
                          <Button
                            onClick={handleConfirmBooking}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            Confirm Booking
                          </Button>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Calendar, FileText, ShoppingBag, Home, Users, DollarSign, Clock, Package } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Travel Planning",
    description: "Complete travel arrangements including flights, hotels, itineraries, and local recommendations.",
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "From intimate dinners to group events, we handle all the details for memorable occasions.",
  },
  {
    icon: FileText,
    title: "Document Organization",
    description: "Organize important documents, handle paperwork, and manage administrative tasks efficiently.",
  },
  {
    icon: ShoppingBag,
    title: "Personal Shopping",
    description: " Package pick up/ drop off, grocery shopping, and personal errands tailored to your preferences.",
  },
  {
    icon: Home,
    title: "Home Management",
    description: "Coordinate home services, maintenance, and household management tasks.",
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Childcare coordination, elderly care assistance, and family logistics management.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Comprehensive <span className="text-primary">Concierge Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From everyday errands to complex planning, we handle it all with professionalism and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border bg-gradient-to-br from-blue-50 to-pink-50 hover:from-blue-100 hover:to-pink-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-balance">
              Flexible <span className="text-primary">Pricing Options</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the pricing model that works best for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1: Hourly Rate */}
            <Card className="border-border bg-gradient-to-br from-blue-50 to-pink-50 hover:from-blue-100 hover:to-pink-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Hourly Rate</CardTitle>
                <CardDescription>Pay as you go for flexible support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">€20-€40</span>
                    <span className="text-sm text-muted-foreground">/hour</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Online tasks</p>
                </div>
                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">€25-€60</span>
                    <span className="text-sm text-muted-foreground">/hour</span>
                  </div>
                  <p className="text-sm text-muted-foreground">In-person errands</p>
                </div>
              </CardContent>
            </Card>

            {/* Option 2: Task-Based Pricing */}
            <Card className="border-border bg-gradient-to-br from-blue-50 to-pink-50 hover:from-blue-100 hover:to-pink-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Task-Based Pricing</CardTitle>
                <CardDescription>Fixed prices for specific services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Travel Itinerary (3-5 days)</span>
                  <span className="font-semibold text-primary">€150</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Document Filing</span>
                  <span className="font-semibold text-primary">€50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Appointment Scheduling (10)</span>
                  <span className="font-semibold text-primary">€40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Event Planning (small)</span>
                  <span className="font-semibold text-primary">€200+</span>
                </div>
              </CardContent>
            </Card>

            {/* Option 3: Subscription Packages */}
            <Card className="border-border bg-gradient-to-br from-blue-50 to-pink-50 hover:from-blue-100 hover:to-pink-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Subscription Packages</CardTitle>
                <CardDescription>Monthly plans for ongoing support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-foreground">Basic Plan</span>
                    <span className="text-lg font-bold text-primary">€150/mo</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Up to 5 hours</p>
                </div>
                <div className="space-y-1 pt-2 border-t border-border">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-foreground">Standard Plan</span>
                    <span className="text-lg font-bold text-primary">€300/mo</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Up to 12 hours</p>
                </div>
                <div className="space-y-1 pt-2 border-t border-border">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-foreground">Premium Plan</span>
                    <span className="text-lg font-bold text-primary">€500/mo</span>
                  </div>
                  <p className="text-xs text-muted-foreground">20+ hours, priority support</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

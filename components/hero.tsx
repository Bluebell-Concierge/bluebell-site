"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Welcome to <br /> <span className="text-primary">Bluebell Concierge</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get your <span className="text-primary font-semibold">time</span> back with premium Concierge services.
                We help busy individuals and families manage personal tasks- from booking tickets and travel planning to
                organizing documents and errands. Let us handle the details while you enjoy life's precious moments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection("contact")}>
                Book Services
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent"
                onClick={() => scrollToSection("services")}
              >
                View Services
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Premium Lifestyle Management</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Dedicated Personal Assistant</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Tailored to Your Needs</span>
              </div>
            </div>
          </div>

          <div className="relative w-full mx-auto lg:mx-0">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-3 sm:p-6 lg:p-8 flex items-center justify-center hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
              <img
                src="images/bluebell-services.jpg"
                alt="Bluebell Concierge Services"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

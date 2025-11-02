"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Attempting to scroll to section:", sectionId)
    const element = document.getElementById(sectionId)
    console.log("[v0] Found element:", element)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      console.log("[v0] Scrolling initiated")
    } else {
      console.log("[v0] Element not found with ID:", sectionId)
    }

    // Close mobile menu after clicking
    setIsMenuOpen(false)
  }

  useEffect(() => {
    console.log("[v0] Header component mounted")
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo />
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

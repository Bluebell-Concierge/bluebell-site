import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're building relationships with amazing clients. Check back soon for testimonials from our valued
            customers
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="border-border bg-gradient-to-br from-blue-50 to-pink-50 max-w-md">
            <CardContent className="p-8 text-center space-y-4">
              <div className="text-6xl text-muted-foreground/30">💬</div>
              <p className="text-muted-foreground">
                Your testimonial could be here! We're excited to work with our first clients and share their
                experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import { Shield, Heart, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Why Choose <span className="text-primary">Bluebell Concierge</span>?
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Founded on the belief that everyone deserves more time for what matters most, <span className="text-primary font-semibold">Bluebell Concierge </span>  
                provides premium personal assistance services with unmatched attention to detail and discretion
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Trusted & Secure</h3>
                  <p className="text-muted-foreground">
                    Fully insured and bonded with strict confidentiality protocols to protect your privacy.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Touch</h3>
                  <p className="text-muted-foreground">
                    Dedicated concierge professionals who learn your preferences and anticipate your needs.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Efficient Service</h3>
                  <p className="text-muted-foreground">
                    Quick response times and seamless execution of tasks, no matter how complex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

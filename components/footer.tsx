export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Bluebell Concierge</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Premium personal assistant services for busy individuals and families. Your time is precious—let us help
              you make the most of it.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Travel Planning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Event Planning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Personal Shopping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Home Management
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-background transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>info@bluebell.lu</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2025 Bluebell Concierge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

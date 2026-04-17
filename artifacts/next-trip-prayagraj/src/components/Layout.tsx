import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Phone, Mail, MapPin, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FaWhatsapp } from 'react-icons/fa';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Packages', href: '/packages' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      {/* Top Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm font-medium hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
              <Phone size={14} />
              <span>+91-9999999999</span>
            </a>
            <a href="mailto:info@nexttripprayagraj.com" className="flex items-center gap-2 hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
              <Mail size={14} />
              <span>info@nexttripprayagraj.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4"></div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/95 backdrop-blur-md border-border shadow-sm py-2" : "bg-background py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 2C12 2 12 12 21 12C12 12 12 22 12 22C12 22 12 12 3 12C12 12 12 2 12 2Z" />
                <path d="M12 22V12" />
                <path d="M21 12H3" />
              </svg>
            </div>
            <div>
              <h1 className="font-serif text-xl md:text-2xl font-bold text-foreground leading-none">Next Trip Prayagraj</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Sacred Stays & Yatra</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={cn(
                      "text-sm font-medium hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 py-0.5",
                      location === link.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="rounded-full shadow-md hover:shadow-lg transition-all" size="sm">
              <a href="https://wa.me/919999999999?text=I am interested in booking a package" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-2">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium py-2 border-b border-border/50",
                    location === link.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="w-full mt-4" size="lg">
                <a href="https://wa.me/919999999999?text=I am interested in booking a package" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 2C12 2 12 12 21 12C12 12 12 22 12 22C12 22 12 12 3 12C12 12 12 2 12 2Z" />
                    <path d="M12 22V12" />
                    <path d="M21 12H3" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold">Next Trip Prayagraj</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed max-w-xs">
                Where Your Stay Becomes Part of Your Sadhana. Prayagraj's premier agency for sacred stays, seamless yatra planning, and authentic sattvik experiences.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Facebook size={16} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Instagram size={16} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Twitter size={16} />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 border-b border-background/20 pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 border-b border-background/20 pb-2 inline-block">Our Packages</h4>
              <ul className="space-y-3">
                <li><Link href="/packages" className="text-muted hover:text-primary transition-colors text-sm">Heritage + Spiritual</Link></li>
                <li><Link href="/packages" className="text-muted hover:text-primary transition-colors text-sm">Short Getaway</Link></li>
                <li><Link href="/packages" className="text-muted hover:text-primary transition-colors text-sm">Kumbh Mela Special</Link></li>
                <li><Link href="/packages" className="text-muted hover:text-primary transition-colors text-sm">History + Food Trail</Link></li>
                <li><Link href="/packages" className="text-muted hover:text-primary transition-colors text-sm">Sacred Stays & Meals</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 border-b border-background/20 pb-2 inline-block">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-muted">
                  <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                  <span>Next Trip Prayagraj<br/>Near Triveni Sangam,<br/>Prayagraj (Allahabad), UP, India</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <Phone className="text-primary shrink-0" size={18} />
                  <a href="tel:+919999999999" className="hover:text-primary transition-colors">+91-9999999999</a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <Mail className="text-primary shrink-0" size={18} />
                  <a href="mailto:info@nexttripprayagraj.com" className="hover:text-primary transition-colors">info@nexttripprayagraj.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-background/10 text-center text-sm text-muted">
            <p>&copy; {new Date().getFullYear()} Next Trip Prayagraj. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all z-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}
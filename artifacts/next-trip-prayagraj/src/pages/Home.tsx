import { useState, useCallback, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, MapPin, Clock, Star, Shield, Users, Utensils, Bed } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const WHATSAPP_NUMBER = '917238072526';

const HERO_IMAGES = [
  { src: '/images/triveni-sangam-dawn.png', alt: 'Triveni Sangam at dawn — sacred confluence of three holy rivers' },
  { src: '/images/kumbh-mela-diyas.png', alt: 'Kumbh Mela — world\'s largest spiritual gathering with diyas on the Ganga' },
  { src: '/images/bade-hanuman-temple.png', alt: 'Shri Bade Hanuman Ji Temple — one of the most revered temples in Prayagraj' },
  { src: '/images/anand-bhavan.png', alt: 'Anand Bhavan — historic heritage home of the Nehru-Gandhi family' },
  { src: '/images/ganga-aarti-night.png', alt: 'Ganga Aarti — sacred oil lamp ceremony on the banks of the holy river' },
  { src: '/images/sacred-boat-ride.png', alt: 'Sacred boat ride on the Ganga at sunrise' },
  { src: '/images/prayagraj-ghats-sunset.png', alt: 'Prayagraj ghats at golden sunset' },
  { src: '/images/sattvik-thali.png', alt: 'Traditional sattvik meal thali — pure vegetarian food for yatris' },
];

const destinations = [
  {
    name: 'Triveni Sangam',
    description: 'The sacred confluence of Ganga, Yamuna, and Saraswati — the holiest point in Prayagraj.',
    image: '/images/triveni-sangam-dawn.png',
    tag: 'Must Visit',
  },
  {
    name: 'Bade Hanuman Ji',
    description: 'Unique reclining idol of Lord Hanuman — one of the few such temples in all of India.',
    image: '/images/bade-hanuman-temple.png',
    tag: 'Sacred Temple',
  },
  {
    name: 'Kumbh Mela Ground',
    description: 'The site of the world\'s largest religious gathering — an experience of a lifetime.',
    image: '/images/kumbh-mela-diyas.png',
    tag: 'Kumbh 2026',
  },
  {
    name: 'Anand Bhavan',
    description: 'Historic residence of the Nehru-Gandhi family — a window into India\'s independence movement.',
    image: '/images/anand-bhavan.png',
    tag: 'Heritage Site',
  },
];

const features = [
  { icon: Shield, title: 'Verified & Trusted', description: 'Every property and guide vetted for quality, cleanliness, and spiritual integrity.' },
  { icon: Utensils, title: 'Sattvik Meals', description: 'Pure vegetarian food prepared with devotion — nourishing body and soul.' },
  { icon: Bed, title: 'Sacred Stays', description: 'Accommodations within minutes of Sangam, from luxury hotels to authentic Kumbh tents.' },
  { icon: Users, title: 'Expert Guidance', description: 'Local guides who explain the why behind every ritual and sacred site.' },
];

const quickPackages = [
  {
    name: 'Heritage + Spiritual',
    duration: '2N / 3D',
    highlight: 'Sangam aarti, boat ride, 3 Shakti Peeths',
    image: '/images/triveni-sangam-dawn.png',
  },
  {
    name: 'Short Getaway',
    duration: '1N / 1D',
    highlight: 'Sangam snan, darshan, local food trail',
    image: '/images/sacred-boat-ride.png',
  },
  {
    name: 'Accommodation + Food',
    duration: 'Flexible',
    highlight: 'Sacred stays, sattvik meals, near Sangam',
    image: '/images/sattvik-thali.png',
  },
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <>
      <SEO
        title="Sacred Stays & Yatra Planning in Prayagraj"
        description="Next Trip Prayagraj — premium sacred stays, Triveni Sangam yatra, Kumbh Mela 2026 packages, sattvik meals, and expert pilgrimage planning in Prayagraj (Allahabad)."
        url="https://nexttripprayagraj.com"
        keywords="Prayagraj tours, Triveni Sangam yatra, Kumbh Mela 2026 packages, sacred stays Prayagraj, sattvik meals, pilgrimage Prayagraj, Allahabad tourism, yatra planning, Sangam boat ride"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Next Trip Prayagraj",
          "url": "https://nexttripprayagraj.com",
          "description": "Premium sacred stays, Triveni Sangam yatra, Kumbh Mela 2026 packages, and sattvik meals in Prayagraj.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://nexttripprayagraj.com/packages",
            "query-input": "required name=search_term_string"
          }
        }}
      />

      {/* HERO CAROUSEL */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden" aria-label="Featured destinations carousel">
        <div className="absolute inset-0 z-0" ref={emblaRef}>
          <div className="flex h-full">
            {HERO_IMAGES.map((img, i) => (
              <div key={i} className="relative flex-[0_0_100%] h-full" aria-hidden={i !== selectedIndex}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Previous slide"
          data-testid="carousel-prev"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Next slide"
          data-testid="carousel-next"
        >
          <ArrowRight size={20} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 z-30 flex gap-2" role="tablist" aria-label="Carousel slides">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`transition-all rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${i === selectedIndex ? 'w-8 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'}`}
              role="tab"
              aria-selected={i === selectedIndex}
              aria-label={`Go to slide ${i + 1}`}
              data-testid={`carousel-dot-${i}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/30 text-white backdrop-blur-md border border-white/30 text-sm font-medium tracking-widest uppercase mb-6">
            Atithi Devo Bhava
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
            Experience the Divine Pull of{' '}
            <span className="text-amber-400">Triveni Sangam</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
            Where your stay becomes part of your sadhana. Premium accommodations, sacred yatra planning, and pure sattvik experiences in Prayagraj.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-xl" asChild data-testid="hero-packages-cta">
              <Link href="/packages">Explore Packages</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base bg-white/10 text-white hover:bg-white hover:text-foreground border-white/40 backdrop-blur-sm"
              asChild
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I want to plan a trip to Prayagraj.')}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-cta"
              >
                Book on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-card" aria-label="Why choose us">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Welcome to the Sacred Heart of India
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Prayagraj is more than a destination — it is a spiritual homecoming. Home to Triveni Sangam, Kumbh Mela, and centuries of divine tradition. We ensure your journey is seamless, comfortable, and deeply reverent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <div key={feat.title} className="bg-background border border-border rounded-2xl p-6 text-center hover:border-primary hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <feat.icon size={26} />
                </div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-2">{feat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY DESTINATIONS */}
      <section className="py-20 bg-background" aria-label="Key destinations in Prayagraj">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4">Sacred Places</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Discover Prayagraj
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <article key={dest.name} className="group rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 bg-card">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={208}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wide py-1 px-2.5 rounded-full backdrop-blur-sm">
                      {dest.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-2">
                    <MapPin size={12} />
                    <span>Prayagraj</span>
                  </div>
                  <h3 className="font-serif font-bold text-foreground text-lg mb-2">{dest.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{dest.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="py-20 bg-primary/5 border-y border-primary/10" aria-label="Featured packages">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4">Curated Journeys</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Signature Packages
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {quickPackages.map((pkg) => (
              <div key={pkg.name} className="bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all group">
                <div className="relative h-48">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={192}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs mb-1 text-white/80">
                      <Clock size={12} />
                      <span>{pkg.duration}</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg">{pkg.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm mb-4">{pkg.highlight}</p>
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="rounded-full flex-1">
                      <Link href="/packages">View Details</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="rounded-full flex-1">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`I am interested in the ${pkg.name} package.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="rounded-full shadow-md hover:shadow-lg" data-testid="all-packages-link">
              <Link href="/packages">
                View All Packages <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / QUOTE SECTION */}
      <section className="py-20 bg-primary text-primary-foreground" aria-label="Our philosophy">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Star className="w-8 h-8 mx-auto mb-6 opacity-80" />
          <blockquote className="text-2xl md:text-3xl font-serif italic font-semibold mb-6 leading-relaxed">
            "In Prayagraj, accommodation is not just a room. It is how close you are to the 4 AM temple bells."
          </blockquote>
          <p className="text-primary-foreground/70 text-lg mb-8">
            — Next Trip Prayagraj
          </p>
          <div className="w-16 h-0.5 bg-primary-foreground/30 mx-auto mb-8" />
          <p className="text-primary-foreground/80 text-base leading-relaxed">
            We serve yatris, tourists, B2B groups, and NRI pilgrims with equal reverence. Every booking is personal. Every journey, sacred.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-background" aria-label="Book your trip">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Ready to Begin Your Yatra?
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Message us on WhatsApp and we will craft the perfect spiritual journey for you — whether it is a weekend snan or a full Kumbh Mela experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full shadow-md hover:shadow-lg px-8">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I want to plan a trip to Prayagraj. Can you help?')}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-whatsapp"
              >
                Book on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link href="/contact" data-testid="cta-contact">Send an Enquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import { SEO } from '@/components/SEO';
import { CheckCircle, MapPin, Heart, Star, Users, Clock } from 'lucide-react';

const highlights = [
  { icon: MapPin, text: '5 min to Sangam options' },
  { icon: CheckCircle, text: 'Pure-veg, sattvik meals on request' },
  { icon: Users, text: 'Senior citizen & NRI assistance' },
  { icon: Star, text: 'Kumbh 2026 authorized tent bookings' },
];

const services = [
  {
    title: 'Sacred Stays',
    description:
      'Handpicked, top-rated hotels near the ghats, AC guest houses in Daraganj, Arail, and Baluaghat for early snan, quiet family hotels in Civil Lines, and authentic Kumbh tents with attached baths. Every property is verified for cleanliness, safety, and spiritual atmosphere.',
    image: '/images/triveni-sangam-dawn.png',
  },
  {
    title: 'Seamless Yatra',
    description:
      'Triveni Sangam snan, private boats at sunrise, trusted pandas for puja, Shri Bade Hanuman Ji darshan, 3 Shakti Peeth temples, and guides who explain the why behind each ritual. You focus on your darshan. We handle your stay, your meals, and your peace of mind.',
    image: '/images/sacred-boat-ride.png',
  },
  {
    title: 'Sattvik Meals',
    description:
      'Pure vegetarian sattvik food prepared with devotion. We offer local thalis, 4 AM tea service, and meals that nourish both body and spirit. Experience the divine flavors of Prayagraj — from dahi-jalebi to kachori-sabzi — prepared with traditional care.',
    image: '/images/sattvik-thali.png',
  },
];

const values = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Happy Pilgrims', value: '50,000+' },
  { label: 'Verified Properties', value: '200+' },
  { label: 'Packages Offered', value: '15+' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us — Next Trip Prayagraj"
        description="Learn about Next Trip Prayagraj — a Prayagraj-based tours and stays agency serving yatris, pilgrims, and tourists with sacred stays, yatra planning, and sattvik meals."
        url="https://nexttripprayagraj.com/about"
        keywords="about Next Trip Prayagraj, Prayagraj tour agency, pilgrimage travel agency India, sacred stays Allahabad, yatra planning company, sattvik meals provider Prayagraj, Kumbh Mela agency"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Next Trip Prayagraj",
          "url": "https://nexttripprayagraj.com",
          "logo": "https://nexttripprayagraj.com/favicon.svg",
          "description": "Prayagraj-based tours and stays agency for yatris, pilgrims, and tourists.",
          "foundingLocation": {
            "@type": "Place",
            "name": "Prayagraj, Uttar Pradesh, India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9999999999",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          }
        }}
      />

      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/90 z-10" />
        <img
          src="/images/ganga-aarti-night.png"
          alt="Ganga Aarti"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Where Your Stay Becomes Part of Your Sadhana
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Next Trip Prayagraj (Triveni Sangam)
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 text-center">
              <p className="text-xl text-foreground font-medium leading-relaxed">
                In Prayagraj, accommodation is not just a room.
              </p>
              <p className="leading-relaxed">
                It is how close you are to the 4 AM temple bells. It is whether you can see Sangam from your window.
                It is whether your meals are sattvik and your mornings begin with Ganga aarti, not traffic.
              </p>
              <p className="leading-relaxed">
                We are a Prayagraj-based tours and stays agency built for yatris and tourists — both B2B and B2C.
                We have spent over a decade building relationships with the finest properties, most trusted pandas, and most
                experienced guides in the holy city. When you travel with us, you are not just booking a trip. You are
                beginning a pilgrimage.
              </p>
            </div>

            {/* Tagline Block */}
            <div className="mt-14 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <p className="text-2xl md:text-3xl font-serif italic text-primary font-semibold">
                "Atithi Devo Bhava"
              </p>
              <p className="text-muted-foreground mt-3 text-lg">
                is not our tagline. It is our tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {values.map((v) => (
              <div key={v.label}>
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">{v.value}</div>
                <div className="text-primary-foreground/70 text-sm uppercase tracking-wider">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
              >
                <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 object-cover"
                    loading="lazy"
                    width={600}
                    height={288}
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{service.title}</h3>
                  <div className="w-10 h-1 bg-primary rounded-full" />
                  <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4">Key Benefits</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Why Choose Us</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {highlights.map((h) => (
              <div
                key={h.text}
                className="bg-card border border-border rounded-2xl p-6 text-center flex flex-col items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <h.icon size={28} />
                </div>
                <p className="font-semibold text-foreground text-sm leading-snug">{h.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are a team that believes every yatri deserves to arrive at the Sangam with a clean heart, a full stomach,
              and no logistical worries. That is what we deliver — every single time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

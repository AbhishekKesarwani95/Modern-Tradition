import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Check } from 'lucide-react';

const WHATSAPP_NUMBER = '919999999999';

function waLink(packageName: string) {
  const text = encodeURIComponent(`Hello! I am interested in the ${packageName}. Please share more details.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

const packages = [
  {
    id: 1,
    name: 'Heritage + Spiritual Package',
    subtitle: 'Discover Prayagraj: The Sacred Sangam',
    duration: '2N / 3D',
    tag: 'Most Popular',
    image: '/images/triveni-sangam-dawn.png',
    description:
      'Experience the soul of India where the Ganga, Yamuna, and the mystical Saraswati meet.',
    inclusions: [
      'Triveni Sangam aarti & guided boat ride at sunrise',
      'Shri Bade Hanuman Ji darshan',
      '3 Shakti Peeth temples',
      'Shri Nagvasuki Mandir & Shri Veni Madhav',
      'Anand Bhavan & Akbar Fort',
      'Allahabad Museum visit',
      'Top-rated AC stay & private cab',
      'Local veg meals & evening cultural walk at Chowk',
    ],
  },
  {
    id: 2,
    name: 'Short Getaway Package',
    subtitle: 'Prayagraj in 24 Hours',
    duration: '1N / 1D',
    tag: 'Weekender Special',
    image: '/images/bade-hanuman-temple.png',
    description:
      'Short on time, big on experience. A crisp, curated plan that covers the heart of Prayagraj.',
    inclusions: [
      'Sangam snan',
      'Bade Hanuman Ji darshan',
      'Shri Nagvasuki Mandir & Shri Veni Madhav',
      'Anand Bhavan & Company Bagh',
      'AC stay & taxi',
      'Dahi-jalebi at Loknath',
      'Kachori-sabzi at Rambhawan',
      'Banarasi paan food trail',
    ],
  },
  {
    id: 3,
    name: 'Kumbh / Mela Special Package',
    subtitle: 'Mahakumbh Prayagraj: Once in a Lifetime',
    duration: 'Kumbh Mela',
    tag: 'Limited Seats',
    image: '/images/kumbh-mela-diyas.png',
    description:
      'Be part of the world\'s largest spiritual gathering. A once-in-a-lifetime experience at Mahakumbh.',
    inclusions: [
      'Tented accommodation near Sangam',
      'Priority bathing slots on Shahi Snan dates',
      'Guided walks through mela grounds',
      '24x7 medical & security support',
      'Sattvik meals throughout',
      'Naga sadhu akhada darshan',
      'Cultural evenings',
      'Photo permit assistance',
    ],
  },
  {
    id: 4,
    name: 'History + Food Trail Package',
    subtitle: 'Allahabad: Freedom, Forts & Flavours',
    duration: '1N / 1D',
    tag: 'Heritage Trail',
    image: '/images/anand-bhavan.png',
    description:
      'Walk the lanes that shaped India\'s freedom story — paired with an unforgettable culinary journey.',
    inclusions: [
      'Anand Bhavan & Swaraj Bhavan',
      'Khusro Bagh heritage garden',
      'Allahabad Fort exterior',
      'University of Allahabad',
      'Kachori-sabzi at Loknath',
      'Chaat at Civil Lines',
      'Sweets at Sulaki',
      'AC hotel, AC cab & storyteller guide',
    ],
  },
  {
    id: 5,
    name: 'Accommodation + Food Package',
    subtitle: 'Sacred Stays & Sattvik Meals — Designed for Your Yatra',
    duration: 'Flexible',
    tag: 'Pure Comfort',
    image: '/images/sattvik-thali.png',
    description:
      'Handpicked stays with pure sattvik meals for the yatri who needs comfort and spiritual ambience.',
    inclusions: [
      'AC & non-AC stay options',
      'Options near Sangam for early snan',
      'Family rooms available',
      'Local vegetarian thali',
      '4 AM tea service',
      'Pure-veg sattvik meals',
      'Verified for cleanliness & safety',
      'Spiritual atmosphere guaranteed',
    ],
  },
];

export default function Packages() {
  return (
    <>
      <SEO
        title="Travel Packages — Next Trip Prayagraj"
        description="Explore our curated travel packages for Prayagraj — Heritage & Spiritual tours, Kumbh Mela packages, Short Getaway, History & Food Trail, and Sacred Stay packages."
        url="https://nexttripprayagraj.com/packages"
      />

      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/90 z-10" />
        <img
          src="/images/prayagraj-ghats-sunset.png"
          alt="Prayagraj ghats at sunset"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Our Packages</h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Curated yatra and travel experiences for every pilgrim
          </p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4">Choose Your Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Sacred Experiences Await
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every package is carefully designed to give you the most authentic, comfortable, and spiritually enriching experience in Prayagraj.
            </p>
          </div>

          <div className="space-y-10 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <article
                key={pkg.id}
                data-testid={`package-card-${pkg.id}`}
                className={`bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-2/5 relative">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-60 md:h-full object-cover"
                    loading="lazy"
                    width={500}
                    height={400}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                      {pkg.tag}
                    </span>
                  </div>
                </div>

                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <Clock size={14} />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <MapPin size={14} />
                        <span>Prayagraj</span>
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-1">{pkg.name}</h3>
                    <p className="text-primary font-medium text-sm italic mb-3">"{pkg.subtitle}"</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{pkg.description}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-6">
                      {pkg.inclusions.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                          <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      asChild
                      data-testid={`book-package-${pkg.id}`}
                      className="rounded-full shadow-md hover:shadow-lg transition-all"
                    >
                      <a
                        href={waLink(pkg.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Book the ${pkg.name} on WhatsApp`}
                      >
                        Book This Package
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="rounded-full"
                    >
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`I have a question about the ${pkg.name}. Can you help?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enquire about ${pkg.name} on WhatsApp`}
                      >
                        Enquire
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Custom Package CTA */}
          <div className="mt-16 text-center bg-primary/5 border border-primary/20 rounded-2xl p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Need a Custom Package?</h3>
            <p className="text-muted-foreground mb-6">
              We can build a completely personalized yatra experience for you — tailored to your dates, budget, group size, and spiritual needs.
            </p>
            <Button asChild size="lg" className="rounded-full shadow-md hover:shadow-lg">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('I would like to discuss a custom package for Prayagraj.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Custom Package
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

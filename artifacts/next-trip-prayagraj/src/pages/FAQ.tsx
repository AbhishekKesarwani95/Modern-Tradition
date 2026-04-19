import { SEO } from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '919999999999';

const faqs = [
  {
    question: 'What is Triveni Sangam?',
    answer:
      'Triveni Sangam is the sacred confluence of three rivers — the Ganga, Yamuna, and the mythical Saraswati — at Prayagraj. It is considered one of the holiest places in Hinduism. Taking a dip (snan) at the Sangam is believed to cleanse sins and bring moksha. The site is also the venue for the Kumbh Mela, the world\'s largest religious gathering.',
  },
  {
    question: 'What is sattvik food?',
    answer:
      'Sattvik food is pure vegetarian food prepared without onion, garlic, meat, eggs, or alcohol. It is considered the most spiritually pure diet in Indian tradition and is ideal for yatris and pilgrims. Our accommodations and meal services strictly follow sattvik principles — nourishing for both body and soul.',
  },
  {
    question: 'Are your stays located near the Sangam?',
    answer:
      'Yes! We have handpicked accommodations just 5 minutes from the Sangam — including guest houses in Daraganj, Arail, and Baluaghat. These locations are perfect for early morning snan. We also offer options in Civil Lines for those seeking a more urban base, and authenticated Kumbh tents with attached baths right at the mela grounds.',
  },
  {
    question: 'Is Kumbh Mela 2026 booking available?',
    answer:
      'Yes, we are an authorized provider for Kumbh Mela 2026 tent bookings. Our Kumbh packages include prime tented accommodation near Sangam, priority access on Shahi Snan dates, 24x7 medical and security support, sattvik meals, and guided akhada darshan. Seats are extremely limited — we strongly recommend booking early.',
  },
  {
    question: 'Can you arrange puja at Triveni Sangam?',
    answer:
      'Absolutely. We work with trusted and experienced pandas (traditional priests) at the Sangam who perform rituals with full authenticity — including Sangam snan puja, ancestral rites (Pitru Tarpan), Mundan (first haircut ceremony), and other sanskars. Our guides also explain the significance of each ritual in detail.',
  },
  {
    question: 'Do you provide assistance for senior citizens?',
    answer:
      'Yes, we have specialized support for senior citizens and elderly pilgrims. This includes wheelchair assistance where needed, slower-paced itineraries, accommodations with ground-floor rooms, special dietary arrangements, and dedicated guides who take extra care. We also assist NRI pilgrims with language, logistics, and documentation.',
  },
  {
    question: 'What is the best time to visit Prayagraj?',
    answer:
      'The best time to visit Prayagraj is from October to March when the weather is pleasant and cool. Maghi Purnima (January/February) and Kumbh/Ardh Kumbh periods are particularly auspicious. The monsoon season (July-September) can make ghat access difficult. For the Mahakumbh, the Shahi Snan dates are the most sacred but also the most crowded.',
  },
  {
    question: 'How do I book a package?',
    answer:
      'The simplest way to book is via WhatsApp — click any "Book This" button on our Packages page or reach us directly at +91-9999999999. You can also fill our Contact/Enquiry form and we will get back to you within 2-3 hours. For customized packages, a brief call or chat is usually all we need.',
  },
  {
    question: 'Do you offer NRI packages?',
    answer:
      'Yes. We have served thousands of NRI pilgrims from the USA, UK, Canada, and the Middle East. We offer complete end-to-end assistance including airport pickups from Prayagraj airport or Varanasi, Hindi/English bilingual guides, hassle-free puja coordination, and accommodations that match international standards of hygiene and comfort.',
  },
  {
    question: 'Are strictly vegetarian (sattvik) meals guaranteed?',
    answer:
      'Yes. All our included meals are strictly pure-veg and sattvik — no onion, no garlic, no non-vegetarian items. We work exclusively with verified kitchens and cooks who adhere to these standards. If you have any other dietary requirements (Jain food, allergies, etc.), please inform us when booking and we will accommodate you.',
  },
  {
    question: 'What is included in the package price?',
    answer:
      'Package inclusions vary per package and are listed in detail on the Packages page. In general, our packages include accommodation, meals (as specified), private cab/taxi, entry fees, guide charges, and any mentioned activities. International flights, personal expenses, tips, and optional add-ons are not included unless explicitly stated.',
  },
  {
    question: 'Can I customize a package to suit my needs?',
    answer:
      'Absolutely. We specialize in custom yatra planning. You can mix and match destinations, adjust the number of days, choose your accommodation category, add puja rituals, include day trips to Varanasi or Chitrakoot, and tailor the food menu. Contact us via WhatsApp or our enquiry form with your requirements.',
  },
  {
    question: 'Is it safe to travel to Kumbh Mela?',
    answer:
      'Yes. The Kumbh Mela is one of the largest, most well-organized events in the world. Our Kumbh packages include dedicated guides, 24x7 medical support, security personnel, and clearly mapped routes so you are never lost. We brief all guests on safety protocols and provide emergency contact numbers. Millions visit every Kumbh safely.',
  },
  {
    question: 'What is included in the boat ride at Sangam?',
    answer:
      'Our guided boat ride at sunrise includes a private wooden boat with experienced boatman, life jackets, guidance to the exact confluence point, time for sacred dip (snan) if desired, and beautiful views of the Ganga-Yamuna meeting. The ride usually lasts 45-60 minutes. Photographers are welcome onboard to capture the magical dawn light.',
  },
  {
    question: 'How do I reach Prayagraj?',
    answer:
      'Prayagraj is well connected. By air: Prayagraj Airport (IXD) has flights from Delhi, Mumbai, Bengaluru. By train: Prayagraj Junction is a major railway hub connected to all major cities. By road: Well connected via NH-19 (Delhi-Kolkata highway). We offer airport/station pickups as part of our packages — just let us know your arrival details.',
  },
];

export default function FAQ() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions — Next Trip Prayagraj"
        description="Find answers to common questions about visiting Prayagraj — Triveni Sangam, Kumbh Mela 2026 packages, sattvik meals, sacred stays, puja arrangements, and more."
        url="https://nexttripprayagraj.com/faq"
        keywords="Prayagraj FAQ, Triveni Sangam questions, Kumbh Mela 2026 information, sattvik food Prayagraj, pilgrimage travel tips, sacred stays questions, yatra planning guide"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Everything you need to know before your sacred journey
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4">Help Centre</span>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Have Questions? We Have Answers.</h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  data-testid={`faq-item-${i}`}
                  className="bg-card border border-border rounded-xl px-4 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 rounded-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still have questions? */}
            <div className="mt-14 text-center bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is available on WhatsApp to answer any specific queries about your yatra.
              </p>
              <Button asChild className="rounded-full shadow-md hover:shadow-lg">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('I have a question about visiting Prayagraj.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                >
                  Chat With Us on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

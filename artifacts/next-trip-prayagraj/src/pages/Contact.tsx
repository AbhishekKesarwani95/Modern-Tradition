import { SEO } from '@/components/SEO';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '919999999999';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  packageInterest: z.string().min(1, 'Please select a package'),
  travelDate: z.string().min(1, 'Please enter your travel date'),
  travelers: z.string().min(1, 'Please enter number of travelers'),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const packages = [
  'Heritage + Spiritual Package (2N/3D)',
  'Short Getaway Package (1N/1D)',
  'Kumbh / Mela Special Package',
  'History + Food Trail Package (1N/1D)',
  'Accommodation + Food Package',
  'Custom / Not Sure Yet',
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+91-9999999999',
    href: 'tel:+919999999999',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@nexttripprayagraj.com',
    href: 'mailto:info@nexttripprayagraj.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Prayagraj (Allahabad), Uttar Pradesh, India',
    href: '#',
  },
];

export default function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      packageInterest: '',
      travelDate: '',
      travelers: '',
      message: '',
    },
  });

  function onSubmit(values: ContactFormValues) {
    const text = encodeURIComponent(
      `*New Enquiry from nexttripprayagraj.com*\n\n` +
        `*Name:* ${values.name}\n` +
        `*Email:* ${values.email}\n` +
        `*Phone:* ${values.phone}\n` +
        `*Package Interest:* ${values.packageInterest}\n` +
        `*Travel Date:* ${values.travelDate}\n` +
        `*Number of Travelers:* ${values.travelers}\n` +
        `*Message:* ${values.message || 'No additional message'}\n\n` +
        `Please help me plan my Prayagraj yatra.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <SEO
        title="Contact & Enquiry — Next Trip Prayagraj"
        description="Get in touch with Next Trip Prayagraj to plan your sacred yatra. WhatsApp us for package bookings, custom itineraries, and Kumbh Mela 2026 reservations."
        url="https://nexttripprayagraj.com/contact"
      />

      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/90 z-10" />
        <img
          src="/images/triveni-sangam-dawn.png"
          alt="Triveni Sangam"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Begin your sacred journey with a single message
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4">Reach Us</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">We Are Here to Help</h2>
                <div className="w-10 h-1 bg-primary rounded-full mb-5" />
                <p className="text-muted-foreground leading-relaxed">
                  Whether you want to book a package, customize your itinerary, or simply have a question about Prayagraj —
                  our team is always ready to help. We respond within 2-3 hours on WhatsApp.
                </p>
              </div>

              <div className="space-y-4 mt-8">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp Quick CTA */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5 dark:bg-green-900/20 dark:border-green-800">
                <p className="text-sm text-green-800 dark:text-green-300 font-medium mb-3">
                  Fastest response via WhatsApp
                </p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I want to enquire about Prayagraj packages.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <FaWhatsapp className="mr-2" size={18} />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Send an Enquiry</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your full name"
                              data-testid="input-name"
                              className="rounded-lg"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="your@email.com"
                              data-testid="input-email"
                              className="rounded-lg"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              placeholder="+91 XXXXX XXXXX"
                              data-testid="input-phone"
                              className="rounded-lg"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="travelers"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Travelers *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="number"
                              min="1"
                              placeholder="e.g. 2"
                              data-testid="input-travelers"
                              className="rounded-lg"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="packageInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Package Interest *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-package" className="rounded-lg">
                                <SelectValue placeholder="Select a package" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {packages.map((pkg) => (
                                <SelectItem key={pkg} value={pkg}>
                                  {pkg}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="travelDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Travel Date *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="date"
                              data-testid="input-date"
                              className="rounded-lg"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            placeholder="Tell us about your specific requirements, preferred accommodation, dietary needs, etc."
                            data-testid="textarea-message"
                            className="rounded-lg resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    data-testid="button-submit"
                    className="w-full rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    <FaWhatsapp className="mr-2" size={18} />
                    Send via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Clicking "Send via WhatsApp" will open WhatsApp with your enquiry pre-filled. We reply within 2-3 hours.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

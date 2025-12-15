
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { products, industries, offices, services } from '@/lib/data';
import { ArrowRight, Truck, Home as HomeIcon, Wrench, DraftingCompass, Cog, Box, Star } from 'lucide-react';
import IndustryCard from '@/components/ui/industry-card';
import { Timeline } from '@/components/ui/timeline';
import { AnimatedHeadline } from '@/components/animated-headline';
import { AnimatedNumber } from '@/components/animated-number';
import { Marquee } from '@/components/ui/marquee';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { IndiaMap } from '@/components/ui/india-map';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-trailer');

const stats = [
  { value: 10000, label: 'Trailers Delivered', isPlus: true },
  { value: 15, label: 'Engineering Expertise', isPlus: true, unit: ' Years' },
  { value: 7, label: 'Pan-India Presence', isPlus: false, unit: ' Locations' },
  { value: 0, label: 'ISO Certified', isPlus: false, unit: 'ISO Certified' },
];

const whyChooseUs = [
    {
        title: 'High-Strength Engineering',
        description: 'We use certified BSK46 and IS2062 steel for maximum durability and performance.',
    },
    {
        title: 'ISO & CMVR Compliance',
        description: 'All products follow industry-standard certifications ensuring safety, quality, and reliability.',
    },
    {
        title: 'Advanced Fabrication',
        description: 'State-of-the-art CNC, welding, and forming machines ensure precision manufacturing.',
    },
    {
        title: 'Custom Engineering',
        description: 'We design and build trailers tailored to your load, industry, and operational needs.',
    },
];

const manufacturingCapabilities = [
    {
        title: 'High-Precision CNC Cutting',
        content: (
            <div className="p-6 bg-secondary rounded-lg border">
                <p className="text-muted-foreground text-sm">Accuracy and consistency for all structural components, ensuring perfect fit and finish.</p>
            </div>
        )
    },
    {
        title: 'MIG & TIG Welding',
        content: (
             <div className="p-6 bg-secondary rounded-lg border">
                <p className="text-muted-foreground text-sm">Strong, clean welds that ensure long-life and safe operation under the most demanding loads.</p>
            </div>
        )
    },
    {
        title: 'Shot Blasting',
        content: (
             <div className="p-6 bg-secondary rounded-lg border">
                <p className="text-muted-foreground text-sm">A superior surface preparation process that ensures perfect paint adhesion and excellent corrosion resistance.</p>
            </div>
        )
    },
    {
        title: 'Epoxy & PU Coating',
        content: (
             <div className="p-6 bg-secondary rounded-lg border">
                <p className="text-muted-foreground text-sm">A robust two-coat system for long-term protection against harsh weather and tough operating environments.</p>
            </div>
        )
    },
];

const certifications = [
    'IS 2825 Class-3',
    'IS 1210',
    'IS 2062',
    'CMVR Standards',
    'ISO Manufacturing',
    'PESO Compliance',
    'ARAI Homologation'
];

const serviceIconMap: { [key: string]: React.ReactNode } = {
  'designing-homologation': <DraftingCompass className="h-10 w-10 text-primary" />,
  'structural-fabrication': <Wrench className="h-10 w-10 text-primary" />,
  'spare-parts': <Cog className="h-10 w-10 text-primary" />,
  'transport-logistics': <Truck className="h-10 w-10 text-primary" />,
  'custom-engineering': <Star className="h-10 w-10 text-primary" />,
  'container-conversions': <Box className="h-10 w-10 text-primary" />,
};

const trailersTags = [
    { name: 'Cement Bulker', href: '/products/trailers/cement-bulker' },
    { name: 'Flatbed', href: '/products/trailers/flatbed' },
    { name: 'Skeletal (20ft/40ft)', href: '/products/trailers/skeletal' },
    { name: 'Side-Wall (Domex/Shelma)', href: '/products/trailers/side-wall' },
    { name: 'Custom Heavy-Duty Trailers', href: '/products/trailers/custom' },
];

const cabinsTags = [
    { name: 'Office Cabins', href: '/products/cabins/office' },
    { name: 'House Cabins', href: '/products/cabins/house' },
    { name: 'ACP Cabins', href: '/products/cabins/acp' },
    { name: 'Security Cabins', href: '/products/cabins/security' },
    { name: 'Toilet Cabins', href: '/products/cabins/toilet' },
    { name: 'Bunk Cabins', href: '/products/cabins/bunk-house' },
    { name: 'Shop/Hotel Cabins', href: '/products/cabins/shop-hotel' },
    { name: 'Used Shipping Containers', href: '/services/container-conversions' },
    { name: 'Container Conversions', href: '/services/container-conversions' },
    { name: 'G+1 Cabins', href: '/products/cabins/double-storey' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 lg:py-24">
          <div className="space-y-6 text-center md:text-left">
            <AnimatedHeadline className="font-headline text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              High-Performance Trailers & Modular Cabin Solutions.
            </AnimatedHeadline>
            <motion.p 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-muted-foreground md:text-xl">
              Engineering excellence for logistics, construction, cement, ports, steel, and industrial sectors across India.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <Link href="/quote">Request Quote</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center relative">
              <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-3xl -z-10"></div>
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={450}
                priority
                className="rounded-lg object-cover shadow-2xl aspect-[4/3]"
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats-section">
        <div className="container mx-auto">
            <div className="stats-grid">
                {stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                        <h3>
                          {stat.value > 0 && <AnimatedNumber value={stat.value} />}
                          {stat.isPlus && stat.value > 0 ? '+' : ''}
                          {stat.value === 0 ? stat.unit : ''}
                        </h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Why Choose Thorat Motors?</h2>
            <div className="mt-2 h-1.5 w-24 mx-auto bg-accent"></div>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="group relative">
                <Card className="why-card h-full transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-accent">
                   <div className="absolute top-0 left-0 h-full w-1 bg-accent scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></div>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Section V2 */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Our Products</h2>
            <div className="mt-2 h-1.5 w-24 mx-auto bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Trailers Card */}
            <div className="product-card-v2">
                <div className="p-6">
                  <Truck className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-headline text-2xl font-bold mb-4">Trailers</h3>
                  <div className="mb-4">
                      {trailersTags.map(tag => (
                        <Link key={tag.name} href={tag.href} className="product-tag hover:bg-primary/20 transition-colors hover:shadow-md hover:border-accent/50 border border-transparent">{tag.name}</Link>
                      ))}
                  </div>
                  <Link href="/products/trailers" className="text-accent font-semibold flex items-center hover:underline">
                    View All Trailers <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
            </div>
            {/* Cabins Card */}
            <div className="product-card-v2">
                <div className="p-6">
                  <HomeIcon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-headline text-2xl font-bold mb-4">Portable Cabins</h3>
                  <div className="mb-4">
                      {cabinsTags.map(tag => (
                        <Link key={tag.name} href={tag.href} className="product-tag hover:bg-primary/20 transition-colors hover:shadow-md hover:border-accent/50 border border-transparent">{tag.name}</Link>
                      ))}
                  </div>
                  <Link href="/products/cabins" className="text-accent font-semibold flex items-center hover:underline">
                      View All Cabins <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Our Services</h2>
            <div className="mt-2 h-1.5 w-24 mx-auto bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link href={`/services/${service.id}`} key={service.id} className="group block">
                <Card className="flex flex-col h-full overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl hover:border-accent hover:-translate-y-1">
                  <CardHeader className="flex-row items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      {serviceIconMap[service.id]}
                    </div>
                    <CardTitle className="font-headline text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <CardDescription className="flex-grow">{service.description}</CardDescription>
                     <div className="mt-4 self-start text-accent font-semibold flex items-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities Section */}
       <section className="manufacturing-section bg-secondary">
          <Timeline 
            data={manufacturingCapabilities} 
            title="Manufacturing Excellence"
            description="Our state-of-the-art facility is equipped with advanced machinery to ensure precision, durability, and a flawless finish in every product we deliver."
          />
      </section>

      {/* Industries Section */}
      <section className="industries-section bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Serving Diverse Industries</h2>
            <div className="mt-2 h-1.5 w-24 mx-auto bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Presence Section */}
      <section className="locations-section py-16 lg:py-24">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Nationwide Presence</h2>
            <div className="mt-2 h-1.5 w-24 mx-auto bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative aspect-[4/3] md:aspect-auto h-full min-h-[300px]">
              <IndiaMap hoveredCity={hoveredCity} />
            </motion.div>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {offices.map((location) => (
                <motion.div
                  key={location.city}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredCity(location.city)}
                  onMouseLeave={() => setHoveredCity(null)}
                >
                  <Link href="/contact">
                    <Card className="location-card p-4 transition-all duration-300 hover:bg-secondary hover:shadow-lg hover:-translate-y-1 hover:border-accent">
                      <CardContent className="p-0 text-left">
                        <p className="font-bold text-lg text-foreground">{location.city}</p>
                        <p className="text-sm text-muted-foreground">{location.descriptor}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">View Our Network</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Certifications & Compliance</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  Our products adhere to strict quality and safety standards:
              </p>
              <div className="relative mt-8">
                <Marquee pauseOnHover>
                  {certifications.map(cert => (
                      <div key={cert} className="mx-4">
                         <div className="border bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm">{cert}</div>
                      </div>
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-secondary to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-secondary to-transparent"></div>
              </div>
          </div>
      </section>


       {/* CTA Section */}
       <section className="cta-banner">
        <div className="container mx-auto px-4 py-16 text-center lg:py-24">
          <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">
            Ready to Build Your Solution?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Let our experts help you design and engineer the perfect trailer or cabin for your business needs.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

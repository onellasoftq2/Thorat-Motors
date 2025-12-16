
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { products, industrySolutions, offices, services } from '@/lib/data';
import { ArrowRight, Truck, Home as HomeIcon, Wrench, DraftingCompass, Cog, Box, Star, Check, Layers } from 'lucide-react';
import IndustryCard from '@/components/ui/industry-card';
import { Timeline } from '@/components/ui/timeline';
import { AnimatedHeadline } from '@/components/animated-headline';
import { AnimatedNumber } from '@/components/animated-number';
import { Marquee } from '@/components/ui/marquee';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { IndiaMap } from '@/components/ui/india-map';
import { CategoryList, type Category } from '@/components/ui/category-list';
import { StickyFeatureSection } from '@/components/ui/sticky-scroll-cards-section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-trailer');

const stats = [
  { value: 10000, label: 'Trailers Delivered', isPlus: true },
  { value: 15, label: 'Engineering Expertise', isPlus: true, unit: ' Years' },
  { value: 7, label: 'Pan-India Presence', isPlus: false, unit: ' Locations' },
  { value: 0, label: 'ISO Certified', isPlus: false, unit: 'ISO Certified' },
];

const manufacturingCapabilities = [
    {
        title: 'High-Precision CNC Cutting',
        content: (
            <div className="p-6 bg-secondary rounded-lg border">
                <p className="text-muted-foreground text-base">Accuracy and consistency for all structural components, ensuring perfect fit and finish.</p>
            </div>
        )
    },
    {
        title: 'MIG & TIG Welding',
        content: (
             <div className="p-6 bg-secondary rounded-lg border">
                <p className="text-muted-foreground text-base">Strong, clean welds that ensure long-life and safe operation under the most demanding loads.</p>
            </div>
        )
    },
    {
        title: 'Shot Blasting',
        content: (
             <div className="p-6 bg-secondary rounded-lg border">
                <p className="text-muted-foreground text-base">A superior surface preparation process that ensures perfect paint adhesion and excellent corrosion resistance.</p>
            </div>
        )
    },
    {
        title: 'Epoxy & PU Coating',
        content: (
             <div className="p-6 bg-secondary rounded-lg border">
                <p className="text-muted-foreground text-base">A robust two-coat system for long-term protection against harsh weather and tough operating environments.</p>
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
    { name: 'G+1 Cabins', href: '/products/cabins/double-storey' },
];

const containersTags = [
    { name: 'Used Shipping Containers', href: '/services/container-conversions' },
    { name: 'Container Conversions', href: '/services/container-conversions' },
    { name: 'Office Conversions', href: '/services/container-conversions' },
    { name: 'Retail/Shop Conversions', href: '/services/container-conversions' },
    { name: 'Storage Containers', href: '/services/container-conversions' },
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

const iconMap: { [key: string]: React.ReactNode } = {
  'designing-homologation': <DraftingCompass className="h-12 w-12 text-primary" />,
  'structural-fabrication': <Wrench className="h-12 w-12 text-primary" />,
  'spare-parts': <Cog className="h-12 w-12 text-primary" />,
  'transport-logistics': <Truck className="h-12 w-12 text-primary" />,
  'custom-engineering': <Star className="h-12 w-12 text-primary" />,
  'container-conversions': <Box className="h-12 w-12 text-primary" />,
};


export default function Home() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const router = useRouter();

  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const serviceCategories: Category[] = services.map(service => ({
    id: service.id,
    title: service.name,
    subtitle: service.description,
    icon: <ArrowRight className="w-8 h-8" />,
    onClick: () => router.push(`/services/${service.id}`),
  }));

  return (
    <div className='overflow-x-hidden'>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8 lg:py-24">
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
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
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
      
      <StickyFeatureSection />

      {/* Our Products Section V2 */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Our Products</h2>
            <div className="mt-2 h-1.5 w-24 mx-auto bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            {/* Containers Card */}
            <div className="product-card-v2">
                <div className="p-6">
                  <Box className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-headline text-2xl font-bold mb-4">Containers & Conversions</h3>
                  <div className="mb-4">
                      {containersTags.map(tag => (
                        <Link key={tag.name} href={tag.href} className="product-tag hover:bg-primary/20 transition-colors hover:shadow-md hover:border-accent/50 border border-transparent">{tag.name}</Link>
                      ))}
                  </div>
                  <Link href="/services/container-conversions" className="text-accent font-semibold flex items-center hover:underline">
                      View Conversion Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <CategoryList
              title="Our Services"
              categories={serviceCategories}
            />
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

      {/* Industry-Specific Solutions Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Industry-Specific Solutions</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Tailored trailers, cabins, and container solutions designed for real-world industrial applications.
                </p>
            </div>
            
            {/* Desktop View: Hover-driven */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="lg:col-span-1 sticky top-24">
                    <ul className="flex flex-col space-y-2">
                        {industrySolutions.map((solution, index) => (
                            <li
                                key={solution.id}
                                onMouseEnter={() => setSelectedIndustry(index)}
                                className={cn(
                                    'w-full text-left p-4 rounded-lg transition-all duration-300 border-l-4 cursor-pointer',
                                    selectedIndustry === index
                                    ? 'bg-secondary shadow-md border-accent'
                                    : 'bg-transparent border-transparent'
                                )}
                            >
                                <p className="font-bold text-foreground text-lg">{solution.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedIndustry}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl text-primary">{industrySolutions[selectedIndustry].name}</CardTitle>
                                    <CardDescription>{industrySolutions[selectedIndustry].description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <h4 className="font-semibold mb-4">Relevant Solutions:</h4>
                                    <ul className="space-y-3">
                                        {industrySolutions[selectedIndustry].solutions.map((item, index) => (
                                            <motion.li 
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1}}
                                                className="flex items-center"
                                            >
                                                <Check className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                                                <span>{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <Button asChild variant="link" className="px-0 mt-6 text-accent font-semibold">
                                        <Link href={`/industries#${industrySolutions[selectedIndustry].id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Mobile View: Accordion */}
            <div className="lg:hidden">
              <Accordion type="single" collapsible defaultValue="item-0">
                  {industrySolutions.map((solution, index) => (
                      <AccordionItem value={`item-${index}`} key={solution.id}>
                          <AccordionTrigger>{solution.name}</AccordionTrigger>
                          <AccordionContent>
                               <Card className="shadow-lg">
                                <CardHeader>
                                    <CardDescription>{solution.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <h4 className="font-semibold mb-4">Relevant Solutions:</h4>
                                    <ul className="space-y-3">
                                        {solution.solutions.map((item, solIndex) => (
                                            <li key={solIndex} className="flex items-center">
                                                <Check className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button asChild variant="link" className="px-0 mt-6 text-accent font-semibold">
                                        <Link href={`/industries#${solution.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </CardContent>
                            </Card>
                          </AccordionContent>
                      </AccordionItem>
                  ))}
              </Accordion>
            </div>
        </div>
      </section>


      {/* Nationwide Presence Section */}
      <section className="locations-section py-16 lg:py-24">
        <motion.div
          className="container mx-auto px-4 md:px-6 lg:px-8"
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
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
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
        <div className="container mx-auto px-4 py-16 text-center lg:py-24 md:px-6 lg:px-8">
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

    

    

    

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
import { products, industrySolutions, offices, services, whyChooseUs } from '@/lib/data';
import { ArrowRight, Truck, Home as HomeIcon, Wrench, DraftingCompass, Cog, Box, Star, Check, Layers } from 'lucide-react';
import IndustryCard from '@/components/ui/industry-card';
import { Timeline } from '@/components/ui/timeline';
import { AnimatedNumber } from '@/components/animated-number';
import { Marquee } from '@/components/ui/marquee';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { IndiaMap } from '@/components/ui/india-map';
import { CategoryList, type Category } from '@/components/ui/category-list';
import { AnimatedElement } from '@/components/ui/animated-element';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const stats = [
  { value: 10000, label: 'Trailers Delivered', isPlus: true },
  { value: 15, label: 'Engineering Expertise', isPlus: true, unit: ' Years' },
  { value: 7, label: 'Pan-India Presence', isPlus: false, unit: ' Locations' },
  { value: 0, label: 'ISO Certified', isPlus: false, unit: 'ISO 9001' },
];

const manufacturingCapabilities = [
    {
        title: 'High-Precision CNC Cutting',
        content: (
            <div className="p-6 bg-secondary rounded-lg border shadow-md">
                <p className="text-muted-foreground text-base">Accuracy and consistency for all structural components, ensuring perfect fit and finish.</p>
            </div>
        )
    },
    {
        title: 'MIG & TIG Welding',
        content: (
             <div className="p-6 bg-secondary rounded-lg border shadow-md">
                <p className="text-muted-foreground text-base">Strong, clean welds that ensure long-life and safe operation under the most demanding loads.</p>
            </div>
        )
    },
    {
        title: 'Shot Blasting',
        content: (
             <div className="p-6 bg-secondary rounded-lg border shadow-md">
                <p className="text-muted-foreground text-base">A superior surface preparation process that ensures perfect paint adhesion and excellent corrosion resistance.</p>
            </div>
        )
    },
    {
        title: 'Epoxy & PU Coating',
        content: (
             <div className="p-6 bg-secondary rounded-lg border shadow-md">
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

const heroTexts = [
  {
    category: "Design & Homologation",
    heading: "Design. Test. Approve.",
    subheading: "End-to-end vehicle design and regulatory homologation."
  },
  {
    category: "Manufacturing",
    heading: "Design With Confidence",
    subheading: "AIS and CMVR compliant engineering solutions."
  },
  {
    category: "Transportation",
    heading: "Built For Compliance",
    subheading: "Safe, tested, and road-ready vehicle designs."
  }
];

const manufacturingChips = [
    { name: 'Cement Bulkers' },
    { name: 'Rigid Vehicle' },
    { name: 'Tipping Bulkers' },
    { name: 'Food Bulkers' },
    { name: 'Bulker Trailers' },
    { name: 'Flatbed Trailers' },
    { name: 'Sidewall Trailers' },
    { name: 'Tip Trailers' },
    { name: 'Skeletal Trailers' },
    { name: 'Semi Lowbed Trailers' },
    { name: 'Cragganmore Tank' },
    { name: 'Milk Tank' },
    { name: 'Petroleum Tank' },
    { name: 'Gas Tank' },
    { name: 'TATA Load Bodies' },
    { name: 'BharatBenz Load Bodies' },
    { name: 'Ashok Leyland Load Bodies' },
];

const capabilities = [
  {
    icon: <DraftingCompass className="w-12 h-12 text-primary mb-4" />,
    title: 'Design & Homologation',
    description: 'Certification & compliance services.',
    chips: [
      { name: 'EV (2W & 3W)', href: '/industries/design-homologation/products/ev' },
      { name: 'Trailers', href: '/industries/design-homologation/products/trailers' },
      { name: 'Bus', href: '/industries/design-homologation/products/bus' },
      { name: 'Bulkers', href: '/industries/design-homologation/products/bulkers' },
      { name: 'Reefer Containers', href: '/industries/design-homologation/products/refer-container' },
      { name: 'Commercial Vehicles', href: '/industries/design-homologation/products/commercial-vehicle' },
      { name: 'List of AIS', href: '/industries/design-homologation/ais-list' },
      { name: 'Institute of Approvals', href: '/industries/design-homologation/institute-of-approvals' }
    ],
  },
  {
    icon: <Wrench className="w-12 h-12 text-primary mb-4" />,
    title: 'Manufacturing',
    description: 'High-precision fabrication and assembly.',
    chips: manufacturingChips,
  },
  {
    icon: <Truck className="w-12 h-12 text-primary mb-4" />,
    title: 'Transportation',
    description: 'Reliable, on-time delivery solutions.',
    href: '/transportation'
  }
];


export default function Home() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const router = useRouter();

  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [currentHeroTextIndex, setCurrentHeroTextIndex] = useState(0);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 5000); // Change text every 5 seconds
    
    const mapInterval = setInterval(() => {
      setCurrentCityIndex(prevIndex => (prevIndex + 1) % offices.length);
    }, 3000);

    return () => {
        clearInterval(heroInterval);
        clearInterval(mapInterval);
    };
  }, []);

  const serviceCategories: Category[] = services.map(service => ({
    id: service.id,
    title: service.name,
    subtitle: service.description,
    icon: <ArrowRight className="w-8 h-8" />,
    onClick: () => router.push(`/services/${service.id}`),
  }));

  const nationwideVideoPoster = PlaceHolderImages.find(p => p.id === 'transportation-ecosystem');

  return (
    <div className='overflow-x-hidden'>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-bottom justify-center text-center overflow-hidden">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-auto w-full min-h-full max-w-none object-cover"
        >
            <source src="/images/home/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHeroTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="h-[150px] flex flex-col justify-center"
              >
                <h1 className="font-headline text-4xl font-extrabold tracking-tight lg:text-2xl xl:text-4xl">
                  {heroTexts[currentHeroTextIndex].heading}
                </h1>
                <p className="text-sm text-white/90 md:text-lg max-w-3xl mx-auto mt-2">
                  {heroTexts[currentHeroTextIndex].subheading}
                </p>
              </motion.div>
            </AnimatePresence><motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
  className="flex  items-center justify-center gap-3"
>
  <div className="w-[150px]">
    <Button
      asChild
      size="lg"
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
    >
      <Link href="/products">Explore Products</Link>
    </Button>
  </div>

  <div className="w-[150px]">
    <Button
      asChild
      size="lg"
      variant="outline"
      className="w-full bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
    >
      <Link href="/quote">Request Quote</Link>
    </Button>
  </div>
</motion.div>

        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="stats-grid">
                {stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                        <h3>
                          {stat.value > 0 ? <AnimatedNumber value={stat.value} /> : ''}
                          {stat.isPlus && stat.value > 0 ? '+' : ''}
                          {stat.value !== 0 ? stat.unit : stat.label === 'ISO Certified' ? 'ISO 9001' : ''}
                        </h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-secondary py-12 md:py-16 lg:py-24" id="why-choose-thorat-motors">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedElement>
              <h2 className="sm:text-xl md:text-3xl font-extrabold font-headline tracking-tight text-foreground">
                Why Choose Thorat Motors?
              </h2>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <div className="mt-2 h-1.5 w-24 mx-auto bg-accent"></div>
            </AnimatedElement>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedElement key={item.title} delay={index * 0.1}>
                <Card className="h-full overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="bg-background py-12 md:py-16 lg:py-24" id="our-capabilities">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Our Capabilities</h2>
            <div className="mt-2 h-1.5 w-24 mx-auto bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="product-card-v2 flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  {capability.icon}
                  <h3 className="font-headline text-2xl font-bold">{capability.title}</h3>
                  <p className="text-muted-foreground mt-1 mb-4">{capability.description}</p>
                  
                  {capability.title === 'Manufacturing' ? (
                    <>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-start gap-2">
                          {capability.chips.slice(0, 5).map(chip => (
                            <div key={chip.name} className="product-tag">
                              {chip.name}
                            </div>
                          ))}
                          {capability.chips.length > 5 && (
                            <div className="product-tag">
                              +{capability.chips.length - 5} more
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link href="/industries/manufacturing" className="text-accent font-semibold flex items-center group text-sm">
                          Explore Manufacturing
                          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </>
                  ) : capability.href ? (
                    <>
                      <div className="flex-grow" />
                      <div className="mt-4">
                        <Link href={capability.href} className="text-accent font-semibold flex items-center group text-sm">
                          Explore {capability.title}
                          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-start gap-2">
                        {capability.chips && capability.chips.map(chip => (
                          'href' in chip && chip.href ? (
                            <Link key={chip.name} href={chip.href} className="product-tag hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                              {chip.name}
                            </Link>
                          ) : null
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions Section */}
      <section className="bg-background py-12 md:py-16 lg:py-24">
        <div className="container lg:max-w-[1024px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Industry-Specific Solutions</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Tailored trailers, cabins, and container solutions designed for real-world industrial applications.
                </p>
            </div>
            
            {/* Desktop View: Hover-driven */}
            <div className="flex gap-12 items-start">
                <div className="flex sticky top-24">
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
                                <p className="font-semibold text-foreground text-md">{solution.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex">
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
                               <Card className="shadow-lg border-0">
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
      {/* <section className="locations-section py-12 md:py-16 lg:py-24">
        <div
          className="container mx-auto px-4 md:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <AnimatedElement>
              <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Nationwide Presence</h2>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <div className="mt-2 h-1.5 w-24 mx-auto bg-accent"></div>
            </AnimatedElement>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-secondary p-4 md:p-6">
              <IndiaMap 
                hoveredCity={hoveredCity} 
                currentCityIndex={currentCityIndex}
              />
            </div>
            <div
              className="grid grid-cols-2 sm:grid-cols-2 gap-4"
            >
              {offices.map((location, index) => (
                <AnimatedElement
                  key={location.city}
                  delay={index * 0.1}
                >
                  <Link href="/contact">
                    <Card 
                      className="location-card p-4 transition-all duration-300 hover:bg-secondary hover:shadow-lg hover:-translate-y-1 hover:border-accent"
                      onMouseEnter={() => setHoveredCity(location.city)}
                      onMouseLeave={() => setHoveredCity(null)}
                    >
                      <CardContent className="p-0 text-left">
                        <p className="font-bold text-lg text-foreground">{location.city}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">View Our Network</Link>
            </Button>
          </div>
        </div>
      </section> */}

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
        <div className="container mx-auto px-4 py-12 text-center md:py-16 lg:py-24 md:px-6 lg:px-8">
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

    

    




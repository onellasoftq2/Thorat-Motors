
'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { products, industries } from '@/lib/data';
import { ArrowRight, Truck, Home as HomeIcon } from 'lucide-react';
import { offices } from '@/lib/data';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-trailer');
const trailerImage = PlaceHolderImages.find((img) => img.id === 'hero-trailer');
const cabinImage = PlaceHolderImages.find((img) => img.id === 'office');
const locations = offices;

const stats = [
  { value: '10,000+', label: 'Trailers Delivered' },
  { value: '15+ Years', label: 'Engineering Expertise' },
  { value: '7 Locations', label: 'Pan-India Presence' },
  { value: 'ISO Certified', label: 'Quality Manufacturing' },
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
        description: 'Accuracy and consistency for all structural components.',
    },
    {
        title: 'MIG & TIG Welding',
        description: 'Strong welds ensuring long-life and safe operation under load.',
    },
    {
        title: 'Shot Blasting',
        description: 'Ensures perfect paint adhesion and corrosion resistance.',
    },
    {
        title: 'Epoxy & PU Coating',
        description: 'Two-coat system for long-term protection in harsh environments.',
    },
];

const certifications = [
    'IS 2825 Class-3',
    'IS 1210',
    'IS 2062',
    'CMVR Standards',
    'ISO Manufacturing',
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
    { name: 'Used Shipping Containers', href: '/products/cabins/container-conversion' },
    { name: 'Container Conversions', href: '/products/cabins/container-conversion' },
    { name: 'G+1 Cabins', href: '/products/cabins/double-storey' },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 lg:py-24">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              High-Performance Trailers & Modular Cabin Solutions.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Engineering excellence for logistics, construction, cement, ports, steel, and industrial sectors across India.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/quote">Request Quote</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
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
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats-section">
        <div className="container mx-auto">
            <div className="stats-grid">
                {stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                        <h3>{stat.value}</h3>
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
            <div className="mt-2 h-1 w-20 mx-auto bg-primary"></div>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="why-card">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Section V2 */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Our Products</h2>
            <div className="mt-2 h-1 w-20 mx-auto bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Trailers Card */}
            <div className="product-card-v2 p-0 overflow-hidden">
                {trailerImage && (
                  <Image
                    src={trailerImage.imageUrl}
                    alt={trailerImage.description}
                    width={600}
                    height={400}
                    className="aspect-video object-cover"
                    data-ai-hint={trailerImage.imageHint}
                  />
                )}
                <div className="p-6">
                  <Truck className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-headline text-2xl font-bold mb-4">Trailers</h3>
                  <div className="mb-4">
                      {trailersTags.map(tag => (
                        <Link key={tag.name} href={tag.href} className="product-tag hover:bg-primary/20 transition-colors">{tag.name}</Link>
                      ))}
                  </div>
                  <Link href="/products/trailers" className="text-accent font-semibold flex items-center hover:underline">
                    View All Trailers <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
            </div>
            {/* Cabins Card */}
            <div className="product-card-v2 p-0 overflow-hidden">
                {cabinImage && (
                  <Image
                    src={cabinImage.imageUrl}
                    alt={cabinImage.description}
                    width={600}
                    height={400}
                    className="aspect-video object-cover"
                    data-ai-hint={cabinImage.imageHint}
                  />
                )}
                <div className="p-6">
                  <HomeIcon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-headline text-2xl font-bold mb-4">Portable Cabins</h3>
                  <div className="mb-4">
                      {cabinsTags.map(tag => (
                        <Link key={tag.name} href={tag.href} className="product-tag hover:bg-primary/20 transition-colors">{tag.name}</Link>
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

      {/* Manufacturing Capabilities Section */}
       <section className="manufacturing-section">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Manufacturing Excellence</h2>
            <div className="mt-2 h-1 w-20 mx-auto bg-primary"></div>
          </div>
          <div className="why-grid">
            {manufacturingCapabilities.map((item) => (
              <Card key={item.title} className="why-card">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Serving Diverse Industries</h2>
            <div className="mt-2 h-1 w-20 mx-auto bg-primary"></div>
          </div>
          <div className="industry-tags">
            {industries.map((industry) => (
              <Badge key={industry.name} asChild>
                <Link href={`/industries#${industry.id}`}>{industry.name}</Link>
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Presence Section */}
      <section className="locations-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Nationwide Presence</h2>
           <div className="mt-2 h-1 w-20 mx-auto bg-primary mb-12"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {locations.map(location => (
              <Link href="/contact" key={location.city}>
                <Card className="location-card">
                    <CardContent className="p-0">
                        <span className="font-semibold text-foreground">{location.city}</span>
                    </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">View Our Network</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Certifications & Compliance</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  Our products adhere to strict quality and safety standards:
              </p>
              <div className="industry-tags mt-8">
                  {certifications.map(cert => (
                      <Badge key={cert}>{cert}</Badge>
                  ))}
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

    
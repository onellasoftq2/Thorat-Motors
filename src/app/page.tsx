
'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { products, industries } from '@/lib/data';
import { ArrowRight, Truck, DraftingCompass, Wrench, MapPin } from 'lucide-react';
import { offices } from '@/lib/data';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-trailer');
const trailerProducts = products.trailers.slice(0, 3);
const cabinProducts = products.cabins.slice(0, 3);
const locations = offices.slice(0, 4);

const coreDivisions = [
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: 'Thorat Motors',
    description: 'Pioneering trailer manufacturing with robust designs and unmatched quality for all industrial needs.',
    href: '/products'
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-primary" />,
    title: 'Designing & Homologation',
    description: 'Expert services in vehicle design, simulation, and certification including CMVR, BIS, and PESO.',
    href: '/services#designing'
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Transport & Logistics',
    description: 'Reliable and efficient logistics solutions with a modern fleet serving diverse industries across India.',
    href: '/services#logistics'
  },
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
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={400}
                priority
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      {/* Core Divisions Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Our Core Divisions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
             Three pillars of excellence that drive the Thorat Group forward.
            </p>
            <div className="mt-2 h-1 w-20 mx-auto bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {coreDivisions.map((division) => (
              <Card key={division.title} className="text-center shadow-md">
                <CardHeader className="items-center">
                  {division.icon}
                  <CardTitle className="mt-4 text-xl">{division.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{division.description}</p>
                  <Button asChild variant="link" className="px-0 mt-4 text-primary">
                    <Link href={division.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trailer Products Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Our Premier Trailers</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Built to withstand the toughest conditions and deliver reliable performance.
            </p>
            <div className="mt-2 h-1 w-20 mx-auto bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trailerProducts.map((trailer) => {
              const image = PlaceHolderImages.find((img) => img.id === trailer.id);
              return (
                <Card key={trailer.id} className="overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl">
                  {image && (
                     <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={400}
                      height={300}
                      className="w-full object-cover aspect-[4/3]"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline">{trailer.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{trailer.description}</p>
                     <Button asChild variant="link" className="px-0 mt-4 text-primary">
                        <Link href={`/products/trailers/${trailer.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                     </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/products/trailers">View All Trailers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cabin Products Preview */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Versatile Portable Cabins</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Customizable, high-quality cabins for offices, housing, security, and more.
            </p>
             <div className="mt-2 h-1 w-20 mx-auto bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cabinProducts.map((cabin) => {
              const image = PlaceHolderImages.find((img) => img.id === cabin.id);
              return (
                <Card key={cabin.id} className="overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={400}
                      height={300}
                      className="w-full object-cover aspect-[4/3]"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline">{cabin.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{cabin.description}</p>
                     <Button asChild variant="link" className="px-0 mt-4 text-primary">
                        <Link href={`/products/cabins/${cabin.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                     </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
           <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/products/cabins">View All Cabins</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Serving Diverse Industries</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We provide specialized solutions for a wide range of industrial needs.
            </p>
            <div className="mt-2 h-1 w-20 mx-auto bg-primary"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <Badge key={industry.name} variant="secondary" className="px-4 py-2 text-sm">
                {industry.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Presence Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Nationwide Presence</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            With a strategic network of service locations across India, we are always close to our customers, ensuring prompt service and support wherever you are.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {locations.map(location => (
              <div key={location.city} className="relative group">
                <Image src={`https://picsum.photos/seed/${location.city}/400/300`} alt={location.city} width={400} height={300} className="rounded-lg object-cover w-full aspect-[4/3]"/>
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{location.city}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">View Our Network</Link>
            </Button>
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="bg-primary text-primary-foreground">
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

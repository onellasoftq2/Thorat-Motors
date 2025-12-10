
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, DraftingCompass, Truck, Cog, Box, Star } from 'lucide-react';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const iconMap: { [key: string]: React.ReactNode } = {
  'designing-homologation': <DraftingCompass className="h-10 w-10 text-primary" />,
  'structural-fabrication': <Wrench className="h-10 w-10 text-primary" />,
  'spare-parts': <Cog className="h-10 w-10 text-primary" />,
  'transport-logistics': <Truck className="h-10 w-10 text-primary" />,
  'custom-engineering': <Star className="h-10 w-10 text-primary" />,
  'container-conversions': <Box className="h-10 w-10 text-primary" />,
};


export default function ServicesPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'services-hero');

  return (
    <>
      <div className="relative bg-secondary h-80">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            End-to-end solutions from concept and design to fabrication and delivery.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link href={`/services/${service.id}`} key={service.id} className="group block">
              <Card className="flex flex-col h-full overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl hover:-translate-y-1">
                 <CardHeader className="flex-row items-center space-x-4">
                  {iconMap[service.id]}
                  <CardTitle className="font-headline">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="flex-grow">{service.description}</CardDescription>
                  <Button variant="link" className="px-0 mt-4 self-start text-primary">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

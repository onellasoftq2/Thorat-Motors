import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, DraftingCompass, Truck, Cog } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  designing: <DraftingCompass className="h-10 w-10 text-primary" />,
  fabrication: <Wrench className="h-10 w-10 text-primary" />,
  'spare-parts': <Cog className="h-10 w-10 text-primary" />,
  logistics: <Truck className="h-10 w-10 text-primary" />,
  'custom-engineering': <DraftingCompass className="h-10 w-10 text-primary" />,
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
            <Card key={service.id} id={service.id} className="text-center shadow-md">
              <CardHeader className="items-center">
                {iconMap[service.id]}
                <CardTitle className="mt-4 font-headline">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

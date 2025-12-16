
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
  'designing-homologation': <DraftingCompass className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors" />,
  'structural-fabrication': <Wrench className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors" />,
  'spare-parts': <Cog className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors" />,
  'transport-logistics': <Truck className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors" />,
  'custom-engineering': <Star className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors" />,
  'container-conversions': <Box className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors" />,
};


export default function ServicesPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'services-hero');

  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            End-to-end solutions from concept and design to fabrication and delivery.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 md:px-6 lg:px-8">
         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link href={`/services/${service.id}`} key={service.id} className="group block h-full">
              <Card className="flex flex-col h-full overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:border-accent hover:-translate-y-1.5 hover:bg-accent/5">
                <CardHeader className="flex-row items-center space-x-4 pb-4">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-accent transition-colors duration-300">
                    {iconMap[service.id]}
                  </div>
                  <CardTitle className="font-headline text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="flex-grow">{service.description}</CardDescription>
                  <div className="mt-6 text-accent font-semibold flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

    
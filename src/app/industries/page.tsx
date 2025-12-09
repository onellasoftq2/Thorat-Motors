import Image from 'next/image';
import { industries } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Gem, Anchor, Wrench, Leaf, ShoppingCart, Home } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  cement: <Building className="h-10 w-10 text-primary" />,
  mining: <Gem className="h-10 w-10 text-primary" />,
  ports: <Anchor className="h-10 w-10 text-primary" />,
  construction: <Wrench className="h-10 w-10 text-primary" />,
  agriculture: <Leaf className="h-10 w-10 text-primary" />,
  retail: <ShoppingCart className="h-10 w-10 text-primary" />,
  housing: <Home className="h-10 w-10 text-primary" />,
};

export default function IndustriesPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'industries-hero');

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
            Industries We Serve
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Providing specialized solutions to power growth across key sectors of the Indian economy.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry) => (
            <Card key={industry.id} id={industry.id} className="flex items-center p-6 shadow-md">
              {iconMap[industry.id]}
              <CardHeader>
                <CardTitle className="font-headline text-lg">{industry.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

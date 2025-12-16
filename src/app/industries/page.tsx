
import Image from 'next/image';
import { industries } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Building, Gem, Anchor, Wrench, Leaf, ShoppingCart, Home } from 'lucide-react';
import IndustryCard from '@/components/ui/industry-card';

const iconMap: { [key: string]: React.ReactNode } = {
  cement: <Building className="h-10 w-10 text-accent" />,
  mining: <Gem className="h-10 w-10 text-accent" />,
  ports: <Anchor className="h-10 w-10 text-accent" />,
  construction: <Wrench className="h-10 w-10 text-accent" />,
  agriculture: <Leaf className="h-10 w-10 text-accent" />,
  retail: <ShoppingCart className="h-10 w-10 text-accent" />,
  housing: <Home className="h-10 w-10 text-accent" />,
};

export default function IndustriesPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'industries-hero');

  return (
    <>
      <div className="relative bg-secondary h-72 md:h-80">
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
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white md:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            Industries We Serve
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Providing specialized solutions to power growth across key sectors of the Indian economy.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
             <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </>
  );
}

    
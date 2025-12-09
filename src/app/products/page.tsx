import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const productCategories = [
  {
    name: 'Trailers',
    description: 'High-performance trailers for every industrial need.',
    href: '/products/trailers',
    imageId: 'hero-trailer',
  },
  {
    name: 'Portable Cabins',
    description: 'Versatile, modern modular solutions for work and living.',
    href: '/products/cabins',
    imageId: 'office',
  },
];

export default function ProductsPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            Our Products
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our range of industry-leading trailers and modular cabins, engineered for performance and reliability.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {productCategories.map((category) => {
            const image = PlaceHolderImages.find((img) => img.id === category.imageId);
            return (
              <Link href={category.href} key={category.name} className="group block">
                <Card className="overflow-hidden h-full transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={category.name}
                      width={600}
                      height={400}
                      className="w-full object-cover aspect-video"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between font-headline">
                      {category.name}
                      <ArrowRight className="h-5 w-5 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

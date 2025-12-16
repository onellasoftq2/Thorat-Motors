
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ContainerConversionsPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            Container Conversions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Durable, flexible, and innovative spaces created from standard shipping containers. Explore our conversion options.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.containerConversions.map((conversion) => {
            const image = PlaceHolderImages.find((img) => img.id === conversion.id);
            return (
              <Card key={conversion.id} className="flex flex-col overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl hover:border-accent">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description || conversion.name}
                    width={400}
                    height={300}
                    className="w-full object-cover aspect-[4/3]"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{conversion.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-muted-foreground flex-1">{conversion.description}</p>
                  <Button asChild variant="link" className="px-0 mt-4 self-start text-accent font-semibold">
                    <Link href={`/products/container-conversions/${conversion.id}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

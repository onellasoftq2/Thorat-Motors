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

export default function TrailersPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            Trailers
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Robust, reliable, and engineered for the toughest jobs. Discover our comprehensive range of industrial trailers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.trailers.map((trailer) => {
            const image = PlaceHolderImages.find((img) => img.id === trailer.id);
            return (
              <Card key={trailer.id} className="flex flex-col overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={400}
                    height={250}
                    className="w-full object-cover"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{trailer.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-muted-foreground flex-1">{trailer.description}</p>
                  <Button asChild variant="link" className="px-0 mt-4 self-start text-primary">
                    <Link href={`/products/trailers/${trailer.id}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

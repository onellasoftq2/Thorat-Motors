
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return products.cabins.map((cabin) => ({
    slug: cabin.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug:string } }) {
  const cabin = products.cabins.find((p) => p.id === params.slug);
  if (!cabin) {
    return {
      title: 'Product Not Found',
    };
  }
  return {
    title: `${cabin.name} | Thorat Motors`,
    description: cabin.description,
  };
}


export default function CabinDetailPage({ params }: { params: { slug: string } }) {
  const cabin = products.cabins.find((p) => p.id === params.slug);

  if (!cabin) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === cabin.id);

  return (
    <div>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            {cabin.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            {cabin.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                className="w-full rounded-lg object-cover shadow-md"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold font-headline border-b-2 border-accent pb-2">Key Features</h2>
            <ul className="mt-6 space-y-4">
              {cabin.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/quote">Inquire About this Cabin</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}

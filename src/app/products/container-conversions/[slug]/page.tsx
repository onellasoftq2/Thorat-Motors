
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';

export async function generateStaticParams() {
  return products.containerConversions.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.containerConversions.find((p) => p.id === params.slug);
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }
  return {
    title: `${product.name} | Thorat Motors`,
    description: product.description,
  };
}


export default function ContainerConversionDetailPage({ params }: { params: { slug: string } }) {
  const product = products.containerConversions.find((p) => p.id === params.slug);

  if (!product) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === product.id);

  return (
    <div>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-16 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            {product.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            {product.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          <div>
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description || product.name}
                width={600}
                height={400}
                className="w-full rounded-lg object-cover shadow-md aspect-video"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold font-headline border-b-2 border-accent pb-2">Key Features</h2>
            <ul className="mt-6 space-y-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {product.specs && product.specs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center font-headline mb-2">Technical Specifications</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto mb-8"></div>
            <div className="mt-6 max-w-2xl mx-auto border rounded-lg overflow-hidden">
              <Table>
                <TableBody>
                  {product.specs.map((spec) => (
                    <TableRow key={spec.name}>
                      <TableCell className="font-medium">{spec.name}</TableCell>
                      <TableCell>{spec.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/quote">Inquire About this Product</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}

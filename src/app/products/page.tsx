
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, Truck, Home as HomeIcon, Box } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const productCategories = [
  {
    name: 'Trailers',
    description: 'High-performance trailers for every industrial need, from bulk transport to container logistics.',
    href: '/products/trailers',
    icon: <Truck className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors duration-300" />,
  },
  {
    name: 'Portable Cabins',
    description: 'Versatile, modern modular solutions for work and living, customized for any application.',
    href: '/products/cabins',
    icon: <HomeIcon className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors duration-300" />,
  },
  {
    name: 'Containers & Conversions',
    description: 'Durable shipping containers repurposed for storage, offices, and unique commercial spaces.',
    href: '/products/container-conversions',
    icon: <Box className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors duration-300" />,
  },
];

export default function ProductsPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            Our Products
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our range of industry-leading trailers and modular cabins, engineered for performance and reliability.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <Link href={category.href} key={category.name} className="group block h-full">
              <Card className="flex flex-col h-full overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:border-accent hover:-translate-y-1.5 hover:bg-accent/5">
                <CardHeader className="flex-row items-center space-x-4 pb-4">
                    <div className="bg-primary/10 p-4 rounded-full group-hover:bg-accent transition-colors duration-300">
                        {category.icon}
                    </div>
                    <CardTitle className="font-headline text-xl text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="flex-grow">{category.description}</CardDescription>
                  <div className="mt-6 text-accent font-semibold flex items-center">
                    View Products
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


'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { industrySolutions } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Building, Gem, Anchor, Wrench, Leaf, ShoppingCart, Home, Check, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function toTitleCase(str: string) {
  return str.replace(/-/g, ' ').replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1)
  );
}

export async function generateStaticParams() {
  return [];
}

export default function IndustriesCatchAllPage({ params }: { params: { slug?: string[] } }) {
  const pathname = usePathname();

  // If there's no slug, it's the main /industries page
  if (!params.slug || params.slug.length === 0) {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'industries-hero');
    const iconMap: { [key: string]: React.ReactNode } = {
      Building: <Building className="h-8 w-8 text-accent" />,
      Gem: <Gem className="h-8 w-8 text-accent" />,
      Anchor: <Anchor className="h-8 w-8 text-accent" />,
      Wrench: <Wrench className="h-8 w-8 text-accent" />,
      Leaf: <Leaf className="h-8 w-8 text-accent" />,
      ShoppingCart: <ShoppingCart className="h-8 w-8 text-accent" />,
      Home: <Home className="h-8 w-8 text-accent" />,
    };

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
          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto" defaultValue="item-0">
            {industrySolutions.map((industry, index) => (
              <AccordionItem value={`item-${index}`} key={industry.id} id={industry.id}>
                <AccordionTrigger className="text-lg font-bold hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {iconMap[industry.icon]}
                    </div>
                    <span>{industry.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-4">
                     <div className="md:col-span-2">
                          <Image 
                              src={industry.image}
                              alt={industry.name}
                              width={400}
                              height={300}
                              className="rounded-lg object-cover w-full aspect-[4/3] shadow-md"
                          />
                     </div>
                     <div className="md:col-span-3">
                          <p className="text-muted-foreground mb-6">{industry.description}</p>
                          <h4 className="font-semibold mb-4 text-foreground">Relevant Solutions:</h4>
                          <ul className="space-y-3">
                              {industry.solutions.map((item, solIndex) => (
                                  <li key={solIndex} className="flex items-center">
                                      <Check className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                                      <span className="text-muted-foreground">{item}</span>
                                  </li>
                              ))}
                          </ul>
                          <Button asChild variant="link" className="px-0 mt-6 text-accent font-semibold">
                              <Link href="/quote">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                          </Button>
                     </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </>
    );
  }

  // Otherwise, it's a sub-page, so render the "under construction" message
  const pathParts = pathname.split('/').filter(p => p);
  const title = toTitleCase(pathParts[pathParts.length - 1] || 'Industry Page');
  const breadcrumbs = pathParts.slice(1).map(p => toTitleCase(p));

  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Information about our {breadcrumbs.join(' - ')} services.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center prose lg:prose-xl">
            <h2>Page Under Construction</h2>
            <p>The content for the <span className='font-semibold'>{title}</span> page is currently being developed. Please check back soon for updates.</p>
        </div>
      </div>
    </>
  );
}

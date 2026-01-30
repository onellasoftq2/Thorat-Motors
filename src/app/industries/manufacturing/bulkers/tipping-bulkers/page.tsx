
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, HardHat, LandPlot, Mountain, Truck, CheckCircle, Phone, MessageSquare } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const useCases = [
    { icon: <HardHat className="h-8 w-8 text-accent" />, title: "Construction", description: "Move sand, gravel, and debris." },
    { icon: <Mountain className="h-8 w-8 text-accent" />, title: "Mining & Quarry", description: "Transport ores, coal, and aggregates." },
    { icon: <LandPlot className="h-8 w-8 text-accent" />, title: "Earthmoving", description: "For large-scale earthmoving." },
    { icon: <Truck className="h-8 w-8 text-accent" />, title: "Industrial Handling", description: "Transport bulk raw materials." },
];

const configurations = [
    { name: 'Load Capacity', value: '10 to 30-ton.' },
    { name: 'Body Types', value: 'High-tensile steel bodies.' },
    { name: 'Hydraulics', value: 'Reliable hydraulics for fast tipping.' },
    { name: 'Customization', value: 'Custom body dimensions and tailgates.' },
];

const whyChooseUs = [
    { icon: <CheckCircle className="h-8 w-8 text-accent"/>, title: "Durable High-Strength Steel Construction" },
    { icon: <CheckCircle className="h-8 w-8 text-accent"/>, title: "Precision Engineering for Safety & Balance" },
    { icon: <CheckCircle className="h-8 w-8 text-accent"/>, title: "Custom-Built to Your Specifications" },
    { icon: <CheckCircle className="h-8 w-8 text-accent"/>, title: "Comprehensive Service & Parts Support" },
];

export default function TippingBulkersPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'tipping-bulker-hero');

  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero Section */}
            <section className="bg-secondary relative mx-auto lg:w-[1024px] md:w-full">
         <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                {/* <Breadcrumb className="mb-4 justify-center md:justify-start">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink asChild><Link href="/industries/manufacturing">Manufacturing</Link></BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                         <BreadcrumbItem>
                        <BreadcrumbLink asChild><Link href="/industries/manufacturing/bulkers">Bulkers</Link></BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage>Tipping Bulkers</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb> */}

                <h1 className="text-3xl font-extrabold tracking-tight font-headline">Tipping Bulkers</h1>
                <p className="mt-2 text-sm md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                    Engineered for durability, safety, and precision to handle your toughest bulk material transport needs.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" asChild>
                        <Link href="#configurations">Request Specifications</Link>
                    </Button>
                </div>
            </div>
            <div>
                 {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover shadow-xl aspect-video"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                )}
            </div>
         </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* 3. Introduction Section */}
        <section className="max-w-3xl mx-auto text-center">
             <h2 className="text-3xl font-bold font-headline">Efficient Unloading</h2>
            <div className="mt-3 mb-6 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
                Purpose-built for rapid unloading of bulk materials.
            </p>
        </section>

        {/* 4. Use Cases & Industries */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Use Cases & Industries</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map(useCase => (
                    <Card key={useCase.title} className="text-center p-6 border-t-4 border-accent shadow-md">
                        <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            {useCase.icon}
                        </div>
                        <h3 className="font-semibold text-lg">{useCase.title}</h3>
                    </Card>
                ))}
            </div>
        </section>

        {/* 5. Product Configurations */}
        <section id="configurations" className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Configurations</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {configurations.map(config => (
                    <div key={config.name} className="p-6 bg-secondary rounded-lg">
                        <h3 className="font-bold text-xl text-primary">{config.name}</h3>
                        <p className="mt-2 text-muted-foreground">{config.value}</p>
                    </div>
                ))}
            </div>
        </section>

         {/* 6. Engineering & Manufacturing Strength */}
        <section className="mt-12 md:mt-20 grid md:grid-cols-2 gap-12 items-center bg-secondary p-8 md:p-12 rounded-lg">
            <div className='order-2 md:order-1'>
                 <h2 className="text-3xl font-bold font-headline">Engineering Strength</h2>
                <div className="mt-3 mb-6 w-20 h-1.5 bg-accent"></div>
                 <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Precision fabrication and high-strength materials.
                </p>
                <div className="space-y-3">
                    <p className="flex items-center"><Check className="text-green-500 mr-2" /> Rigorous quality checks.</p>
                     <p className="flex items-center"><Check className="text-green-500 mr-2" /> Adherence to standards.</p>
                </div>
            </div>
             <div className='order-1 md:order-2'>
                <Image
                    src="/images/products/bulkers/manufacturing-strenght-tipping-bulker.png"
                    alt="Manufacturing Strength"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover shadow-md aspect-video"
                    data-ai-hint="welding fabrication"
                />
            </div>
        </section>

        {/* 8. Visual Gallery */}
        {/* <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Visual Gallery</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryImages.map(img => {
                    const imageData = PlaceHolderImages.find(p => p.id === img.id);
                    if (!imageData) return null;
                    return (
                        <Image
                            key={imageData.id}
                            src={imageData.imageUrl}
                            alt={imageData.description}
                            width={500}
                            height={400}
                            className="rounded-lg object-cover shadow-md aspect-video"
                            data-ai-hint={imageData.imageHint}
                        />
                    );
                })}
            </div>
        </section> */}

         {/* 9. Why Choose Us */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Why Choose Our Tipping Bulkers?</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-4xl mx-auto bg-secondary/50 p-8 md:p-12 rounded-lg shadow-inner border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {whyChooseUs.map((item, index) => (
                        <div key={index} className="flex items-center p-4 rounded-lg bg-background/50">
                           {React.cloneElement(item.icon, { className: "h-8 w-8 text-accent" })}
                           <h3 className="font-semibold text-lg ml-4">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 10. Conversion Section */}
        <section className="mt-12 md:mt-20 bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto text-center">
                 <h2 className="text-3xl font-extrabold">Looking for a tipping bulker for your demands?</h2>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                                <Link href="/contact">Talk to Our Experts</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                <Link href="/contact">Request Quote</Link>
                            </Button>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}

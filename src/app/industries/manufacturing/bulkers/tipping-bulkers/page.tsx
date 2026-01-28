
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, HardHat, LandPlot, Mountain, Truck } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const useCases = [
    { icon: <HardHat className="h-8 w-8 text-accent" />, title: "Construction", description: "Move sand, gravel, and debris on-site." },
    { icon: <Mountain className="h-8 w-8 text-accent" />, title: "Mining & Quarry", description: "Transport ores, coal, and aggregates." },
    { icon: <LandPlot className="h-8 w-8 text-accent" />, title: "Earthmoving", description: "For large-scale earthmoving and road construction." },
    { icon: <Truck className="h-8 w-8 text-accent" />, title: "Industrial Handling", description: "Transport bulk raw materials and waste." },
];

const configurations = [
    { name: 'Load Capacity', value: '10 to 30-ton capacity.' },
    { name: 'Body Types', value: 'High-tensile steel bodies with custom options.' },
    { name: 'Hydraulics', value: 'Reliable hydraulics for fast, safe tipping.' },
    { name: 'Customization', value: 'Custom body dimensions and tailgate designs.' },
];

const whyChooseUs = [
    { title: "Built for Durability", description: "Engineered with high-strength steel to withstand tough environments." },
    { title: "Engineering Expertise", description: "Precision engineering focused on balance, integrity, and safety." },
    { title: "Custom-Built Solutions", description: "We build custom tipping bulkers to meet your specific needs." },
    { title: "Service & Support", description: "Comprehensive support and parts to minimize downtime." },
];

export default function TippingBulkersPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'tipping-bulker-hero');

  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero Section */}
      <section className="bg-secondary relative">
         <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <Breadcrumb className="mb-4 justify-center md:justify-start">
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
                </Breadcrumb>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Tipping Bulkers</h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                    Durable, safe, and precise for tough bulk material transport.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" asChild>
                        <Link href="#configurations">Request Specifications</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/quote">Enquire Now</Link>
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
             <h2 className="text-3xl font-bold font-headline">Efficient Unloading for Bulk Materials</h2>
            <div className="mt-3 mb-6 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
                Purpose-built for rapid and efficient unloading of bulk materials like sand and aggregates. Our designs ensure a smooth, controlled tipping process.
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
                        <p className="text-sm text-muted-foreground mt-2">{useCase.description}</p>
                    </Card>
                ))}
            </div>
        </section>

        {/* 5. Product Configurations */}
        <section id="configurations" className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Product Configurations</h2>
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
                 <h2 className="text-3xl font-bold font-headline">Engineering & Manufacturing Strength</h2>
                <div className="mt-3 mb-6 w-20 h-1.5 bg-accent"></div>
                 <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    We use precision fabrication and high-strength materials for superior integrity. Our focus on load balance and tipping geometry ensures safe operation.
                </p>
                <div className="space-y-3">
                    <p className="flex items-center"><Check className="text-green-500 mr-2" /> Rigorous quality checks.</p>
                     <p className="flex items-center"><Check className="text-green-500 mr-2" /> Adherence to manufacturing standards.</p>
                </div>
            </div>
             <div className='order-1 md:order-2'>
                <Image
                    src="https://images.unsplash.com/photo-1633449494745-6a467f40e0b3?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Manufacturing Strength"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover shadow-md aspect-video"
                    data-ai-hint="welding fabrication"
                />
            </div>
        </section>

         {/* 9. Why Choose Us */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Why Choose Our Tipping Bulkers?</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-4xl mx-auto space-y-8">
                {whyChooseUs.map((item, index) => (
                    <Card key={index} className="shadow-md">
                        <CardHeader>
                            <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                        </CardHeader>
                         <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        {/* 10. Conversion Section */}
        <section className="mt-12 md:mt-20 bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto text-center">
                 <h2 className="text-3xl font-extrabold">Looking for a tipping bulker for your demands?</h2>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/quote">Enquire Now</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        <Link href="/contact">Talk to Our Team</Link>
                    </Button>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}

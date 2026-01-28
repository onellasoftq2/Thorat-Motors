
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, ShieldCheck, Layers, Settings, Workflow, Leaf, Factory, Package, Truck, TestTube } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Data for the page
const useCases = [
    { icon: <Factory className="h-8 w-8 text-accent" />, title: "Food Processing & Milling", description: "Hygienic transport of flour, sugar, and ingredients to plants." },
    { icon: <Leaf className="h-8 w-8 text-accent" />, title: "Grain & Agro-Industrial", description: "Safe and efficient movement of grains like wheat and corn." },
    { icon: <Package className="h-8 w-8 text-accent" />, title: "Dairy & Food Ingredients", description: "Contamination-free delivery of milk powders and other sensitive ingredients." },
    { icon: <Truck className="h-8 w-8 text-accent" />, title: "Bulk Food Distribution", description: "Reliable logistics for bulk food items from source to distribution centers." },
];

const configurations = [
    { name: 'Capacity Ranges', value: 'From 25 to 40 CBM, designed for various operational needs.' },
    { name: 'Tank Construction', value: 'Food-grade stainless steel (SS304/SS316) for maximum hygiene.' },
    { name: 'Internal Surfaces', value: 'Smooth, polished internal surfaces with seamless welds to prevent residue and contamination.' },
    { name: 'Custom Configurations', value: 'Tailored solutions for discharge systems, capacity, and specific food safety requirements.' },
];

const whyChooseUs = [
    { title: "Hygienic & Food-Safe Construction", description: "Our bulkers are built with food-grade stainless steel and seamless internal finishing to ensure your product remains pure and uncontaminated." },
    { title: "Expertise in Bulk Food Transport", description: "We have proven experience in engineering transport solutions that meet the stringent requirements of the food and beverage industry." },
    { title: "Custom Solutions for Your Product", description: "We design bulkers tailored to the specific characteristics of your food material, ensuring efficient loading, transport, and discharge." },
    { title: "Reliable Support & Service", description: "Our commitment to quality extends to after-sales support, ensuring your fleet remains operational and compliant with all standards." },
];

const qualityStandards = [
    { icon: <ShieldCheck />, title: 'Food-Grade Compliance', description: 'Tanks are built using certified food-grade materials and welding practices.'},
    { icon: <Layers />, title: 'Seamless Construction', description: 'Smooth, crevice-free internal surfaces prevent material trapping and allow for easy cleaning.'},
    { icon: <TestTube />, title: 'Contamination Control', description: 'Every bulker is tested to ensure a completely sealed, airtight system for product integrity.'},
    { icon: <Workflow />, title: 'Hygiene Validation', description: 'Designed for easy and effective cleaning processes to meet strict hygiene standards.'},
];


export default function FoodBulkerPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'food-bulker-hero');

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
                        <BreadcrumbPage>Food Bulkers</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Food Bulkers</h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                    Engineered for hygienic, contamination-free, and efficient transport of bulk food materials.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" asChild>
                        <Link href="#configurations">Request Specifications</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/quote?product=food-bulker">Enquire Now</Link>
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
             <h2 className="text-3xl font-bold font-headline">The Standard for Hygienic Bulk Food Transport</h2>
            <div className="mt-3 mb-6 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
                Food bulkers are specialized tankers designed for the safe and hygienic transportation of bulk food products like grains, flour, sugar, and other powders. Our designs ensure product integrity from loading to discharge, preventing contamination and simplifying cleaning.
            </p>
        </section>

        {/* 4. Use Cases & Industries */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Key Applications</h2>
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

         {/* 6. Engineering & Manufacturing Excellence */}
        <section className="mt-12 md:mt-20 grid md:grid-cols-2 gap-12 items-center bg-secondary p-8 md:p-12 rounded-lg">
            <div className='order-2 md:order-1'>
                 <h2 className="text-3xl font-bold font-headline">Engineering for Purity and Performance</h2>
                <div className="mt-3 mb-6 w-20 h-1.5 bg-accent"></div>
                 <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Our food bulkers are built with a focus on hygiene and precision. We use food-grade fabrication practices, including seamless welding and smooth surface finishing, to create a tank interior that is easy to clean and free from contamination risks.
                </p>
                <div className="space-y-3">
                    <p className="flex items-center"><Check className="text-green-500 mr-2" /> Crevice-free design for superior hygiene.</p>
                     <p className="flex items-center"><Check className="text-green-500 mr-2" /> Optimized discharge systems for complete material unloading.</p>
                </div>
            </div>
             <div className='order-1 md:order-2'>
                <Image
                    src="https://images.unsplash.com/photo-1581094285114-b25c4a63c623?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hygienic Manufacturing"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover shadow-md aspect-video"
                    data-ai-hint="steel tank"
                />
            </div>
        </section>

        {/* 7. Compliance & Quality Assurance */}
        <section className="mt-12 md:mt-20">
          <h2 className="text-3xl font-bold font-headline text-center mb-2">Compliance & Quality Assurance</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((item) => (
              <div key={item.title} className="text-center">
                {React.cloneElement(item.icon, { className: "h-10 w-10 text-accent mx-auto mb-4" })}
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

         {/* 9. Why Choose Us */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Why Choose Our Food Bulkers?</h2>
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
                 <h2 className="text-3xl font-extrabold">Looking for a food bulker designed for safe and hygienic bulk transport?</h2>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/quote?product=food-bulker">Enquire Now</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        <Link href="/contact">Talk to Our Manufacturing Team</Link>
                    </Button>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}

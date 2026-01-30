
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, HardHat, Factory, Building, Route, ShieldCheck, Layers, Settings, Workflow, CheckCircle, Phone, MessageSquare } from 'lucide-react';
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
    { icon: <Factory className="h-8 w-8 text-accent" />, title: "Cement Plants", description: "Transfer from silos for distribution." },
    { icon: <Building className="h-8 w-8 text-accent" />, title: "Ready-Mix Concrete (RMC)", description: "Deliver to RMC facilities." },
    { icon: <HardHat className="h-8 w-8 text-accent" />, title: "Infrastructure Sites", description: "Supply to large project sites." },
    { icon: <Route className="h-8 w-8 text-accent" />, title: "Bulk Logistics", description: "Long-haul and regional transport." },
];

const configurations = [
    { name: 'Capacity', value: '25 to 50-ton.' },
    { name: 'Tank Construction', value: 'High-strength steel (ST52).' },
    { name: 'Discharge', value: 'High-performance pneumatic.' },
    { name: 'Customization', value: 'Custom axle and capacity options.' },
];

const whyChooseUs = [
    { icon: <CheckCircle className="h-8 w-8 text-accent"/>, title: "Dust-Free & Contamination-Safe" },
    { icon: <CheckCircle className="h-8 w-8 text-accent"/>, title: "Specialized Pressure Vessel Engineering" },
    { icon: <CheckCircle className="h-8 w-8 text-accent"/>, title: "Efficient Loading & Unloading" },
    { icon: <CheckCircle className="h-8 w-8 text-accent"/>, title: "Robust Construction for Long Service Life" },
];

const qualityStandards = [
    { icon: <ShieldCheck />, title: 'PESO Certified', description: 'PESO compliant pressure vessel construction.'},
    { icon: <Layers />, title: 'Structural Integrity', description: 'FEA-validated for stability and durability.'},
    { icon: <Settings />, title: 'Leak-Proof Testing', description: 'Rigorous pressure and leak testing.'},
    { icon: <Workflow />, title: 'Fabrication Quality', description: 'Advanced fabrication for durability.'},
    { icon: <ShieldCheck />, title: 'Pressure Vessel Certified', description: 'Tanks are built and tested according to PESO and other pressure vessel standards for maximum safety.' },
    { icon: <Layers />, title: 'Structural Integrity', description: 'FEA-validated designs ensure stability and durability under full load and on diverse terrains.' },
    { icon: <Settings />, title: 'Leak-Proof Testing', description: 'Every bulker undergoes rigorous pressure and leak tests to guarantee a completely sealed system.' },
    { icon: <Workflow />, title: 'Welding & Fabrication Quality', description: 'Certified welders and advanced fabrication techniques ensure flawless and durable construction.' },
];


export default function CementBulkerPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'cement-bulker-banner');

    // For the gallery
    const cementBulkerGallery1 = PlaceHolderImages.find(img => img.id === 'rigid-vehicle');
    const cementBulkerGallery2 = PlaceHolderImages.find(img => img.id === 'tipping-bulker-rear');
    const cementBulkerGallery3 = PlaceHolderImages.find(img => img.id === 'structural-fabrication');

    const galleryImagesData = [cementBulkerGallery1, cementBulkerGallery2, cementBulkerGallery3];


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
                        <BreadcrumbPage>Cement Bulkers</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb> */}

                        <h1 className="text-3xl font-extrabold tracking-tight font-headline">Cement Bulkers</h1>
                        <p className="mt-2 text-md text-muted-foreground max-w-lg mx-auto md:mx-0">
                            Engineered for safe, dust-free, and efficient transport of bulk cement and powdered materials.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button size="lg" asChild>
                                <Link href="#configurations">Request Specifications</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/quote?product=cement-bulker">Enquire Now</Link>
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
                    <h2 className="text-3xl font-bold font-headline">The Standard for Modern Cement Transport</h2>
                    <div className="mt-3 mb-6 w-20 h-1.5 bg-accent mx-auto"></div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Cement bulkers are specialized tankers designed for transporting cement and other dry powders via a closed pneumatic system. This method prevents product contamination, avoids dust pollution, and allows for controlled, efficient unloading directly into storage silos.
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
                        <h2 className="text-3xl font-bold font-headline">Engineering & Manufacturing Excellence</h2>
                        <div className="mt-3 mb-6 w-20 h-1.5 bg-accent"></div>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                            Our cement bulkers are built in-house with a focus on structural integrity and performance. We use high-strength steel for a lightweight yet robust tank, precision welding for leak-proof seams, and reliable pneumatic systems for consistent discharge performance.
                        </p>
                        <div className="space-y-3">
                            <p className="flex items-center"><Check className="text-green-500 mr-2" /> Optimized tank design for better weight distribution and stability.</p>
                            <p className="flex items-center"><Check className="text-green-500 mr-2" /> High-quality compressors and discharge equipment for reliability.</p>
                        </div>
                    </div>
                    <div className='order-1 md:order-2'>
                        <Image
                            src="/images/products/bulkers/manufacturing-strenght.png"
                            alt="Manufacturing Strength"
                            width={500}
                            height={400}
                            className="rounded-lg object-cover shadow-md aspect-video"
                            data-ai-hint="welding fabrication"
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

                {/* 8. Visual Gallery */}
                {/* <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Visual Gallery</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryImagesData.map((imageData, index) => {
                    if (!imageData) return null;
                    return (
                        <Image
                            key={index}
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
                    <h2 className="text-3xl font-bold font-headline text-center">Why Choose Our Cement Bulkers?</h2>
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
                        <h2 className="text-3xl font-extrabold">Looking for a cement bulker designed for efficient and safe bulk transport?</h2>
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

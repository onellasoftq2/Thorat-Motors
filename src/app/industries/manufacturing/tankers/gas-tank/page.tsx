
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldCheck, Layers, Settings, Workflow, Droplet, Factory, Shield, Flame, Phone, MessageSquare } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const safetyFeatures = [
    { title: "High-Pressure Vessel Construction", description: "Engineered with specialized materials and advanced welding techniques to safely contain high-pressure gases." },
    { title: "Reinforced Shell & End-Cap Design", description: "Structurally reinforced to withstand internal pressures and external impacts, ensuring maximum containment integrity." },
    { title: "Pressure Relief & Safety Valve Systems", description: "Equipped with multiple safety valves and relief systems to prevent over-pressurization under any condition." },
    { title: "Impact, Vibration & Thermal Protection", description: "Designed to mitigate risks from road vibration, thermal expansion, and potential impacts during transit." },
];

const applications = [
    { icon: <Droplet className="h-8 w-8 text-accent" />, title: "Industrial Gas Distribution" },
    { icon: <Flame className="h-8 w-8 text-accent" />, title: "Energy & Utility Sector Operations" },
    { icon: <Factory className="h-8 w-8 text-accent" />, title: "Manufacturing & Processing Plants" },
    { icon: <Shield className="h-8 w-8 text-accent" />, title: "Specialized Hazmat Logistics" },
];

const constructionConfigs = [
    { name: 'Pressure Ratings & Capacity Ranges', description: 'Engineered for a variety of pressure ratings and available in multiple capacity ranges to suit different gases and operational scales.' },
    { name: 'Material Specifications for Gas Containment', description: 'Constructed from specialized steel alloys designed for high-pressure and cryogenic gas containment, ensuring material compatibility and safety.' },
    { name: 'Single or Multi-Cylinder Configurations', description: 'Available in single-vessel or multi-cylinder (cascade) configurations for specific transport and discharge requirements.' },
    { name: 'Chassis & Mounting Integration', description: 'Offered as integrated rigid vehicles or as semi-trailers compatible with all standard tractor models, ensuring seamless fleet integration.' },
    { name: 'Custom Builds for Gas & Pressure', description: 'Bespoke designs for specific gas types (e.g., LPG, CNG, Nitrogen) and unique operating pressures or temperatures.' },
];

const complianceStandards = [
    { icon: <ShieldCheck />, title: 'Pressure Vessel & Hazmat Standards', description: 'Built to meet the most stringent national and international standards for pressure vessels and hazardous gas transport.' },
    { icon: <Layers />, title: 'Pressure & Leak Detection Testing', description: 'Every tank undergoes rigorous hydrostatic and pneumatic pressure tests, along with advanced leak detection, to guarantee its integrity.' },
    { icon: <Settings />, title: 'Weld Quality Inspection (NDT)', description: 'Non-destructive testing (NDT), including radiographic inspection of all critical weld seams, ensures flawless, high-strength construction.' },
    { icon: <Workflow />, title: 'Regulatory Audit & Certification Support', description: 'Comprehensive documentation and support provided for all regulatory certifications and audits, ensuring your fleet is compliant.' },
];


export default function GasTankPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gas-tank-hero');

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
                            <BreadcrumbLink asChild><Link href="/industries/manufacturing/tankers">Tankers</Link></BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Gas Tank</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Gas Tank</h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                    Engineered for the safe, compliant, and reliable containment of high-pressure gases.
                </p>
                 <div className="mt-6">
                    <span className="inline-flex items-center bg-destructive/10 text-destructive border border-destructive/20 font-semibold rounded-full px-4 py-2 text-sm">
                        <Flame className="h-4 w-4 mr-2" />
                        High-Pressure / Hazardous Gas
                    </span>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" asChild>
                        <Link href="#configurations">Request Technical & Safety Details</Link>
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
        {/* 2. What it carries */}
        <section className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline">Designed for High-Pressure Gas Containment</h2>
            <div className="mt-3 mb-6 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
                Our gas tanks are engineered to transport a range of compressed or liquefied gases. Given the high pressures and potential volatility, our design focuses on robust, leak-proof containment and precision engineering to ensure safety at every stage of the supply chain.
            </p>
        </section>

        {/* 3. Safety & Engineering Section */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Pressure & Safety Engineering by Design</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {safetyFeatures.map(item => (
                    <div key={item.title} className="p-6 bg-secondary rounded-lg">
                        <h3 className="font-bold text-xl text-primary">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 4. Applications & Gas Logistics */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Applications & Gas Logistics Operations</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {applications.map(item => (
                    <Card key={item.title} className="text-center p-6 border-t-4 border-accent shadow-md">
                        <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            {item.icon}
                        </div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                    </Card>
                ))}
            </div>
        </section>
        
        {/* 5. Tank Construction & Configurations */}
        <section id="configurations" className="mt-12 md:mt-20">
            <h2 className="text-3xl font-bold font-headline text-center">Tank Construction & Configurations</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-4xl mx-auto space-y-6">
                 {constructionConfigs.map(config => (
                    <div key={config.name} className="flex items-start gap-4 p-4 border-l-4 border-accent bg-secondary/50 rounded-r-lg">
                        <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg text-primary">{config.name}</h3>
                            <p className="mt-1 text-muted-foreground">{config.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        
        {/* 6. Compliance, Standards & Certification */}
        <section className="mt-12 md:mt-20">
          <h2 className="text-3xl font-bold font-headline text-center mb-2">Compliance, Standards & Certification</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((item) => (
              <div key={item.title} className="text-center">
                {React.cloneElement(item.icon, { className: "h-10 w-10 text-accent mx-auto mb-4" })}
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Operational & Safety Considerations */}
        <section className="mt-12 md:mt-20 bg-secondary p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-bold font-headline text-center mb-10">Operational & Safety Considerations</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">Safe Filling & Discharge</h3>
                    <p className="text-muted-foreground">Procedures and systems designed for controlled, safe gas transfer operations.</p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">Emergency Handling</h3>
                    <p className="text-muted-foreground">Equipped with emergency shut-off and pressure relief systems for rapid risk mitigation.</p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">Routine Inspection</h3>
                    <p className="text-muted-foreground">Designed for easy access to critical components for routine inspection and maintenance, ensuring long-term safety.</p>
                </div>
            </div>
        </section>
        
        {/* 9. Conversion Section */}
        <section className="mt-12 md:mt-20 bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto text-center px-4">
                 <h2 className="text-3xl font-extrabold max-w-3xl mx-auto">Looking for a gas tanker engineered to meet the highest safety and pressure standards?</h2>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                       <a href="tel:9011943810" className="flex items-center">
                            <Phone className="mr-2 h-5 w-5" />
                            Talk to our Experts
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        <a href="https://wa.me/919096757924" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <MessageSquare className="mr-2 h-5 w-5" />
                            Chat with Us
                        </a>
                    </Button>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}

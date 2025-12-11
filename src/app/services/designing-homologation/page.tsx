
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, Cpu, FileCheck, Scale, DraftingCompass } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  { icon: <FileCheck />, title: 'CMVR Process Handling', description: 'Navigating the Central Motor Vehicles Rules for a smooth certification journey.' },
  { icon: <Cpu />, title: 'ARAI Certification', description: 'End-to-end assistance with certification from the Automotive Research Association of India.' },
  { icon: <DraftingCompass />, title: 'Simulation & Modeling', description: 'Using advanced CAE tools to simulate performance and optimize designs before production.' },
  { icon: <Scale />, title: 'Material & Safety Validation', description: 'Ensuring all materials and designs meet stringent safety and durability standards.' },
];

const whyItMatters = [
    {title: "Safety Compliance", description: "Ensures your vehicles and structures meet all mandatory safety norms."},
    {title: "Faster Approvals", description: "Our expertise minimizes delays and accelerates the certification process."},
    {title: "Higher Reliability", description: "Validated designs mean more durable and reliable products in the field."},
    {title: "Documentation Accuracy", description: "We handle the paperwork to ensure full accuracy and compliance."},
];

export default function DesigningHomologationPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">Designing & Homologation</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            End-to-end engineering, compliance, and certification services for trailers and mobile structures.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <section className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold font-headline mb-2">From Concept to Compliance</h2>
                <div className="w-24 h-1.5 bg-accent mb-4"></div>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    Our in-house design team leverages the latest CAD/CAE software to create innovative, efficient, and robust designs for trailers and portable cabins. But a great design is only the beginning. We provide comprehensive homologation support to ensure your product meets all regulatory requirements.
                </p>
                 <ul className="mt-6 space-y-4">
                    <li className="flex items-start"><Check className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" /><span>CMVR, BIS, and ARAI certification support.</span></li>
                    <li className="flex items-start"><Check className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" /><span>PESO compliance for pressure vessels and bulkers.</span></li>
                    <li className="flex items-start"><Check className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" /><span>Structural analysis and design optimization for performance and safety.</span></li>
                </ul>
            </div>
            <div className="md:col-span-2">
                <Image src="https://images.unsplash.com/photo-1555949963-ff980e67233d?q=80&w=2070&auto=format&fit=crop" alt="Engineering Design" width={500} height={400} className="rounded-lg shadow-md" data-ai-hint="engineering design" />
            </div>
        </section>

        {/* Capabilities Section */}
        <section className="mt-24">
            <h2 className="text-3xl font-bold font-headline text-center mb-2">Engineering Capabilities</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {capabilities.map(cap => (
                    <Card key={cap.title} className="shadow-md">
                        <CardHeader className="items-center text-center">
                             <div className="bg-primary/10 p-4 rounded-full">
                                {React.cloneElement(cap.icon, { className: "h-8 w-8 text-accent" })}
                            </div>
                            <CardTitle className="mt-4">{cap.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-muted-foreground">{cap.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        {/* Why It Matters Section */}
        <section className="mt-24">
            <h2 className="text-3xl font-bold font-headline text-center mb-2">Why Strong Homologation Matters</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto mb-12"></div>
             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {whyItMatters.map(item => (
                    <div key={item.title} className="flex items-start">
                         <Check className="h-8 w-8 text-accent mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 text-center bg-secondary py-16 rounded-lg">
             <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-headline">Navigate Compliance with Confidence</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">Partner with us to ensure your products are fully certified and ready for the market.</p>
                <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/quote">Request Homologation Support</Link>
                </Button>
            </div>
        </section>
      </div>
    </>
  );
}

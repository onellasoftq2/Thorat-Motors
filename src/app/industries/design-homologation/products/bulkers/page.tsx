
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Check, CheckCircle, Search, Layers, Settings, ShieldCheck, Route, Truck } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';
import { aisStandards } from '@/lib/ais-standards';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const bulkerTypes = [
    { name: 'Cement Bulkers', application: 'Bulk cement & fly ash.', configuration: 'Rigid / Trailer', imageId: 'cement-bulker' },
    { name: 'Fly Ash Bulkers', application: 'Fly ash from power plants.', configuration: 'Trailer', imageId: 'fly-ash-bulker' },
    { name: 'Food Grade Bulkers', application: 'Grains, flour, sugar.', configuration: 'Rigid / Trailer', imageId: 'food-grade-bulker' },
    { name: 'Tipping Bulkers', application: 'Aggregates, minerals.', configuration: 'Rigid / Trailer', imageId: 'tipping-bulker-hero' },
    { name: 'Rigid Bulker Vehicles', application: 'Regional & city distribution.', configuration: 'Rigid', imageId: 'rigid-vehicle' },
    { name: 'Bulker Trailers', application: 'Long-haul bulk transport.', configuration: 'Trailer', imageId: 'bulker-trailer-hero' },
];

const complianceScope = [
    { title: 'Tank Structural Integrity', icon: <Layers /> },
    { title: 'Pressure & Discharge Systems', icon: <Settings /> },
    { title: 'Chassis Mounting & Load Balance', icon: <Truck /> },
    { title: 'Rollover Stability', icon: <Route /> },
    { title: 'Rear & Side Underrun Protection', icon: <ShieldCheck /> },
    { title: 'Material & Food-Grade Safety', icon: <CheckCircle /> },
];

const homologationWorkflow = [
  { title: 'Bulker Type & Vehicle Configuration Assessment' },
  { title: 'Applicable AIS & CMVR Identification' },
  { title: 'Structural Design & FEA Evaluation' },
  { title: 'Testing & Inspection Coordination (ARAI/ICAT)' },
  { title: 'Comprehensive Documentation & Approval Support' },
];

const testingSupport = [
    'Structural integrity and load assessment',
    'Stability and rollover evaluation (laden/unladen)',
    'Brake performance verification',
    'Lighting, signalling & retro-reflector compliance',
    'Liaison with ARAI / ICAT for final certification',
];

const whyChooseUs = [
    'Deep expertise in bulk transport vehicle regulations.',
    'Faster approvals for complex configurations like pressure vessels.',
    'Reduced redesign cycles through upfront compliance engineering.',
    'End-to-end support, from initial design to final authority liaison.',
];

export default function BulkerHomologationPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'bulker-compliance-hero');
  const testingLabImage = PlaceHolderImages.find((p) => p.id === 'bulker-testing-lab');

  const [searchTerm, setSearchTerm] = useState('');

  const bulkerAisStandards = useMemo(() => {
    const keywords = ['bulker', 'tanker', 'special purpose', 'dangerous goods', 'pressure vessel'];
    return aisStandards.filter(std =>
        std.categories.some(cat => ['N', 'T'].includes(cat)) ||
        keywords.some(kw => std.title.toLowerCase().includes(kw))
    );
  }, []);
  
  const filteredStandards = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return bulkerAisStandards.filter(std => 
        searchTerm === '' ||
        std.code.toLowerCase().includes(searchLower) ||
        std.title.toLowerCase().includes(searchLower)
    );
  }, [searchTerm, bulkerAisStandards]);
  
  const groupedStandards = useMemo(() => {
    const groups: { [key: string]: typeof filteredStandards } = {
        'Structural & Tank Requirements': [],
        'Stability & Safety': [],
        'Lighting & Visibility': [],
        'Braking & Mechanical Systems': [],
    };
    filteredStandards.forEach(std => {
        const titleLower = std.title.toLowerCase();
        if (titleLower.includes('tanker') || titleLower.includes('construction') || titleLower.includes('body') || titleLower.includes('vessel')) {
            groups['Structural & Tank Requirements'].push(std);
        } else if (titleLower.includes('stability') || titleLower.includes('underrun') || titleLower.includes('lateral protection') || titleLower.includes('safety')) {
            groups['Stability & Safety'].push(std);
        } else if (titleLower.includes('lighting') || titleLower.includes('light-signalling') || titleLower.includes('vision') || titleLower.includes('mirror')) {
            groups['Lighting & Visibility'].push(std);
        } else if (titleLower.includes('braking') || titleLower.includes('abs') || titleLower.includes('coupling')) {
            groups['Braking & Mechanical Systems'].push(std);
        } else {
            groups['Structural & Tank Requirements'].push(std);
        }
    });
    return groups;
  }, [filteredStandards]);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary flex items-center">
        {heroImage && <Image src={heroImage.imageUrl} alt="Bulker blueprint" fill className="object-cover opacity-10" data-ai-hint={heroImage.imageHint}/>}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center z-10">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">
              Bulkers – Design, Safety Compliance & Homologation
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              End-to-end regulatory support for bulk material transportation vehicles as per Indian automotive standards.
            </p>
          </AnimatedElement>
          <AnimatedElement delay={0.3} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild><Link href="/contact">Consult Bulker Compliance</Link></Button>
            <Button size="lg" variant="outline" asChild><Link href="#ais-section">View Applicable AIS</Link></Button>
          </AnimatedElement>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 md:px-6 lg:px-8">
        {/* 2. Bulker Types Covered */}
        <section>
          <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Bulker Types Covered</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bulkerTypes.map((category, index) => {
              const image = PlaceHolderImages.find(p => p.id === category.imageId);
              return (
                <AnimatedElement key={category.name} delay={index * 0.1}>
                  <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
                    {image && <Image src={image.imageUrl} alt={category.name} width={400} height={250} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" data-ai-hint={image.imageId} />}
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-muted-foreground text-sm mt-2 flex-grow">{category.application}</p>
                      <Badge variant="secondary" className="mt-4 w-fit">{category.configuration}</Badge>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              )
            })}
          </div>
        </section>

        {/* 3. Bulker Design & Compliance Scope */}
        <section className="mt-16 md:mt-24">
           <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Bulker Design & Compliance Scope</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center max-w-6xl mx-auto">
              {complianceScope.map((item, index) => (
                  <AnimatedElement key={item.title} delay={index * 0.1}>
                      <div className="bg-primary/5 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                        {React.cloneElement(item.icon, {className: "w-10 h-10 text-accent"})}
                      </div>
                      <p className="mt-4 font-semibold text-sm">{item.title}</p>
                  </AnimatedElement>
              ))}
          </div>
        </section>

        {/* 4. AIS Required for Bulkers */}
        <section id="ais-section" className="mt-16 md:mt-24">
           <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">AIS Applicable for Bulker Vehicles</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
                A consolidated reference of Automotive Industry Standards applicable to bulker vehicles and bulk material transportation configurations as notified by MoRTH.
            </p>
          </AnimatedElement>
          <Card className="max-w-5xl mx-auto shadow-lg">
            <CardContent className="p-6">
                 <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                        placeholder="Search by AIS code or title..." 
                        value={searchTerm} 
                        onChange={e => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                
                <Accordion type="multiple" defaultValue={['Structural & Tank Requirements']} className="w-full">
                    {Object.entries(groupedStandards).map(([groupTitle, standards]) => (
                        standards.length > 0 &&
                        <AccordionItem value={groupTitle} key={groupTitle}>
                            <AccordionTrigger className="text-lg font-semibold">{groupTitle}</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4 pt-4">
                                {standards.map(item => (
                                    <div key={item.code} className="p-4 border-l-4 border-accent bg-secondary/50 rounded-r-md">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-primary">{item.code} {item.revision && <span className="text-xs text-muted-foreground">({item.revision})</span>} — {item.title}</h4>
                                            </div>
                                            <Badge variant={item.status === 'Final' ? 'default' : 'destructive'} className={cn(item.status === 'Final' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800', 'ml-4 shrink-0')}>
                                                {item.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <p className="text-xs text-muted-foreground mt-6 text-center">
                    Source: Ministry of Road Transport & Highways (MoRTH), Government of India. AIS applicability may vary based on bulker type, capacity, and vehicle configuration.
                </p>
            </CardContent>
          </Card>
        </section>

        {/* 5. Bulker Homologation Workflow */}
        <section className="mt-16 md:mt-24">
            <AnimatedElement className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">Bulker Homologation Workflow</h2>
                <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            </AnimatedElement>
            <div className="max-w-4xl mx-auto">
                {homologationWorkflow.map((step, index) => (
                    <AnimatedElement key={step.title} delay={index * 0.1} className="flex items-center mb-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">{index + 1}</div>
                        <div className="ml-4 p-4 bg-secondary rounded-lg flex-grow">
                            <p className="font-semibold">{step.title}</p>
                        </div>
                    </AnimatedElement>
                ))}
            </div>
        </section>

        {/* 6. Testing & Certification Support */}
        <section className="mt-16 md:mt-24 bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                 <AnimatedElement>
                    {testingLabImage && <Image src={testingLabImage.imageUrl} alt="Industrial testing facility" width={600} height={400} className="rounded-lg shadow-xl" data-ai-hint={testingLabImage.imageHint} />}
                 </AnimatedElement>
                 <AnimatedElement delay={0.15}>
                    <h2 className="text-3xl font-bold font-headline mb-6">Testing & Certification Support</h2>
                    <ul className="space-y-4">
                        {testingSupport.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                 </AnimatedElement>
            </div>
        </section>

        {/* 7. Why Choose Us */}
        <section className="mt-16 md:mt-24">
            <AnimatedElement className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">Why Choose Us For Bulker Compliance</h2>
                <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            </AnimatedElement>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {whyChooseUs.map((item, index) => (
                    <AnimatedElement key={item} delay={index * 0.1}>
                        <Card className="h-full">
                            <CardContent className="p-6">
                                 <p className="font-semibold">{item}</p>
                            </CardContent>
                        </Card>
                    </AnimatedElement>
                ))}
            </div>
        </section>

        {/* 8. Call to Action */}
        <section className="mt-16 md:mt-24 text-center bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto px-4">
                <AnimatedElement>
                    <h2 className="text-3xl font-extrabold max-w-2xl mx-auto">Ensure your bulkers meet all safety and regulatory standards.</h2>
                </AnimatedElement>
                <AnimatedElement delay={0.15}>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact">Talk to Our Bulker Compliance Experts</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                             <Link href="/quote?product=Bulker Homologation">Request AIS Review</Link>
                        </Button>
                    </div>
                </AnimatedElement>
            </div>
        </section>
      </div>
    </div>
  );
}


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
import { Check, CheckCircle, Search, Truck, Thermometer, Box, Zap, Shield, TestTube, Factory, BrainCircuit, Phone, MessageSquare } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';
import { aisStandards } from '@/lib/ais-standards';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { HomologationWorkflowSection } from '@/components/ui/homologation-workflow';

const referTypes = [
    { name: 'Food Grade Refer', application: 'Fresh produce, dairy, meats.', configuration: 'Rigid / Trailer', imageId: 'refer-food' },
    { name: 'Pharmaceutical Refer', application: 'Vaccines, medicines, lab samples.', configuration: 'Rigid / Van', imageId: 'refer-pharma' },
    { name: 'Frozen Goods Refer', application: 'Deep-frozen foods, ice cream.', configuration: 'Trailer', imageId: 'refer-frozen' },
    { name: 'Multi-Temperature', application: 'Mixed cargo with different temp needs.', configuration: 'Trailer', imageId: 'refer-multi-temp' },
    { name: 'Vehicle-Mounted', application: 'Last-mile delivery, urban logistics.', configuration: 'Rigid / Van', imageId: 'refer-vehicle-mounted' },
];

const complianceScope = [
    { title: 'Insulated Construction', icon: <Box /> },
    { title: 'Refrigeration Unit', icon: <Thermometer /> },
    { title: 'Electrical & Power Safety', icon: <Zap /> },
    { title: 'Temperature Monitoring', icon: <BrainCircuit /> },
    { title: 'Structural Mounting', icon: <Truck /> },
    { title: 'Hygiene & Contamination', icon: <TestTube /> },
];

const homologationWorkflow = [
  { title: 'Container Type & Cold-Chain Requirement Assessment' },
  { title: 'Applicable AIS & CMVR Identification' },
  { title: 'Design, Insulation & Structural Evaluation' },
  { title: 'Electrical & Refrigeration System Compliance Check' },
  { title: 'Comprehensive Documentation & Approval Support' },
];

const testingSupport = [
    'Structural integrity and vehicle mounting evaluation',
    'Electrical safety and power system checks',
    'Insulation performance and thermal efficiency assessment',
    'Noise and vibration testing coordination',
    'Liaison with ARAI / ICAT for final certification',
];

const whyChooseUs = [
    'Deep expertise in cold-chain transport regulations.',
    'Reduced risk for food & pharma logistics.',
    'Faster approvals for complex container builds.',
    'End-to-end support from design to certification.',
];

export default function ReferContainerPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'refer-hero');
  const testingLabImage = PlaceHolderImages.find((p) => p.id === 'refer-testing-lab');

  const [searchTerm, setSearchTerm] = useState('');

  const referAisStandards = useMemo(() => {
    const keywords = ['refrigerated', 'special purpose', 'container', 'electrical', 'insulation', 'body', 'emc'];
    return aisStandards.filter(std =>
        keywords.some(kw => std.title.toLowerCase().includes(kw)) ||
        std.categories.some(cat => ['M', 'N', 'T'].includes(cat)) && std.title.toLowerCase().includes('construction')
    );
  }, []);
  
  const filteredStandards = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return referAisStandards.filter(std => 
        searchTerm === '' ||
        std.code.toLowerCase().includes(searchLower) ||
        std.title.toLowerCase().includes(searchLower)
    );
  }, [searchTerm, referAisStandards]);
  
  const groupedStandards = useMemo(() => {
    const groups: { [key: string]: typeof filteredStandards } = {
        'Structural & Container Requirements': [],
        'Electrical & Refrigeration Safety': [],
        'Vehicle Mounting & Stability': [],
        'Lighting, Signalling & Visibility': [],
    };
    filteredStandards.forEach(std => {
        const titleLower = std.title.toLowerCase();
        if (titleLower.includes('refrigerated') || titleLower.includes('construction') || titleLower.includes('body')) {
            groups['Structural & Container Requirements'].push(std);
        } else if (titleLower.includes('electrical') || titleLower.includes('emc') || titleLower.includes('power train')) {
            groups['Electrical & Refrigeration Safety'].push(std);
        } else if (titleLower.includes('stability') || titleLower.includes('mounting') || titleLower.includes('underrun')) {
            groups['Vehicle Mounting & Stability'].push(std);
        } else if (titleLower.includes('lighting') || titleLower.includes('vision') || titleLower.includes('mirror')) {
             groups['Lighting, Signalling & Visibility'].push(std);
        } else {
            groups['Structural & Container Requirements'].push(std);
        }
    });
    return groups;
  }, [filteredStandards]);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-12 bg-primary flex items-center">
        {heroImage && <Image src={heroImage.imageUrl} alt="Cold chain technology" fill className="object-cover opacity-10" data-ai-hint={heroImage.imageHint}/>}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center z-10">
          <AnimatedElement>
            <h1 className="text-3xl font-extrabold tracking-tight text-white font-headline">
              Refer Container Homologation
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <p className="mt-3 max-w-3xl mx-auto text-sm text-white text-muted-foreground">
              Compliance for refrigerated cold-chain logistics.
            </p>
          </AnimatedElement>
          {/* <AnimatedElement delay={0.3} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild><Link href="/contact">Consult Refer Compliance</Link></Button>
            <Button size="lg" variant="outline" asChild><Link href="#ais-section">View Applicable AIS</Link></Button>
          </AnimatedElement> */}
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 md:px-6 lg:px-8">
        {/* 2. Refer Container Types */}
        <section>
          <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Refer Container Types Covered</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            {referTypes.map((category, index) => {
              const image = PlaceHolderImages.find(p => p.id === category.imageId);
              return (
                <AnimatedElement key={category.name} delay={index * 0.1}>
                  <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
                    {image && <Image src={image.imageUrl} alt={category.name} width={400} height={250} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" data-ai-hint={image.imageId} />}
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                      <p className="text-muted-foreground text-sm mt-2 flex-grow">{category.application}</p>
                      <Badge variant="secondary" className="mt-4 w-fit">{category.configuration}</Badge>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              )
            })}
          </div>
        </section>

        {/* 3. Cold-Chain & Compliance Scope */}
        <section className="mt-16 md:mt-24">
           <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Cold-Chain & Compliance Scope</h2>
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

        {/* 4. AIS Required for Refer Containers */}
        <section id="ais-section" className="mt-16 md:mt-24">
           <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">AIS Applicable for Refer Containers</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
                A consolidated reference of Automotive Industry Standards applicable to refrigerated containers and cold-chain transport vehicles as notified by MoRTH.
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
                
                <Accordion type="multiple" defaultValue={['Structural & Container Requirements']} className="w-full">
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
                    Source: Ministry of Road Transport & Highways (MoRTH), Government of India. AIS applicability may vary based on container type, refrigeration system, and vehicle configuration.
                </p>
            </CardContent>
          </Card>
        </section>

        {/* 5. Refer Container Homologation Workflow */}
        <HomologationWorkflowSection productType="refer-container" workflowSteps={homologationWorkflow} />

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
                <h2 className="text-3xl font-bold font-headline">Why Choose Us For Refer Container Compliance</h2>
                <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            </AnimatedElement>
            <div className="max-w-4xl mx-auto bg-secondary/50 p-8 md:p-12 rounded-lg shadow-inner border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {whyChooseUs.map((item, index) => (
                        <div key={index} className="flex items-center p-4 rounded-lg bg-background/50">
                            <CheckCircle className="h-8 w-8 text-accent" />
                            <h3 className="font-semibold text-lg ml-4">{item}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 8. Call to Action */}
        <section className="mt-16 md:mt-24 text-center bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto px-4">
                <AnimatedElement>
                    <h2 className="text-3xl font-extrabold max-w-2xl mx-auto">Ensure your cold-chain logistics meet all safety and regulatory standards.</h2>
                </AnimatedElement>
                <AnimatedElement delay={0.15}>
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
                </AnimatedElement>
            </div>
        </section>
      </div>
    </div>
  );
}

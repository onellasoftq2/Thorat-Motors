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
import { Check, CheckCircle, ChevronRight, Cpu, BatteryCharging, Power, Usb, ShieldCheck, FileCheck, Search } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';
import { aisStandards } from '@/lib/ais-standards';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { HomologationWorkflowSection } from '@/components/ui/homologation-workflow';


const evCategories = [
    {
        name: 'Electric Two-Wheelers',
        class: '(L1, L2)',
        description: 'Personal mobility, last-mile delivery, and ride-sharing.',
        imageId: 'ev-two-wheeler'
    },
    {
        name: 'Electric Three-Wheelers',
        class: '(L5, E-Rickshaw, E-Cart)',
        description: 'Passenger transport, cargo logistics, and goods distribution.',
        imageId: 'ev-three-wheeler'
    }
];

const complianceScope = [
    { title: 'Electric Powertrain', icon: <Power /> },
    { title: 'Battery & Energy Storage', icon: <BatteryCharging /> },
    { title: 'Motor & Controller', icon: <Cpu /> },
    { title: 'Charging Interface', icon: <Usb /> },
    { title: 'Functional Safety', icon: <ShieldCheck /> },
    { title: 'EMC & Cybersecurity', icon: <FileCheck /> },
];

const homologationWorkflow = [
  { title: 'Vehicle Classification & Scope Finalization' },
  { title: 'Applicable AIS Identification' },
  { title: 'Prototype Evaluation & Testing' },
  { title: 'Documentation & Compliance Review' },
  { title: 'Certification & Approval Support' },
];

const testingSupport = [
    'Battery safety & performance tests (AIS-156)',
    'EMC testing coordination (AIS-004)',
    'Range & energy consumption assessment (AIS-039, AIS-040)',
    'Braking & functional safety tests (AIS-038)',
    'Liaison with ARAI / ICAT for certification'
];

const whyChooseUs = [
    'Faster approval cycles for quicker market entry.',
    'Reduced compliance risk through proactive issue identification.',
    'EV-specific regulatory expertise and deep industry knowledge.',
    'Proven experience across both 2W and 3W EV segments in India.'
];

export default function EVHomologationPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'ev-hero');
  const batteryImage = PlaceHolderImages.find((p) => p.id === 'ev-battery');
  const testingLabImage = PlaceHolderImages.find((p) => p.id === 'ev-testing-lab');

  const [searchTerm, setSearchTerm] = useState('');

  const evAisStandards = useMemo(() => {
    const keywords = ['electric', 'ev', 'battery', 'emc', 'power train', 'cyber security', 'software'];
    return aisStandards.filter(std =>
        std.categories.some(cat => ['L', 'L1', 'L2', 'L5'].includes(cat)) ||
        keywords.some(kw => std.title.toLowerCase().includes(kw))
    );
  }, []);
  
  const filteredStandards = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return evAisStandards.filter(std => 
        searchTerm === '' ||
        std.code.toLowerCase().includes(searchLower) ||
        std.title.toLowerCase().includes(searchLower)
    );
  }, [searchTerm, evAisStandards]);
  
  const groupedStandards = useMemo(() => {
    const groups: { [key: string]: typeof filteredStandards } = {
        'Powertrain & Battery': [],
        'Safety & Electrical': [],
        'General & Component': [],
    };
    filteredStandards.forEach(std => {
        const titleLower = std.title.toLowerCase();
        if (titleLower.includes('battery') || titleLower.includes('power train') || titleLower.includes('range') || titleLower.includes('energy consumption')) {
            groups['Powertrain & Battery'].push(std);
        } else if (titleLower.includes('safety') || titleLower.includes('emc') || titleLower.includes('electromagnetic')) {
            groups['Safety & Electrical'].push(std);
        } else {
            groups['General & Component'].push(std);
        }
    });
    return groups;
  }, [filteredStandards]);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center z-10">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">
              Electric Vehicles (2W & 3W)
              <br />
              <span className="text-primary">Design, Testing & Homologation</span>
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              End-to-end regulatory compliance services to navigate the complexities of electric mobility in India.
            </p>
          </AnimatedElement>
          <AnimatedElement delay={0.3} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild><Link href="/contact">Consult EV Compliance</Link></Button>
            <Button size="lg" variant="outline" asChild><Link href="#ais-section">View Applicable AIS</Link></Button>
          </AnimatedElement>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 md:px-6 lg:px-8">
        {/* 2. EV Categories Covered */}
        <section>
          <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">EV Categories Covered</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {evCategories.map((category, index) => {
              const image = PlaceHolderImages.find(p => p.id === category.imageId);
              return (
                <AnimatedElement key={category.name} delay={index * 0.1}>
                  <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                    {image && <Image src={image.imageUrl} alt={category.name} width={500} height={300} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold">{category.name} <span className="text-muted-foreground font-normal">{category.class}</span></h3>
                      <p className="text-muted-foreground mt-2">{category.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              )
            })}
          </div>
        </section>

        {/* 3. EV System & Compliance Scope */}
        <section className="mt-16 md:mt-24">
           <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">EV System & Compliance Scope</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center max-w-5xl mx-auto">
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

        {/* 4. AIS Required for EV Vehicles */}
        <section id="ais-section" className="mt-16 md:mt-24">
           <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">AIS Applicable for Electric Vehicles (2W & 3W)</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
                A consolidated reference of Automotive Industry Standards applicable to electric two-wheelers and three-wheelers as per MoRTH regulations.
            </p>
          </AnimatedElement>
          <Card className="max-w-4xl mx-auto shadow-lg">
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
                
                <Accordion type="multiple" defaultValue={['Powertrain & Battery']} className="w-full">
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
                    Source: Ministry of Road Transport &amp; Highways (MoRTH), Government of India. AIS applicability may vary based on vehicle category and configuration.
                </p>
            </CardContent>
          </Card>
        </section>

        {/* 5. EV Homologation Workflow */}
        <HomologationWorkflowSection productType="ev" workflowSteps={homologationWorkflow} />

        {/* 6. Testing & Certification Support */}
        <section className="mt-16 md:mt-24 bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                 <AnimatedElement>
                    {testingLabImage && <Image src={testingLabImage.imageUrl} alt="EV Testing Lab" width={600} height={400} className="rounded-lg shadow-xl" data-ai-hint={testingLabImage.imageHint} />}
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
                <h2 className="text-3xl font-bold font-headline">Why Choose Us For EV Compliance</h2>
                <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            </AnimatedElement>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {whyChooseUs.map((item, index) => (
                    <AnimatedElement key={item} delay={index * 0.1}>
                        <Card>
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
                    <h2 className="text-3xl font-extrabold max-w-2xl mx-auto">Ready to accelerate your EV project?</h2>
                </AnimatedElement>
                <AnimatedElement delay={0.15}>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact">Talk to Our EV Compliance Experts</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                             <Link href="/quote?product=EV Homologation">Request AIS Review</Link>
                        </Button>
                    </div>
                </AnimatedElement>
            </div>
        </section>
      </div>
    </div>
  );
}

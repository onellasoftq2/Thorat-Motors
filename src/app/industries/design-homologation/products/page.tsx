
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import {
  Check,
  ChevronRight,
  Truck,
  Bus,
  Car,
  Fuel,
  Container,
  Package,
  Wrench,
  Thermometer,
  ShieldCheck,
  Zap,
  Cpu,
  GitBranch,
  CircleDot,
  FileText,
  Search,
  BookOpen
} from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';
import { aisStandards } from '@/lib/ais-standards';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


const vehicleCategories = [
    { name: "Electric Vehicles (2W/3W)", href: "/industries/design-homologation/products/ev", icon: <Car /> },
    { name: "Commercial Vehicles", href: "/industries/design-homologation/products/commercial-vehicle", icon: <Truck /> },
    { name: "Buses", href: "/industries/design-homologation/products/bus", icon: <Bus /> },
    { name: "Trailers", href: "/industries/design-homologation/products/trailers", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck"><path d="M5 18H3c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-1" /><path d="M14 18h1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-1" /><path d="M18 18h3c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-2l-3 4-3-4H3" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg> },
    { name: "Bulkers", href: "/industries/design-homologation/products/bulkers", icon: <Fuel /> },
    { name: "Refer Containers", href: "/industries/design-homologation/products/refer-container", icon: <Thermometer /> },
];

const componentCategories = [
    { name: "Tyres & Wheels", icon: <CircleDot />, keywords: ['tyre', 'wheel', 'rim'] },
    { name: "Braking Systems", icon: <ShieldCheck />, keywords: ['braking', 'brake', 'abs'] },
    { name: "Lighting & Signalling", icon: <Zap />, keywords: ['lighting', 'light-signalling', 'headlamp', 'lamp'] },
    { name: "Electric Powertrain & Battery", icon: <Cpu />, keywords: ['electric', 'battery', 'power train', 'emc'] },
    { name: "Coupling & Towing Devices", icon: <GitBranch />, keywords: ['coupling', 'kingpin', 'towing'] },
    { name: "Safety & Electronic Systems", icon: <ShieldCheck />, keywords: ['safety', 'cyber security', 'software', 'adas'] },
];

const componentComplianceScope = [
    { title: 'Type Approval', description: 'Ensuring individual components meet standalone regulatory standards before vehicle integration.' },
    { title: 'Vehicle-Level Integration', description: 'Verifying that certified components function correctly within the complete vehicle system.' },
    { title: 'AIS/IS Standards', description: 'Adhering to both Automotive Industry Standards and Bureau of Indian Standards for components.' },
    { title: 'Supply Chain Compliance', description: 'Ensuring all parts sourced and used in manufacturing meet requisite quality and safety norms.' },
];

export default function AllProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const productOptions = [...vehicleCategories, ...componentCategories].sort((a,b) => a.name.localeCompare(b.name));

    const filteredStandards = useMemo(() => {
        if (selectedProduct === '' && !searchTerm) return [];

        const searchLower = searchTerm.toLowerCase();

        return aisStandards.filter(std => {
            const matchesSearch = searchTerm ?
                std.code.toLowerCase().includes(searchLower) ||
                std.title.toLowerCase().includes(searchLower) : true;
            
            if (!matchesSearch) return false;

            if (!selectedProduct || selectedProduct === 'all') {
                return true; 
            }

            const product = productOptions.find(p => p.name === selectedProduct);
            if (!product) return false;

            let productKeywords: string[] = [];
            if ('keywords' in product && product.keywords) {
                productKeywords = product.keywords;
            } else {
                const vehicleKeywordMap: {[key:string]: string[]} = {
                    "Electric Vehicles (2W/3W)": ['ev', 'electric', 'l1', 'l2', 'l5'],
                    "Commercial Vehicles": ['n1', 'n2', 'n3', 'commercial'],
                    "Buses": ['bus', 'm2', 'm3'],
                    "Trailers": ['trailer', 't'],
                    "Bulkers": ['bulker', 'tanker'],
                    "Refer Containers": ['refrigerated', 'container'],
                };
                productKeywords = vehicleKeywordMap[product.name as keyof typeof vehicleKeywordMap] || [];
            }
            
            return productKeywords.some(kw => 
                std.title.toLowerCase().includes(kw) || 
                std.code.toLowerCase().includes(kw) ||
                std.categories.some(cat => cat.toLowerCase().startsWith(kw))
            );
        });

    }, [selectedProduct, searchTerm, productOptions]);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-8 bg-secondary flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center z-10">
          <AnimatedElement>
            <h1 className="text-3xl font-extrabold tracking-tight font-headline">
              All Products – Vehicles, Systems & Components
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              Regulatory compliance and homologation support across vehicles and critical automotive components.
            </p>
          </AnimatedElement>
          <AnimatedElement delay={0.3} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild><Link href="#ais-applicability">Find Applicable AIS</Link></Button>
            <Button size="lg" variant="outline" asChild><Link href="/contact">Consult Compliance Experts</Link></Button>
          </AnimatedElement>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 md:px-6 lg:px-8">
        {/* 2. Product Categories */}
        <section>
          <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Product Categories Supported</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold font-headline mb-6 border-b pb-2">Vehicles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicleCategories.map((category, index) => (
                <AnimatedElement key={category.name} delay={index * 0.1}>
                   <Link href={category.href || '#'} className="group block h-full">
                    <Card className="h-full overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:border-accent hover:-translate-y-1">
                      <CardHeader className="flex-row items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full group-hover:bg-accent transition-colors duration-300">
                          {React.cloneElement(category.icon as React.ReactElement, { className: "w-8 h-8 text-primary group-hover:text-accent-foreground" })}
                        </div>
                        <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold font-headline mb-6 border-b pb-2">Components & Systems</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {componentCategories.map((category, index) => (
                <AnimatedElement key={category.name} delay={index * 0.1}>
                  <Card className="h-full overflow-hidden shadow-md">
                    <CardHeader className="flex-row items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                         {React.cloneElement(category.icon as React.ReactElement, { className: "w-8 h-8 text-primary" })}
                      </div>
                      <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                    </CardHeader>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Component-Level Compliance Scope */}
        <section className="mt-16 md:mt-24 bg-secondary py-16 md:py-20 rounded-lg">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
             <AnimatedElement className="text-center mb-12">
              <h2 className="text-3xl font-bold font-headline">Component-Level Compliance Scope</h2>
              <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            </AnimatedElement>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {componentComplianceScope.map((item, index) => (
                    <AnimatedElement key={item.title} delay={index * 0.1}>
                        <Card className="h-full text-center p-6">
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
                        </Card>
                    </AnimatedElement>
                ))}
            </div>
          </div>
        </section>

        {/* 4. AIS Applicability Across Products */}
        <section id="ais-applicability" className="mt-16 md:mt-24">
           <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">AIS Applicability Across Products</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              A consolidated reference to understand how Automotive Industry Standards apply to vehicles and individual systems.
            </p>
          </AnimatedElement>
          <Card className="max-w-5xl mx-auto shadow-lg">
            <CardContent className="p-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                        <SelectTrigger><SelectValue placeholder="Select a product or system" /></SelectTrigger>
                        <SelectContent>
                        <SelectItem value="all">All Products</SelectItem>
                        {productOptions.map(p => <SelectItem key={p.name} value={p.name}>{p.name}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by AIS code or title..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full h-10 rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm"
                        />
                    </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden min-h-[300px]">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>AIS Code</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredStandards.length > 0 ? (
                                filteredStandards.map((std, index) => (
                                    <motion.tr
                                        key={std.code}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="hover:bg-secondary/50"
                                    >
                                        <TableCell className="font-medium">{std.code} {std.revision && <span className="text-xs text-muted-foreground">({std.revision})</span>}</TableCell>
                                        <TableCell>{std.title}</TableCell>
                                        <TableCell>
                                            <Badge variant={std.status === 'Final' ? 'default' : 'destructive'} className={cn(std.status === 'Final' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800')}>
                                                {std.status}
                                            </Badge>
                                        </TableCell>
                                    </motion.tr>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
                                        {(selectedProduct || searchTerm) ? "No standards match your criteria." : "Select a product or enter a search term to see applicable AIS."}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                <p className="text-xs text-muted-foreground mt-6 text-center">
                    Source: Ministry of Road Transport & Highways (MoRTH), Government of India. AIS applicability depends on product type, configuration, and usage.
                </p>
            </CardContent>
          </Card>
        </section>

        {/* 5. Cross-Navigation */}
        <section className="mt-16 md:mt-24 text-center">
            <h3 className="text-2xl font-bold font-headline mb-4">Explore Further</h3>
            <div className="flex flex-wrap justify-center gap-4">
                <Button variant="link" asChild><Link href="/industries/design-homologation/ais-list">Complete AIS List <ChevronRight/></Link></Button>
                <Button variant="link" asChild><Link href="/industries/design-homologation/institute-of-approvals">Institutes of Approval <ChevronRight/></Link></Button>
            </div>
        </section>
        
        {/* 6. Call to Action */}
        <section className="mt-16 text-center bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto px-4">
                <AnimatedElement>
                    <h2 className="text-3xl font-extrabold max-w-2xl mx-auto">Need expert guidance on vehicle or component compliance?</h2>
                </AnimatedElement>
                <AnimatedElement delay={0.15}>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact">Talk to Our Compliance Experts</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                             <Link href="/quote?productCategory=services&product=Designing & Homologation">Request AIS Review</Link>
                        </Button>
                    </div>
                </AnimatedElement>
            </div>
        </section>
      </div>
    </div>
  );
}

    
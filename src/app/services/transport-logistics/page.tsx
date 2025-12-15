
'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, Map, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  { icon: <Map />, title: 'Route Planning', description: 'Optimized routing to ensure timely and cost-effective delivery.' },
  { icon: <Zap />, title: 'Load Optimization', description: 'Expert loading techniques to maximize payload and ensure cargo safety.' },
  { icon: <ShieldCheck />, title: 'Safety Compliance', description: 'Strict adherence to all transport regulations and safety protocols.' },
];

const whyChooseUs = [
    { title: 'Faster Delivery Cycles', description: 'Our optimized logistics reduce transit times and improve your supply chain efficiency.'},
    { title: 'Improved Safety', description: 'Professional handling and compliant practices minimize risk to your valuable cargo.'},
    { title: 'Nationwide Reach', description: 'With 7 service locations, we have the network to support your operations across India.'},
]

export default function TransportLogisticsPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            Transport & Logistics
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Reliable logistics and end-to-end transportation support across India.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold font-headline mb-2">Moving Your Business Forward</h2>
                 <div className="w-24 h-1.5 bg-accent mb-4"></div>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    We provide end-to-end transport and logistics solutions to ensure your products are delivered safely and on time. With 7 service locations, we offer Pan-India delivery support. Our expertise in material movement covers cement, clinker, coal, steel, and aggregates, with a fleet compatible with all major trailer types.
                </p>
            </div>
            <div className="flex justify-center">
                <Image src="https://images.unsplash.com/photo-1577985051167-3d7f3394c8b2?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trucks on road" width={500} height={400} className="rounded-lg shadow-md" data-ai-hint="truck highway" />
            </div>
        </section>

        {/* Capabilities Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold font-headline text-center mb-2">Service Capabilities</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((item) => (
              <Card key={item.title} className="text-center shadow-md">
                <CardHeader className="items-center">
                    <div className='bg-primary/10 p-4 rounded-full'>
                        {React.cloneElement(item.icon, { className: "h-8 w-8 text-accent" })}
                    </div>
                    <CardTitle className="mt-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-24">
            <h2 className="text-3xl font-bold font-headline text-center mb-2">Why Choose Our Logistics Support?</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto mb-12"></div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {whyChooseUs.map(item => (
                    <div key={item.title}>
                        <h3 className="font-semibold text-xl text-center mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-center">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>


        {/* CTA */}
        <section className="mt-24 text-center bg-secondary py-16 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-headline">Optimize Your Supply Chain</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">Let us handle the logistics, so you can focus on your core business.</p>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/quote">Request Transport Support</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

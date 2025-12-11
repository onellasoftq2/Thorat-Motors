
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, Cog, Disc, Truck, Wrench } from 'lucide-react';
import Link from 'next/link';

const partCategories = [
  { name: 'Axles (TATA, YORK, FUWA, JOST)', icon: <Disc/> },
  { name: 'Brake Components (WABCO, WEBCO)', icon: <Cog/> },
  { name: 'Suspension Parts', icon: <Wrench/> },
  { name: 'Wheel Rims & Tyres (Apollo, JK, MRF)', icon: <Truck/> },
  { name: 'Kingpins & Landing Gears', icon: <Cog/> },
  { name: 'Electrical Systems', icon: <Cog/> },
];

const benefits = [
    { title: "Nationwide Distribution", description: "With 7 service locations, we get parts to you faster, minimizing downtime."},
    { title: "OEM-Grade Components", description: "We supply genuine, original equipment manufacturer parts for guaranteed compatibility and performance."},
    { title: "Durability & Reliability", description: "Our parts meet the same high standards as our vehicles, ensuring long-lasting repairs."},
]

const serviceSupport = [
    "Installation Assistance", "On-Site Repair", "Overhaul Capability", "Warranty Support"
]

export default function SparePartsPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">Spare Parts Division</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Genuine, reliable, and ready-to-dispatch spare parts for trailers and portable cabins.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Parts Categories */}
        <section>
          <h2 className="text-3xl font-bold text-center font-headline mb-2">Our Parts Inventory</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partCategories.map((category) => (
              <Card key={category.name} className="shadow-md">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="bg-primary/10 text-accent p-3 rounded-full">
                    {React.cloneElement(category.icon, {className: "w-6 h-6"})}
                  </div>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-24">
            <h2 className="text-3xl font-bold text-center font-headline mb-2">Why Choose Our Spare Parts?</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} className="text-center shadow-md">
                        <CardHeader>
                            <CardTitle>{benefit.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        {/* Service Support */}
        <section className="mt-24 bg-secondary py-16 rounded-lg">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline mb-2">Comprehensive Service Support</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto mb-12"></div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {serviceSupport.map((support) => (
                <div key={support} className="flex items-center text-lg">
                  <Check className="h-6 w-6 text-accent mr-2" />
                  <span>{support}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold font-headline">Keep Your Fleet Running</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Contact our parts division to get the right components for your trailers and cabins, delivered fast.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/quote?productCategory=spare-parts">Order Spare Parts</Link>
          </Button>
        </section>
      </div>
    </>
  );
}

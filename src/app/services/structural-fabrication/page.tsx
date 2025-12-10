
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldCheck, Layers, Settings, Workflow, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const overviewItems = [
    { title: 'CNC Cutting & Bending Machines', description: 'For high-precision shaping of steel components.' },
    { title: 'MIG/TIG & Molding Machines', description: 'Advanced welding and molding for strong, reliable joints.' },
    { title: 'Shot Blasting & Epoxy Coating', description: 'Superior surface preparation for corrosion resistance and paint adhesion.' },
    { title: 'High-Strength Steel', description: 'Expertise in BSK46 and IS2062 steel for durable, lightweight structures.' },
];

const processSteps = [
    { name: "Material Preparation" },
    { name: "Cutting & Forming" },
    { name: "Welding & Assembly" },
    { name: "Finishing & Coating" },
];

const qualityStandards = [
    { icon: <ShieldCheck />, title: 'ISO Manufacturing', description: 'Adherence to international quality management standards in all processes.'},
    { icon: <Layers />, title: 'Structural Rigidity Testing', description: 'Rigorous testing to ensure every structure can withstand specified loads and stresses.'},
    { icon: <Settings />, title: 'Corrosion Resistance', description: 'Multi-layer coating systems to protect against rust and environmental wear.'},
    { icon: <Workflow />, title: 'Long Lifespan Durability', description: 'Engineered and built for a long service life with minimal maintenance.'},
]

export default function StructuralFabricationPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Structural Fabrication</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                High-precision fabrication powered by CNC cutting, welding, forming, and assembly technologies.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-12">Our Advanced Manufacturing Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {overviewItems.map((item) => (
              <Card key={item.title} className="shadow-md">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mt-24">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Our Fabrication Process</h2>
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
                {processSteps.map((step, index) => (
                    <div key={step.name} className="relative flex items-center md:justify-center md:even:flex-row-reverse mb-12 group">
                        <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 ring-4 ring-background"></div>
                         <div className="md:w-[calc(50%-2rem)]">
                            <Card className="shadow-md transition-shadow group-hover:shadow-xl">
                                <CardContent className="pt-6">
                                     <p className="text-lg font-semibold flex items-center"><span className="text-primary mr-4 text-2xl font-bold">0{index + 1}</span> {step.name}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Quality Standards Section */}
        <section className="mt-24 bg-secondary py-16 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Commitment to Quality</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityStandards.map((item) => (
                <div key={item.title} className="text-center">
                   {React.cloneElement(item.icon, { className: "h-10 w-10 text-primary mx-auto mb-4" })}
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold font-headline">Have a Fabrication Project?</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">From trailer chassis to custom container frames, our facility is ready for your project.</p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/quote">Request Fabrication Support</Link>
          </Button>
        </section>
      </div>
    </>
  );
}

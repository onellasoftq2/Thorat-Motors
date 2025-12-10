
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Droplets, ShieldCheck, Wind, PaintRoller, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const conversionCapabilities = [
  { icon: <Zap />, title: 'Electrical & Plumbing', description: 'Full integration of concealed wiring, outlets, and plumbing systems.' },
  { icon: <ShieldCheck />, title: 'Insulation & Paneling', description: 'Wall and ceiling insulation to manage temperature and reduce noise.' },
  { icon: <Wind />, title: 'Ventilation & AC', description: 'Installation of windows, vents, and air conditioning units for comfort.' },
  { icon: <PaintRoller />, title: 'Exterior Cladding & Paint', description: 'Custom exterior finishes and paint to match your branding.' },
];

const popularConversions = [
  { title: 'Office Containers' },
  { title: 'Retail Shops & Food Stalls' },
  { title: 'Storage & Inventory Rooms' },
  { title: 'Worker Accommodation' },
  { title: 'Display & Hospitality Units' },
];

const whyChooseUs = [
    { title: 'Fabrication Quality', description: 'Leveraging our expertise in structural fabrication for durable, high-quality conversions.'},
    { title: 'Fast Turnaround', description: 'Our streamlined process ensures your container is ready for deployment quickly.'},
    { title: 'Design Flexibility', description: 'We work with you to create a custom layout and design that fits your exact needs.'},
    { title: 'Structural Durability', description: 'Built on the inherent strength of shipping containers, ensuring a long-lasting structure.'},
]

export default function ContainerConversionsPage() {
  return (
    <>
      <div className="relative bg-secondary h-80 flex items-center justify-center">
        <Image src="https://images.unsplash.com/photo-1506974210756-8e1b895da71b?q=80&w=2070&auto=format&fit=crop" alt="Container conversion" fill className="object-cover" data-ai-hint="container home" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Container Conversions & Modifications</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">Transforming 20 ft and 40 ft containers into high-utility structures.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline">Durable, Flexible, and Fast Solutions</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Used shipping containers provide an incredibly strong and durable base for a variety of structures, with an estimated lifespan of 10-15 years. We specialize in modifying these 20 ft and 40 ft containers into functional and cost-effective spaces for storage, offices, shops, kiosks, and accommodation. Our service includes custom interior and exterior design options to bring your vision to life.
          </p>
        </section>

        {/* Conversion Capabilities */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold font-headline text-center mb-12">Conversion Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conversionCapabilities.map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {React.cloneElement(item.icon, { className: "h-8 w-8 text-primary" })}
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

         {/* Popular Conversions */}
        <section className="mt-24">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Popular Conversion Types</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                {popularConversions.map(item => (
                    <Card key={item.title} className="p-6 flex items-center justify-center">
                        <p className="font-semibold">{item.title}</p>
                    </Card>
                ))}
            </div>
        </section>


        {/* Why Choose Us */}
        <section className="mt-24 bg-secondary py-16 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Why Choose Thorat Motors?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold font-headline">Ready to Start Your Container Project?</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">Let's discuss how we can transform a container into your next workspace, shop, or home.</p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/quote">Start Your Container Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </section>
      </div>
    </>
  );
}

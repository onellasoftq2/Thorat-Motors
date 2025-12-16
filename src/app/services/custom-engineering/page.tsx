
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Settings, TestTube, Construction } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  { icon: <Settings />, title: 'High-Strength Steel', description: 'Expertise in BSK46, ST52, and IS2062 steel for optimal strength-to-weight ratio.' },
  { icon: <TestTube />, title: 'Structural Modeling', description: 'Advanced simulation and testing to validate design integrity and performance.' },
  { icon: <Construction />, title: 'Custom Dimensions', description: 'Flexible sizing for trailers (24-45 ft) and bespoke cabin/container modifications.' },
];

const useCases = [
    "Heavy-duty trailers for mining operations",
    "On-site accommodation for construction projects",
    "Mobile retail units and kiosks",
    "Specialized storage for industrial facilities",
    "Bespoke mobile office and workshop solutions"
]

export default function CustomEngineeringPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center md:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">Custom Engineering</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Bespoke engineering solutions for specialized industrial applications.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 md:px-6 lg:px-8">
        {/* Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold font-headline mb-2">Engineered for Your Unique Needs</h2>
                <div className="w-24 h-1.5 bg-accent mb-4"></div>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    Standard solutions don't always fit specialized requirements. Our custom engineering service is dedicated to designing and building trailers, cabins, and container structures that are tailored precisely to your operational challenges. From heavy-duty trailers for unique cargo to custom portable cabins for specific site needs, our team collaborates with you to deliver a perfect-fit solution.
                </p>
            </div>
            <div>
                <Card className='shadow-md'>
                    <CardHeader>
                        <CardTitle>Core Offerings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="flex items-start"><Check className="text-accent mr-2 mt-1 flex-shrink-0"/> Custom Trailer Design</p>
                        <p className="flex items-start"><Check className="text-accent mr-2 mt-1 flex-shrink-0"/> Custom Portable Cabin Solutions</p>
                        <p className="flex items-start"><Check className="text-accent mr-2 mt-1 flex-shrink-0"/> Custom Structural Design</p>
                        <p className="flex items-start"><Check className="text-accent mr-2 mt-1 flex-shrink-0"/> Special Application Engineering</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        {/* Technical Capabilities */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-3xl font-bold font-headline text-center mb-2">Technical Capabilities</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((item) => (
              <div key={item.title} className="text-center">
                {React.cloneElement(item.icon, { className: "h-12 w-12 text-accent mx-auto mb-4" })}
                <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mt-16 md:mt-24 bg-secondary py-12 md:py-16 rounded-lg">
            <div className="container mx-auto px-4 text-center md:px-6 lg:px-8">
                <h2 className="text-3xl font-bold font-headline mb-2">Example Use Cases</h2>
                <div className="w-24 h-1.5 bg-accent mx-auto mb-8"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map(useCase => (
                        <Card key={useCase} className="text-left shadow-md">
                            <CardContent className="pt-6">
                                <p className="font-medium leading-relaxed">{useCase}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="mt-16 md:mt-24 text-center">
          <h2 className="text-3xl font-bold font-headline">Have a Unique Challenge?</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">Our engineers are ready to create a solution that works for you. Let's build it together.</p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/quote">Request a Custom Design</Link>
          </Button>
        </section>
      </div>
    </>
  );
}

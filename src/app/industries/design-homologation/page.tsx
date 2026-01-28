
'use client';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';

const designHomologationGroups = [
  {
    title: 'Products',
    items: [
      { name: "EV (2-wheelers & 3-wheelers)", href: "/industries/design-homologation/products/ev" },
      { name: "Trailers", href: "/industries/design-homologation/products/trailers" },
      { name: "Bus", href: "/industries/design-homologation/products/bus" },
      { name: "Bulkers", href: "/industries/design-homologation/products/bulkers" },
      { name: "Refer Container", href: "/industries/design-homologation/products/refer-container" },
      { name: "Commercial Vehicle", href: "/industries/design-homologation/products/commercial-vehicle" },
    ]
  },
  {
    title: 'Compliance & Certification',
    items: [
      { name: "List of AIS", href: "/industries/design-homologation/ais-list" },
      { name: "Institute of Approvals", href: "/industries/design-homologation/institute-of-approvals" },
      { name: "Clients", href: "/industries/design-homologation/clients" },
    ]
  },
];

export default function DesignHomologationPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center md:px-6 lg:px-8">
          <AnimatedElement>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
              Design & Homologation
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.1}>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Explore our full range of design, compliance, and certification services for the automotive industry.
            </p>
          </AnimatedElement>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designHomologationGroups.map((group, index) => (
            <AnimatedElement key={group.title} delay={index * 0.1}>
                <Card className="h-full shadow-md">
                <CardHeader>
                    <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                    {group.items.map(item => (
                        <li key={item.name}>
                        <Link href={item.href} className="flex items-center justify-between p-2 rounded-md hover:bg-secondary group">
                            <span className="text-muted-foreground group-hover:text-primary">{item.name}</span>
                            <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </>
  )
}

    
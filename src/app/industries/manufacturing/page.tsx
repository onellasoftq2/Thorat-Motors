
'use client';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';

const manufacturingGroups = [
  {
    title: 'Bulkers',
    items: [
      { name: 'Cement Bulkers', href: '/industries/manufacturing/bulkers/cement-bulkers' },
      { name: 'Rigid Vehicle', href: '/industries/manufacturing/bulkers/rigid-vehicle' },
      { name: 'Tipping Bulkers', href: '/industries/manufacturing/bulkers/tipping-bulkers' },
      { name: 'Food Bulkers', href: '/industries/manufacturing/bulkers/food-bulkers' },
      { name: 'Bulker Trailers', href: '/industries/manufacturing/bulkers/bulker-trailers' },
    ]
  },
  {
    title: 'Trailers',
    items: [
      { name: 'Flatbed Trailers', href: '/industries/manufacturing/trailers/flatbed' },
      { name: 'Sidewall Trailers', href: '/industries/manufacturing/trailers/sidewall' },
      { name: 'Tip Trailers', href: '/industries/manufacturing/trailers/tip' },
      { name: 'Skeletal Trailers', href: '/industries/manufacturing/trailers/skeletal' },
      { name: 'Semi Lowbed Trailers', href: '/industries/manufacturing/trailers/semi-lowbed' },
    ]
  },
  {
    title: 'Tankers',
    items: [
      { name: 'Cragganmore Tank', href: '/industries/manufacturing/tankers/cragganmore-tank' },
      { name: 'Milk Tank', href: '/industries/manufacturing/tankers/milk-tank' },
      { name: 'Petroleum Tank', href: '/industries/manufacturing/tankers/petroleum-tank' },
      { name: 'Gas Tank', href: '/industries/manufacturing/tankers/gas-tank' },
    ]
  },
  {
    title: 'Load Bodies',
    items: [
      { name: 'TATA Load Bodies', href: '/industries/manufacturing/load-bodies/tata' },
      { name: 'BharatBenz Load Bodies', href: '/industries/manufacturing/load-bodies/bharatbenz' },
      { name: 'Ashok Leyland Load Bodies', href: '/industries/manufacturing/load-bodies/ashok-leyland' },
    ]
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center md:px-6 lg:px-8">
          <AnimatedElement>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
              Manufacturing Capabilities
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.1}>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Explore our full range of high-precision fabricated products, from heavy-duty trailers to custom load bodies.
            </p>
          </AnimatedElement>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {manufacturingGroups.map((group, index) => (
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

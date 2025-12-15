
'use client';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Gem, Anchor, Wrench, Leaf, ShoppingCart, Home, ArrowRight } from 'lucide-react';
import { type Industry } from '@/lib/data';

const iconMap: { [key: string]: React.ReactNode } = {
  cement: <Building className="h-8 w-8 text-accent" />,
  mining: <Gem className="h-8 w-8 text-accent" />,
  ports: <Anchor className="h-8 w-8 text-accent" />,
  construction: <Wrench className="h-8 w-8 text-accent" />,
  agriculture: <Leaf className="h-8 w-8 text-accent" />,
  retail: <ShoppingCart className="h-8 w-8 text-accent" />,
  housing: <Home className="h-8 w-8 text-accent" />,
};


const IndustryCard = ({ industry }: { industry: Industry }) => {
    return (
        <Link href={`/industries#${industry.id}`} className="group block h-full">
            <Card className="relative h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 border-transparent hover:border-accent">
                 <div className="absolute top-0 left-0 h-full w-1 bg-accent scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></div>
                <CardContent className="p-6 text-left h-full">
                    <div className="mb-4 transition-transform duration-300 group-hover:scale-110 bg-primary/10 p-3 rounded-full w-fit">
                        {iconMap[industry.id]}
                    </div>
                    <h3 className="font-bold text-lg font-headline text-foreground mb-2">{industry.name}</h3>
                    <p className="text-muted-foreground text-sm">{industry.description}</p>
                </CardContent>
            </Card>
        </Link>
    );
};

export default IndustryCard;

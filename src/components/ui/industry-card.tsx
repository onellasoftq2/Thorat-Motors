
'use client';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Gem, Anchor, Wrench, Leaf, ShoppingCart, Home, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Industry = {
    id: string;
    name: string;
};

const iconMap: { [key: string]: React.ReactNode } = {
  cement: <Building className="h-10 w-10 text-primary" />,
  mining: <Gem className="h-10 w-10 text-primary" />,
  ports: <Anchor className="h-10 w-10 text-primary" />,
  construction: <Wrench className="h-10 w-10 text-primary" />,
  agriculture: <Leaf className="h-10 w-10 text-primary" />,
  retail: <ShoppingCart className="h-10 w-10 text-primary" />,
  housing: <Home className="h-10 w-10 text-primary" />,
};


const IndustryCard = ({ industry }: { industry: Industry }) => {
    return (
        <Link href={`/industries#${industry.id}`} className="group block">
            <Card className="relative h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                    <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                        {iconMap[industry.id]}
                    </div>
                    <h3 className="font-semibold text-lg font-headline text-foreground">{industry.name}</h3>
                    <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="flex items-center font-semibold text-primary">
                            View More <ArrowRight className="ml-2 h-4 w-4"/>
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};

export default IndustryCard;

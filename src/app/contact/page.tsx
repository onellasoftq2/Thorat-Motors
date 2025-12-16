
import { offices, contactInfo } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to help. Reach out to our team at any of our locations across India.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 md:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Get a Quote</h2>
          <p className="max-w-xl mx-auto text-muted-foreground mb-6">
            Have a specific requirement? Our engineering team is ready to assist you with a custom quote.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/quote">Request a Quote</Link>
          </Button>
        </div>

        <h2 className="text-3xl font-bold font-headline text-center mb-2">Our Offices</h2>
        <div className="w-24 h-1.5 bg-accent mx-auto mb-8"></div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <Card key={office.city} className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-start font-headline">
                  <MapPin className="h-6 w-6 mr-3 text-accent flex-shrink-0 mt-1" />
                  <div>
                    {office.city}
                    <p className="text-sm font-normal text-muted-foreground">{office.state}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>{office.address}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

    

import Image from 'next/image';
import { company } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Eye, Goal } from 'lucide-react';

export default function CompanyPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-image');
  const mdImage = PlaceHolderImages.find((img) => img.id === 'md-portrait');

  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 lg:px-8">
          <h1 id="about" className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            About Thorat Motors India
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A legacy of engineering excellence and a future focused on innovation.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        {/* Our Story */}
        <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-headline text-center mb-2">Our Story</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg leading-relaxed text-center">{company.about}</p>
        </section>

        {/* MD's Message */}
        <section className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-5xl mx-auto">
                 <div className="md:col-span-1 flex justify-center">
                    {mdImage && (
                        <Image src={mdImage.imageUrl} alt={mdImage.description} width={350} height={350} className="rounded-full shadow-lg aspect-square object-cover" data-ai-hint={mdImage.imageHint} />
                    )}
                </div>
                <div className="md:col-span-2">
                    <Card className="bg-secondary border-l-4 border-accent">
                        <CardContent className="pt-6">
                            <blockquote className="text-lg font-medium leading-relaxed">"{company.mdMessage}"</blockquote>
                            <p className="text-right mt-4 font-semibold text-primary">- {company.leadership[0].name}, Managing Director</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
            <div className="group relative rounded-lg border border-border bg-card p-8 text-center shadow-md transition-all duration-300 hover:border-transparent hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-3xl font-bold font-headline">Our Vision</h3>
                <p className="mt-4 text-muted-foreground text-lg">{company.vision}</p>
              </div>
            </div>
             <div className="group relative rounded-lg border border-border bg-card p-8 text-center shadow-md transition-all duration-300 hover:border-transparent hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Goal className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-3xl font-bold font-headline">Our Mission</h3>
                <p className="mt-4 text-muted-foreground text-lg">{company.mission}</p>
              </div>
            </div>
        </section>

        {/* Manufacturing Excellence */}
        <section id="manufacturing" className="mt-24">
            <h2 className="text-3xl font-bold font-headline text-center mb-2">Manufacturing Excellence</h2>
             <div className="w-24 h-1.5 bg-accent mx-auto mb-8"></div>
            {aboutImage && <Image src={aboutImage.imageUrl} alt={aboutImage.description} width={1200} height={600} className="w-full rounded-lg shadow-md" data-ai-hint={aboutImage.imageHint}/>}
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto text-center">Our state-of-the-art facilities are equipped with advanced machinery and operated by a skilled workforce. We follow stringent quality control protocols at every stage of production, from raw material sourcing to final product inspection, ensuring every unit that leaves our factory meets the highest standards of quality and safety.</p>
        </section>

        {/* Leadership */}
        <section id="leadership" className="mt-24">
            <h2 className="text-3xl font-bold font-headline text-center mb-2">Leadership Team</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto mb-8"></div>
            <div className="flex flex-wrap justify-center gap-8">
                {company.leadership.map(leader => (
                    <div key={leader.name} className="flex flex-col items-center">
                        <Avatar className="w-24 h-24 mb-2">
                           <AvatarImage src={`https://picsum.photos/seed/${leader.name.replace(' ','')}/200/200`} />
                            <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <h3 className="font-semibold">{leader.name}</h3>
                        <p className="text-sm text-muted-foreground">{leader.title}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Other Sections */}
        <section className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div id="certifications">
                    <h3 className="text-xl font-bold font-headline mb-4">Certifications</h3>
                    <p className="text-muted-foreground">We are an ISO 9001:2015 certified company, and all our products are homologated by ARAI.</p>
                </div>
                <div id="downloads">
                    <h3 className="text-xl font-bold font-headline mb-4">Downloads</h3>
                    <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Company Brochure</Button>
                </div>
                <div id="careers">
                    <h3 className="text-xl font-bold font-headline mb-4">Careers</h3>
                    <p className="text-muted-foreground">Join our team of innovators. We are always looking for passionate talent.</p>
                    <Button variant="link" asChild className="px-0 text-accent font-semibold"><Link href="#">View Openings</Link></Button>
                </div>
                 <div id="gallery">
                    <h3 className="text-xl font-bold font-headline mb-4">Gallery</h3>
                    <p className="text-muted-foreground">Explore our products and facilities in action.</p>
                     <Button variant="link" asChild className="px-0 text-accent font-semibold"><Link href="#">View Gallery</Link></Button>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}

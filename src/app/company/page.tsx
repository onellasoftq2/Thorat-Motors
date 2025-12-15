
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
        {/* About & MD's Message */}
        <section className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
                <h2 className="text-3xl font-bold font-headline mb-2">Our Story</h2>
                 <div className="w-24 h-1.5 bg-accent mb-4"></div>
                <p className="text-muted-foreground text-lg leading-relaxed">{company.about}</p>
                <Card className="mt-8 bg-secondary border-l-4 border-accent">
                    <CardContent className="pt-6">
                        <blockquote className="text-lg font-medium">"{company.mdMessage}"</blockquote>
                        <p className="text-right mt-4 font-semibold">- {company.leadership[0].name}, Managing Director</p>
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-2 flex justify-center">
                {mdImage && (
                    <Image src={mdImage.imageUrl} alt={mdImage.description} width={350} height={350} className="rounded-full shadow-lg aspect-square object-cover" data-ai-hint={mdImage.imageHint} />
                )}
            </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
            <Card className="text-center shadow-md">
                <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <Eye className="h-10 w-10 text-accent" />
                    </div>
                    <CardTitle className="mt-4 text-3xl font-bold font-headline">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-lg">{company.vision}</p>
                </CardContent>
            </Card>
             <Card className="text-center shadow-md">
                <CardHeader className="items-center">
                     <div className="bg-primary/10 p-4 rounded-full">
                        <Goal className="h-10 w-10 text-accent" />
                    </div>
                    <CardTitle className="mt-4 text-3xl font-bold font-headline">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-lg">{company.mission}</p>
                </CardContent>
            </Card>
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

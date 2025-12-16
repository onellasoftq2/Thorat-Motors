
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { company } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Eye, Goal, ArrowRight } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';

export default function CompanyPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-image');
  const mdImage = PlaceHolderImages.find((img) => img.id === 'md-portrait');

  return (
    <>
      {/* 1. About Hero Section */}
      <section className="bg-secondary text-foreground py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">
                About Thorat Motors India
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg">
                A legacy of engineering excellence and a future focused on innovation.
              </p>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-xl aspect-video"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 md:px-6 lg:px-8">
        {/* 2. Our Story Section */}
        <section className="max-w-3xl mx-auto text-center">
          <AnimatedElement>
            <h2 className="text-3xl font-bold font-headline">Our Story</h2>
            <div className="mt-3 mb-6 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">{company.about}</p>
          </AnimatedElement>
        </section>

        {/* 3. Managing Director’s Message */}
        <section className="mt-12 md:mt-16 lg:mt-20">
          <AnimatedElement>
            <Card className="bg-secondary/50 border-border max-w-5xl mx-auto overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-4 lg:col-span-3">
                  {mdImage && (
                    <Image
                      src={mdImage.imageUrl}
                      alt={mdImage.description}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover object-top"
                      data-ai-hint={mdImage.imageHint}
                    />
                  )}
                </div>
                <div className="md:col-span-8 lg:col-span-9 p-6 md:p-10 flex flex-col justify-center">
                  <blockquote className="text-sm md:text-base leading-relaxed text-foreground">
                    "{company.mdMessage}"
                  </blockquote>
                  <p className="text-right mt-6 font-semibold text-primary">
                    - {company.leadership[0].name}, Managing Director
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedElement>
        </section>

        {/* 4. Vision & Mission */}
        <section id="vision" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-16 lg:mt-20 max-w-5xl mx-auto">
          <AnimatedElement>
            <Card className="h-full p-8 text-center group">
              <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-accent">
                <Eye className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold font-headline">Our Vision</h3>
              <p className="mt-4 text-muted-foreground text-lg">{company.vision}</p>
            </Card>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <Card className="h-full p-8 text-center group">
              <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-accent">
                <Goal className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold font-headline">Our Mission</h3>
              <p className="mt-4 text-muted-foreground text-lg">{company.mission}</p>
            </Card>
          </AnimatedElement>
        </section>

        {/* 5. Manufacturing Excellence */}
        <section id="manufacturing" className="mt-12 md:mt-16 lg:mt-20 text-center">
          <AnimatedElement>
            <h2 className="text-3xl font-bold font-headline">Manufacturing Excellence</h2>
            <div className="mt-3 mb-8 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our state-of-the-art facilities are equipped with advanced machinery and operated by a skilled workforce. We follow stringent quality control protocols at every stage of production, from raw material sourcing to final product inspection, ensuring every unit that leaves our factory meets the highest standards of quality and safety.
            </p>
          </AnimatedElement>
        </section>

        {/* 6. Leadership Team */}
        <section id="leadership" className="mt-12 md:mt-16 lg:mt-20">
          <AnimatedElement>
            <h2 className="text-3xl font-bold font-headline text-center">Leadership Team</h2>
            <div className="mt-3 mb-12 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center max-w-4xl mx-auto">
            {company.leadership.map((leader, index) => (
              <AnimatedElement key={leader.name} delay={index * 0.1}>
                <Card className="p-6 text-center h-full">
                  <Avatar className="w-24 h-24 mb-4 mx-auto">
                    <AvatarImage src={`https://picsum.photos/seed/${leader.name.replace(' ', '')}/200/200`} />
                    <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg">{leader.name}</h3>
                  <p className="text-sm text-muted-foreground">{leader.title}</p>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </section>

        {/* 7. Utility Grid */}
        <section className="mt-12 md:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedElement>
              <Card className="p-6 h-full">
                <h3 className="text-xl font-bold font-headline mb-3">Certifications</h3>
                <p className="text-muted-foreground">We are an ISO 9001:2015 certified company, and all our products are homologated by ARAI.</p>
              </Card>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <Card className="p-6 h-full">
                <h3 className="text-xl font-bold font-headline mb-3">Downloads</h3>
                <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Company Brochure</Button>
              </Card>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <Card className="p-6 h-full">
                <h3 className="text-xl font-bold font-headline mb-3">Careers</h3>
                <p className="text-muted-foreground mb-3">Join our team of innovators. We are always looking for passionate talent.</p>
                <Button variant="link" asChild className="px-0 text-accent font-semibold">
                  <Link href="#">View Openings <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </Card>
            </AnimatedElement>
            <AnimatedElement delay={0.3}>
              <Card className="p-6 h-full">
                <h3 className="text-xl font-bold font-headline mb-3">Gallery</h3>
                <p className="text-muted-foreground mb-3">Explore our products and facilities in action.</p>
                <Button variant="link" asChild className="px-0 text-accent font-semibold">
                  <Link href="#">View Gallery <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </Card>
            </AnimatedElement>
          </div>
        </section>
      </div>
    </>
  );
}

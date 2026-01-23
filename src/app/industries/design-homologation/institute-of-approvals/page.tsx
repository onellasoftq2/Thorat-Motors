
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, FileCheck, Cpu, Shield, Route as RouteIcon, ChevronRight } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';

const institutes = [
  {
    icon: <FileCheck className="h-10 w-10 text-accent" />,
    name: "ARAI – Automotive Research Association of India",
    location: "Pune",
    role: "As India's leading automotive R&D organization, ARAI provides comprehensive testing, validation, and certification services for all vehicle types and components.",
    specialization: "Deeply involved in framing Indian automotive regulations (CMVR, AIS), ARAI handles type approval, conformity of production, emission testing, and works closely with MoRTH as a prime technical advisor."
  },
  {
    icon: <Cpu className="h-10 w-10 text-accent" />,
    name: "ICAT – International Centre for Automotive Technology",
    location: "Manesar, Haryana",
    role: "A world-class automotive testing center offering complete homologation and development services, from two-wheelers to heavy commercial vehicles.",
    specialization: "ICAT is a key player in EV and future mobility testing, with advanced facilities for battery validation, powertrain testing, crash tests, and electromagnetic compatibility (EMC) compliance."
  },
  {
    icon: <Shield className="h-10 w-10 text-accent" />,
    name: "VRDE – Vehicle Research and Development Establishment",
    location: "Ahmednagar",
    role: "A premier DRDO laboratory specializing in the research, design, and development of military vehicles and systems for the Indian Armed Forces.",
    specialization: "VRDE handles the rigorous testing and validation of tracked and wheeled combat vehicles, focusing on mobility, armor, survivability, and performance in extreme conditions. It also assists in the certification of select civilian heavy vehicles."
  },
  {
    icon: <RouteIcon className="h-10 w-10 text-accent" />,
    name: "CIRT – Central Institute of Road Transport",
    location: "Pune",
    role: "A key institute under the Ministry of Road Transport and Highways, focused on improving the efficiency and safety of public and commercial road transport.",
    specialization: "CIRT specializes in the testing and certification of commercial vehicles (especially buses), developing standards for bus bodies, conducting transport research, and providing training programs on transport management and road safety."
  }
];

const approvalFlow = [
  "Design", "Testing", "Validation", "Certification", "Market Approval"
];

const howWeWork = [
  "Initial Design Review & Compliance Check",
  "Prototype Preparation & Testing Support",
  "Comprehensive Documentation & Submission",
  "Liaison & Coordination with Institute Officials",
  "Final Certification & Homologation Assistance"
];

const whyItMatters = [
  { title: "Faster Approval Cycles", description: "Our expertise minimizes delays and accelerates the certification process, getting your product to market faster." },
  { title: "Reduced Compliance Risk", description: "We proactively identify and address potential compliance issues, reducing the risk of costly redesigns or rejections." },
  { title: "Confidence in Regulatory Acceptance", description: "Our thorough process and strong relationships with institutes provide confidence that your product will be market-ready." },
  { title: "Focus on Your Core Business", description: "We handle the complex compliance landscape, allowing you to focus on innovation and manufacturing." }
];

export default function InstituteOfApprovalsPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'institute-hero');
  const labImage = PlaceHolderImages.find(p => p.id === 'testing-lab');
  const docsImage = PlaceHolderImages.find(p => p.id === 'certification-docs');

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center md:px-6 lg:px-8">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">
              Institute of Approvals
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.1}>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Partnering with Government-recognized automotive testing and certification authorities to ensure your products meet all mandatory standards.
            </p>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <div className="mt-6 h-1.5 w-24 mx-auto bg-accent"></div>
          </AnimatedElement>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 md:px-6 lg:px-8">
        {/* 2. What are Institutes of Approval? */}
        <section className="max-w-3xl mx-auto text-center">
          <AnimatedElement>
            <h2 className="text-3xl font-bold font-headline">The Gatekeepers of Automotive Compliance</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Institutes of Approval are government-authorized agencies responsible for vehicle homologation in India. They conduct rigorous testing to ensure vehicles and their components comply with the Central Motor Vehicle Rules (CMVR) and Automotive Industry Standards (AIS), making their certification mandatory for any vehicle to be legally sold and operated on Indian roads.
            </p>
          </AnimatedElement>
        </section>

        {/* 3. Approval Ecosystem */}
        <section className="mt-16 md:mt-24">
           <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">The Path to Homologation</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Our process ensures a seamless journey from concept to compliance.</p>
          </AnimatedElement>
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            {approvalFlow.map((step, index) => (
              <React.Fragment key={step}>
                <AnimatedElement delay={index * 0.15}>
                    <div className="text-center">
                        <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-secondary rounded-full border-2 border-border shadow-sm">
                            <span className="text-xs md:text-sm font-semibold text-center p-2">{step}</span>
                        </div>
                    </div>
                </AnimatedElement>
                {index < approvalFlow.length - 1 && (
                    <AnimatedElement delay={(index * 0.15) + 0.1} className="hidden md:block">
                        <ChevronRight className="h-8 w-8 text-border" />
                    </AnimatedElement>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* 4. List of Institutes */}
        <section className="mt-16 md:mt-24">
          <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Government-Recognized Institutes We Work With</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {institutes.map((institute, index) => (
              <AnimatedElement key={institute.name} delay={index * 0.1}>
                <Card className="h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-full mt-1">
                      {institute.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-headline">{institute.name}</CardTitle>
                      <p className="text-sm font-medium text-muted-foreground">{institute.location}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary">Role:</p>
                    <p className="text-muted-foreground mb-3">{institute.role}</p>
                    <p className="font-semibold text-primary">Specialization:</p>
                    <p className="text-muted-foreground">{institute.specialization}</p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </section>

        {/* 5. How We Work With Approval Bodies */}
        <section className="mt-16 md:mt-24 bg-secondary py-16 md:py-20 rounded-lg">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <AnimatedElement className="text-center mb-12">
              <h2 className="text-3xl font-bold font-headline">How We Work With Approval Bodies</h2>
              <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">A streamlined and collaborative approach to ensure your success.</p>
            </AnimatedElement>
            <div className="max-w-2xl mx-auto space-y-4">
              {howWeWork.map((step, index) => (
                <AnimatedElement key={step} delay={index * 0.1}>
                  <Card className="shadow-sm">
                    <CardContent className="pt-6">
                      <div className="flex items-center">
                        <Check className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                        <p className="font-medium text-lg">{step}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Why This Matters to Our Clients */}
        <section className="mt-16 md:mt-24">
            <AnimatedElement className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">The Value of Our Partnership</h2>
            </AnimatedElement>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyItMatters.map((item, index) => (
                    <AnimatedElement key={item.title} delay={index * 0.1}>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary font-headline mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    </AnimatedElement>
                ))}
            </div>
        </section>

        {/* 7. Visual & Trust Section */}
        <section className="mt-16 md:mt-24">
           <div className="grid md:grid-cols-2 gap-8 items-center">
                <AnimatedElement>
                    {labImage && <Image src={labImage.imageUrl} alt={labImage.description} width={600} height={400} className="rounded-lg shadow-lg aspect-video object-cover" data-ai-hint={labImage.imageHint}/>}
                </AnimatedElement>
                <AnimatedElement delay={0.2}>
                    {docsImage && <Image src={docsImage.imageUrl} alt={docsImage.description} width={600} height={400} className="rounded-lg shadow-lg aspect-video object-cover" data-ai-hint={docsImage.imageHint}/>}
                </AnimatedElement>
           </div>
        </section>

        {/* 8. Conversion Section */}
        <section className="mt-16 md:mt-24 text-center">
          <AnimatedElement>
            <h2 className="text-3xl font-bold font-headline max-w-2xl mx-auto">Need support with vehicle homologation or regulatory approvals?</h2>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact">Talk to Our Compliance Team</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="/quote?productCategory=services&product=Designing & Homologation">Enquire Now</Link>
                </Button>
            </div>
          </AnimatedElement>
        </section>
      </div>
    </div>
  );
}


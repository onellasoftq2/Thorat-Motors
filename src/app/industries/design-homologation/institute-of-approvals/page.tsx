
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Check, ChevronRight, Cpu, FileCheck, Route as RouteIcon, Shield, CheckCircle } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const institutes = [
  {
    icon: <FileCheck className="h-8 w-8 text-accent" />,
    name: "ARAI – Automotive Research Association of India",
    location: "Pune, Maharashtra",
    association: "Ministry of Heavy Industries, Govt. of India",
    mandates: ["Homologation", "CMVR / AIS", "Emission Norms (BS-VI)", "Safety Standards", "EV Testing"],
    primaryRole: "India's premier automotive R&D, testing, and certification organization, handling comprehensive homologation for all vehicle types.",
    details: [
      { 
        title: "Approval Scope",
        content: "Type Approval, Conformity of Production (CoP), Export Homologation, Component Certification, and Safety/Emission Testing."
      },
      {
        title: "Vehicle Categories",
        content: "2/3/4-Wheelers, Commercial Vehicles, Tractors, EVs, Hybrids, Engines, and individual components."
      },
      {
        title: "Key Regulations",
        content: "Central Motor Vehicle Rules (CMVR), Automotive Industry Standards (AIS), Bureau of Indian Standards (BIS), and UNECE Regulations."
      }
    ],
    guidance: [
      "For whole-vehicle type approval for mass production in India.",
      "When certifying new engine platforms for BS-VI and upcoming emission norms.",
      "For validation of critical safety components like brakes, lighting, and seats.",
      "To obtain Conformity of Production (CoP) clearance for ongoing manufacturing."
    ]
  },
  {
    icon: <Cpu className="h-8 w-8 text-accent" />,
    name: "ICAT – International Centre for Automotive Technology",
    location: "Manesar, Haryana",
    association: "Ministry of Heavy Industries, Govt. of India (NATRiP)",
    mandates: ["Homologation", "EV & Battery Testing", "Safety & Crash Tests", "EMC Compliance", "CMVR"],
    primaryRole: "A world-class automotive testing center offering complete homologation and development services, with a strong focus on future mobility.",
    details: [
      {
        title: "Approval Scope",
        content: "Full vehicle & component homologation, development testing, validation services, and technical advisory."
      },
      {
        title: "Vehicle Categories",
        content: "All vehicle types from two-wheelers to heavy commercial vehicles, with specialized facilities for EVs and future mobility solutions."
      },
      {
        title: "Key Regulations",
        content: "CMVR, AIS, National and International standards for safety, emissions, noise, and electromagnetic compatibility (EMC)."
      }
    ],
    guidance: [
      "For comprehensive EV and battery pack certification and validation.",
      "When seeking homologation for new vehicle models and variants.",
      "For conducting crash tests and other advanced safety validation.",
      "To ensure electromagnetic compatibility (EMC/EMI) compliance."
    ]
  },
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    name: "VRDE – Vehicle Research and Development Establishment",
    location: "Ahmednagar, Maharashtra",
    association: "Defence Research and Development Organisation (DRDO)",
    mandates: ["Defense Vehicles", "Performance Testing", "Structural Validation", "Off-road Mobility", "Survivability"],
    primaryRole: "A premier DRDO laboratory specializing in the R&D, testing, and validation of military vehicles and systems for the Indian Armed Forces.",
    details: [
      {
        title: "Approval Scope",
        content: "Military vehicle and system development, rigorous testing, validation, and certification against defense-specific requirements."
      },
      {
        title: "Vehicle Categories",
        content: "Tracked & Wheeled Combat Vehicles, Specialist Military Vehicles, High-Mobility Trucks, and select civilian heavy vehicles."
      },
      {
        title: "Key Regulations",
        content: "Defense-specific standards, Joint Services Qualitative Requirements (JSQRs), and other national/international military standards."
      }
    ],
    guidance: [
      "For developing or supplying vehicles for military and defense tenders.",
      "To validate vehicle performance in extreme environmental and combat conditions.",
      "When conducting armor, blast, and survivability testing.",
      "For certification of specialized heavy civilian vehicles requiring structural validation."
    ]
  },
  {
    icon: <RouteIcon className="h-8 w-8 text-accent" />,
    name: "CIRT – Central Institute of Road Transport",
    location: "Pune, Maharashtra",
    association: "Ministry of Road Transport and Highways (MoRTH)",
    mandates: ["Commercial Vehicles", "Bus Body Code", "Road Safety", "Transport Research", "Vehicle Fitness"],
    primaryRole: "A key institute under MoRTH focused on improving the efficiency, safety, and performance of public and commercial road transport.",
    details: [
      {
        title: "Approval Scope",
        content: "Testing and certification of commercial vehicles (especially buses), transport research, driver training, and advisory on transport policy."
      },
      {
        title: "Vehicle Categories",
        content: "Primarily focused on buses, trucks, and their key components like seating, lighting, and structural elements."
      },
      {
        title: "Key Regulations",
        content: "AIS-052 (Bus Body Code), CMVR provisions related to commercial vehicles, and other state/national transport regulations."
      }
    ],
    guidance: [
      "For certifying bus bodies according to the mandatory national Bus Body Code.",
      "When conducting performance and safety tests on commercial vehicle components.",
      "For projects involving transport management and road safety research.",
      "To participate in driver and fleet manager training programs."
    ]
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
                <Card className="h-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col bg-card">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full mt-1">
                        {institute.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-headline">{institute.name}</CardTitle>
                        <p className="text-sm font-medium text-muted-foreground">{institute.location}</p>
                        <p className="text-xs text-muted-foreground/80 mt-1">{institute.association}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {institute.mandates.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs font-medium">{tag}</Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 text-sm">{institute.primaryRole}</p>
                    
                    <Accordion type="single" collapsible className="w-full mb-6 border-t border-b">
                      <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger className="text-sm font-semibold hover:no-underline py-3">View Details</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-3 pt-2 text-sm">
                            {institute.details.map(detail => (
                              <li key={detail.title}>
                                <p className="font-semibold text-primary">{detail.title}:</p>
                                <p className="text-muted-foreground">{detail.content}</p>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <div className="mt-auto">
                      <h4 className="font-semibold text-sm mb-2 text-foreground">When to approach this institute:</h4>
                      <ul className="space-y-2">
                        {institute.guidance.map(point => (
                          <li key={point} className="flex items-start text-sm">
                            <ArrowRight className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
              <h2 className="text-3xl font-bold font-headline">How We Streamline Your Approval Process</h2>
              <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">A structured and collaborative approach to ensure your success.</p>
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

        {/* 6. Why This Matters to Our Clients - The Value of Our Partnership */}
        <section className="mt-16 md:mt-24">
            <div className="text-center mb-16">
                <AnimatedElement>
                    <h2 className="text-3xl font-bold font-headline">The Value of Our Partnership</h2>
                    <div className="mt-3 w-24 h-1.5 bg-accent mx-auto"></div>
                </AnimatedElement>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyItMatters.map((item, index) => (
                    <AnimatedElement key={item.title} delay={index * 0.15}>
                        <Card className="h-full text-center p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-b-4 border-transparent hover:border-accent">
                            <CardHeader className="p-0 mb-6 items-center">
                                <div className="bg-primary/10 p-4 rounded-full">
                                    <CheckCircle className="h-8 w-8 text-accent" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <h3 className="text-lg font-bold font-headline mb-2 text-primary">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </CardContent>
                        </Card>
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

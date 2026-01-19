
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import {
  Menu,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  ListChecks,
  ShieldCheck,
  Package,
  Users,
  Car,
  Truck,
  Bus,
  Container,
  Fuel,
  ChevronLeft,
  Wrench,
  Award,
  Globe,
  FlaskConical,
  Route,
  PlayCircle,
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navMenu } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

function Logo() {
  return (
    <Link href="/" aria-label="Thorat Motors homepage">
      <svg
        width="210"
        height="40"
        viewBox="0 0 210 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-auto"
      >
          <rect width="40" height="40" rx="8" fill="hsl(var(--primary))" />
          <path
            d="M12 11H28V14H22V29H18V14H12V11Z"
            fill="hsl(var(--accent))"
          />
          <text
            x="52"
            y="18"
            fontFamily="Manrope, sans-serif"
            fontSize="20"
            fontWeight="800"
            fill="hsl(var(--primary))"
            dominantBaseline="middle"
          >
            THORAT
          </text>
          <text
            x="52"
            y="32"
            fontFamily="Manrope, sans-serif"
            fontSize="9"
            fontWeight="500"
            fill="hsl(var(--muted-foreground))"
            letterSpacing="0.1em"
            dominantBaseline="middle"
          >
            MOTORS
          </text>
      </svg>
    </Link>
  );
}

const iconMap: { [key: string]: React.ReactNode } = {
    ListChecks: <ListChecks className="h-5 w-5 text-accent" />,
    ShieldCheck: <ShieldCheck className="h-5 w-5 text-accent" />,
    Package: <Package className="h-5 w-5 text-accent" />,
    Users: <Users className="h-5 w-5 text-accent" />,
    Car: <Car className="h-5 w-5 text-accent" />,
    Truck: <Truck className="h-5 w-5 text-accent" />,
    Bus: <Bus className="h-5 w-5 text-accent" />,
    Container: <Container className="h-5 w-5 text-accent" />,
    Fuel: <Fuel className="h-5 w-5 text-accent" />,
    Wrench: <Wrench className="h-5 w-5 text-accent" />,
    Award: <Award className="h-5 w-5 text-accent" />,
    Globe: <Globe className="h-5 w-5 text-accent" />,
    FlaskConical: <FlaskConical className="h-5 w-5 text-accent" />,
    Route: <Route className="h-5 w-5 text-accent" />,
};


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(navMenu.find(item => item.interactiveMegaMenu)?.interactiveMegaMenu?.[0].slug || '');
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveSubMenu(null);
    setVideoOpen(false);
  }, [activeIndustry]);

  const productsMenu = navMenu.find(item => item.title === 'Products');
  const trailersItems = productsMenu?.megaMenu?.find(section => section.title === 'Trailers')?.items || [];
  const cabinsItems = productsMenu?.megaMenu?.find(section => section.title === 'Portable Cabins')?.items || [];
  const conversionsItems = productsMenu?.megaMenu?.find(section => section.title === 'Containers & Conversions')?.items || [];

  const industriesMenuData = navMenu.find(item => item.title === 'Industries');
  const activeCategoryData = industriesMenuData?.interactiveMegaMenu?.find(c => c.slug === activeIndustry);
  
  const getYouTubeVideoId = (url: string | undefined): string => {
      if (!url) return "";
      try {
          const videoUrl = new URL(url);
          let videoId = '';
          if (videoUrl.hostname === 'youtu.be') {
              videoId = videoUrl.pathname.substring(1);
          } else if (videoUrl.hostname.includes('youtube.com')) {
              videoId = videoUrl.searchParams.get('v') || '';
          }
          return videoId;
      } catch (e) {
          console.error("Invalid YouTube URL", e);
      }
      return "";
  };
  
  const getYouTubeEmbedUrl = (url: string | undefined): string => {
      const videoId = getYouTubeVideoId(url);
      if (videoId) {
          return `https://www.youtube.com/embed/${videoId}`;
      }
      return "";
  };

  const videoId = getYouTubeVideoId(activeCategoryData?.videoUrl);
  const embedUrl = getYouTubeEmbedUrl(activeCategoryData?.videoUrl);


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-2">
          {navMenu.map((item) => {
            const isActive =
              (item.href && pathname === item.href) ||
              (item.href && item.href !== '/' && pathname.startsWith(item.href)) ||
              (item.items && item.items.some(subItem => pathname === subItem.href)) ||
              (item.megaMenu && pathname.startsWith('/products')) ||
              (item.interactiveMegaMenu && pathname.startsWith('/industries'));

            return item.megaMenu ? ( // Products Mega Menu
              <HoverCard key={item.title} openDelay={50} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="flex items-center text-sm font-medium"
                  >
                    <Link href={item.href || '#'}>{item.title}</Link>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent
                  className="fixed left-1/2 top-16 -translate-x-1/2 w-[600px] p-0"
                  sideOffset={0}
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 p-8 md:grid-cols-3">
                    {item.megaMenu.map((section) => (
                      <div key={section.title} className="flex flex-col">
                        <h3 className="mb-4 text-sm font-medium font-headline text-foreground">
                          {section.title}
                        </h3>
                        <ul className="space-y-3">
                          {section.items.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                className={cn("block rounded-md p-2 text-sm transition-colors hover:bg-secondary hover:text-accent", pathname === subItem.href ? 'text-primary font-medium' : 'text-muted-foreground' )}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ) : item.interactiveMegaMenu ? ( // Industries Interactive Mega Menu
              <HoverCard key={item.title} openDelay={50} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="flex items-center text-sm font-medium"
                  >
                    <Link href={item.href || '#'}>{item.title}</Link>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent
                  className="fixed right-[-300px] top-3 p-0 lg:w-[1000px]"
                >
                  {videoOpen && embedUrl ? (
                    <div className="flex flex-col">
                        <div className="p-4 bg-secondary/50 flex items-center">
                            <Button variant="ghost" onClick={() => setVideoOpen(false)} className="flex items-center text-sm">
                                <ChevronLeft className="h-4 w-4 mr-1" />
                                Back to {activeCategoryData?.title}
                            </Button>
                        </div>
                        <div className="w-full aspect-video bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`${embedUrl}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-5">
                      <div className="col-span-1 bg-secondary/50 p-4">
                        <ul className="space-y-1">
                          {item.interactiveMegaMenu.map((category) => (
                            <li key={category.slug}>
                              {category.isLink ? (
                                <Link
                                  href={category.href || '#'}
                                  className="block w-full rounded-md p-3 transition-colors hover:bg-background/50"
                                >
                                  <p className="font-semibold">{category.title}</p>
                                  <p className="text-sm text-muted-foreground">{category.description}</p>
                                </Link>
                              ) : (
                                <button
                                  onMouseEnter={() => setActiveIndustry(category.slug)}
                                  className={cn(
                                    "w-full text-left p-3 rounded-md transition-colors",
                                    activeIndustry === category.slug ? 'bg-background shadow' : 'hover:bg-background/50'
                                  )}
                                >
                                  <p className="font-semibold">{category.title}</p>
                                  <p className="text-sm text-muted-foreground">{category.description}</p>
                                </button>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-span-2 p-6">
                        {(() => {
                          const activeCat = item.interactiveMegaMenu.find(c => c.slug === activeIndustry);
                          if (!activeCat || activeCat.isLink) return null;
                          
                          const activeSubMenuItem = activeSubMenu ? activeCat.items.find(i => i.name === activeSubMenu) : null;

                          if (activeSubMenuItem && activeSubMenuItem.subItems) {
                            return (
                              <div>
                                <button onClick={() => setActiveSubMenu(null)} className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4">
                                  <ChevronLeft className="h-4 w-4 mr-1" />
                                  Back to {activeCat.title}
                                </button>
                                <h3 className="text-lg font-semibold mb-4 text-primary">{activeSubMenuItem.name}</h3>
                                <ul className="space-y-1">
                                  {activeSubMenuItem.subItems.map(grandchild => (
                                    <li key={grandchild.name}>
                                      <Link href={grandchild.href || '#'} className="group flex items-center justify-between p-2 rounded-md hover:bg-secondary">
                                        <div className="flex items-center gap-3">
                                          {grandchild.icon && iconMap[grandchild.icon as string] && (
                                            <div>{iconMap[grandchild.icon as string]}</div>
                                          )}
                                          <span className="font-medium text-muted-foreground group-hover:text-primary">{grandchild.name}</span>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          }

                          return (
                            <div>
                              <h3 className="text-lg font-semibold mb-4 text-primary">{activeCat.title}</h3>
                              <ul className="flex flex-col space-y-1">
                                {activeCat.items.map(subItem => (
                                    <li key={subItem.name}>
                                        {!subItem.subItems ? (
                                            <Link href={subItem.href || '#'} className="group flex items-center justify-between p-3 rounded-md transition-colors hover:bg-secondary">
                                                <div className="flex items-center">
                                                    {subItem.icon && iconMap[subItem.icon as string] && <div className="mr-4">{iconMap[subItem.icon as string]}</div>}
                                                    <div>
                                                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">{subItem.name}</p>
                                                        {subItem.description && <p className="text-sm text-muted-foreground">{subItem.description}</p>}
                                                    </div>
                                                </div>
                                                <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        ) : (
                                            <button onClick={() => setActiveSubMenu(subItem.name)} className="group flex w-full items-center justify-between p-3 rounded-md transition-colors hover:bg-secondary text-left">
                                                <div className="flex items-center">
                                                    {subItem.icon && iconMap[subItem.icon as string] && <div className="mr-4">{iconMap[subItem.icon as string]}</div>}
                                                    <div>
                                                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">{subItem.name}</p>
                                                        {subItem.description && <p className="text-sm text-muted-foreground">{subItem.description}</p>}
                                                    </div>
                                                </div>
                                                <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                                            </button>
                                        )}
                                    </li>
                                ))}
                              </ul>
                            </div>
                          )
                        })()}
                      </div>
                      <div className="col-span-2 bg-primary/5 p-4 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeIndustry}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                          >
                           {videoId ? (
                                <div
                                    className="w-full aspect-video relative group cursor-pointer"
                                    onClick={() => { if (activeCategoryData?.videoUrl) setVideoOpen(true) }}
                                >
                                    <Image
                                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                        alt={activeCategoryData?.title || 'Video thumbnail'}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-md transition-colors group-hover:bg-black/50">
                                        <PlayCircle className="h-16 w-16 text-white/80 transition-transform group-hover:scale-110" />
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full aspect-video bg-secondary rounded-md flex items-center justify-center">
                                <p className="text-muted-foreground">
                                    {activeCategoryData?.isLink ? 'Details on page' : 'No video available'}
                                </p>
                                </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  )}
                </HoverCardContent>
              </HoverCard>
            ) : item.items ? ( // Services Dropdown
               <HoverCard key={item.title} openDelay={50} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="flex items-center text-sm font-medium"
                  >
                    <Link href={item.href || '#'}>{item.title}</Link>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent
                  className="w-64 p-2"
                  align="start"
                  sideOffset={10}
                >
                    <ul className="space-y-1">
                      {item.items.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className={cn("block rounded-md p-2 text-sm transition-colors hover:bg-secondary hover:text-accent", pathname === subItem.href ? 'text-primary font-medium' : 'text-muted-foreground' )}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                </HoverCardContent>
              </HoverCard>
            ) : ( // Simple Links
              <Button key={item.title} asChild variant={isActive ? "default" : "ghost"}>
                <Link
                  href={item.href || '#'}
                  className={cn("text-sm font-medium")}
                >
                  {item.title}
                </Link>
              </Button>
            )
          })}
        </nav>

        <div className="hidden items-center space-x-4 lg:flex">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/quote">Request Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[340px] p-0">
              <SheetHeader className="p-6 pb-0">
                <Logo />
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">
                    Main navigation menu for mobile devices.
                </SheetDescription>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-4rem)]">
                <nav className="mt-8 flex flex-col space-y-2 px-6">
                  <Accordion type="multiple" className="w-full">
                    {navMenu.map((item, index) =>
                      item.megaMenu ? (
                        <AccordionItem
                          key={item.title}
                          value={`item-${index}`}
                        >
                          <AccordionTrigger className={cn("py-3 text-base font-medium", pathname.startsWith('/products') ? 'text-primary' : '')}>
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>
                             <Accordion type="multiple" className="w-full ml-4">
                                <AccordionItem value="trailers">
                                    <AccordionTrigger className={pathname.startsWith('/products/trailers') ? 'text-primary' : ''}>Trailers</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="space-y-2 pl-4">
                                        {trailersItems.map((subItem) => (
                                            <li key={subItem.name}>
                                            <Link
                                                href={subItem.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={cn("block py-2 text-sm", pathname === subItem.href ? 'text-primary font-bold' : 'text-muted-foreground')}
                                            >
                                                {subItem.name}
                                            </Link>
                                            </li>
                                        ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="cabins">
                                    <AccordionTrigger className={pathname.startsWith('/products/cabins') ? 'text-primary' : ''}>Portable Cabins</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="space-y-2 pl-4">
                                        {cabinsItems.map((subItem) => (
                                            <li key={subItem.name}>
                                            <Link
                                                href={subItem.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={cn("block py-2 text-sm", pathname === subItem.href ? 'text-primary font-bold' : 'text-muted-foreground')}
                                            >
                                                {subItem.name}
                                            </Link>
                                            </li>
                                        ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="conversions">
                                    <AccordionTrigger className={pathname.startsWith('/services/container-conversions') ? 'text-primary' : ''}>Containers & Conversions</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="space-y-2 pl-4">
                                        {conversionsItems.map((subItem) => (
                                            <li key={subItem.name}>
                                            <Link
                                                href={subItem.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={cn("block py-2 text-sm", pathname === subItem.href ? 'text-primary font-bold' : 'text-muted-foreground')}
                                            >
                                                {subItem.name}
                                            </Link>
                                            </li>
                                        ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                             </Accordion>
                          </AccordionContent>
                        </AccordionItem>
                      ) : item.interactiveMegaMenu ? (
                        <AccordionItem key={item.title} value={`item-${index}`}>
                          <AccordionTrigger className={cn("py-3 text-base font-medium", pathname.startsWith('/industries') ? 'text-primary' : '')}>
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="ml-4">
                              {item.interactiveMegaMenu.map((category) => (
                                <div key={category.slug}>
                                  {category.isLink ? (
                                    <Link
                                      href={category.href || '#'}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className={cn("block border-b py-3 text-sm font-medium", pathname === category.href ? 'text-primary' : '')}
                                    >
                                      {category.title}
                                    </Link>
                                  ) : (
                                    <Accordion type="single" collapsible className="w-full">
                                      <AccordionItem value={category.slug}>
                                        <AccordionTrigger className={cn("text-sm py-2", pathname.startsWith(`/industries/${category.slug}`) ? 'text-primary' : '')}>
                                          {category.title}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                          <ul className="space-y-2 pl-4">
                                            {category.items.map(subItem => (
                                              <li key={subItem.name}>
                                                {subItem.subItems ? (
                                                    <Accordion type="single" collapsible>
                                                        <AccordionItem value={subItem.name} className="border-b-0">
                                                            <AccordionTrigger className="text-sm py-2 hover:no-underline">{subItem.name}</AccordionTrigger>
                                                            <AccordionContent>
                                                                <ul className="pl-4">
                                                                    {subItem.subItems.map(grandchild => (
                                                                        <li key={grandchild.name}>
                                                                            <Link
                                                                                href={grandchild.href || '#'}
                                                                                onClick={() => setMobileMenuOpen(false)}
                                                                                className={cn("block py-2 text-sm", pathname === grandchild.href ? 'text-primary font-bold' : 'text-muted-foreground')}
                                                                            >
                                                                                {grandchild.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                ) : (
                                                    <Link
                                                    href={subItem.href || '#'}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={cn("block py-2 text-sm", pathname === subItem.href ? 'text-primary font-bold' : 'text-muted-foreground')}
                                                    >
                                                    {subItem.name}
                                                    </Link>
                                                )}
                                              </li>
                                            ))}
                                          </ul>
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                  )}
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : item.items ? (
                        <AccordionItem
                          key={item.title}
                          value={`item-${index}`}
                        >
                          <AccordionTrigger className={cn("py-3 text-base font-medium", pathname.startsWith(item.href || ' ') ? 'text-primary' : '')}>
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 pl-8">
                              {item.items.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    href={subItem.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn("block py-2 text-sm", pathname === subItem.href ? 'text-primary font-bold' : 'text-muted-foreground')}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <Link
                          key={item.title}
                          href={item.href || '#'}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn("block border-b py-3 text-base font-medium", pathname === item.href ? 'text-primary' : '')}
                        >
                          {item.title}
                        </Link>
                      )
                    )}
                  </Accordion>
                  <div className="pt-8">
                    <Button onClick={() => setMobileMenuOpen(false)} asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href="/quote">Request Quote</Link>
                    </Button>
                  </div>
                </nav>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

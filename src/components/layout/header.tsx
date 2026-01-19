
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronDown,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(navMenu.find(item => item.interactiveMegaMenu)?.interactiveMegaMenu?.[0].slug || '');
  const pathname = usePathname();

  const productsMenu = navMenu.find(item => item.title === 'Products');
  const trailersItems = productsMenu?.megaMenu?.find(section => section.title === 'Trailers')?.items || [];
  const cabinsItems = productsMenu?.megaMenu?.find(section => section.title === 'Portable Cabins')?.items || [];
  const conversionsItems = productsMenu?.megaMenu?.find(section => section.title === 'Containers & Conversions')?.items || [];


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
                  className="w-screen max-w-3xl p-0"
                  align="start"
                  sideOffset={15}
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
                  className="w-screen max-w-5xl p-0"
                  align="start"
                  sideOffset={15}
                >
                  <div className="grid grid-cols-4">
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

                        if (activeCat.slug === 'design-homologation') {
                          return (
                            <div>
                              <h3 className="text-lg font-semibold mb-4 text-primary">{activeCat.title}</h3>
                              <ul className="flex flex-col space-y-1">
                                {activeCat.items.map(subItem => (
                                  <li key={subItem.name}>
                                    <Link href={subItem.href} className="group flex items-center justify-between p-3 rounded-md transition-colors hover:bg-secondary">
                                      <div>
                                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">{subItem.name}</p>
                                        {subItem.description && <p className="text-sm text-muted-foreground">{subItem.description}</p>}
                                      </div>
                                      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
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
                            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                              {activeCat.items.map(subItem => (
                                <li key={subItem.name}>
                                  <Link href={subItem.href} className="block p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary">
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })()}
                    </div>
                    {item.interactiveFeatured && (
                       <div className="col-span-1 bg-primary/5 p-6 flex flex-col justify-center">
                          <h3 className="font-bold text-lg mb-2 text-primary">{item.interactiveFeatured.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{item.interactiveFeatured.description}</p>
                          <Button asChild variant="outline" size="sm">
                            <Link href={item.interactiveFeatured.href}>Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                          </Button>
                       </div>
                    )}
                  </div>
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


"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Building,
  Truck,
  Wrench,
  Info,
  Phone,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
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

const componentMap = {
  products: Truck,
  services: Wrench,
  industries: Building,
  company: Info,
  contact: Phone,
};

function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Truck className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold font-headline tracking-tight text-foreground">
        Thorat Motors
      </span>
    </Link>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-2">
          {navMenu.map((item) =>
            item.megaMenu ? (
              <Popover key={item.title}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center text-sm font-medium text-muted-foreground"
                  >
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
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
                                className="block rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Button key={item.title} asChild variant="ghost">
                <Link
                  href={item.href || '#'}
                  className="text-sm font-medium text-muted-foreground"
                >
                  {item.title}
                </Link>
              </Button>
            )
          )}
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
            <SheetContent side="left" className="w-[300px] sm:w-[340px]">
              <SheetHeader>
                <Logo />
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-2">
                <Accordion type="single" collapsible className="w-full">
                  {navMenu.map((item, index) =>
                    item.megaMenu ? (
                      <AccordionItem
                        key={item.title}
                        value={`item-${index}`}
                      >
                        <AccordionTrigger className="py-3 text-base font-medium">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="ml-4 space-y-2">
                            {item.megaMenu.map((section) => (
                              <div key={section.title}>
                                <h4 className="mb-2 font-semibold font-headline text-muted-foreground">
                                  {section.title}
                                </h4>
                                <ul className="space-y-2">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-2 text-sm text-muted-foreground"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        key={item.title}
                        href={item.href || '#'}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block border-b py-3 text-base font-medium"
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    
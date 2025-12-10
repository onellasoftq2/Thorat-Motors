
import Link from 'next/link';
import { Truck, Github, Twitter, Linkedin } from 'lucide-react';
import { navMenu, company, offices, contactInfo } from '@/lib/data';

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

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: '#' },
  { icon: <Github className="h-5 w-5" />, href: '#' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#' },
];

export default function Footer() {
  const productLinks = navMenu.find(item => item.title === 'Products')?.megaMenu?.slice(0, 2) || [];
  const servicesLinks = navMenu.find(item => item.title === 'Products')?.megaMenu?.slice(2, 4) || [];

  const companyLinks = [
      { name: "About Us", href: "/company" },
      { name: "Industries", href: "/industries" },
      { name: "Careers", href: "/company#careers" },
      { name: "Contact Us", href: "/contact" },
  ]

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Engineering excellence for a moving world.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-headline text-foreground">Products</h3>
            <ul className="mt-4 space-y-2">
              {productLinks.flatMap(section => section.items).map(item => (
                 <li key={item.name}><Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">{item.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold font-headline text-foreground">Services</h3>
            <ul className="mt-4 space-y-2">
              {servicesLinks.flatMap(section => section.items).map(item => (
                <li key={item.name}><Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-headline text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map(item => (
                <li key={item.name}><Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-headline text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{offices[0].address.split(',').slice(0,2).join(', ')}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.emails[0]}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Thorat Motors India. All rights reserved.</p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-muted-foreground hover:text-foreground">
                {link.icon}
                <span className="sr-only">Social media link</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

    
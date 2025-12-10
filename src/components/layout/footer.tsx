
import Link from 'next/link';
import { Truck, Github, Twitter, Linkedin } from 'lucide-react';
import { offices, contactInfo } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

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

const footerLinks = {
  trailers: [
    { name: 'Cement Bulker', href: '/products/trailers/cement-bulker' },
    { name: 'Flatbed', href: '/products/trailers/flatbed' },
    { name: 'Skeletal', href: '/products/trailers/skeletal' },
    { name: 'Side-Wall', href: '/products/trailers/side-wall' },
  ],
  cabins: [
    { name: 'Office Cabin', href: '/products/cabins/office' },
    { name: 'ACP Cabin', href: '/products/cabins/acp' },
    { name: 'Security Cabin', href: '/products/cabins/security' },
    { name: 'Toilet Cabin', href: '/products/cabins/toilet' },
  ],
  services: [
    { name: 'Container Conversions', href: '/products/cabins/container-conversion' },
    { name: 'Custom Engineering', href: '/services#custom-engineering' },
    { name: 'Spare Parts', href: '/services#spare-parts' },
  ],
  company: [
      { name: "About Us", href: "/company" },
      { name: "Industries", href: "/industries" },
      { name: "Careers", href: "/company#careers" },
      { name: "Contact Us", href: "/contact" },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-7">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Engineering excellence for a moving world.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-headline text-foreground">Trailers</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.trailers.map(item => (
                 <li key={item.name}><Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">{item.name}</Link></li>
              ))}
               <li><Link href="/products/trailers" className="text-sm text-accent font-medium hover:text-accent/80 flex items-center">View All <ArrowRight className="ml-1 h-4 w-4" /></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold font-headline text-foreground">Cabins</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.cabins.map(item => (
                <li key={item.name}><Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">{item.name}</Link></li>
              ))}
              <li><Link href="/products/cabins" className="text-sm text-accent font-medium hover:text-accent/80 flex items-center">View All <ArrowRight className="ml-1 h-4 w-4" /></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-headline text-foreground">Company</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.company.map(item => (
                <li key={item.name}><Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">{item.name}</Link></li>
              ))}
                <li key="services"><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-headline text-foreground">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>{offices[0].address.split(',').slice(0, 3).join(', ')}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.emails[0]}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col items-center justify-between sm:flex-row">
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

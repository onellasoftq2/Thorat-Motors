
import Link from 'next/link';
import { Github, Twitter, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { offices, contactInfo } from '@/lib/data';

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

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: '#' },
  { icon: <Github className="h-5 w-5" />, href: '#' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#' },
];

const footerLinks = {
  trailers: [
    { name: 'Cement Bulker', href: '/industries/manufacturing/bulkers/cement-bulkers' },
    { name: 'Flatbed', href: '/industries/manufacturing/trailers/flatbed' },
    { name: 'Skeletal', href: '/industries/manufacturing/trailers/skeletal' },
    { name: 'Side-Wall', href: '/industries/manufacturing/trailers/sidewall' },
  ],
  cabins: [
    { name: 'Office Cabin', href: '/products/cabins/office' },
    { name: 'ACP Cabin', href: '/products/cabins/acp' },
    { name: 'Security Cabin', href: '/products/cabins/security' },
    { name: 'Toilet Cabin', href: '/products/cabins/toilet' },
  ],
  services: [
    { name: 'Container Conversions', href: '/services/container-conversions' },
    { name: 'Custom Engineering', href: '/services/custom-engineering' },
    { name: 'Spare Parts', href: '/services/spare-parts' },
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
      <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
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
                 <li key={item.name}><Link href={item.href} className="text-sm text-muted-foreground hover:text-accent">{item.name}</Link></li>
              ))}
               <li><Link href="/industries/manufacturing" className="text-sm text-accent font-medium hover:text-accent/80 flex items-center">View All <ArrowRight className="ml-1 h-4 w-4" /></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold font-headline text-foreground">Cabins</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.cabins.map(item => (
                <li key={item.name}><Link href={item.href} className="text-sm text-muted-foreground hover:text-accent">{item.name}</Link></li>
              ))}
              <li><Link href="/products/cabins" className="text-sm text-accent font-medium hover:text-accent/80 flex items-center">View All <ArrowRight className="ml-1 h-4 w-4" /></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-headline text-foreground">Company</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.company.map(item => (
                <li key={item.name}><Link href={item.href} className="text-sm text-muted-foreground hover:text-accent">{item.name}</Link></li>
              ))}
                <li key="services"><Link href="/services" className="text-sm text-muted-foreground hover:text-accent">Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-headline text-foreground">Contact</h3>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>{offices[0].address}, IN</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <span>{contactInfo.emails[0]}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Thorat Motors India. All rights reserved.</p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-muted-foreground hover:text-accent">
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

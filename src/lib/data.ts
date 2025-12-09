
export type NavMenuItem = {
  name: string;
  href: string;
};

export type NavMenuSection = {
  title: string;
  items: NavMenuItem[];
};

export type NavMenu = {
  title: string;
  href?: string;
  megaMenu?: NavMenuSection[];
};

export const navMenu: NavMenu[] = [
  {
    title: "Products",
    megaMenu: [
      {
        title: "Trailers",
        items: [
          { name: "Cement Bulker Trailer", href: "/products/trailers/cement-bulker" },
          { name: "Flatbed Trailer", href: "/products/trailers/flatbed" },
          { name: "Skeletal Trailer", href: "/products/trailers/skeletal" },
          { name: "Side-Wall Trailer", href: "/products/trailers/side-wall" },
          { name: "Custom Trailers", href: "/products/trailers/custom" },
        ],
      },
      {
        title: "Portable Cabins",
        items: [
          { name: "Portable Office Cabin", href: "/products/cabins/office" },
          { name: "House Cabins", href: "/products/cabins/house" },
          { name: "Security Cabins", href: "/products/cabins/security" },
          { name: "Bunk/Accommodation Cabins", href: "/products/cabins/bunk-house" },
          { name: "Toilet Cabins", href: "/products/cabins/toilet" },
        ],
      },
      {
        title: "Cabin Variations",
        items: [
          { name: "ACP Cabins", href: "/products/cabins/acp" },
          { name: "Shop & Hotel Cabins", href: "/products/cabins/shop-hotel" },
          { name: "Container Conversions", href: "/products/cabins/container-conversion" },
          { name: "Double-Storey Cabins", href: "/products/cabins/double-storey" },
        ],
      },
    ],
  },
  {
    title: "Services",
    href: "/services",
    megaMenu: [
      {
        title: "Our Expertise",
        items: [
          { name: "Designing & Homologation", href: "/services#designing" },
          { name: "Structural Fabrication", href: "/services#fabrication" },
          { name: "Spare Parts Division", href: "/services#spare-parts" },
          { name: "Transport & Logistics", href: "/services#logistics" },
          { name: "Custom Engineering", href: "/services#custom-engineering" },
        ],
      }
    ]
  },
  {
    title: "Industries",
    href: "/industries",
    megaMenu: [
      {
        title: "Sectors We Serve",
        items: [
            { name: "Cement & Bulk Material", href: "/industries#cement" },
            { name: "Mining, Steel & Metals", href: "/industries#mining" },
            { name: "Ports & Terminals", href: "/industries#ports" },
            { name: "Construction & Infrastructure", href: "/industries#construction" },
            { name: "Agriculture", href: "/industries#agriculture" },
            { name: "Retail & Commercial", href: "/industries#retail" },
            { name: "Industrial Housing", href: "/industries#housing" },
        ]
      }
    ]
  },
  {
    title: "Company",
    href: "/company",
    megaMenu: [
        {
            title: "About Thorat Motors",
            items: [
                { name: "About Us", href: "/company#about" },
                { name: "Manufacturing Excellence", href: "/company#manufacturing" },
                { name: "Leadership", href: "/company#leadership" },
                { name: "Vision & Mission", href: "/company#vision" },
                { name: "Certifications", href: "/company#certifications" },
                { name: "Downloads", href: "/company#downloads" },
                { name: "Careers", href: "/company#careers" },
                { name: "Gallery", href: "/company#gallery" },
            ]
        }
    ]
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const products = {
    trailers: [
        {
            id: 'cement-bulker',
            name: 'Cement Bulker Trailer',
            description: 'Engineered for the safe and efficient transport of bulk cement and other powdered materials. Our cement bulker trailers are built for reliability and durability.',
            specs: [
                { name: 'Capacity', value: '25-40 CBM' },
                { name: 'Shell Material', value: '4mm High-Tensile Steel (IS 2062)' },
                { name: 'Chassis', value: 'Heavy-duty, reinforced steel' },
                { name: 'Axles', value: '2/3 Axles, 13-16 Ton Capacity (BPW/York/FUWA)' },
                { name: 'Suspension', value: 'Mechanical leaf spring or Air suspension' },
                { name: 'Brakes', value: 'ABS/EBS braking system' },
                { name: 'Tyres', value: '10.00 R20 / 11 R22.5 (Brand of choice)' },
            ],
            features: ['Pneumatic discharge system', 'High-quality welding (Submerged Arc Welding)', 'Manhole with pressure relief valve', 'Aeration pads for easy discharge'],
        },
        {
            id: 'flatbed',
            name: 'Flatbed Trailer',
            description: 'Versatile and robust, our flatbed trailers are ideal for transporting a wide range of goods, including containers, construction materials, and heavy machinery.',
            specs: [
                { name: 'Length', value: '24 ft to 45 ft' },
                { name: 'Payload Capacity', value: 'Up to 50 Tons' },
                { name: 'Main Frame', value: 'High-strength steel I-beam' },
                { name: 'Floor', value: '3-5mm chequered plate' },
                { name: 'Axles', value: '2/3 Axles (BPW/York/FUWA)' },
                { name: 'Suspension', value: 'Mechanical or Air suspension' },
            ],
            features: ['Multiple lashing points', 'Optional twist locks for container transport', 'Heavy-duty landing gear', 'LED lighting system'],
        },
        {
            id: 'skeletal',
            name: 'Skeletal Trailer',
            description: 'Specifically designed for container transport, our skeletal trailers offer a lightweight yet strong structure for maximum payload efficiency.',
            specs: [
                { name: 'Container Size', value: '1x20ft, 2x20ft, 1x40ft, 1x45ft' },
                { name: 'Chassis', value: 'Lightweight, high-tensile steel frame' },
                { name: 'Twist Locks', value: '4 to 12 high-quality twist locks' },
                { name: 'Axles', value: '2/3 Axles' },
                { name: 'Payload Capacity', value: 'Up to 45 Tons' },
            ],
            features: ['Optimized for port and terminal operations', 'Low maintenance design', 'Superior stability and handling', 'Custom configurations available'],
        },
        {
            id: 'side-wall',
            name: 'Side-Wall Trailer',
            description: 'Also known as a drop-side trailer, this model offers flexibility for carrying general cargo, with removable or fixed side walls for easy loading and unloading.',
            specs: [
                { name: 'Length', value: '30 ft to 50 ft' },
                { name: 'Side Wall Height', value: '600mm to 1500mm' },
                { name: 'Material', value: 'Domex/Shelma high-strength steel' },
                { name: 'Payload Capacity', value: '30 to 60 Tons' },
                { name: 'Floor', value: 'Chequered plate or wooden floor' },
            ],
            features: ['Removable side panels and pillars', 'Multiple cargo securing points', 'Robust construction for heavy-duty use', 'Suitable for agricultural and industrial goods'],
        },
        {
            id: 'custom',
            name: 'Custom Trailers',
            description: 'We specialize in designing and manufacturing custom trailers to meet your unique transportation requirements. Contact us to discuss your needs.',
            specs: [
                { name: 'Type', value: 'As per customer requirement' },
                { name: 'Capacity', value: 'Customized' },
                { name: 'Dimensions', value: 'Customized' },
                { name: 'Features', value: 'Customized' },
            ],
            features: ['Collaborative design process', 'Use of specialized materials and components', 'Solutions for oversized or special cargo', 'Full compliance and homologation support'],
        },
    ],
    cabins: [
        {
            id: 'office',
            name: 'Portable Office Cabin',
            description: 'Create a comfortable and professional workspace anywhere. Our portable office cabins are fully insulated, customizable, and ready for immediate use.',
            features: ['Insulated walls and roof', 'Electrical wiring with outlets and lighting', 'Optional air conditioning', 'Choice of flooring and interior finishes', 'Modular and expandable design'],
        },
        {
            id: 'house',
            name: 'House Cabins',
            description: 'Affordable, durable, and comfortable housing solutions. Our portable house cabins can be designed with multiple rooms, kitchens, and bathrooms.',
            features: ['Custom layouts (1BHK, 2BHK, etc.)', 'Plumbing and sanitary fittings', 'Kitchenette with counter and sink', 'Weather-proof and structurally sound', 'Quick installation'],
        },
        {
            id: 'security',
            name: 'Security Cabins',
            description: 'Provide a safe and secure checkpoint for your security personnel. Designed for visibility and durability.',
            features: ['360-degree view with large windows', 'Sturdy construction with locking doors', 'Writing desk and electrical points', 'Compact and easy to relocate'],
        },
        {
            id: 'bunk-house',
            name: 'Bunk/Accommodation Cabins',
            description: 'Ideal for construction sites, industrial projects, and remote locations. Our bunkhouses provide comfortable and secure accommodation for your workforce.',
            features: ['Multi-person layouts with bunk beds', 'Lockers and storage space', 'Proper ventilation and insulation', 'Can be combined with toilet and mess cabins'],
        },
        {
            id: 'toilet',
            name: 'Toilet Cabins',
            description: 'Hygienic and durable portable toilet and shower blocks for events, sites, and public areas. Available in various configurations.',
            features: ['Indian and Western style WCs', 'Washbasins, mirrors, and exhaust fans', 'Separate blocks for male and female', 'Easy to clean and maintain', 'Water storage and septic tank options'],
        },
         {
            id: 'acp',
            name: 'ACP Cabins',
            description: 'Modern and stylish cabins with an Aluminium Composite Panel (ACP) exterior. Ideal for premium site offices, sales galleries, and commercial spaces.',
            features: ['Sleek and modern aesthetic', 'Wide range of colors and finishes', 'Excellent weather and corrosion resistance', 'Enhanced durability and low maintenance'],
        },
        {
            id: 'shop-hotel',
            name: 'Shop & Hotel Cabins',
            description: 'Quickly set up your retail or hospitality business with our custom-built portable cabins. Perfect for pop-up shops, cafes, and small restaurants.',
            features: ['Customizable storefronts with large windows', 'Kitchen and service area layouts', 'Plumbing and electrical for commercial equipment', 'Branding and signage options'],
        },
        {
            id: 'container-conversion',
            name: 'Container Conversions',
            description: 'We transform standard shipping containers into unique and functional spaces, including offices, homes, cafes, and workshops.',
            features: ['Extremely durable and secure', 'Unique industrial aesthetic', 'Fully customizable interiors', 'Eco-friendly building solution'],
        },
        {
            id: 'double-storey',
            name: 'Double-Storey (G+1) Cabins',
            description: 'Maximize your space with our two-story portable cabins. Ideal for large site offices, accommodation blocks, or combined-use buildings.',
            features: ['Space-efficient vertical design', 'Internal or external staircase', 'Structurally engineered for safety', 'Can be configured for various uses on each floor'],
        },
    ]
};

export const services = [
    {
        id: 'designing',
        name: 'Designing & Homologation',
        description: 'Our in-house design team uses the latest CAD/CAE software to create innovative and efficient designs. We also manage the entire homologation process, ensuring all our products are certified by ARAI and meet all regulatory standards.',
    },
    {
        id: 'fabrication',
        name: 'Structural Fabrication',
        description: 'With state-of-the-art manufacturing facilities, we excel in high-quality structural fabrication. Our processes include advanced welding techniques, precision cutting, and robust assembly lines to ensure every product is built to last.',
    },
    {
        id: 'spare-parts',
        name: 'Spare Parts Division',
        description: 'Our dedicated spare parts division ensures minimal downtime for your fleet. We stock a comprehensive range of genuine parts for trailers and cabins, from axles and suspensions to cabin fittings, available for quick dispatch across India.',
    },
    {
        id: 'logistics',
        name: 'Transport & Logistics',
        description: 'We provide end-to-end transport and logistics solutions to ensure your products are delivered safely and on time, anywhere in the country. Our logistics team handles all aspects of transportation, from planning to final delivery.',
    },
    {
        id: 'custom-engineering',
        name: 'Custom Engineering',
        description: 'We thrive on challenges. Our custom engineering services are for clients with unique requirements that standard products cannot meet. We work closely with you to develop bespoke solutions tailored to your specific application.',
    },
];

export const industries = [
    { name: 'Cement & Bulk Material', id: 'cement' },
    { name: 'Mining, Steel & Metals', id: 'mining' },
    { name: 'Ports & Terminals', id: 'ports' },
    { name: 'Construction & Infrastructure', id: 'construction' },
    { name: 'Agriculture', id: 'agriculture' },
    { name: 'Retail & Commercial', id: 'retail' },
    { name: 'Industrial Housing', id: 'housing' },
];

export const company = {
    about: "Thorat Motors India has grown from a visionary enterprise into a leading manufacturer of high-performance trailers and innovative portable cabins. Our commitment to quality, engineering excellence, and customer satisfaction has established us as a trusted partner for major industries across the nation.",
    mission: "To deliver superior, reliable, and innovative transportation and modular space solutions that drive efficiency and value for our customers.",
    vision: "To be India’s most trusted and technologically advanced manufacturer in the commercial vehicle and portable infrastructure sectors, pioneering solutions for a modernizing world.",
    mdMessage: "Since our inception, our guiding principle has been simple: build the best. We don't just manufacture products; we engineer solutions that solve our clients' toughest challenges. Our success is built on the foundation of our skilled team, our passion for innovation, and our unwavering commitment to quality. We are proud of our journey and excited for the future as we continue to support India's industrial growth.",
    leadership: [
        { name: 'Mr. A. Thorat', title: 'Managing Director' },
        { name: 'Mr. B. Kulkarni', title: 'Head of Engineering' },
        { name: 'Mrs. S. Patil', title: 'Chief Financial Officer' },
    ],
};

export const offices = [
    { city: 'Pune', address: 'GAT NO 336/1 Chakan Shikrapur Road, Kadachiwadi- Chakan, Pune – 410501, Maharashtra', phone: '9011943810', email: 'sales@thoratmotor.com' },
    { city: 'Surat', address: 'Green Aristo Plaza, 1st Floor, Shop No- 127, Vaishnovdevi Road, Surat-395009, Gujarat', phone: '9011943810', email: 'sales@thoratmotor.com' },
    { city: 'Visakhapatnam', address: '98/A, D-Block, Near RTO Office, Autonagar, Oldgajuwaka, Visakhapatnam - 530026, Andhra Pradesh', phone: '9011943810', email: 'sales@thoratmotor.com' },
    { city: 'Bhubaneswar', address: 'Plot No. N-6/536, IRC Village, Nayapalli, Jayadev Vihar, Bhubaneswar, Khurda - 751015, Odisha', phone: '9011943810', email: 'sales@thoratmotor.com' },
    { city: 'Chennai', address: 'Plot No 5/3, Thiruvallur Road, Nemam Post, Poonamallee Taluka, Chennai - 600124, Tamil Nadu', phone: '9011943810', email: 'sales@thoratmotor.com' },
    { city: 'Jamshedpur', address: 'Khata No -133, Plot No -201-4P NH-33, Chandil, Ramgarh, Seraikela Kharsawan, Jamshedpur - 831001, Jharkhand', phone: '9011943810', email: 'sales@thoratmotor.com' },
    { city: 'Patna', address: 'Khata No-456, Khesra No-198, 199, Manupur, Saran, Chapra, Bihar - 841207, India', phone: '9011943810', email: 'sales@thoratmotor.com' },
];

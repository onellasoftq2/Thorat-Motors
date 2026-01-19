
export type NavMenuItem = {
  name: string;
  href?: string;
  description?: string;
  icon?: string;
  subItems?: NavMenuItem[];
};

export type NavMenuSection = {
  title: string;
  items: NavMenuItem[];
};

export type InteractiveMegaMenuItem = {
  title: string;
  slug: string;
  description: string;
  isLink?: boolean;
  href?: string;
  items: NavMenuItem[];
}

export type InteractiveFeaturedItem = {
    title: string;
    description: string;
    href: string;
}

export type NavMenu = {
  title:string;
  href?: string;
  megaMenu?: NavMenuSection[];
  interactiveMegaMenu?: InteractiveMegaMenuItem[];
  interactiveFeatured?: InteractiveFeaturedItem;
  items?: NavMenuItem[];
};

export const navMenu: NavMenu[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/company",
  },
  {
    title: "Products",
    href: "/products",
    megaMenu: [
      {
        title: "Trailers",
        items: [
          { name: "Cement Bulker Trailer", href: "/products/trailers/cement-bulker" },
          { name: "Skeletal Trailer (20ft / 40ft)", href: "/products/trailers/skeletal" },
          { name: "Side-Wall Trailer", href: "/products/trailers/side-wall" },
          { name: "Platform / Flatbed Trailer", href: "/products/trailers/flatbed" },
          { name: "Custom-Built Heavy-Duty Trailers", href: "/products/trailers/custom" },
        ],
      },
      {
        title: "Portable Cabins",
        items: [
          { name: "Office Cabins", href: "/products/cabins/office" },
          { name: "House Cabins", href: "/products/cabins/house" },
          { name: "ACP Premium Cabins", href: "/products/cabins/acp" },
          { name: "Security Cabins", href: "/products/cabins/security" },
          { name: "Toilet Cabins", href: "/products/cabins/toilet" },
          { name: "Accommodation/Bunk Cabins", href: "/products/cabins/bunk-house" },
          { name: "Shop & Hotel Cabins", href: "/products/cabins/shop-hotel" },
          { name: "Double Storey (G+1) Cabins", href: "/products/cabins/double-storey" },
        ],
      },
      {
        title: "Containers & Conversions",
        items: [
          { name: "Used Shipping Containers (20ft / 40ft)", href: "/products/container-conversions/used-container" },
          { name: "Office Conversions", href: "/products/container-conversions/office-conversion" },
          { name: "Retail/Shop Conversions", href: "/products/container-conversions/retail-conversion" },
          { name: "Storage Containers", href: "/products/container-conversions/storage-container" },
          { name: "Custom Container Modifications", href: "/products/container-conversions/custom-modification" },
        ],
      },
    ],
  },
   {
    title: "Services",
    href: "/services",
    items: [
        { name: "Designing & Homologation", href: "/services/designing-homologation" },
        { name: "Structural Fabrication", href: "/services/structural-fabrication" },
        { name: "Spare Parts Division", href: "/services/spare-parts" },
        { name: "Transport & Logistics", href: "/services/transport-logistics" },
        { name: "Custom Engineering", href: "/services/custom-engineering" },
        { name: "Container Conversions", href: "/services/container-conversions" },
    ]
  },
  {
    title: "Industries",
    href: "/industries",
    interactiveMegaMenu: [
      {
        title: "Design and Homologation",
        slug: "design-homologation",
        description: "Certification & compliance services.",
        items: [
          { name: "List of AIS", href: "/industries/design-homologation/ais-list", description: "Automotive Industry Standards compliance.", icon: 'ListChecks' },
          { 
            name: "Institute of approval", 
            description: "Partnering with certified approval bodies.", 
            icon: 'ShieldCheck',
            subItems: [
              { name: "ARAI", href: "/industries/design-homologation/approval-institute/arai", icon: "Award" },
              { name: "ICAT", href: "/industries/design-homologation/approval-institute/icat", icon: "Globe" },
              { name: "VRDE", href: "/industries/design-homologation/approval-institute/vrde", icon: "FlaskConical" },
              { name: "CIRT", href: "/industries/design-homologation/approval-institute/cirt", icon: "Route" },
            ]
          },
          {
            name: "Products",
            description: "Our range of certified products.",
            icon: 'Package',
            subItems: [
              { name: "EV (2-wheelers & 3-wheelers)", href: "/industries/design-homologation/products/ev", icon: "Car" },
              { name: "Trailers", href: "/industries/design-homologation/products/trailers", icon: "Truck" },
              { name: "Bus", href: "/industries/design-homologation/products/bus", icon: "Bus" },
              { name: "Bulkers", href: "/industries/design-homologation/products/bulkers", icon: "Fuel" },
              { name: "Refer Container", href: "/industries/design-homologation/products/refer-container", icon: "Container" },
              { name: "Commercial Vehicle", href: "/industries/design-homologation/products/commercial-vehicle", icon: "Truck" },
              { name: "All Products", href: "/industries/design-homologation/products", icon: "Package" },
            ]
          },
          { name: "Clients", href: "/industries/design-homologation/clients", description: "Our valued partners and clients.", icon: 'Users' },
        ],
      },
      {
        title: "Manufacturing",
        slug: "manufacturing",
        description: "High-precision fabrication and assembly.",
        items: [
          { 
            name: "Bulkers", 
            description: "For bulk cement and fly ash transport.", 
            icon: "Fuel",
            subItems: [
                { name: "Cement Bulkers", href: "/industries/manufacturing/bulkers/cement-bulkers" },
                { name: "Rigid Vehicle", href: "/industries/manufacturing/bulkers/rigid-vehicle" },
                { name: "Tipping Bulkers", href: "/industries/manufacturing/bulkers/tipping-bulkers" },
                { name: "Food Bulkers", href: "/industries/manufacturing/bulkers/food-bulkers" },
                { name: "Bulker Trailers", href: "/industries/manufacturing/bulkers/bulker-trailers" },
            ]
          },
          { 
            name: "Trailers", 
            description: "Flatbed, skeletal, and side-wall models.", 
            icon: "Truck",
            subItems: [
              { name: "Flatbed Trailers", href: "/industries/manufacturing/trailers/flatbed" },
              { name: "Sidewall Trailers", href: "/industries/manufacturing/trailers/sidewall" },
              { name: "Tip Trailers", href: "/industries/manufacturing/trailers/tip" },
              { name: "Skeletal Trailers", href: "/industries/manufacturing/trailers/skeletal" },
              { name: "Semi Lowbed Trailers", href: "/industries/manufacturing/trailers/semi-lowbed" },
            ]
          },
          { name: "Tankers", href: "/industries/manufacturing/tankers", description: "For liquid and gas transportation.", icon: "Fuel" },
          { name: "Load bodies", href: "/industries/manufacturing/load-bodies", description: "Custom-built for various truck chassis.", icon: "Wrench" },
        ],
      },
      {
        title: "Transportation",
        slug: "transportation",
        description: "Reliable logistics and transport support.",
        isLink: true,
        href: "/industries/transportation",
        items: [],
      },
    ],
    interactiveFeatured: {
      title: "Your Partner in Industrial Growth",
      description:
        "From custom engineering to pan-India logistics, we provide solutions that power your progress.",
      href: "/contact",
    },
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

export const products = {
    trailers: [
        {
            id: 'cement-bulker',
            name: 'Cement Bulker Trailer',
            description: 'Engineered for the safe and efficient transport of bulk cement, fly ash, and other powdered materials. Our cement bulker trailers are built for reliability and durability.',
            specs: [
                { name: 'Size', value: '30 to 56 CUM or as per customer demand' },
                { name: 'Chassis', value: 'Ladder type construction with cross members (6mm Flange / 6mm Web / 10mm Flange). Ensures maximum load bearing capacity, low unladen weight, and torsional stability.' },
                { name: 'Tank Thickness', value: 'Shell – 4MM ST 52 / Dish End – 5MM ST 52' },
                { name: 'Tank Certification', value: 'Indian Standard IS 2825 1959 Class-3 as applicable to AS 1210 Class 3 for unfired pressure vessels.' },
                { name: 'Tank Discharge', value: 'Rear via Bottom' },
                { name: 'Tank Loading', value: '2 x 450mm diameter hatches' },
                { name: 'Working Pressure', value: '165 to 180 kpa' },
                { name: 'Test Pressure', value: '248 to 270 kpa' },
                { name: 'Pressure Gauge', value: '100 mm diameter 0–10 Kg/Cm² fluid intersect' },
                { name: 'Relief Valve', value: 'Installed in accordance with IS – 2526 Class 3 requirements.' },
                { name: 'Landing Leg', value: 'Two speed landing leg (HDTPL/YORK)' },
                { name: 'Axles', value: '12T / 14T / 16T (YORK/TATA/FUWA/JOST)' },
                { name: 'King PIN', value: '2” king pin equivalent to IS: 6763 Part I (bolted / Welded). (YORK/JOST)' },
                { name: 'Suspension', value: 'Heavy Duty Tridem / Tandem / Tandem + Lifting combo axle. (YORK/TATA)' },
                { name: 'Brakes', value: 'Twin line air brake system coupled to tractor. T 24 brake chamber on all axles. Manually actuated parking brake. (WEBCO)' },
                { name: 'Electrical', value: '24 V DC electrical system as per CMVR' },
                { name: 'Wet Kit', value: 'Includes Pump, Tank, Return line filter, Tipping valve and Hydraulic hoses. Operating pressure 170 BAR. Multi Stage Cylinder: Model: FE169-4-4820 stroke length' },
                { name: 'Surface Preparation', value: 'Trailer surface shall be Shot blasted and cleaned.' },
                { name: 'Painting', value: 'Two coats of Epoxy paint shall be provided with Primer' },
                { name: 'Other Fitment', value: 'SUPD, RUPD, reflectors on both sides and rear as per CMVR.' },
                { name: 'Wheel Rim', value: '10.00 x 20 – 16 PR – 12 Nos. / 7.50 x 20 – 12 Nos' },
                { name: 'Tyre', value: 'APPOLO / JK TYRE / VIKRANT / MRF / Others' },
                { name: 'Application', value: 'Loose cement, fly ash and loose material transportation' },
                { name: 'On Demand Extras', value: 'Trailer ABS/EBS system (Wabco / Haldex / Knorr Bremse), Radial Tyres, Tubeless Tyres & Discs' }
            ],
            features: [
                'High-strength steel (BSK46/IS2062) for maximum torsional stability.',
                'Designed for maximum load-bearing capacity with low unladen weight.',
                'High-quality welding for structural rigidity.',
                'Fitted with high-quality components from brands like YORK, TATA, and WEBCo.'
            ],
        },
        {
            id: 'flatbed',
            name: 'Flatbed Trailer',
            description: 'Versatile and robust, our flatbed trailers are ideal for transporting a wide range of goods, including containers, construction materials, and heavy machinery.',
             specs: [
                { name: 'Size', value: '24FT to 45ft or as per customer demand' },
                { name: 'Trailer Weight (Unladen)', value: '6.5–10 Ton (depending on size)' },
                { name: 'Load Capacity', value: 'Depending on size' },
                { name: 'Chassis', value: 'Formed I Beam (10/10/18) ladder type construction, made with high strength steel-BSK46. IS2062 FORMED BEAM 500 SAW welded for maximum tensional stability & structural rigidity. 12 nos of twist lock shall be provided to suit 1x40ft, 2x20ft, and 1x20ft container at middle.'},
                { name: 'Platform', value: 'Super structure made with ISMC 200 member & heavy duty outer cross member supports. Platform is covered by 4mm MS sheet.' },
                { name: 'Landing Leg', value: 'Two speed landing leg (HDTPL/YORK)' },
                { name: 'Axles', value: '12T / 14T / 16T (YORK/TATA/FUWA/JOST)' },
                { name: 'King Pin', value: '2” king pin equivalent to IS: 6763 Part I (bolted / Welded). (YORK/JOST)' },
                { name: 'Suspension', value: 'Heavy Duty Tridem / Tandem / Tandem + Lifting combo axle. (YORK/TATA)' },
                { name: 'Brakes', value: 'Twin line air brake system with coupled to tractor brake system. T 24 brake chamber on all axles. Manually actuated parking brake. (WEBCO)' },
                { name: 'Electrical', value: '24 V DC electrical system as per CMVR' },
                { name: 'Painting', value: 'Two coats of Epoxy paint shall be provided with Primer' },
                { name: 'Other Fitment', value: 'SUPD, RUPD, reflectors on both sides and rear as per CMVR.' },
                { name: 'Wheel Rim', value: '10.00 x 20 – 16 PR – 12 Nos. / 7.50 x 20 – 12 Nos.' },
                { name: 'Tyre', value: 'APPOLO / JK TYRE / VIKRANT / MRF / Others' },
                { name: 'Application', value: 'Cement Bags / Loose Material / Marble / Coil / Coal / Clinker / Aggregates / Iron Ore / Salt / Others' },
                { name: 'On Demand Extras', value: 'Trailer ABS/EBS system (Wabco / Haldex / Knorr Bremse), Radial Tyres, Tubeless Tyres & Discs' }
            ],
            features: [
                'Ladder type construction ensures maximum load bearing capacity with low unladen weight.',
                'High strength steel-BSK46 with inner cross members providing maximum torsional stability.',
                '12 twist locks for versatile container configurations (1x40ft, 2x20ft, 1x20ft).',
                'Built with high-quality components for reliability and durability.'
            ],
        },
        {
            id: 'skeletal',
            name: 'Skeletal Trailer',
            description: 'Specifically designed for container transport, our skeletal trailers offer a lightweight yet strong structure for maximum payload efficiency.',
             specs: [
                { name: 'Size', value: '24, 40 ft or as per Customer Demand' },
                { name: 'Trailer Weight (Unladen)', value: '8-10 Ton (depending on size)' },
                { name: 'Load Capacity', value: 'Depending on size' },
                { name: 'Chassis', value: 'Formed I Beam - 10 / 10 / 18 – Ladder type construction, Made with high strength steel-BSK46 with inner cross members providing maximum torsional stability. IS2062 FORMED BEAM 500 SAW welded. 12 nos of twist lock shall be provided to suit 1- 40 feet container, 2 – 20 feet container and 1-20 feet container at middle.' },
                { name: 'Landing Leg', value: 'Two speed landing leg (HDTPL/YORK)' },
                { name: 'Axles', value: '12T / 14T / 16T (YORK/TATA/FUWA/JOST)' },
                { name: 'King Pin', value: '2” king pin equivalent to IS : 6763 Part I provided (bolted / Welded). (YORK/JOST)' },
                { name: 'Suspension', value: 'Heavy Duty Tridem / Tandem / Tandem + Lifting combo axle. (YORK/TATA)' },
                { name: 'Brakes', value: 'Twin line air brake system with coupled to tractor brake system. T 24 brake chamber on all axles. Manually actuated parking brake. (WEBCO)' },
                { name: 'Electrical', value: '24 V DC electrical system as per CMVR' },
                { name: 'Surface Preparation', value: 'Trailer surface shall be Shot blasted and cleaned.' },
                { name: 'Painting', value: 'Two coats of Epoxy paint shall be provided with Primer' },
                { name: 'Other Fitment', value: 'SUPD, RUPD, reflectors on both sides and rear as per CMVR.' },
                { name: 'Wheel Rim', value: '10.00 x 20 – 16 PR – 12 Nos. / 7.50 x 20 – 12 Nos.' },
                { name: 'Tyre', value: 'APPOLO / JK TYRE / VIKRANT / MRF / Others' },
                { name: 'Application', value: '20 to 40ft ship Container transportation' },
                { name: 'On Demand Extras', value: 'Trailer ABS/EBS system (Wabco / Haldex / Knorr Bremse), Radial Tyres, Tubeless Tyres & Discs' }
            ],
            features: [
                'Optimized for port and terminal operations with a lightweight, high-strength steel frame.',
                'Features 12 twist locks to support multiple container sizes (1x40ft, 2x20ft, 1x20ft).',
                'Engineered for maximum torsional stability and structural rigidity.',
                'Low maintenance design with superior stability and handling.'
            ],
        },
        {
            id: 'side-wall',
            name: 'Side-Wall Trailer',
            description: 'Also known as a drop-side trailer, this model offers flexibility for carrying general cargo, with removable or fixed side walls for easy loading and unloading.',
            specs: [
                { name: 'Size', value: '30, 32, 34, 36, 40 ft or as per customer demand' },
                { name: 'Trailer Weight (Unladen)', value: '8-10 Ton (depending on size)' },
                { name: 'Load Capacity', value: 'Depending on size' },
                { name: 'Chassis', value: 'Formed I Beam (10/10/18) ladder type construction, made with high strength steel-BSK46. 2 Nos Main longitudinal members are high strength lighter weight Parallel flange Beam. Cross members are Rolled or Folded of material IS-2062/ST-52. 12 nos of twist lock shall be provided to suit 1-40 ft container, 2-20 ft containers and 1-20 ft container at middle.' },
                { name: 'Platform', value: 'Super structure made with ISMB 250 / ISMC 125 member & heavy duty outer cross member supports. Platform is covered by 4mm MS sheet.' },
                { name: 'Landing Leg', value: 'Two speed landing leg (HDTPL/YORK)' },
                { name: 'Axles', value: '12T / 14T / 16T (YORK/TATA/FUWA/JOST)' },
                { name: 'King Pin', value: '2” king pin equivalent to IS: 6763 Part I (bolted / Welded). (YORK/JOST)' },
                { name: 'Suspension', value: 'Heavy Duty Tridem / Tandem / Tandem + Lifting combo axle. (YORK/TATA)' },
                { name: 'Brakes', value: 'Twin line air brake system coupled to tractor. T 24 brake chamber on all axles. Manually actuated parking brake. (WEBCO)' },
                { name: 'Electrical', value: '24 V DC electrical system as per CMVR' },
                { name: 'Painting', value: 'Two coats of Epoxy paint shall be provided with Primer' },
                { name: 'Other Fitment', value: 'SUPD, RUPD, reflectors on both sides and rear as per CMVR.' },
                { name: 'Wheel Rim', value: '10.00 x 20 – 16 PR – 12 Nos. / 7.50 x 20 – 12 Nos.' },
                { name: 'Tyre', value: 'APPOLO / JK TYRE / VIKRANT / MRF / Others' },
                { name: 'Application', value: 'Cement Bags / Loose Material / Marble / Coil / Coal / Clinker / Aggregates / Iron Ore / Salt / Others' },
                { name: 'On Demand Extras', value: 'Trailer ABS/EBS system (Wabco / Haldex / Knorr Bremse), Radial Tyres, Tubeless Tyres & Discs' }
            ],
            features: [
                'Removable side panels and pillars for loading flexibility.',
                'Robust construction for heavy-duty use, suitable for agricultural and industrial goods.',
                'High-strength, lightweight parallel flange beam chassis for maximum stability.',
                'Includes 12 twist locks for optional container transport.'
            ],
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
                { name: 'Materials', value: 'Specialized materials and components as required' },
                { name: 'Compliance', value: 'Full compliance and homologation support' }
            ],
            features: ['Collaborative design process', 'Use of specialized materials and components', 'Solutions for oversized or special cargo', 'Full compliance and homologation support'],
        },
    ],
    cabins: [
        {
            id: 'office',
            name: 'Portable Office Cabin',
            description: 'Creating a portable office that offers independence in terms of affordability, quality, reusability, and personalization. A cost-effective and flexible solution compared to permanent structures.',
            features: [
                'Readily available and can be installed quickly.',
                'Can be easily shifted to another location when needed, providing flexibility.',
                'Cost-effective in terms of initial setup and relocation.',
                'Customizable layouts to suit your specific office needs.',
            ],
            specs: [
                { name: 'Standard Size', value: '10x10, 20x10, 30x10, 40x10 ft (Custom sizes available)' },
                { name: 'Base Frame', value: '50mm x 50mm Bottom & 50mm x 50mm channel' },
                { name: 'Walls', value: 'Exterior: Profiled GI sheets. Interior: 8mm BBR Cement or 8mm MR sheets.' },
                { name: 'Insulation', value: 'Glasswool/Rockwool insulation for thermal and acoustic comfort.' },
                { name: 'Flooring', value: '18mm Bison panel board with durable vinyl floor covering.' },
                { name: 'Electricals', value: 'Concealed wiring (Polycab/Havells) with LED light fittings, fan points, and AC points.' },
                { name: 'Windows', value: 'Sliding aluminum windows with protective grills.' },
                { name: 'Door', value: 'Insulated door with standard locking mechanism.' },
            ],
        },
        {
            id: 'house',
            name: 'Portable House Cabin',
            description: 'Designed to maximize functionality within limited space, ensuring every square foot is utilized efficiently for comfortable living.',
            features: [
                'Designed for various climatic conditions with insulation and ventilation options.',
                'Corrugated sheet roofing with proper drainage to prevent water logging.',
                'Equipped with hooks for easy transportation and relocation.',
                'Safe and reliable concealed electrical installations.',
                'Includes options for kitchenettes and attached bathrooms.'
            ],
            specs: [
                { name: 'Structure', value: 'Modular design with options for multiple rooms.' },
                { name: 'Plumbing', value: 'Pre-installed plumbing lines for kitchen and bathroom.' },
                { name: 'Roof', value: 'GI corrugated sheet with waterproofing.' },
                { name: 'Ventilation', value: 'Exhaust fans in kitchen and bathroom areas.' },
                { name: 'Customization', value: 'Interior layouts and finishes can be customized.' },
            ],
        },
        {
            id: 'security',
            name: 'Portable Security Cabin',
            description: 'Our offered range of portable security cabin is made up of rigid mild steel construction and manufactured as per good engineering practice.',
            features: [
                '360-degree view with multiple windows.',
                'Compact and easy to install at entry/exit points.',
                'Durable and weather-resistant construction.',
                'Includes basic electrical fittings for light and communication devices.'
            ],
            specs: [
                { name: 'Standard Size', value: '4 x 4 x 8.8 ft (other sizes on request).' },
                { name: 'Construction', value: 'Rigid mild steel frame.' },
                { name: 'Windows', value: 'Three-side sliding windows with protective grill.' },
                { name: 'Flooring', value: 'Bison panel board with vinyl covering.' },
                { name: 'Electricals', value: 'Includes one light point and one switch.' },
            ],
        },
        {
            id: 'bunk-house',
            name: 'Portable Accommodation Cabin',
            description: 'Working on a remote place along with a big team is a challenge. Our Portable Accommodation Cabins are the solution for on-site housing needs.',
            features: [
                'Efficiently designed to house multiple people comfortably.',
                'Can be configured with bunk beds, wardrobes, and personal storage.',
                'Option to integrate toilet and bathroom facilities.',
                'Ideal for remote project sites, construction camps, and industrial housing.'
            ],
            specs: [
                { name: 'Capacity', value: 'Can be designed for 2 to 12 people.' },
                { name: 'Beds', value: 'Double or triple-tier bunk beds.' },
                { name: 'Amenities', value: 'Can include common areas, pantries, and attached washrooms.' },
                { name: 'Structure', value: 'Durable steel frame with insulated panels.' },
                { name: 'Ventilation', value: 'Proper ventilation with windows and exhaust fans.' },
            ],
        },
        {
            id: 'toilet',
            name: 'Portable Toilet Cabin',
            description: 'In today\'s world of hygiene culture, our Portable Toilet unit is an important necessity. An ideal solution for leisure, hospitality, events, or emergency use.',
            features: [
                'Lightweight and robustly designed for easy transport and setup.',
                'Easy to maintain with hygienic surfaces and proper ventilation.',
                'Available as single units or multi-stall blocks.',
                'Suitable for construction sites, public events, and temporary facilities.'
            ],
            specs: [
                { name: 'Types', value: 'Indian and Western style commodes available.' },
                { name: 'Plumbing', value: 'Includes all necessary fittings, taps, and showers.' },
                { name: 'Ventilation', value: 'Exhaust fan and louvers for air circulation.' },
                { name: 'Flooring', value: 'Anti-skid, easy-to-clean flooring material.' },
                { name: 'Water Tank', value: 'Option for overhead water tank for standalone use.' },
            ],
        },
         {
            id: 'acp',
            name: 'ACP Covered Portable Cabin',
            description: 'Modern and stylish cabins with an Aluminium Composite Panel (ACP) exterior, offering superior aesthetics and durability.',
            features: [
                'Premium look suitable for corporate offices and customer-facing areas.',
                'ACP panels are lightweight, durable, and weather-resistant.',
                'Available in a wide range of colors and finishes.',
                'Excellent thermal and sound insulation properties.'
            ],
            specs: [
                { name: 'Exterior', value: '4mm Aluminium Composite Panel (ACP) cladding.' },
                { name: 'Interior', value: 'Premium wall panels and false ceiling options.' },
                { name: 'Glazing', value: 'Large glass windows and doors for a modern look.' },
                { name: 'Branding', value: 'Exterior surface is ideal for company branding and logos.' },
                { name: 'Applications', value: 'Site offices, sales galleries, premium commercial spaces.' },
            ],
        },
        {
            id: 'shop-hotel',
            name: 'Portable Shop & Hotel Cabin',
            description: 'We are the leading manufacturer and supplier of portable shops. Manufactured with the latest expertise and finest quality raw materials.',
            features: [
                'Customizable storefront with options for glass facades, canopies, and counters.',
                'Quick and easy to set up for new business ventures.',
                'Cost-effective alternative to traditional brick-and-mortar shops.',
                'Can be designed for various retail or food service applications.'
            ],
            specs: [
                { name: 'Design', value: 'Custom layouts for kitchens, counters, seating, and storage.' },
                { name: 'Utilities', value: 'Pre-installed plumbing and electrical lines for commercial equipment.' },
                { name: 'Exterior', value: 'Attractive exterior finishes, including options for branding and signage.' },
                { name: 'Security', value: 'Roll-down shutters and secure locking systems.' },
            ],
        },
        {
            id: 'double-storey',
            name: 'Double Storey (G+1) Cabin',
            description: 'Maximize your space with our two-story portable cabins. Ideal for large site offices, accommodation blocks, or combined-use buildings.',
            features: [
                'Space-efficient vertical design to make the most of limited ground area.',
                'Includes options for internal or external staircases.',
                'Structurally engineered and reinforced for safety and stability.',
                'Can be configured for different uses on each floor (e.g., office below, accommodation above).'
            ],
            specs: [
                { name: 'Structure', value: 'Reinforced steel frame to support two levels.' },
                { name: 'Staircase', value: 'Internal or external MS staircase with safety railings.' },
                { name: 'Layout', value: 'Fully customizable layouts for both floors.' },
                { name: 'Foundation', value: 'Requires minimal foundation, can be installed on a level surface.' },
                { name: 'Assembly', value: 'Designed for quick on-site assembly and disassembly.' },
            ],
        },
    ],
    containerConversions: [
        {
            id: 'used-container',
            name: 'Used Shipping Cargo Container',
            description: 'Cargo Containers are highly durable and are basically used for Storage Purpose. We also offer custom modifications for 20ft and 40ft containers.',
            features: [
                'Extremely durable with an estimated life span of 10 to 15 years.',
                'Ideal for secure, weather-proof storage solutions.',
                'Available in standard 20ft and 40ft sizes.',
                'Can serve as a robust base structure for various conversion projects.'
            ],
            specs: [
                { name: 'Material', value: 'Corten Steel' },
                { name: 'Standard Sizes', value: '20ft (L) x 8ft (W) x 8.5ft (H) or 40ft (L) x 8ft (W) x 8.5ft (H)' },
                { name: 'Condition', value: 'Cargo-worthy, wind and water-tight.' },
                { name: 'Flooring', value: 'Marine-grade plywood flooring.' },
                { name: 'Doors', value: 'Double cargo doors with locking bars.' },
            ],
        },
        {
            id: 'office-conversion',
            name: 'Container Office Conversion',
            description: 'Transform a standard shipping container into a fully functional, modern office space, perfect for construction sites or as a permanent workspace.',
            features: [
                'Insulated walls and ceilings for all-weather comfort.',
                'Fully integrated electrical and data wiring.',
                'Custom window and door placements for natural light and access.',
                'Durable, secure, and easily transportable.'
            ],
            specs: [
                { name: 'Insulation', value: 'Rockwool/Glasswool with MDF or gypsum board paneling.' },
                { name: 'Electrical', value: 'Concealed wiring, sockets, light fixtures, and AC provision.' },
                { name: 'Windows', value: 'Aluminum sliding windows with safety grills.' },
                { name: 'Flooring', value: 'Original marine plywood with vinyl or laminate finish.' },
                { name: 'Customization', value: 'Options for partitions, workstations, and attached toilets.' },
            ],
        },
        {
            id: 'retail-conversion',
            name: 'Container Retail Conversion',
            description: 'Create a unique and eye-catching retail shop, cafe, or kiosk from a shipping container. Ideal for pop-up stores or permanent commercial spaces.',
            features: [
                'Customizable storefront with large glass windows, serving hatches, or bi-fold doors.',
                'Exterior can be branded with custom paint, cladding, and signage.',
                'Quick to deploy, minimizing time-to-market.',
                'Extremely robust and secure for valuable inventory.'
            ],
            specs: [
                { name: 'Layout', value: 'Open-plan or sectioned layouts for retail, food service, or showrooms.' },
                { name: 'Exterior', value: 'Custom paint, wood/metal cladding, and branding options.' },
                { name: 'Features', value: 'Can be fitted with counters, shelving, commercial kitchen equipment, and customer seating.' },
                { name: 'Security', value: 'Roll-down shutters, reinforced doors, and advanced locking systems.' },
            ],
        },
        {
            id: 'storage-container',
            name: 'Secure Storage Containers',
            description: 'Durable and secure storage solutions using modified shipping containers. Ideal for tools, equipment, and inventory.',
            features: [
                'Wind and water-tight Corten steel construction.',
                'Heavy-duty locking mechanisms for enhanced security.',
                'Can be fitted with shelving, lighting, and ventilation.',
                'Available in 20ft and 40ft sizes.'
            ],
            specs: [
                { name: 'Material', value: 'Corten Steel' },
                { name: 'Security', value: 'Lockbox and high-security options' },
                { name: 'Customization', value: 'Shelving, partitions, ramps, and electrical packages' },
                { name: 'Application', value: 'Industrial storage, construction site storage, document archiving' },
            ],
        },
        {
            id: 'custom-modification',
            name: 'Custom Container Modifications',
            description: 'We provide bespoke modifications to shipping containers for any application. Your vision, engineered by us.',
            features: [
                'Full design collaboration from concept to completion.',
                'Integration of specialized equipment or machinery.',
                'Unique structural modifications, including joining multiple containers.',
                'Endless possibilities for workshops, labs, marketing units, and more.'
            ],
            specs: [
                { name: 'Process', value: 'Consultation, 3D Modeling, Fabrication, Delivery' },
                { name: 'Modifications', value: 'Custom doors, windows, skylights, insulation, HVAC, plumbing, electrical' },
                { name: 'Structure', value: 'Reinforcement, roll-up doors, open-side options' },
                { name: 'Finishes', value: 'Custom interior and exterior finishes to match branding' },
            ],
        },
    ]
};

export const services = [
    {
        id: 'designing-homologation',
        name: 'Designing & Homologation',
        description: 'End-to-end engineering, compliance, and certification services for trailers and mobile structures.',
    },
    {
        id: 'structural-fabrication',
        name: 'Structural Fabrication',
        description: 'High-precision fabrication powered by CNC cutting, welding, forming, and assembly technologies.',
    },
    {
        id: 'spare-parts',
        name: 'Spare Parts Division',
        description: 'Genuine, reliable, ready-to-dispatch spare parts for trailers and portable cabins.',
    },
    {
        id: 'transport-logistics',
        name: 'Transport & Logistics',
        description: 'Reliable logistics and end-to-end transportation support across India.',
    },
    {
        id: 'custom-engineering',
        name: 'Custom Engineering',
        description: 'Bespoke engineering solutions for specialized industrial applications.',
    },
    {
        id: 'container-conversions',
        name: 'Container Conversions',
        description: 'Transforming 20 ft and 40 ft containers into high-utility structures.',
    },
];

export type Industry = {
    id: string;
    name: string;
    description: string;
};

export const industries: Industry[] = [
    { name: 'Cement & Bulk Material', id: 'cement', description: 'Bulker trailers and high-capacity transport solutions.' },
    { name: 'Mining, Steel & Metals', id: 'mining', description: 'Heavy-duty trailers for raw material movement.' },
    { name: 'Ports & Terminals', id: 'ports', description: 'Container handling and logistics support.' },
    { name: 'Construction & Infrastructure', id: 'construction', description: 'Flatbed and side-wall trailers for project sites.' },
    { name: 'Agriculture', id: 'agriculture', description: 'Transport solutions for bulk agricultural produce.' },
    { name: 'Retail & Commercial', id: 'retail', description: 'Container conversions and mobile structures.' },
    { name: 'Industrial Housing', id: 'housing', description: 'Portable cabins and workforce accommodation.' },
];

export const company = {
    about: "Thorat Cabins are India's leading portable cabin manufacturer. Our cabins are designed to provide the best quality, durability & customer satisfaction. We use the latest technology and top grade material to ensure that our cabins are of the highest possible quality. Our cabins are made with the utmost care & attention to detail ensuring that they are built to last. We understand that you need a structure that's reliable and sturdy and we guarantee that you will get just that when you choose us. We ensure on-time delivery and strive to maintain customer satisfaction at all times. These cabins are cost free, high in quality, safe and cost efficient. Our cabins are designed precisely using approved raw material in accordance to the international standards, These cabins are coall and relatively low cost. Designs we offer are portable in order to meet the varied demands of our esteemed customers. Our cabins are reliable, easy to install, require less maintenance, compact designs, durable finishing standards, aesthetic look and easily installable, therefore, these site offices are highly demanded across the country.",
    mission: "To deliver superior, reliable, and innovative transportation and modular space solutions that drive efficiency and value for our customers.",
    vision: "To be India’s most trusted and technologically advanced manufacturer in the commercial vehicle and portable infrastructure sectors, pioneering solutions for a modernizing world.",
    mdMessage: "We at THORAT MOTORS thank you for your continued patronage to our products. Our growth has come from understanding the needs of our customers and accordingly developing ourselves to meet those needs and expectations. We have constantly challenged our capabilities and reached higher landmarks by improving our products and processes to meet rigorous specification of our Indian trailer OEM & After-market customers. We have been recognized by ISO Quality & Manufacturing experts as one of the best companies implementing international best practices like Workplace Production Systems (Lean Manufacturing/Kaizen Gemba) and we intend to bring that strength to the Indian After-market in terms of product stability & Reliability, We continue to invest in the art manufacturing facility ensuring a defect free product each time, every time, so that our customers are delighted by our excellence for a long and extended vehicle due to quality products. We encourage our Channel Partners to reach out to the end customers and collect feedback so that we gather their expectations from our Company, your call is very important, THORAT MOTORS will do whatever it possible to fulfil your needs, after all your happiness is customer satisfaction. Our team is committed to ensure that your experience with THORAT MOTOR not only meets but exceeds expectations.",
    leadership: [
        { name: 'Krishnat Thorat', title: 'Managing Director' },
        { name: 'Mr. B. Kulkarni', title: 'Head of Engineering' },
        { name: 'Mrs. S. Patil', title: 'Chief Financial Officer' },
    ],
};

export const contactInfo = {
    phone: '9011943810 / 8698777283',
    emails: ['sales@thoratmotor.com', 'thoratmotors@gmail.com'],
};

export const offices = [
    { city: 'Pune', state: 'Maharashtra', address: 'GAT NO 336/1, Chakan-Shikrapur Road, Chakan', descriptor: 'Manufacturing Hub & HQ', coords: { x: 26, y: 56 } },
    { city: 'Surat', state: 'Gujarat', address: 'Green Aristo Plaza, 1st Floor, Shop No- 127, Vaishnovdevi Road, Surat-395009', descriptor: 'Sales & Service Center', coords: { x: 19, y: 46 } },
    { city: 'Visakhapatnam', state: 'Andhra Pradesh', address: '98/A, D-Block, Near RTO Office, Autonagar, Oldgajuwaka, Visakhapatnam - 530026', descriptor: 'Logistics Support', coords: { x: 58, y: 64 } },
    { city: 'Bhubaneswar', state: 'Odisha', address: 'Plot No. N-6/536, IRC Village, Nayapalli, Jayadev Vihar, Bhubaneswar, Khurda - 751015', descriptor: 'Regional Office', coords: { x: 65, y: 51 } },
    { city: 'Jamshedpur', state: 'Jharkhand', address: 'Khata No -133, Plot No -201-4P NH-33, Chandil, Ramgarh, Seraikela Kharsawan, Jamshedpur - 831001', descriptor: 'Service & Parts Hub', coords: { x: 66, y: 39 } },
    { city: 'Chennai', state: 'Tamil Nadu', address: 'Plot No 5/3, Thiruvallur Road, Nemam Post, Poonamallee Taluka, Chennai - 600124', descriptor: 'Logistics Support', coords: { x: 47, y: 78 } },
    { city: 'Patna', state: 'Bihar', address: 'Khata No-456, Khesra No-198, 199, Manupur, Saran, Chapra - 841207', descriptor: 'Regional Office', coords: { x: 63, y: 30 } },
];

export const industrySolutions = [
  {
    id: 'cement',
    name: 'Cement & Bulk Material',
    description: 'Specialized trailers and logistics for the efficient and safe transport of bulk materials like cement, fly ash, and clinker.',
    solutions: [
      'Cement Bulker Trailers',
      'Flatbed & Side-Wall Trailers',
      'Transport & Logistics Support',
    ],
    image: "https://images.unsplash.com/photo-1517921345997-384358899214?q=80&w=1974&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "Building"
  },
  {
    id: 'mining',
    name: 'Mining, Steel & Metals',
    description: 'Robust, heavy-duty trailers engineered to withstand the demanding conditions of mining and metal transport.',
    solutions: [
      'Heavy-Duty Trailers',
      'Skeletal & Flatbed Trailers',
      'Custom Engineering',
    ],
    image: "https://images.unsplash.com/photo-1542382494-0997afd46399?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "Gem"
  },
  {
    id: 'ports',
    name: 'Ports & Terminals',
    description: 'Efficient and reliable container handling solutions, including skeletal trailers and logistics support for terminal operations.',
    solutions: [
      'Skeletal Trailers (20ft/40ft)',
      'Container Handling Solutions',
      'Logistics Support',
    ],
    image: "https://images.unsplash.com/photo-1605282221649-8f5367a1c86e?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "Anchor"
  },
  {
    id: 'construction',
    name: 'Construction & Infrastructure',
    description: 'Versatile trailers and portable site cabins to support large-scale construction and infrastructure projects.',
    solutions: [
      'Flatbed Trailers',
      'Side-Wall Trailers',
      'Portable Site Cabins',
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "Wrench"
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    description: 'Durable transport solutions for bulk agricultural produce and secure on-site storage containers.',
    solutions: [
      'Bulk Transport Trailers',
      'Storage Containers',
      'Seasonal Logistics Support',
    ],
    image: "https://images.unsplash.com/photo-1627920769854-46385d564175?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "Leaf"
  },
  {
    id: 'retail',
    name: 'Retail & Commercial',
    description: 'Customizable container conversions for pop-up shops, kiosks, and mobile commercial spaces.',
    solutions: [
      'Container Conversions',
      'Shop & Hotel Cabins',
      'Custom Fabrication',
    ],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "ShoppingCart"
  },
  {
    id: 'housing',
    name: 'Industrial Housing',
    description: 'High-quality portable cabins and modular buildings for on-site workforce accommodation and administrative offices.',
    solutions: [
      'Portable Cabins',
      'Accommodation & Bunk Cabins',
      'G+1 Cabin Structures',
    ],
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7185743?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "Home"
  },
];

export type WhyChooseUsItem = {
    title: string;
    description: string;
    imageUrl: string;
};

export const whyChooseUs: WhyChooseUsItem[] = [
    {
        title: 'High-Strength Engineering',
        description: 'We use certified BSK46 and IS2062 steel for maximum durability and performance.',
        imageUrl: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'ISO & CMVR Compliance',
        description: 'All products follow industry-standard certifications ensuring safety, quality, and reliability.',
        imageUrl: 'https://images.unsplash.com/photo-1581092446327-9b52bdc4f315?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Advanced Fabrication',
        description: 'State-of-the-art CNC, welding, and forming machines ensure precision manufacturing.',
        imageUrl: 'https://images.unsplash.com/photo-1633449494745-6a467f40e0b3?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Custom Engineering',
        description: 'We design and build trailers tailored to your load, industry, and operational needs.',
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
];




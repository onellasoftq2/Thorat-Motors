
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
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/company",
  },
  {
    title: "Products",
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
          { name: "Used Shipping Containers (20ft / 40ft)", href: "/products/cabins/container-conversion" },
          { name: "Office Conversions", href: "/products/cabins/container-conversion" },
          { name: "Retail/Shop Conversions", href: "/products/cabins/shop-hotel" },
          { name: "Storage Containers", href: "/products/cabins/container-conversion" },
          { name: "Custom Container Modifications", href: "/products/cabins/container-conversion" },
        ],
      },
    ],
  },
   {
    title: "Services",
    href: "/services",
  },
  {
    title: "Industries",
    href: "/industries",
  },
  {
    title: "Downloads",
    href: "/company#downloads",
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
                { name: 'Size', value: '24FT to 45 ft or as per customer demand' },
                { name: 'Trailer Weight (Unladen)', value: '6.5-10 Ton (depending on size)' },
                { name: 'Chassis', value: 'Formed I Beam (10/10/18) ladder type construction, made with high strength steel-BSK46. IS2062 FORMED BEAM 500 SAW welded for maximum tensional stability & structural rigidity.' },
                { name: 'Twist Locks', value: '12 nos of twist lock shall be provided to suit 1x40ft, 2x20ft, and 1x20ft container at middle' },
                { name: 'Platform', value: 'Super structure made with ISMC 200 member & heavy duty outer cross member supports. Platform is covered by 4mm MS sheet.' },
                { name: 'Landing Leg', value: 'Two speed landing leg (HDTPL/YORK)' },
                { name: 'Axles', value: '12T / 14T / 16T (YORK/TATA/FUWA/JOST)' },
                { name: 'King Pin', value: '2” king pin equivalent to IS: 6763 Part I (bolted / Welded). (YORK/JOST)' },
                { name: 'Suspension', value: 'Heavy Duty Tridem / Tandem / Tandem + Lifting combo axle. (YORK/TATA)' },
                { name: 'Brakes', value: 'Twin line air brake system coupled to tractor. T 24 brake chamber on all axles. Manually actuated parking brake. (WEBCO)' },
                { name: 'Electrical', value: '24 V DC electrical system as per CMVR' },
                { name: 'Painting', value: 'Two coats of Epoxy paint shall be provided with Primer' },
                { name: 'Other Fitment', value: 'SUPD, RUPD, reflectors on both sides and rear as per CMVR' },
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
                { name: 'Chassis', value: 'Company fabricated. Formed I Beam - 10 / 10 / 18 – Ladder type construction, Made with high strength steel-BSK46 with inner cross members providing maximum torsional stability. IS2062 FORMED BEAM 500 SAW welded. The structure ensures maximum load bearing capacity with low Unladen weight.' },
                { name: 'Twist Locks', value: '12 nos of twist lock shall be provided to suit 1-40 ft container, 2-20 ft containers and 1-20 ft container at middle.' },
                { name: 'Landing Leg', value: 'Two speed landing leg shall be provided at the front end. (HDTPL/YORK)' },
                { name: 'Axles', value: '12T / 14T / 16T (YORK/TATA/FUWA/JOST)' },
                { name: 'King Pin', value: '2” king pin equivalent to IS: 6763 Part I provided (bolted / Welded). (YORK/JOST)' },
                { name: 'Suspension', value: 'Heavy Duty Tridem / Tandem / Tandem + Lifting combo axle. (YORK/TATA)' },
                { name: 'Brakes', value: 'Twin line air brake system with coupled to tractor brake system. T 24 brake chamber shall be provided on all axles. Parking brake shall be manually actuated. (WEBCO)' },
                { name: 'Electrical', value: '24 V DC electrical system as per CMVR' },
                { name: 'Wet Kit', value: 'Shall include Pump, Tank, Return line filter, Tipping valve and Hydraulic hoses. Operating pressure 170 BAR. Multi Stage Cylinder: Model: FE169-4-4820 stroke length' },
                { name: 'Surface Preparation', value: 'Trailer surface shall be Shot blasted and cleaned.' },
                { name: 'Painting', value: 'Two coats of Epoxy paint shall be provided with Primer' },
                { name: 'Other Fitment', value: 'Fitments such SUPD, RUPD, reflectors on both sides and rear shall be provided as per CMVR.' },
                { name: 'Wheel Rim', value: '10.00 x 20 – 16 PR – 12 Nos. / 7.50 x 20 – 12 Nos.' },
                { name: 'Tyre', value: 'APPOLO / JK TYRE / VIKRANT / MRF / Others' },
                { name: 'Application', value: '20 to 40ft ship Container transportation' },
                { name: 'On Demand Extras', value: 'Trailer ABS/EBS system – Wabco / Haldex / Knorr Bremse Make., Radial Tyres, Tubeless Tyres & Discs' }
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
                { name: 'Chassis', value: 'Formed I Beam (10/10/18) ladder type construction, made with high strength steel-BSK46. 2 Nos Main longitudinal members are high strength lighter weight Parallel flange Beam. Cross members are Rolled or Folded of material IS-2062/ST-52.' },
                { name: 'Platform', value: 'Super structure made with ISMB 250 / ISMC 125 member & heavy duty outer cross member supports. Platform is covered by 4mm MS sheet.' },
                { name: 'Twist Locks', value: '12 nos of twist lock shall be provided to suit 1-40 ft container, 2-20 ft containers and 1-20 ft container at middle.' },
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
                'Base Frame: 50mm x 50mm Bottom & 50mm x 50mm channel.',
                'Walls: ACP, 8mm BBR Cement, or 8mm MR sheets.',
                'Flooring: Cement sheet / Bison panel board with vinyl floor.',
                'Electricals: Concealed wiring (Polycab/Havells) with light fittings, fan points, and exhaust fan.'
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
                'Safe and reliable concealed electrical installations.'
            ],
        },
        {
            id: 'security',
            name: 'Portable Security Cabin',
            description: 'Our offered range of portable security cabin is made up of rigid mild steel construction and manufactured as per good engineering practice.',
            features: [
                'Standard size is 4 x 4 x 8.8 feet.',
                'Comes with 2 side windows with protection grill.',
                'Flooring is made of bison panel board with vinyl on it.',
                'Includes electrical work.'
            ],
        },
        {
            id: 'bunk-house',
            name: 'Portable Accommodation Cabin',
            description: 'Working on a remote place along with a big team is a challenge. Our Portable Accommodation Cabins are the solution for on-site housing needs.',
            features: [
                'Comes with bunk beds, wardrobe, toilet & bathroom, pantry etc.',
                'Customizable as per client requirements.',
                'Ideal for remote project sites.',
                'Provides a comfortable and secure living space for the workforce.'
            ],
        },
        {
            id: 'toilet',
            name: 'Portable Toilet Cabin',
            description: 'In today\'s world of hygiene culture, our Portable Toilet unit is an important necessity. An ideal solution for leisure, hospitality, events, or emergency use.',
            features: [
                'Lightweight and robustly designed.',
                'Easy to maintain and clean.',
                'Suitable for permanent, temporary, or emergency situations.',
                'Promotes hygiene and sanitation.'
            ],
        },
         {
            id: 'acp',
            name: 'ACP Covered Portable Cabin',
            description: 'Modern and stylish cabins with an Aluminium Composite Panel (ACP) exterior, offering superior aesthetics and durability.',
            features: [
                'Lightweight, durable, and resistant to weathering and corrosion.',
                'Available in a wide range of colors, finishes, and textures.',
                'Fire-retardant core for enhanced safety.',
                'Improves thermal insulation and energy efficiency.',
                'Eco-friendly and recyclable material.'
            ],
        },
        {
            id: 'shop-hotel',
            name: 'Portable Shop & Hotel Cabin',
            description: 'We are the leading manufacturer and supplier of portable shops. Manufactured with the latest expertise and finest quality raw materials.',
            features: [
                'Quality controlled fabrication process to meet international standards.',
                'Cost-effective solution to keep clients delighted.',
                'Customizable for retail or small hospitality businesses.',
                'Quick setup for pop-up shops, cafes, or small restaurants.'
            ],
        },
        {
            id: 'container-conversion',
            name: 'Used Shipping Cargo Container',
            description: 'Cargo Containers are highly durable and are basically used for Storage Purpose. We also offer custom modifications for 20ft and 40ft containers.',
            features: [
                'Highly durable with an estimated life span of 10 to 15 years.',
                'Ideal for secure storage solutions.',
                'Available in 20ft and 40ft sizes.',
                'Can be modified for various purposes like offices, homes, or shops.'
            ],
        },
        {
            id: 'double-storey',
            name: 'Double Storey (G+1) Cabin',
            description: 'Maximize your space with our two-story portable cabins. Ideal for large site offices, accommodation blocks, or combined-use buildings.',
            features: [
                'Space-efficient vertical design to make the most of limited area.',
                'Includes internal or external staircase options.',
                'Structurally engineered and reinforced for safety and stability.',
                'Can be configured for various uses on each floor.'
            ],
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
    about: "Thorat Cabins are India's leading portable cabin manufacturer. Our cabins are designed to provide the best quality, durability & customer satisfaction. We use the latest technology and top grade material to ensure that our cabins are of the highest possible quality. Our cabins are made with the utmost care & attention to detail ensuring that they are built to last.",
    mission: "To deliver superior, reliable, and innovative transportation and modular space solutions that drive efficiency and value for our customers.",
    vision: "To be India’s most trusted and technologically advanced manufacturer in the commercial vehicle and portable infrastructure sectors, pioneering solutions for a modernizing world.",
    mdMessage: "We at THORAT MOTORS thank you for your continued patronage to our products. Our growth has come from understanding the needs of our customers and accordingly developing ourselves to meet those needs and expectations. We have constantly challenged our capabilities and reached higher landmarks by improving our products and processes to meet rigorous specification of our Indian trailer OEM & After-market customers. We continue to invest in the art manufacturing facility ensuring a defect free product each time, every time, so that our customers are delighted by our excellence for a long and extended vehicle due to quality products. Our team is committed to ensure that your experience with THORAT MOTOR not only meets but exceeds expectations.",
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
    { city: 'Pune', state: 'Maharashtra', address: 'GAT NO 336/1 Chakan Shikrapur Road, Kadachiwadi- Chakan, Pune – 410501'},
    { city: 'Surat', state: 'Gujarat', address: 'Green Aristo Plaza, 1st Floor, Shop No- 127, Vaishnovdevi Road, Surat-395009'},
    { city: 'Visakhapatnam', state: 'Andhra Pradesh', address: '98/A, D-Block, Near RTO Office, Autonagar, Oldgajuwaka, Visakhapatnam - 530026'},
    { city: 'Bhubaneswar', state: 'Odisha', address: 'Plot No. N-6/536, IRC Village, Nayapalli, Jayadev Vihar, Bhubaneswar, Khurda - 751015'},
    { city: 'Jamshedpur', state: 'Jharkhand', address: 'Khata No -133, Plot No -201-4P NH-33, Chandil, Ramgarh, Seraikela Kharsawan, Jamshedpur - 831001'},
    { city: 'Chennai', state: 'Tamil Nadu', address: 'Plot No 5/3, Thiruvallur Road, Nemam Post, Poonamallee Taluka, Chennai - 600124'},
    { city: 'Patna', state: 'Bihar', address: 'Khata No-456, Khesra No-198, 199, Manupur, Saran, Chapra - 841207'},
];

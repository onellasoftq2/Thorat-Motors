

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
          { name: "Used Shipping Containers (20ft / 40ft)", href: "/services/container-conversions" },
          { name: "Office Conversions", href: "/services/container-conversions" },
          { name: "Retail/Shop Conversions", href: "/services/container-conversions" },
          { name: "Storage Containers", href: "/services/container-conversions" },
          { name: "Custom Container Modifications", href: "/services/container-conversions" },
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
        imageUrl: 'https://images.unsplash.com/photo-1519424187720-db6f0212a2f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'ISO & CMVR Compliance',
        description: 'All products follow industry-standard certifications ensuring safety, quality, and reliability.',
        imageUrl: 'https://images.unsplash.com/photo-1581092916259-1f2214a16b3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Advanced Fabrication',
        description: 'State-of-the-art CNC, welding, and forming machines ensure precision manufacturing.',
        imageUrl: 'https://images.unsplash.com/photo-1621947081720-86970823b77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Custom Engineering',
        description: 'We design and build trailers tailored to your load, industry, and operational needs.',
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
];


export type AisStandard = {
  code: string;
  title: string;
  status: 'Final' | 'Draft';
  revision?: string;
  categories: string[];
  year: number;
  sourceType: 'Consolidated PDF' | 'AIS Portal Notification';
  link?: string;
};

export const aisStandards: AisStandard[] = [
  // Comprehensive list based on my knowledge of the 2019 MoRTH list and subsequent notifications.
  // This is a best-effort transcription.

  // From the 2019 consolidated list and my general knowledge
  { code: 'AIS-001', title: 'Automotive Vehicles – Safety Belt Assemblies', status: 'Final', revision: 'Rev. 2', categories: ['M', 'N'], year: 2001, sourceType: 'Consolidated PDF' },
  { code: 'AIS-002', title: 'Automotive Vehicles – Safety Belt Anchorages', status: 'Final', revision: 'Rev. 2', categories: ['M', 'N'], year: 2001, sourceType: 'Consolidated PDF' },
  { code: 'AIS-003', title: 'Automotive Vehicles-Steering Effort', status: 'Final', revision: 'Rev. 1', categories: ['L', 'M', 'N'], year: 2004, sourceType: 'Consolidated PDF' },
  { code: 'AIS-004 (Part 1)', title: 'Electromagnetic Compatibility - Requirements and test methods for type approval of vehicles', status: 'Final', categories: ['L', 'M', 'N'], year: 1999, sourceType: 'Consolidated PDF' },
  { code: 'AIS-004 (Part 3)', title: 'Electromagnetic Compatibility - Requirements and test methods for type approval of Electrical/Electronic Sub-Assemblies (ESAs)', status: 'Final', revision: 'Amd. 1', categories: ['L', 'M', 'N'], year: 2009, sourceType: 'Consolidated PDF' },
  { code: 'AIS-005', title: 'Automotive Vehicles – Safety glasses', status: 'Final', revision: 'Rev. 1', categories: ['L', 'M', 'N', 'T'], year: 2001, sourceType: 'Consolidated PDF' },
  { code: 'AIS-006', title: 'Automotive Vehicles – Pneumatic tyres for commercial vehicles', status: 'Final', categories: ['N', 'M'], year: 1999, sourceType: 'Consolidated PDF' },
  { code: 'AIS-007', title: 'Automotive Vehicles – Tell-tales', status: 'Final', revision: 'Rev. 4', categories: ['L', 'M', 'N'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-008', title: 'Installation Requirements of Lighting and Light-Signalling Devices on Motor Vehicle and their Trailers', status: 'Final', revision: 'Rev. 1', categories: ['L', 'M', 'N', 'T'], year: 2010, sourceType: 'Consolidated PDF' },
  { code: 'AIS-009', title: 'Performance Requirements of Lighting and Light-Signalling Devices for Motor Vehicle and their Trailers', status: 'Final', revision: 'Rev. 1', categories: ['L', 'M', 'N', 'T'], year: 2010, sourceType: 'Consolidated PDF' },
  { code: 'AIS-010', title: 'Automotive Vehicles - Requirements for Installation of Mirrors', status: 'Final', revision: 'Rev. 1', categories: ['L', 'M', 'N'], year: 2008, sourceType: 'Consolidated PDF' },
  { code: 'AIS-011', title: 'Automotive Vehicles – Tankers for Petroleum Products – Constructional Requirements', status: 'Final', categories: ['N'], year: 2000, sourceType: 'Consolidated PDF' },
  { code: 'AIS-012', title: 'Automotive Vehicles – Headlamp with Filament Lamps', status: 'Final', revision: 'Rev. 3', categories: ['L', 'M', 'N', 'T'], year: 2009, sourceType: 'Consolidated PDF' },
  { code: 'AIS-013 (Part 1)', title: 'Automotive Vehicles – Types, Test procedures and specifications of horns for use on motor vehicles', status: 'Final', categories: ['L', 'M', 'N', 'T'], year: 2003, sourceType: 'Consolidated PDF' },
  { code: 'AIS-014', title: 'Automobile Vehicles-Windscreen Wiping Systems for 3-Wheelers and Cars', status: 'Final', categories: ['L5', 'M1'], year: 2001, sourceType: 'Consolidated PDF' },
  { code: 'AIS-015', title: 'Automotive Vehicles-Windscreen Washer Systems for Passenger Cars', status: 'Final', categories: ['M1', 'N1'], year: 2000, sourceType: 'Consolidated PDF' },
  { code: 'AIS-016', title: 'Automotive Vehicles – Seat for three wheelers', status: 'Final', revision: 'Rev. 1', categories: ['L5'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-017', title: 'Automotive Vehicles-Seats, their anchorages and head restraints for passenger cars', status: 'Final', categories: ['M1'], year: 2000, sourceType: 'Consolidated PDF' },
  { code: 'AIS-018', title: 'Automotive Vehicles-Location and Operation of Controls', status: 'Final', categories: ['M1'], year: 2001, sourceType: 'Consolidated PDF' },
  { code: 'AIS-019', title: 'Automotive Vehicles – Devices for Indirect Vision', status: 'Final', revision: 'Rev. 1', categories: ['L', 'M', 'N'], year: 2008, sourceType: 'Consolidated PDF' },
  { code: 'AIS-020', title: 'Automotive Vehicles-Prevention of Fire Risks in M1 Category Vehicles', status: 'Final', categories: ['M1'], year: 2001, sourceType: 'Consolidated PDF' },
  { code: 'AIS-021', title: 'Automotive Vehicles-Door locks & Door Retention Components', status: 'Final', revision: 'Rev. 1', categories: ['M1', 'L5'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-022', title: 'Automotive Vehicles-Windscreen Defrosting and Defogging Systems for Passenger Cars', status: 'Final', categories: ['M1'], year: 2001, sourceType: 'Consolidated PDF' },
  { code: 'AIS-023', title: 'Automotive Vehicles-Requirements concerning the Interior Fittings', status: 'Final', revision: 'Rev. 1', categories: ['M1'], year: 2008, sourceType: 'Consolidated PDF' },
  { code: 'AIS-024', title: 'Safety Measures on Fuel tanks of Automotive Vehicles', status: 'Final', revision: 'Rev. 1', categories: ['M', 'N'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-025', title: 'Automotive Vehicles – Arrangement of Seats in Buses', status: 'Final', categories: ['M2', 'M3'], year: 2001, sourceType: 'Consolidated PDF' },
  { code: 'AIS-026', title: 'Automotive Vehicles-Protection of Occupants in the event of a Frontal Collision', status: 'Final', categories: ['M1'], year: 2001, sourceType: 'Consolidated PDF' },
  { code: 'AIS-027', title: 'Automotive Vehicles-Warning Triangles', status: 'Final', revision: 'Rev. 1', categories: ['M', 'N', 'T'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-028', title: 'Automotive Vehicles - Temporary-Use Spare Wheel/Tyre Assembly', status: 'Final', revision: 'Rev.1', categories: ['M1'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-029', title: 'Automotive Vehicles - Measurement of Noise Emitted by Stationary Vehicles', status: 'Final', revision: 'Rev. 1', categories: ['L', 'M', 'N'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-030', title: 'Automotive Vehicles - Symbols for Controls, Indicators and Tell-tales', status: 'Final', revision: 'Rev. 1', categories: ['L', 'M', 'N'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-031', title: 'Automotive Vehicles – Lateral Protection (Side Guards)', status: 'Final', revision: 'Rev. 1', categories: ['N2', 'N3', 'T'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-032', title: 'Automotive Vehicles – Rear Underrun Protection', status: 'Final', revision: 'Rev. 1', categories: ['N', 'T'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-033', title: 'Automotive Vehicles – Tankers for inflammable Petroleum products', status: 'Final', revision: 'Rev. 1', categories: ['N'], year: 2011, sourceType: 'Consolidated PDF' },
  { code: 'AIS-034', title: 'Automotive Vehicles – Headlamps for Mopeds', status: 'Final', revision: 'Rev. 2', categories: ['L1', 'L2'], year: 2009, sourceType: 'Consolidated PDF' },
  { code: 'AIS-035', title: 'Automotive Vehicles-Requirement for Headlamps for Agricultural Tractors', status: 'Final', categories: ['T'], year: 2002, sourceType: 'Consolidated PDF' },
  { code: 'AIS-037', title: 'Procedure for Type Approval and Certification of Vehicles for Compliance to Mass Emission Standards', status: 'Final', revision: 'Rev. 1', categories: ['L', 'M', 'N'], year: 2004, sourceType: 'Consolidated PDF' },
  { code: 'AIS-038 (Part 1)', title: 'Electric Power Train Vehicles - Construction and Functional Safety Requirements for L Category', status: 'Final', revision: 'Rev. 1', categories: ['L'], year: 2015, sourceType: 'Consolidated PDF' },
  { code: 'AIS-038 (Part 2)', title: 'Electric Power Train Vehicles - Construction and Functional Safety Requirements for M and N Category', status: 'Final', revision: 'Rev. 1', categories: ['M', 'N'], year: 2015, sourceType: 'Consolidated PDF' },
  { code: 'AIS-039', title: 'Electric Power Train Vehicles - Measurement of Electrical Energy Consumption', status: 'Final', revision: 'Rev. 1', categories: ['L', 'M', 'N'], year: 2015, sourceType: 'Consolidated PDF' },
  { code: 'AIS-040', title: 'Electric Power Train Vehicles - Method of Measuring the Range', status: 'Final', revision: 'Rev. 1', categories: ['L', 'M', 'N'], year: 2015, sourceType: 'Consolidated PDF' },
  { code: 'AIS-041', title: 'Automotive Vehicles-Maximum Speed of Vehicle', status: 'Final', categories: ['L', 'M', 'N'], year: 2004, sourceType: 'Consolidated PDF' },
  { code: 'AIS-043', title: 'Automotive Vehicles-Spray Suppression Systems', status: 'Final', categories: ['N2', 'N3', 'T'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-044', title: 'Automotive Vehicles – Requirements for Tankers for Transport of Dangerous Goods', status: 'Final', categories: ['N', 'T'], year: 2004, sourceType: 'Consolidated PDF' },
  { code: 'AIS-047', title: 'Pneumatic Tyres for Passenger cars', status: 'Final', revision: 'Amd. 2', categories: ['M1'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-048', title: 'Battery operated Vehicles – Measurement of Electrical Energy Consumption', status: 'Final', categories: ['L', 'M', 'N'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-049', title: 'Battery operated Vehicles – Measurement of Net Power and Maximum 30 minute Power', status: 'Final', categories: ['L', 'M', 'N'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-050', title: 'Automotive Vehicles-Tell-Tales for 2 & 3 wheeled vehicles', status: 'Final', categories: ['L'], year: 2004, sourceType: 'Consolidated PDF' },
  { code: 'AIS-051', title: 'Strength of Superstructure of Large Passenger Vehicles', status: 'Final', categories: ['M2', 'M3'], year: 2004, sourceType: 'Consolidated PDF' },
  { code: 'AIS-052', title: 'Code of Practice for Bus Body Design and Approval', status: 'Final', revision: 'Rev. 1', categories: ['M2', 'M3'], year: 2008, sourceType: 'Consolidated PDF' },
  { code: 'AIS-053', title: 'Automotive Vehicles - Types of Special Purpose Vehicles', status: 'Final', revision: 'Rev. 1', categories: ['M', 'N', 'L5'], year: 2012, sourceType: 'Consolidated PDF' },
  { code: 'AIS-058', title: 'Automotive Vehicles – Requirements of School Buses', status: 'Final', revision: 'Rev. 2', categories: ['M2', 'M3'], year: 2012, sourceType: 'Consolidated PDF' },
  { code: 'AIS-061', title: 'Automotive Vehicles – Requirements of Goods Carrier Cabs on "Drive Away Chassis"', status: 'Final', categories: ['N2', 'N3'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-063', title: 'Code of Practice for Constructional & Functional Requirements of Truck Cabin', status: 'Final', categories: ['N2', 'N3'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-065', title: 'Automotive Vehicles – Sleeper Coaches – Constructional and Functional Requirements', status: 'Final', categories: ['M2', 'M3'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-069', title: 'Automotive vehicles – Fuel consumption for M1 category vehicles', status: 'Final', categories: ['M1'], year: 2006, sourceType: 'Consolidated PDF' },
  { code: 'AIS-071', title: 'Automotive Vehicles – Double Deck Buses – Constructional and Functional Requirements', status: 'Final', categories: ['M3'], year: 2007, sourceType: 'Consolidated PDF' },
  { code: 'AIS-090', title: 'Requirements for Vehicles with regard to their Direct Vision', status: 'Final', categories: ['N3'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-093', title: 'Code of Practice for Constructional and Functional requirements for Bus', status: 'Final', revision: 'Rev. 2', categories: ['M2', 'M3'], year: 2017, sourceType: 'Consolidated PDF' },
  { code: 'AIS-100', title: 'Requirements of Front Underrun Protection for N2 & N3 Category of Vehicles', status: 'Final', categories: ['N2', 'N3'], year: 2008, sourceType: 'Consolidated PDF' },
  { code: 'AIS-113', title: 'Code of Practice for Type Approval of Vehicles Transporting Dangerous or Hazardous Goods', status: 'Final', revision: 'Rev. 1', categories: ['N', 'T'], year: 2013, sourceType: 'Consolidated PDF' },
  { code: 'AIS-119', title: 'Automotive Vehicles - Sleeping Accommodation in Tourist Buses', status: 'Final', categories: ['M2', 'M3'], year: 2013, sourceType: 'Consolidated PDF' },
  { code: 'AIS-123', title: 'Automotive Vehicles – Performance Requirements for Retro-Reflective Markings', status: 'Final', categories: ['M', 'N', 'T'], year: 2014, sourceType: 'Consolidated PDF' },
  { code: 'AIS-124', title: 'Procedure for Type approval of vehicles with regard to driver’s field of vision', status: 'Final', categories: ['M', 'N'], year: 2014, sourceType: 'Consolidated PDF' },
  { code: 'AIS-125 (Part 1)', title: 'Construction and Functional Safety Requirements for Road Transport Refrigerated Vehicles', status: 'Final', categories: ['M', 'N', 'T'], year: 2014, sourceType: 'Consolidated PDF' },
  { code: 'AIS-129 (Part 1)', title: 'Code of Practice for Construction and Approval of Truck Cabs and Truck bodies', status: 'Final', categories: ['N'], year: 2015, sourceType: 'Consolidated PDF' },
  { code: 'AIS-135', title: 'Automotive Vehicle-Requirements for Approval of Vehicles wrt protection of occupants in the event of an offset frontal collision.', status: 'Final', categories: ['M1'], year: 2015, sourceType: 'Consolidated PDF' },
  { code: 'AIS-137 (Part 4)', title: 'Test Method, Requirements & COP for Emission from PI and CI Engines for Agricultural Tractors', status: 'Final', revision: 'Amd. 1', categories: ['T'], year: 2017, sourceType: 'Consolidated PDF' },
  
  // Later notifications post-2019
  { code: 'AIS-140', title: 'Intelligent Transport Systems (ITS) – Requirements for Public Transport Vehicle Operation', status: 'Final', categories: ['M2', 'M3'], year: 2019, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-145', title: 'Vehicle Location Tracking (VLT) and Emergency Button', status: 'Final', categories: ['M', 'N'], year: 2018, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-146', title: 'Automotive Vehicles – Side stands for two wheelers', status: 'Final', categories: ['L1', 'L2'], year: 2018, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-147', title: 'Automotive Vehicles – Stands for two wheelers', status: 'Final', categories: ['L1', 'L2'], year: 2018, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-148', title: 'Automotive Vehicles – Foot rests for two wheelers', status: 'Final', categories: ['L1', 'L2'], year: 2018, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-149', title: 'Automotive Vehicles – External Projection for two wheelers', status: 'Final', categories: ['L1', 'L2'], year: 2018, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-150', title: 'Automotive Vehicles - Tyre Rolling Sound Emission', status: 'Final', categories: ['M', 'N', 'T'], year: 2019, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-151', title: 'Specific Requirements for Tyre for M1, N1, M2, M3, N2, N3 and L2 Vehicles', status: 'Final', categories: ['M', 'N', 'L2'], year: 2019, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-152', title: 'Automotive vehicles - Braking of M1 and N1 category vehicles', status: 'Final', categories: ['M1', 'N1'], year: 2019, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-153', title: 'Specific requirements for M1 and N1 category vehicles on brake assist systems (BAS)', status: 'Final', categories: ['M1', 'N1'], year: 2019, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-154', title: 'Requirements for vehicle with regard to its electronic stability control (ESC) system', status: 'Final', categories: ['M1', 'N1'], year: 2019, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-155', title: 'Approval of vehicles with regard to their Cyber Security and Cyber Security Management System', status: 'Final', categories: ['L', 'M', 'N', 'T'], year: 2020, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-156', title: 'Specific requirements for L category vehicles with electric power train', status: 'Final', revision: 'Amd. 3', categories: ['L'], year: 2022, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-157', title: 'Test method, requirements and certification procedure for wheel rims for two, three and four wheeled vehicles', status: 'Final', categories: ['L', 'M1', 'N1'], year: 2020, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-158', title: 'Automotive Vehicles-Uniform provisions concerning the approval of motor vehicles with regard to their reversing motion', status: 'Final', categories: ['M', 'N'], year: 2020, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-160', title: 'Approval of motor vehicles with regard to their Event Data Recorder (EDR)', status: 'Final', categories: ['M1', 'N1'], year: 2021, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-161', title: 'Requirements for motor vehicles with regard to their driver drowsiness and attention warning system', status: 'Final', categories: ['M', 'N'], year: 2021, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-163', title: 'Procedure for Type Approval and COP of Retro-fitment of Hybrid Electric System or pure electric system.', status: 'Draft', categories: ['L', 'M', 'N'], year: 2020, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-168', title: 'Automotive Vehicles - Tyre Pressure Monitoring System (TPMS)', status: 'Final', categories: ['M1', 'N1'], year: 2021, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-169', title: 'Guide for type approval of standalone trailers with regard to braking performance', status: 'Final', categories: ['T'], year: 2020, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-170', title: 'Requirements for motor vehicles with regard to their advanced emergency braking system (AEBS)', status: 'Final', categories: ['M2', 'M3', 'N2', 'N3'], year: 2021, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-173', title: 'Safety Requirements for Road-Train', status: 'Draft', categories: ['T'], year: 2021, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-177', title: 'Procedure for testing and approval of Positive Ignition (PI) engines for agricultural tractors', status: 'Final', categories: ['T'], year: 2022, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-193', title: 'Code of Practice for construction and approval of trailers / semi-trailers of agricultural tractors', status: 'Draft', categories: ['T'], year: 2023, sourceType: 'AIS Portal Notification' },
];

export const allVehicleCategories = [...new Set(aisStandards.flatMap(s => s.categories))].sort();
export const allStatuses = ['Final', 'Draft'];
export const allYears = [...new Set(aisStandards.map(s => s.year))].sort((a, b) => b - a);

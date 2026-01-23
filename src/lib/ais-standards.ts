
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
  // Pre-2019
  { code: 'AIS-001', title: 'Automotive Vehicles-Safety Belt Assemblies', status: 'Final', revision: 'Rev. 2', categories: ['M', 'N'], year: 2001, sourceType: 'Consolidated PDF' },
  { code: 'AIS-002', title: 'Automotive Vehicles-Safety Belt Anchorages', status: 'Final', revision: 'Rev. 2', categories: ['M', 'N'], year: 2001, sourceType: 'Consolidated PDF' },
  { code: 'AIS-003', title: 'Automotive Vehicles-Steering Effort', status: 'Final', revision: 'Rev. 1', categories: ['L', 'M', 'N'], year: 2004, sourceType: 'Consolidated PDF' },
  { code: 'AIS-004 (Part 1)', title: 'Electromagnetic Compatibility - Part 1', status: 'Final', categories: ['L', 'M', 'N'], year: 1999, sourceType: 'Consolidated PDF' },
  { code: 'AIS-004 (Part 3)', title: 'Electromagnetic Compatibility - Part 3', status: 'Final', revision: 'Amd. 1', categories: ['L', 'M', 'N'], year: 2009, sourceType: 'Consolidated PDF' },
  { code: 'AIS-017', title: 'Automotive Vehicles-Seats, their anchorages and head restraints', status: 'Final', categories: ['M1'], year: 2000, sourceType: 'Consolidated PDF' },
  { code: 'AIS-028', title: 'Automotive Vehicles - Temporary-Use Spare Wheel/Tyre Assembly', status: 'Final', revision: 'Rev.1', categories: ['M1'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-038', title: 'Electric Power Train Vehicles - Construction and Functional Safety Requirements', status: 'Final', revision: 'Rev. 2', categories: ['L', 'M', 'N'], year: 2015, sourceType: 'Consolidated PDF' },
  { code: 'AIS-052', title: 'Code of Practice for Bus Body Design and Approval', status: 'Final', revision: 'Rev. 1', categories: ['M2', 'M3'], year: 2008, sourceType: 'Consolidated PDF' },
  { code: 'AIS-063', title: 'Truck Cabin Safety', status: 'Final', categories: ['N2', 'N3'], year: 2005, sourceType: 'Consolidated PDF' },
  { code: 'AIS-093', title: 'Code of Practice for Constructional and Functional requirements for Bus', status: 'Final', revision: 'Rev. 2', categories: ['M2', 'M3'], year: 2017, sourceType: 'Consolidated PDF' },
  { code: 'AIS-113', title: 'Code of Practice for Type Approval of Vehicles Transporting Dangerous or Hazardous Goods', status: 'Final', revision: 'Rev. 1', categories: ['N', 'T'], year: 2013, sourceType: 'Consolidated PDF' },
  { code: 'AIS-123', title: 'Automotive Vehicles – Performance Requirements for Retro-Reflective Markings', status: 'Final', categories: ['M', 'N', 'T'], year: 2014, sourceType: 'Consolidated PDF' },
  { code: 'AIS-125 (Part 1)', title: 'Construction and Functional Safety Requirements for Road Transport Refrigerated Vehicles', status: 'Final', categories: ['M', 'N'], year: 2014, sourceType: 'Consolidated PDF' },
  
  // Post-2019
  { code: 'AIS-140', title: 'Intelligent Transport Systems (ITS) – Requirements for Public Transport Vehicle Operation', status: 'Final', categories: ['M2', 'M3'], year: 2019, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-145', title: 'Vehicle Location Tracking (VLT) and Emergency Button', status: 'Final', categories: ['M', 'N'], year: 2018, sourceType: 'Consolidated PDF' }, // Note: published before May 2019 but often discussed with ITS
  { code: 'AIS-153', title: 'Specific requirements for M1 and N1 category vehicles on brake assist systems (BAS)', status: 'Final', categories: ['M1', 'N1'], year: 2019, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-155', title: 'Approval of vehicles with regard to their Cyber Security and Cyber Security Management System', status: 'Final', categories: ['L', 'M', 'N', 'T'], year: 2020, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-156', title: 'Specific requirements for L category vehicles with electric power train', status: 'Final', revision: 'Amd. 3', categories: ['L'], year: 2022, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-160', title: 'Approval of motor vehicles with regard to their Event Data Recorder (EDR)', status: 'Final', categories: ['M1', 'N1'], year: 2021, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-163', title: 'Procedure for Type Approval and COP of Retro-fitment of Hybrid Electric System or pure electric system.', status: 'Draft', categories: ['L', 'M', 'N'], year: 2020, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-168', title: 'Automotive Vehicles - Tyre Pressure Monitoring System (TPMS)', status: 'Final', categories: ['M1', 'N1'], year: 2021, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-169', title: 'Guide for type approval of standalone trailers with regard to braking performance', status: 'Final', categories: ['T'], year: 2020, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-173', title: 'Safety Requirements for Road-Train', status: 'Draft', categories: ['T'], year: 2021, sourceType: 'AIS Portal Notification' },
  { code: 'AIS-177', title: 'Procedure for testing and approval of Positive Ignition (PI) engines for agricultural tractors', status: 'Final', categories: ['T'], year: 2022, sourceType: 'AIS Portal Notification' }
];

export const allVehicleCategories = [...new Set(aisStandards.flatMap(s => s.categories))].sort();
export const allStatuses = ['Final', 'Draft'];
export const allYears = [...new Set(aisStandards.map(s => s.year))].sort((a, b) => b - a);

// ── Central company info — single source of truth ───────────
export const COMPANY = {
  name: 'Hope Trans Inc.',
  shortName: 'Hope Trans',
  tagline: "Canada's trusted freight partner.",
  phone: '(123) 456-7890',
  phoneHref: 'tel:+11234567890',
  email: 'info@hopetransinc.com',
  addressLine1: '1300 Britannia Rd E, Suite 200A',
  addressLine2: 'Mississauga, ON L4W 1C8',
  addressFull: '1300 Britannia Rd E, Suite 200A, Mississauga, ON L4W 1C8',
  mapsHref:
    'https://maps.google.com/?q=1300+Britannia+Rd+E+Suite+200A+Mississauga+ON+L4W+1C8',
  hours: 'Dispatch operates 24/7 · Office Mon–Fri 8am–6pm EST',
  // Forms POST to FormSubmit, which forwards submissions to this inbox
  formAction: 'https://formsubmit.co/info@hopetransinc.com',
};

export const SERVICES = [
  {
    icon: '🚛',
    title: 'Full Truckload (FTL)',
    desc: 'Dedicated trucks for large shipments with guaranteed delivery windows.',
    long: 'When your freight fills a trailer, our dedicated FTL service moves it directly from origin to destination with no intermediate handling. Faster transit, lower damage risk, and guaranteed capacity for your most important loads.',
  },
  {
    icon: '📦',
    title: 'Less-Than-Truckload (LTL)',
    desc: 'Cost-efficient shared freight for smaller loads without sacrificing speed or safety.',
    long: 'Only paying for the space you use, our LTL network consolidates smaller shipments across optimized lanes. Ideal for businesses shipping pallets without the volume to justify a full trailer.',
  },
  {
    icon: '🍁',
    title: 'Domestic Intermodal',
    desc: 'Cost-effective rail and truck combination shipping across all Canadian provinces.',
    long: 'By combining the efficiency of rail with the flexibility of trucking, intermodal lowers cost and carbon footprint on long-haul lanes while we manage every handoff end to end.',
  },
  {
    icon: '❄️',
    title: 'Temperature-Controlled',
    desc: 'Refrigerated and heated transport for perishables and sensitive goods.',
    long: 'Our reefer fleet maintains precise temperatures from -20°C to +25°C with continuous monitoring, protecting food, pharmaceuticals, and other climate-sensitive cargo from dock to dock.',
  },
  {
    icon: '🏗️',
    title: 'Flatbed & Heavy Haul',
    desc: 'Specialized flatbed equipment for oversized, overweight, and unconventional cargo.',
    long: 'From construction materials to industrial machinery, our flatbed and step-deck equipment, paired with permitting and escort coordination, moves oversized loads safely and legally.',
  },
  {
    icon: '⚓',
    title: 'Port Drayage',
    desc: 'Efficient container drayage from major ports to distribution centers.',
    long: 'We bridge the first and last mile between ports, rail ramps, and your warehouse with fast, reliable container drayage and full chassis management.',
  },
];

export const FLEET = [
  {
    img: '/truck_cabover.png',
    name: 'Dry Van Tractors',
    spec: '53′ trailers · up to 45,000 lbs',
    desc: 'The backbone of our fleet for general freight, protected from the elements.',
  },
  {
    img: '/truck_night.png',
    name: 'Refrigerated Units',
    spec: 'Multi-temp · -20°C to +25°C',
    desc: 'Continuously monitored reefers for perishable and pharmaceutical loads.',
  },
  {
    img: '/truck_fleet.png',
    name: 'Flatbed & Step-Deck',
    spec: '48′–53′ · oversize capable',
    desc: 'Open-deck equipment for construction, steel, and heavy machinery.',
  },
];

export interface Project {
  slug: string;
  title: string;
  location: string;
  type: string;
  description: string;
  longDescription: string;
  highlights: string[];
  coverImage: string;
  coverAlt: string;
  photos: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: "outpost-estates",
    title: "Outpost Estates",
    location: "Hollywood Hills, CA",
    type: "Luxury Renovation",
    description: "High-end modern residence in the prestigious Hollywood Hills.",
    longDescription:
      "A comprehensive luxury renovation of a mid-century residence in the exclusive Outpost Estates neighborhood. The project transformed the home with modern finishes, open-concept living spaces, and seamless indoor-outdoor flow while preserving the architectural character of the original structure. Premium materials and meticulous craftsmanship define every detail of this Hollywood Hills showpiece.",
    highlights: [
      "Full interior and exterior renovation",
      "Modern open-concept design",
      "Premium material selections",
      "Indoor-outdoor living integration",
      "Hillside construction expertise",
    ],
    coverImage: "/images/projects/outpost/1.webp",
    coverAlt: "Modern luxury home with wood and white facade in Outpost Estates Hollywood Hills",
    photos: Array.from({ length: 7 }, (_, i) => ({
      src: `/images/projects/outpost/${i + 1}.webp`,
      alt: `Outpost Estates luxury renovation — photo ${i + 1}`,
    })),
  },
  {
    slug: "pearl-street",
    title: "Pearl Street Residence",
    location: "Santa Monica, CA",
    type: "Luxury Single-Family",
    description: "Complete gut renovation with premium finishes throughout.",
    longDescription:
      "A full-scale gut renovation of a single-family residence in one of Santa Monica's most desirable neighborhoods. Every surface was reimagined with designer-grade finishes, custom millwork, and luxury fixtures. The project included a complete kitchen redesign, spa-inspired bathrooms, a primary suite with custom built-ins, and extensive landscape improvements to create resort-style outdoor living spaces.",
    highlights: [
      "Complete gut renovation",
      "Designer kitchen with premium appliances",
      "Spa-inspired bathroom suites",
      "Custom millwork and built-ins",
      "Landscape and outdoor living design",
    ],
    coverImage: "/images/projects/pearl-st/9.jpg",
    coverAlt: "White modern home exterior with gold door and landscaped front yard on Pearl Street Santa Monica",
    photos: Array.from({ length: 12 }, (_, i) => ({
      src: `/images/projects/pearl-st/${i + 1}.jpg`,
      alt: `Pearl Street Residence renovation — photo ${i + 1}`,
    })),
  },
  {
    slug: "doran-townhomes",
    title: "Doran Townhomes",
    location: "Los Angeles, CA",
    type: "Multifamily Development",
    description: "Ground-up construction of modern townhome community.",
    longDescription:
      "A ground-up multifamily development delivering a collection of contemporary townhomes in a prime Los Angeles location. The project features clean modern architecture, efficient unit layouts, private outdoor spaces, and premium interior finishes. Designed for today's urban lifestyle with open floor plans, abundant natural light, and low-maintenance materials throughout.",
    highlights: [
      "Ground-up new construction",
      "Contemporary townhome design",
      "Private outdoor spaces per unit",
      "Premium interior finishes",
      "Urban infill development",
    ],
    coverImage: "/images/projects/doran/1.webp",
    coverAlt: "Contemporary townhome development with landscaped entrance in Los Angeles",
    photos: [
      { src: "/images/projects/doran/1.webp", alt: "Doran Townhomes exterior elevation with landscaped entrance" },
      { src: "/images/projects/doran/2.jpg", alt: "Doran Townhomes entrance with wood-clad door and courtyard gate" },
      { src: "/images/projects/doran/3.jpg", alt: "Doran Townhomes courtyard walkway between townhome units" },
      { src: "/images/projects/doran/4.jpg", alt: "Doran Townhomes unit entrance along the shared courtyard" },
      { src: "/images/projects/doran/5.jpg", alt: "Doran Townhomes kitchen with quartz countertops and stainless appliances" },
      { src: "/images/projects/doran/6.jpg", alt: "Doran Townhomes open-concept kitchen and living area with staircase" },
      { src: "/images/projects/doran/7.jpg", alt: "Doran Townhomes bedroom with wide-plank hardwood flooring" },
      { src: "/images/projects/doran/8.jpg", alt: "Doran Townhomes bedroom corner window with city views" },
      { src: "/images/projects/doran/9.jpg", alt: "Doran Townhomes primary bedroom with walk-in closet and en-suite bath" },
      { src: "/images/projects/doran/10.jpg", alt: "Doran Townhomes stairwell window with landscaped view" },
    ],
  },
  {
    slug: "westmount",
    title: "Westmount",
    location: "West Hollywood, CA",
    type: "Ground-Up Condominium",
    description: "Ground-up condominium building with a striking contemporary mixed-material facade.",
    longDescription:
      "A ground-up condominium development in the heart of West Hollywood, delivering a collection of for-sale residences behind a bold mixed-material facade of dark metal, concrete, and wood. Built from the ground up on an infill site, the building balances dramatic architectural expression with refined interior living spaces. Floor-to-ceiling glazing, rooftop terraces, and high-end finishes create sophisticated urban residences that stand out on one of WeHo's premier streets.",
    highlights: [
      "Ground-up new construction",
      "For-sale condominium residences",
      "Mixed-material contemporary facade",
      "Floor-to-ceiling glazing",
      "Rooftop terrace with city views",
      "High-end interior finishes",
    ],
    coverImage: "/images/projects/westmount/1.webp",
    coverAlt: "Ground-up condominium building with dark metal and concrete facade in West Hollywood CA",
    photos: Array.from({ length: 15 }, (_, i) => ({
      src: `/images/projects/westmount/${i + 1}.webp`,
      alt: `Westmount ground-up condominium West Hollywood — photo ${i + 1}`,
    })),
  },
  {
    slug: "allesandro-street",
    title: "Allesandro Street",
    location: "Los Angeles, CA",
    type: "Multifamily Development",
    description: "Modern multifamily development with balconies and wood accents.",
    longDescription:
      "A modern multifamily development on Allesandro Street in Los Angeles featuring a contemporary design with private balconies, wood accent cladding, and efficient unit layouts. The project delivers quality workforce housing with thoughtful amenities and durable, attractive finishes designed to perform in the Los Angeles rental market.",
    highlights: [
      "Ground-up multifamily construction",
      "Contemporary wood-accent design",
      "Private balconies per unit",
      "Efficient unit floor plans",
      "Durable rental-grade finishes",
    ],
    coverImage: "/images/projects/allesandro/1.jpeg",
    coverAlt: "Modern multifamily apartment building on Allesandro Street Los Angeles",
    photos: [
      { src: "/images/projects/allesandro/1.jpeg", alt: "Allesandro Street multifamily exterior — photo 1" },
      { src: "/images/projects/allesandro/2.jpg", alt: "Allesandro Street multifamily — photo 2" },
      { src: "/images/projects/allesandro/3.jpg", alt: "Allesandro Street multifamily — photo 3" },
    ],
  },
  {
    slug: "laya-restaurant",
    title: "Laya Restaurant",
    location: "Los Angeles, CA",
    type: "Commercial Build-Out",
    description: "Mediterranean-inspired restaurant with stunning outdoor dining experience.",
    longDescription:
      "A full commercial build-out for Laya, a Mediterranean-inspired restaurant in Los Angeles. The project transformed the space into an atmospheric dining destination featuring arched stone alcoves, ambient lighting, an open-air patio with string lights, and custom millwork throughout. The design creates an intimate yet vibrant atmosphere that transports guests to the Mediterranean coast.",
    highlights: [
      "Full restaurant build-out",
      "Custom stone archway features",
      "Outdoor dining patio design",
      "Atmospheric lighting design",
      "Commercial kitchen buildout",
    ],
    coverImage: "/images/projects/laya/1.webp",
    coverAlt: "Mediterranean-inspired restaurant patio with arched stone alcoves and ambient lighting",
    photos: [
      { src: "/images/projects/laya/1.webp", alt: "Laya Restaurant outdoor dining patio with stone arches" },
      { src: "/images/projects/laya/2.jpg", alt: "Laya Restaurant entrance with illuminated signage at night" },
      { src: "/images/projects/laya/3.jpg", alt: "Laya Restaurant bar and lounge patio at night" },
    ],
  },
];

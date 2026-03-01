const base = import.meta.env.BASE_URL

export const projects = [
  {
    id: 1,
    title: 'Villa Serene',
    category: 'Residential',
    year: '2024',
    image: `${base}images/project-1.png`,
    description: 'A minimalist retreat nestled in nature, blending concrete and glass with the surrounding landscape.',
  },
  {
    id: 2,
    title: 'The Living Room',
    category: 'Interior Design',
    year: '2024',
    image: `${base}images/project-2.png`,
    description: 'Neutral tones and natural materials create a serene, light-filled living space.',
  },
  {
    id: 3,
    title: 'Civic Center',
    category: 'Commercial',
    year: '2023',
    image: `${base}images/project-3.png`,
    description: 'Bold geometric forms in raw concrete define this contemporary civic landmark.',
  },
  {
    id: 4,
    title: 'Marble Sanctuary',
    category: 'Interior Design',
    year: '2023',
    image: `${base}images/project-4.png`,
    description: 'A spa-inspired bathroom where marble and warm light create an atmosphere of pure tranquility.',
  },
  {
    id: 5,
    title: 'Woodland Residence',
    category: 'Residential',
    year: '2023',
    image: `${base}images/project-5.png`,
    description: 'Wood and concrete blend harmoniously in this two-story family home surrounded by gardens.',
  },
  {
    id: 6,
    title: 'Chef\'s Kitchen',
    category: 'Interior Design',
    year: '2024',
    image: `${base}images/project-6.png`,
    description: 'Dark cabinetry meets marble in this open-plan kitchen designed for both function and elegance.',
  },
]

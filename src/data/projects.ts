export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  approach: string;
  impact: string;
  year: string;
  client: string;
  role: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "urban-noir",
    title: "Urban Noir",
    category: "Editorial",
    image: "https://picsum.photos/seed/fashion1/1200/800",
    description: "A cinematic exploration of city life after dark, focusing on the interplay of neon lights and deep shadows in London's Soho district.",
    challenge: "Capturing the raw energy of Soho without relying on artificial lighting setups that would break the immersion of the street environment.",
    approach: "Utilized ultra-fast prime lenses and high-ISO sensors to embrace the natural ambient glow of neon signs and wet pavement.",
    impact: "Featured as a 12-page spread in Vogue Italia, praised for its 'unflinching yet poetic' portrayal of modern urbanity.",
    year: "2024",
    client: "Vogue Italia",
    role: "Lead Cinematographer",
    gallery: [
      "https://picsum.photos/seed/noir1/1200/800",
      "https://picsum.photos/seed/noir2/1200/800",
      "https://picsum.photos/seed/noir3/1200/800"
    ]
  },
  {
    id: "golden-hour",
    title: "Golden Hour",
    category: "Commercial",
    image: "https://picsum.photos/seed/fashion2/800/800",
    description: "Capturing the warmth and fleeting beauty of the sun's final rays across the Mediterranean coast for a luxury resort brand.",
    challenge: "The 'Golden Hour' window is notoriously short, leaving less than 45 minutes each day to capture the perfect light across multiple locations.",
    approach: "Meticulous pre-production scouting and a highly mobile crew allowed us to hit four distinct coastal spots in a single evening session.",
    impact: "The campaign resulted in a 40% increase in seasonal bookings and was adopted as the brand's global visual standard.",
    year: "2023",
    client: "Aman Resorts",
    role: "Director of Photography",
    gallery: [
      "https://picsum.photos/seed/gold1/1200/800",
      "https://picsum.photos/seed/gold2/1200/800"
    ]
  },
  {
    id: "echoes-of-silence",
    title: "Echoes of Silence",
    category: "Documentary",
    image: "https://picsum.photos/seed/fashion3/1200/800",
    description: "An intimate look at the lives of traditional artisans in rural Japan, preserving centuries-old techniques in a rapidly changing world.",
    challenge: "Gaining the trust of reclusive masters who were wary of modern media and ensuring the filming process didn't disrupt their meditative work flow.",
    approach: "Spent three weeks living in the village before even unpacking a camera, building genuine relationships and understanding the rhythm of their craft.",
    impact: "Awarded 'Best Short Documentary' at the Kyoto International Film Festival and archived in the National Museum of Ethnology.",
    year: "2024",
    client: "National Geographic",
    role: "Director",
    gallery: [
      "https://picsum.photos/seed/silent1/1200/800",
      "https://picsum.photos/seed/silent2/1200/800"
    ]
  },
  {
    id: "velvet-dreams",
    title: "Velvet Dreams",
    category: "Fashion",
    image: "https://picsum.photos/seed/fashion4/800/1000",
    description: "A surreal fashion film exploring the boundaries between dreams and reality through rich textures and slow-motion sequences.",
    challenge: "Creating a sense of weightlessness and fluid motion that felt organic rather than digitally manipulated.",
    approach: "Shot entirely on high-speed Phantom cameras at 1000fps, using practical wind machines and underwater tanks for authentic movement.",
    impact: "Premiered at the London Fashion Film Festival and led to a multi-project collaboration with the Gucci creative team.",
    year: "2023",
    client: "Gucci",
    role: "Visual Artist",
    gallery: [
      "https://picsum.photos/seed/velvet1/1200/800",
      "https://picsum.photos/seed/velvet2/1200/800"
    ]
  },
  {
    id: "concrete-jungle",
    title: "Concrete Jungle",
    category: "Street",
    image: "https://picsum.photos/seed/fashion5/1000/1000",
    description: "A raw, unfiltered look at the energy and chaos of New York City's subway system during peak hours.",
    challenge: "Navigating the legal and logistical hurdles of filming in high-traffic public spaces while maintaining a low profile to capture candid moments.",
    approach: "Used compact, mirrorless setups and worked during off-peak hours to scout angles, then returned for the 'rush' to capture the true intensity.",
    impact: "Published as a limited-edition photo book that sold out within 48 hours of release.",
    year: "2024",
    client: "Personal Project",
    role: "Photographer",
    gallery: [
      "https://picsum.photos/seed/street1/1200/800",
      "https://picsum.photos/seed/street2/1200/800"
    ]
  },
  {
    id: "neon-nights",
    title: "Neon Nights",
    category: "Music Video",
    image: "https://picsum.photos/seed/fashion6/1200/700",
    description: "A high-energy music video for an emerging synth-pop artist, featuring vibrant lighting and fast-paced editing.",
    challenge: "Translating the complex rhythmic structure of the track into a visual language that felt both nostalgic and futuristic.",
    approach: "Developed a custom lighting rig synced to the MIDI data of the song, ensuring every pulse of light was perfectly timed to the beat.",
    impact: "Reached 1M views on YouTube within the first week and was nominated for 'Best Visual Effects' at the Indie Music Awards.",
    year: "2024",
    client: "Sony Music",
    role: "Editor & Colorist",
    gallery: [
      "https://picsum.photos/seed/neon1/1200/800",
      "https://picsum.photos/seed/neon2/1200/800"
    ]
  }
];

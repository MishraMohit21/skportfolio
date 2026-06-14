import krishnaFlourLogo from '../../assets/krishnaFlourLogo.png';
import lunaredgeLogo from '../../assets/lunaredgeLogo.png';
import krishlogixLogo from '../../assets/krishlogixLogo.png';
import krishvanaGrainsLogo from '../../assets/krishvanaGrainsLogo.png';
import { Wheat, Factory, Ship, Zap, Landmark } from 'lucide-react';

export const PORTFOLIO_DATA = {
  hero: {
    eyebrow: "DIRECTOR · ENTREPRENEUR · BUILDER",
    headingMain: "Building businesses\nthat outlast\nthe builder.",
    sub: "From mechanical engineering to directing companies across eight industries, I've spent 15+ years proving that clear thinking, deep expertise, and the right people can turn any sector into an opportunity.",
  },
  story: {
    heading: "How a mechanical engineer became a multi-industry operator",
    body: [
      "I started where most engineers do — with a degree and a lot of theory. But I quickly understood that the real leverage wasn't in knowing how things worked. It was in knowing how to build the organizations that make things work.",
      "Over the next decade, I moved from manufacturing floors to boardrooms, from agricultural supply chains to IT infrastructure. Every sector taught me something different — and together, they gave me a map that most people never get.",
    ],
    quote: "The best business decisions I've ever made weren't industry-specific. They were human-specific."
  },
  impact: [
    { word: "GROW", num: "40", sym: "%", title: "Operations Efficiency" },
    { word: "SCALE", num: "3", sym: "×", title: "Revenue Growth" },
    { word: "BUILD", num: "50", sym: "+", title: "Professionals Led" },
  ],
  ventures: [
    { 
      label: "Partner", 
      title: "Krishna Flour Mill", 
      logo: krishnaFlourLogo,
      bullets: [
        "Led the transformation of the business into a modern, eco-friendly manufacturing operation, adopting sustainable practices and cutting-edge technology.",
        "Implemented process improvements that reduced waste by 60% and increased production efficiency by 75%.",
        "Built a strong brand identity for KrishVana, achieving significant growth in market share.",
        "Cultivated partnerships with key stakeholders, enhancing the company's distribution network and customer base."
      ]
    },
    { 
      label: "Director", 
      title: "LunarEdge IT Services Private Limited", 
      logo: lunaredgeLogo,
      bullets: [
        "Directed a team of 50 professionals, specializing in delivering innovative IT solutions across diverse industries.",
        "Championed the development of proprietary software solutions, driving client satisfaction and market differentiation.",
        "Expanded the company's operations to IT Centre, achieving revenue growth annually.",
        "Streamlined international operations by integrating advanced project management tools and processes, boosting team productivity by 80%."
      ]
    },
    { 
      label: "Director", 
      title: "Krishlogix Private Limited", 
      logo: krishlogixLogo,
      bullets: [
        "Established a high-performing domestic and international logistics network, optimizing transportation routes and reducing delivery times by 25%.",
        "Implemented advanced digital tracking systems, enabling full shipment visibility and enhancing customer trust.",
        "Negotiated long-term contracts with shipping partners, lowering overall freight costs.",
        "Expanded service offerings to include multimodal transport solutions for agri-products and FMCG goods.",
        "Broadened market presence into tier-2 and tier-3 cities, significantly extending distribution reach."
      ]
    },
    { 
      label: "Director", 
      title: "KRISHVANA INFRASTRUCTURE PRIVATE LIMITED", 
      logo: krishvanaGrainsLogo,
      bullets: [
        "Directed the design and construction of modern agricultural storage and processing facilities.",
        "Delivered turnkey infrastructure projects for rural development, improving agri-supply chain efficiency.",
        "Championed sustainable construction by adopting energy-efficient designs and eco-friendly materials.",
        "Strengthened collaborations with government agencies for public infrastructure contracts.",
        "Completed multiple large-scale projects on time and within budget, maintaining high-quality standards."
      ]
    },
    { 
      label: "Director", 
      title: "KRISHVANA GLOBAL GRAINS PRIVATE LIMITED", 
      logo: krishvanaGrainsLogo,
      bullets: [
        "Built an international sourcing and export network for premium-quality grains, oilseeds, and meals.",
        "Established modern quality control facilities, ensuring compliance with global food safety regulations.",
        "Optimized supply chain operations, reducing wastage and improving delivery timelines.",
        "Expanded product range to include pulses, cereals, and value-added grain products.",
        "Increased market share through strategic partnerships with regional wholesalers and retailers."
      ]
    }
  ],
  sectors: [
    {
      id: "agri",
      title: "Agriculture & Trading",
      icon: Wheat,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
      description: "Driving modernization across the agricultural supply chain, optimizing yields, and implementing transparent commodity trading practices.",
      metrics: ["40% Efficiency Increase", "IoT Sensor Integration", "Sustainable Farming"]
    },
    {
      id: "mfg",
      title: "Manufacturing",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=600&auto=format&fit=crop",
      description: "Transforming traditional production floors with lean processes and automated quality control to significantly boost throughput.",
      metrics: ["25% Higher Throughput", "Lean Automation", "Six Sigma Implementation"]
    },
    {
      id: "logistics",
      title: "Shipping & Logistics",
      icon: Ship,
      image: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=600&auto=format&fit=crop",
      description: "Restructuring freight operations and warehouse routing to ensure seamless global enterprise supply chains.",
      metrics: ["Global Routing", "Automated Warehousing", "Reduced Transit Time"]
    },
    {
      id: "renewable",
      title: "Renewable Energy",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
      description: "Strategic advising for early-stage solar and wind ventures, navigating the transition from niche installations to grid-scale power.",
      metrics: ["Grid-scale Planning", "Investor Positioning", "Go-To-Market Strategy"]
    },
    {
      id: "finance",
      title: "Banking & FinTech",
      icon: Landmark,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop",
      description: "Guiding the architecture and market entry of next-generation B2B payment gateways and high-volume transaction systems.",
      metrics: ["B2B Gateways", "High-volume Processing", "Strategic Compliance"]
    }
  ],
  testimonials: [
    { text: "He walks into any industry and within weeks understands what everyone else has been missing for years. His strategic clarity is genuinely exceptional.", author: "Rajesh Kumar", role: "Manufacturing" },
    { text: "He doesn't just give advice — he stays accountable to outcomes. He treats every business like it's his own.", author: "Anita Mehta", role: "LunarEdge" },
    { text: "An operator who thinks like a strategist — that combination is extremely rare at his level.", author: "Prakash Sharma", role: "Industry Peer" }
  ]
};

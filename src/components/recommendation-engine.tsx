// Simple rule-based recommendation engine
export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  sector: string;
  duration: string;
  stipend: string;
  description: string;
  requiredSkills: string[];
  educationLevel: string[];
  matchScore: number;
  isRemote: boolean;
}

export interface CandidateProfile {
  name: string;
  age: string;
  education: string;
  state: string;
  district: string;
  skills: string[];
  sectors: string[];
  experience: string;
}

// Sample internship data
const internshipDatabase: Omit<Internship, 'matchScore'>[] = [
  {
    id: "1",
    title: "Digital Marketing Assistant",
    company: "TechStart Solutions",
    location: "Remote/Mumbai",
    sector: "Information Technology",
    duration: "3 months",
    stipend: "₹8,000/month",
    description: "Learn digital marketing strategies, social media management, and content creation.",
    requiredSkills: ["Digital Marketing", "Communication Skills", "Computer Basics"],
    educationLevel: ["12th", "graduation", "postgraduation"],
    isRemote: true
  },
  {
    id: "2",
    title: "Data Entry Operator",
    company: "Government Health Department",
    location: "Delhi",
    sector: "Government",
    duration: "6 months",
    stipend: "₹12,000/month",
    description: "Digitize health records and maintain database systems for public healthcare.",
    requiredSkills: ["Data Entry", "MS Office", "Computer Basics"],
    educationLevel: ["10th", "12th", "diploma"],
    isRemote: false
  },
  {
    id: "3",
    title: "Teaching Assistant",
    company: "Rural Education Foundation",
    location: "Rajasthan",
    sector: "Education",
    duration: "4 months",
    stipend: "₹6,000/month",
    description: "Support primary education in rural schools, help with basic computer literacy.",
    requiredSkills: ["Teaching", "Communication Skills", "Language Skills"],
    educationLevel: ["12th", "graduation"],
    isRemote: false
  },
  {
    id: "4",
    title: "Customer Service Representative",
    company: "Banking Solutions Ltd",
    location: "Bangalore",
    sector: "Finance & Banking",
    duration: "3 months",
    stipend: "₹10,000/month",
    description: "Handle customer queries, assist with banking services, learn financial products.",
    requiredSkills: ["Customer Service", "Communication Skills", "Problem Solving"],
    educationLevel: ["12th", "graduation"],
    isRemote: false
  },
  {
    id: "5",
    title: "Agricultural Technology Assistant",
    company: "FarmTech Innovations",
    location: "Punjab",
    sector: "Agriculture",
    duration: "5 months",
    stipend: "₹7,500/month",
    description: "Support farmers with technology adoption, data collection, and crop monitoring.",
    requiredSkills: ["Data Entry", "Communication Skills", "Problem Solving"],
    educationLevel: ["10th", "12th", "diploma"],
    isRemote: false
  },
  {
    id: "6",
    title: "Healthcare Data Assistant",
    company: "Regional Medical College",
    location: "Kerala",
    sector: "Healthcare",
    duration: "4 months",
    stipend: "₹9,000/month",
    description: "Assist with patient data management and healthcare record digitization.",
    requiredSkills: ["Data Entry", "MS Office", "Customer Service"],
    educationLevel: ["12th", "diploma", "graduation"],
    isRemote: false
  },
  {
    id: "7",
    title: "Content Writer Trainee",
    company: "Creative Media House",
    location: "Remote/Pune",
    sector: "Media & Communications",
    duration: "3 months",
    stipend: "₹8,500/month",
    description: "Create content for websites, social media, and marketing materials.",
    requiredSkills: ["Writing", "Communication Skills", "Digital Marketing"],
    educationLevel: ["graduation", "postgraduation"],
    isRemote: true
  },
  {
    id: "8",
    title: "Tourism Guide Assistant",
    company: "Heritage Tourism Board",
    location: "Goa",
    sector: "Tourism & Hospitality",
    duration: "6 months",
    stipend: "₹7,000/month",
    description: "Assist tourists, provide information about local culture and heritage sites.",
    requiredSkills: ["Communication Skills", "Language Skills", "Customer Service"],
    educationLevel: ["10th", "12th"],
    isRemote: false
  },
  {
    id: "9",
    title: "Social Work Assistant",
    company: "Community Development NGO",
    location: "West Bengal",
    sector: "NGO/Social Work",
    duration: "4 months",
    stipend: "₹5,000/month",
    description: "Support community development programs and social welfare initiatives.",
    requiredSkills: ["Communication Skills", "Problem Solving", "Teaching"],
    educationLevel: ["12th", "graduation"],
    isRemote: false
  },
  {
    id: "10",
    title: "Retail Sales Assistant",
    company: "Modern Retail Chain",
    location: "Gujarat",
    sector: "Retail",
    duration: "3 months",
    stipend: "₹8,000/month",
    description: "Customer interaction, inventory management, and sales support.",
    requiredSkills: ["Sales", "Customer Service", "Communication Skills"],
    educationLevel: ["10th", "12th"],
    isRemote: false
  }
];

export function generateRecommendations(profile: CandidateProfile): Internship[] {
  const scoredInternships: Internship[] = internshipDatabase.map(internship => {
    let score = 0;
    
    // Sector match (highest weight - 40%)
    if (profile.sectors.includes(internship.sector)) {
      score += 40;
    }
    
    // Skills match (30%)
    const matchingSkills = internship.requiredSkills.filter(skill => 
      profile.skills.includes(skill)
    );
    const skillMatchPercentage = matchingSkills.length / internship.requiredSkills.length;
    score += skillMatchPercentage * 30;
    
    // Education level match (20%)
    if (internship.educationLevel.includes(profile.education)) {
      score += 20;
    }
    
    // Location preference (10%)
    // Prefer remote or same state internships
    if (internship.isRemote || internship.location.includes(profile.state)) {
      score += 10;
    }
    
    // Experience bonus
    if (profile.experience === "experienced" && score > 50) {
      score += 5;
    } else if (profile.experience === "none" && score > 30) {
      score += 5; // Bonus for entry-level friendly positions
    }
    
    return {
      ...internship,
      matchScore: Math.round(score)
    };
  });
  
  // Sort by match score and return top 5
  return scoredInternships
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5);
}
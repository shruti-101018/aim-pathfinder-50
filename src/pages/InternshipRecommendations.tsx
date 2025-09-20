import { useState } from "react";
import { InternshipForm } from "@/components/internship-form";
import { RecommendationsDisplay } from "@/components/recommendations-display";
import { generateRecommendations, CandidateProfile, Internship } from "@/components/recommendation-engine";
import { Navbar } from "@/components/navbar";

export default function InternshipRecommendations() {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [candidateProfile, setCandidateProfile] = useState<CandidateProfile | null>(null);
  const [recommendations, setRecommendations] = useState<Internship[]>([]);
  const [language, setLanguage] = useState("en");

  const handleFormSubmit = (data: CandidateProfile) => {
    setCandidateProfile(data);
    const generatedRecommendations = generateRecommendations(data);
    setRecommendations(generatedRecommendations);
    setShowRecommendations(true);
  };

  const handleBack = () => {
    setShowRecommendations(false);
  };

  if (showRecommendations && candidateProfile) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar language={language} onLanguageChange={setLanguage} />
        <RecommendationsDisplay
          recommendations={recommendations}
          candidateName={candidateProfile.name}
          onBack={handleBack}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <InternshipForm onSubmit={handleFormSubmit} />
    </div>
  );
}
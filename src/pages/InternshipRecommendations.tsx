import { useState } from "react";
import { InternshipForm } from "@/components/internship-form";
import { RecommendationsDisplay } from "@/components/recommendations-display";
import { generateRecommendations, CandidateProfile, Internship } from "@/components/recommendation-engine";

export default function InternshipRecommendations() {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [candidateProfile, setCandidateProfile] = useState<CandidateProfile | null>(null);
  const [recommendations, setRecommendations] = useState<Internship[]>([]);

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
      <RecommendationsDisplay
        recommendations={recommendations}
        candidateName={candidateProfile.name}
        onBack={handleBack}
      />
    );
  }

  return <InternshipForm onSubmit={handleFormSubmit} />;
}
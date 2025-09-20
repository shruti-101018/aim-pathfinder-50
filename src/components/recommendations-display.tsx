import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, IndianRupee, Building, Award, ArrowLeft } from "lucide-react";
import { Internship } from "./recommendation-engine";

interface RecommendationsDisplayProps {
  recommendations: Internship[];
  candidateName: string;
  onBack: () => void;
}

export function RecommendationsDisplay({ 
  recommendations, 
  candidateName, 
  onBack 
}: RecommendationsDisplayProps) {
  const getMatchColor = (score: number) => {
    if (score >= 70) return "bg-success text-success-foreground";
    if (score >= 50) return "bg-indian-saffron text-white";
    return "bg-muted text-muted-foreground";
  };

  const getMatchText = (score: number) => {
    if (score >= 70) return "Excellent Match";
    if (score >= 50) return "Good Match";
    return "Suitable Match";
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="mb-8">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Form
        </Button>
        
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">
            Recommended Internships for {candidateName}
          </h1>
          <p className="text-muted-foreground text-lg">
            Here are the top {recommendations.length} internships matched to your profile
          </p>
        </div>
      </div>

      {/* Success message */}
      <Card className="mb-8 border-success bg-success/5">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-success" />
            <p className="text-success font-medium">
              Great! We found {recommendations.length} internships that match your profile.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <div className="space-y-6">
        {recommendations.map((internship, index) => (
          <Card key={internship.id} className="shadow-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-indian-saffron text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <Badge className={getMatchColor(internship.matchScore)}>
                      {internship.matchScore}% {getMatchText(internship.matchScore)}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{internship.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-2 mt-1">
                    <Building className="h-4 w-4" />
                    <span>{internship.company}</span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm">{internship.description}</p>
              
              {/* Key details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{internship.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{internship.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <IndianRupee className="h-4 w-4 text-muted-foreground" />
                  <span>{internship.stipend}</span>
                </div>
                <div className="text-sm">
                  <Badge variant="outline">{internship.sector}</Badge>
                </div>
              </div>

              {/* Required skills */}
              <div>
                <h4 className="text-sm font-medium mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {internship.requiredSkills.map(skill => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex space-x-3 pt-4">
                <Button variant="hero" size="sm">
                  Apply Now
                </Button>
                <Button variant="indian-outline" size="sm">
                  Learn More
                </Button>
                <Button variant="ghost" size="sm">
                  Save for Later
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer message */}
      <Card className="mt-8 bg-gradient-card">
        <CardContent className="pt-6 text-center">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Contact our support team for assistance with applications or finding more opportunities.
          </p>
          <div className="space-x-4">
            <Button variant="outline" size="sm">
              Contact Support
            </Button>
            <Button variant="ghost" size="sm">
              Find More Internships
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
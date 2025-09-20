import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, User, GraduationCap, MapPin, Briefcase } from "lucide-react";

interface FormData {
  name: string;
  age: string;
  education: string;
  state: string;
  district: string;
  skills: string[];
  sectors: string[];
  experience: string;
}

interface InternshipFormProps {
  onSubmit: (data: FormData) => void;
}

const skillsOptions = {
  "Technical Skills": [
    "Computer Basics",
    "MS Office",
    "Data Entry", 
    "Digital Marketing",
    "Web Development",
    "Programming",
    "Database Management",
    "Graphic Design",
    "Video Editing",
    "Social Media Management"
  ],
  "Communication Skills": [
    "English Communication",
    "Hindi Communication", 
    "Regional Languages",
    "Presentation Skills",
    "Writing Skills",
    "Public Speaking",
    "Content Creation",
    "Translation"
  ],
  "Business Skills": [
    "Sales",
    "Customer Service",
    "Marketing",
    "Accounting Basics",
    "Business Development",
    "Project Management",
    "Leadership",
    "Teamwork"
  ],
  "Professional Skills": [
    "Problem Solving",
    "Time Management",
    "Critical Thinking",
    "Analytical Skills",
    "Research Skills",
    "Documentation",
    "Quality Control",
    "Process Improvement"
  ],
  "Service Skills": [
    "Teaching",
    "Healthcare Support",
    "Counseling",
    "Community Service",
    "Event Management",
    "Tourism Guide",
    "Food Service",
    "Retail Operations"
  ]
};

const sectorOptions = [
  "Information Technology",
  "Healthcare",
  "Education",
  "Finance & Banking",
  "Manufacturing",
  "Agriculture",
  "Tourism & Hospitality",
  "Retail",
  "Government",
  "NGO/Social Work",
  "Media & Communications",
  "Arts & Culture"
];

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export function InternshipForm({ onSubmit }: InternshipFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    education: "",
    state: "",
    district: "",
    skills: [],
    sectors: [],
    experience: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleSkillChange = (skill: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, skill]
        : prev.skills.filter(s => s !== skill)
    }));
  };

  const handleSectorChange = (sector: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      sectors: checked 
        ? [...prev.sectors, sector]
        : prev.sectors.filter(s => s !== sector)
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.age && formData.education;
      case 2:
        return formData.state && formData.district;
      case 3:
        return formData.skills.length > 0;
      case 4:
        return formData.sectors.length > 0;
      default:
        return false;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Step {currentStep} of 4
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            {Math.round((currentStep / 4) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div 
            className="bg-gradient-hero h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      <Card className="shadow-card">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
            {currentStep === 1 && <User className="h-6 w-6 text-white" />}
            {currentStep === 2 && <MapPin className="h-6 w-6 text-white" />}
            {currentStep === 3 && <GraduationCap className="h-6 w-6 text-white" />}
            {currentStep === 4 && <Briefcase className="h-6 w-6 text-white" />}
          </div>
          <CardTitle className="text-xl">
            {currentStep === 1 && "Personal Information"}
            {currentStep === 2 && "Location Details"}
            {currentStep === 3 && "Your Skills"}
            {currentStep === 4 && "Preferred Sectors"}
          </CardTitle>
          <CardDescription>
            {currentStep === 1 && "Tell us about yourself"}
            {currentStep === 2 && "Where are you located?"}
            {currentStep === 3 && "What skills do you have?"}
            {currentStep === 4 && "Which sectors interest you?"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  placeholder="Enter your age"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="education">Highest Education</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, education: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10th">10th Standard</SelectItem>
                    <SelectItem value="12th">12th Standard</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="graduation">Graduation</SelectItem>
                    <SelectItem value="postgraduation">Post Graduation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="state">State</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {indianStates.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="district">District</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => setFormData(prev => ({ ...prev, district: e.target.value }))}
                  placeholder="Enter your district"
                  className="mt-1"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <Label>Select your skills (choose at least 1)</Label>
                <div className="space-y-6 mt-4">
                  {Object.entries(skillsOptions).map(([category, skills]) => (
                    <div key={category} className="space-y-3">
                      <h4 className="text-sm font-medium text-indian-saffron border-b border-border pb-1">
                        {category}
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {skills.map(skill => (
                          <div key={skill} className="flex items-center space-x-2">
                            <Checkbox
                              id={skill}
                              checked={formData.skills.includes(skill)}
                              onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                            />
                            <Label 
                              htmlFor={skill} 
                              className="text-sm font-normal cursor-pointer leading-tight"
                            >
                              {skill}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="experience">Previous Experience</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No Experience</SelectItem>
                    <SelectItem value="basic">Basic Knowledge</SelectItem>
                    <SelectItem value="some">Some Experience</SelectItem>
                    <SelectItem value="experienced">Experienced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <Label>Which sectors interest you? (choose at least 1)</Label>
                <div className="grid grid-cols-1 gap-3 mt-3">
                  {sectorOptions.map(sector => (
                    <div key={sector} className="flex items-center space-x-2">
                      <Checkbox
                        id={sector}
                        checked={formData.sectors.includes(sector)}
                        onCheckedChange={(checked) => handleSectorChange(sector, checked as boolean)}
                      />
                      <Label 
                        htmlFor={sector} 
                        className="text-sm font-normal cursor-pointer"
                      >
                        {sector}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6">
            {currentStep > 1 && (
              <Button variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            
            {currentStep < 4 ? (
              <Button 
                variant="hero" 
                onClick={nextStep} 
                disabled={!isStepValid()}
                className="ml-auto"
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                variant="success" 
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className="ml-auto"
              >
                Get Recommendations <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
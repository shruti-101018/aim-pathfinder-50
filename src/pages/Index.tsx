import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Target, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indian-saffron/10 text-indian-saffron text-sm font-medium mb-6">
              🇮🇳 PM Internship Scheme
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Internship</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI-powered recommendations to match you with the best internship opportunities
              across India. Simple, fast, and designed for everyone.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => navigate("/recommendations")}
              className="shadow-card"
            >
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="indian-outline" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Recommendation Engine?</h2>
            <p className="text-lg text-muted-foreground">
              Designed specifically for Indian youth with simple, accessible technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-soft hover:shadow-card transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-indian-saffron/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-indian-saffron" />
                </div>
                <CardTitle className="text-lg">Smart Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI analyzes your skills, education, and preferences to find the perfect internship matches
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-card transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-indian-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indian-green" />
                </div>
                <CardTitle className="text-lg">For Everyone</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Simple interface designed for first-time users, rural candidates, and all digital literacy levels
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-card transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-indian-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-indian-blue" />
                </div>
                <CardTitle className="text-lg">Trusted Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Official PM Internship Scheme portal with verified opportunities across India
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-card transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-success" />
                </div>
                <CardTitle className="text-lg">Quality Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get 3-5 top-quality recommendations instead of overwhelming lists
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Just 4 simple steps to find your perfect internship
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Personal Info", desc: "Tell us about yourself - name, age, education" },
              { step: "2", title: "Location", desc: "Share your state and district for local opportunities" },
              { step: "3", title: "Skills", desc: "Select your skills and experience level" },
              { step: "4", title: "Get Results", desc: "Receive 3-5 personalized internship recommendations" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of young Indians finding their perfect internships through our AI-powered platform
          </p>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => navigate("/recommendations")}
            className="shadow-card"
          >
            Find My Internship <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/20">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 PM Internship Scheme - Government of India</p>
          <p className="mt-2">Empowering youth across rural and urban India</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

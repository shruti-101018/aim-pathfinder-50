import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { User, Globe, LogIn, LogOut, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

export function Navbar({ language, onLanguageChange }: NavbarProps) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Will be replaced with actual auth state

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "bn", name: "বাংলা", flag: "🇧🇩" },
    { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
    { code: "te", name: "తెలుగు", flag: "🇮🇳" },
    { code: "mr", name: "मराठी", flag: "🇮🇳" },
    { code: "gu", name: "ગુજરાતી", flag: "🇮🇳" },
    { code: "kn", name: "ಕನ್ನಡ", flag: "🇮🇳" },
    { code: "ml", name: "മലയാളം", flag: "🇮🇳" },
    { code: "pa", name: "ਪੰਜਾਬੀ", flag: "🇮🇳" }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold">Internship Portal</h1>
              <p className="text-xs text-muted-foreground">PM Internship Scheme</p>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Select value={language} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-auto min-w-[120px] h-9 border-0 bg-transparent hover:bg-accent">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{currentLanguage.flag}</span>
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-popover border border-border shadow-lg">
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code} className="cursor-pointer hover:bg-accent">
                    <div className="flex items-center space-x-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative h-9 w-9 rounded-full">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover border border-border shadow-lg" align="end">
                {isLoggedIn ? (
                  <>
                    <div className="px-2 py-1.5 text-sm">
                      <p className="font-medium">User Name</p>
                      <p className="text-xs text-muted-foreground">user@example.com</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer hover:bg-accent">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Profile Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-accent">
                      <span>My Applications</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-accent">
                      <span>Saved Internships</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      className="cursor-pointer hover:bg-accent text-destructive focus:text-destructive"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem 
                      className="cursor-pointer hover:bg-accent"
                      onClick={() => setIsLoggedIn(true)}
                    >
                      <LogIn className="mr-2 h-4 w-4" />
                      <span>Login</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-accent">
                      <User className="mr-2 h-4 w-4" />
                      <span>Sign Up</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer hover:bg-accent">
                      <span>Help & Support</span>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
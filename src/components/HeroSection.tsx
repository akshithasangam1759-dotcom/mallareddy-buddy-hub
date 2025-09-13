import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, Sparkles, Users, BookOpen, MessageCircle, GraduationCap } from 'lucide-react';
import campusHeroImage from '@/assets/campus-hero.jpg';

interface HeroSectionProps {
  onOpenChatBot: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenChatBot }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={campusHeroImage} 
          alt="Mallareddy Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-secondary/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-accent/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-success/20 rounded-full animate-float blur-xl" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="text-center animate-slide-up">
          {/* University Logo Placeholder & Name */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow shadow-glow">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white via-primary-glow to-secondary bg-clip-text text-transparent">
                MALLAREDDY
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-2">
              Deemed To Be University
            </p>
            <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              Excellence in Education Since 2002
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Intelligent Campus
              <br />
              <span className="bg-gradient-to-r from-secondary via-primary-glow to-accent bg-clip-text text-transparent">
                Information System
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Your AI-powered gateway to campus life! Get instant answers about academic schedules, 
              facilities, dining services, and everything you need to excel at university.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Badge className="bg-primary/80 text-white border-primary text-base px-4 py-2 hover-scale">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Assistant
            </Badge>
            <Badge className="bg-secondary/80 text-white border-secondary text-base px-4 py-2 hover-scale">
              <Sparkles className="w-4 h-4 mr-2" />
              Real-time Information
            </Badge>
            <Badge className="bg-accent/80 text-white border-accent text-base px-4 py-2 hover-scale">
              <Users className="w-4 h-4 mr-2" />
              Student-Friendly
            </Badge>
            <Badge className="bg-success/80 text-white border-success text-base px-4 py-2 hover-scale">
              <BookOpen className="w-4 h-4 mr-2" />
              Comprehensive Resources
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={onOpenChatBot}
              size="lg"
              className="bg-gradient-primary hover-scale hover-glow text-lg px-8 py-4 shadow-glow font-semibold"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Chat with MRU Assistant
            </Button>
            <Link to="/academic-support">
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 hover-scale backdrop-blur-sm"
              >
                <BookOpen className="w-6 h-6 mr-3" />
                Explore Campus Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15,000+</div>
              <div className="text-white/70">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-white/70">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
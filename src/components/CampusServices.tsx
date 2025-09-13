import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Calendar, 
  MapPin, 
  Utensils, 
  GraduationCap, 
  Users, 
  Clock, 
  Heart,
  Wifi,
  Car
} from 'lucide-react';
import libraryImage from '@/assets/library.jpg';

const CampusServices = () => {
  const services = [
    {
      title: "Academic Support",
      description: "Complete academic assistance and resources",
      icon: GraduationCap,
      color: "bg-gradient-primary",
      features: ["Class Schedules", "Exam Timetables", "Grade Portal", "Academic Calendar"],
      status: "Available 24/7",
      link: "/academic-support"
    },
    {
      title: "Library Resources",
      description: "Extensive digital and physical resources",
      icon: BookOpen,
      color: "bg-gradient-secondary",
      features: ["Digital Library", "Study Rooms", "Research Support", "Inter-library Loans"],
      status: "Open 7AM-11PM",
      link: "/library"
    },
    {
      title: "Campus Navigation",
      description: "Find your way around campus easily",
      icon: MapPin,
      color: "bg-gradient-primary",
      features: ["Interactive Maps", "Room Finder", "Parking Info", "Accessibility Routes"],
      status: "Real-time Updates",
      link: "/campus-facilities"
    },
    {
      title: "Dining Services",
      description: "Variety of food options and meal plans",
      icon: Utensils,
      color: "bg-gradient-secondary",
      features: ["Main Cafeteria", "Food Court", "Coffee Shop", "Healthy Options"],
      status: "7:30AM-9PM Daily",
      link: "/student-services"
    },
    {
      title: "Student Activities",
      description: "Clubs, events, and extracurricular activities",
      icon: Users,
      color: "bg-gradient-primary",
      features: ["Student Clubs", "Events Calendar", "Sports Facilities", "Cultural Programs"],
      status: "Always Active",
      link: "/campus-facilities"
    },
    {
      title: "Wellness Center",
      description: "Health and wellness support services",
      icon: Heart,
      color: "bg-gradient-secondary",
      features: ["Medical Clinic", "Counseling", "Fitness Center", "Mental Health Support"],
      status: "9AM-6PM Mon-Fri",
      link: "/campus-facilities"
    }
  ];

  const facilities = [
    { name: "High-Speed WiFi", icon: Wifi, available: "Campus-wide" },
    { name: "Parking", icon: Car, available: "Multiple Lots" },
    { name: "24/7 Security", icon: Clock, available: "Round the Clock" },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Campus Services & Facilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support services designed to enhance your university experience at Mallareddy DTBU
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift hover-glow transition-all duration-300 animate-slide-up border-0 shadow-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto mt-2">
                  {service.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button className="w-full mt-4 bg-gradient-primary hover-scale" variant="default">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Section - Library */}
        <Card className="overflow-hidden shadow-glow animate-slide-up">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={libraryImage} 
                alt="University Library" 
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
                State-of-the-Art Library
              </h3>
              <p className="text-muted-foreground mb-6">
                Our modern library features extensive digital resources, comfortable study spaces, 
                and advanced research facilities to support your academic journey.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">50,000+</div>
                  <div className="text-sm text-muted-foreground">Books & Journals</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Study Seats</div>
                </div>
              </div>
              <Link to="/library">
                <Button className="bg-gradient-secondary hover-scale">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Explore Library
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Additional Facilities */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Additional Campus Facilities</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-card hover-lift"
              >
                <facility.icon className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold">{facility.name}</div>
                  <div className="text-sm text-muted-foreground">{facility.available}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusServices;
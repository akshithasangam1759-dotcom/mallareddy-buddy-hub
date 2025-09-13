import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ExternalLink,
  GraduationCap,
  Heart
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Academic Programs", href: "#" },
    { name: "Admissions", href: "#" },
    { name: "Student Portal", href: "#" },
    { name: "Faculty Directory", href: "#" },
    { name: "Research", href: "#" },
    { name: "Campus Life", href: "#" },
  ];

  const services = [
    { name: "Library Services", href: "#" },
    { name: "Career Services", href: "#" },
    { name: "IT Support", href: "#" },
    { name: "Health Services", href: "#" },
    { name: "Counseling", href: "#" },
    { name: "International Office", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary/20 to-accent/20 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* University Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mallareddy DTBU</h3>
                <p className="text-sm text-gray-300">Deemed To Be University</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering students with quality education, innovative research, and comprehensive 
              support services since 2002. Building future leaders and innovators.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`hover-scale ${social.color} p-2`}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Campus Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Mallareddy Engineering College Campus<br />
                    Secunderabad - 500100<br />
                    Telangana, India
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-gray-300">+91 40 2781 4000</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-gray-300">info@mrec.ac.in</p>
              </div>
            </div>

            {/* AI Support Badge */}
            <div className="mt-6 p-4 bg-gradient-primary rounded-lg border border-primary/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <p className="text-sm font-semibold">AI Assistant Available</p>
              </div>
              <p className="text-xs text-gray-200">
                Get instant help with campus information 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Mallareddy Deemed To Be University. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for Students</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>

        {/* Special Hackathon Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-secondary px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            Intelligent Campus Information System - Hackathon Project 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
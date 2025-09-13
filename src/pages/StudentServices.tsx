import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Users, Heart, MapPin, Phone, Mail, Clock, Calendar, Utensils, Bus, Shield, Gamepad2 } from 'lucide-react';

const StudentServices = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-white py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center mb-4 text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Student Services</h1>
          <p className="text-xl text-white/90">Comprehensive support services for student success and well-being</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl">Student Support Ecosystem</CardTitle>
              <CardDescription className="text-lg">
                We provide a comprehensive range of services designed to support your academic journey, personal growth, and overall well-being throughout your time at Mallareddy University.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Services Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Student Activities */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2 text-primary" />
                  Student Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• 50+ student clubs and societies</li>
                  <li>• Cultural events & festivals</li>
                  <li>• Leadership development programs</li>
                  <li>• Inter-collegiate competitions</li>
                  <li>• Community service initiatives</li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="secondary">Active Community</Badge>
                  <Badge variant="outline">Year-round</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Wellness Center */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-6 h-6 mr-2 text-primary" />
                  Health & Wellness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Medical clinic with qualified doctors</li>
                  <li>• Mental health counseling</li>
                  <li>• Emergency medical services</li>
                  <li>• Health awareness programs</li>
                  <li>• First aid training</li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="secondary">24/7 Emergency</Badge>
                  <Badge variant="outline">Professional Care</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Dining Services */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Utensils className="w-6 h-6 mr-2 text-primary" />
                  Dining Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Multi-cuisine central cafeteria</li>
                  <li>• Healthy and nutritious meals</li>
                  <li>• Special dietary accommodations</li>
                  <li>• Affordable meal plans</li>
                  <li>• Food court with variety options</li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="secondary">Hygienic</Badge>
                  <Badge variant="outline">Affordable</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bus className="w-6 h-6 mr-2 text-primary" />
                  Transportation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Regular bus services</li>
                  <li>• Multiple route coverage</li>
                  <li>• Safe and comfortable travel</li>
                  <li>• Affordable transportation</li>
                  <li>• GPS tracking for buses</li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="secondary">Multiple Routes</Badge>
                  <Badge variant="outline">GPS Enabled</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Security Services */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-primary" />
                  Campus Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• 24/7 security personnel</li>
                  <li>• CCTV surveillance system</li>
                  <li>• Emergency response team</li>
                  <li>• Access control systems</li>
                  <li>• Regular safety patrols</li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="secondary">24/7 Active</Badge>
                  <Badge variant="outline">High Security</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Recreation */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gamepad2 className="w-6 h-6 mr-2 text-primary" />
                  Recreation & Sports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Modern sports complex</li>
                  <li>• Indoor & outdoor games</li>
                  <li>• Fitness center & gymnasium</li>
                  <li>• Swimming pool</li>
                  <li>• Sports tournaments</li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="secondary">Modern Facilities</Badge>
                  <Badge variant="outline">All Sports</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Service Details</h2>
          
          {/* Student Activities Detail */}
          <Card className="mb-6 hover-lift">
            <CardHeader>
              <CardTitle className="text-xl">Student Activities & Clubs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Academic Clubs</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Computer Science Association</li>
                    <li>• Engineering Society</li>
                    <li>• Business Club</li>
                    <li>• Science Forum</li>
                    <li>• Mathematics Society</li>
                    <li>• Literature Club</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Cultural & Sports</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Music & Dance Society</li>
                    <li>• Drama Club</li>
                    <li>• Photography Club</li>
                    <li>• Sports Teams</li>
                    <li>• Adventure Club</li>
                    <li>• Community Service</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Health Services Detail */}
          <Card className="mb-6 hover-lift">
            <CardHeader>
              <CardTitle className="text-xl">Health & Wellness Center</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Medical Services</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• General physician consultation</li>
                    <li>• Emergency medical care</li>
                    <li>• Basic diagnostic services</li>
                    <li>• Pharmacy services</li>
                    <li>• Health check-ups</li>
                    <li>• Vaccination programs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Mental Health Support</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Counseling services</li>
                    <li>• Stress management programs</li>
                    <li>• Academic guidance</li>
                    <li>• Peer support groups</li>
                    <li>• Crisis intervention</li>
                    <li>• Wellness workshops</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Operating Hours */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Clock className="w-6 h-6 mr-2 text-primary" />
                Service Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Health Center</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>Mon-Fri</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Emergency</span>
                      <span>24/7</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Dining Services</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>Daily</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Sports Complex</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>Daily</span>
                      <span>6:00 AM - 10:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section>
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Student Services Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Student Services Building<br />Ground Floor</p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 40 2374 8999<br />Ext: 201</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">studentservices@mrec.ac.in</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default StudentServices;
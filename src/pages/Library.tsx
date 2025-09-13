import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Wifi, Users, Clock, MapPin, Phone, Mail, Search, Download } from 'lucide-react';
import libraryImage from '@/assets/library.jpg';

const Library = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-white py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center mb-4 text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">University Library</h1>
          <p className="text-xl text-white/90">Your gateway to knowledge and research excellence</p>
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative h-64 overflow-hidden">
        <img 
          src={libraryImage} 
          alt="University Library Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Modern Learning Environment</h2>
            <p className="text-lg">State-of-the-art facilities for academic success</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <BookOpen className="w-8 h-8 mr-3 text-primary" />
                Library Overview
              </CardTitle>
              <CardDescription className="text-lg">
                Our university library serves as the heart of academic life, providing access to vast resources, quiet study spaces, and cutting-edge technology to support your educational journey.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Statistics */}
        <section className="mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover-lift">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                <p className="text-muted-foreground">Books & Journals</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Study Seats</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Digital Access</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Digital Databases</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Library Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Book Services */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-primary" />
                  Book Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Book borrowing & returns</li>
                  <li>• Reserve collections</li>
                  <li>• Inter-library loans</li>
                  <li>• Book recommendations</li>
                  <li>• New acquisitions alerts</li>
                </ul>
                <Badge className="mt-4" variant="secondary">Traditional & Digital</Badge>
              </CardContent>
            </Card>

            {/* Research Support */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-6 h-6 mr-2 text-primary" />
                  Research Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Research consultation</li>
                  <li>• Database training</li>
                  <li>• Citation assistance</li>
                  <li>• Thesis support</li>
                  <li>• Literature reviews</li>
                </ul>
                <Badge className="mt-4" variant="secondary">Expert Guidance</Badge>
              </CardContent>
            </Card>

            {/* Digital Resources */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="w-6 h-6 mr-2 text-primary" />
                  Digital Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• E-books & E-journals</li>
                  <li>• Online databases</li>
                  <li>• Digital archives</li>
                  <li>• Multimedia resources</li>
                  <li>• Remote access</li>
                </ul>
                <Badge className="mt-4" variant="outline">24/7 Access</Badge>
              </CardContent>
            </Card>

            {/* Study Spaces */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2 text-primary" />
                  Study Spaces
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Silent study areas</li>
                  <li>• Group study rooms</li>
                  <li>• Discussion zones</li>
                  <li>• Private carrels</li>
                  <li>• Collaborative spaces</li>
                </ul>
                <Badge className="mt-4" variant="secondary">Reservable</Badge>
              </CardContent>
            </Card>

            {/* Technology Services */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wifi className="w-6 h-6 mr-2 text-primary" />
                  Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High-speed WiFi</li>
                  <li>• Computer workstations</li>
                  <li>• Printing & scanning</li>
                  <li>• Multimedia equipment</li>
                  <li>• Tech support</li>
                </ul>
                <Badge className="mt-4" variant="secondary">Free Access</Badge>
              </CardContent>
            </Card>

            {/* Special Collections */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Special Collections</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Rare books collection</li>
                  <li>• University archives</li>
                  <li>• Local history materials</li>
                  <li>• Alumni publications</li>
                  <li>• Historical documents</li>
                </ul>
                <Badge className="mt-4" variant="outline">Unique Resources</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Operating Hours */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Clock className="w-6 h-6 mr-2 text-primary" />
                Library Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Regular Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">7:00 AM - 11:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Exam Period</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Sunday</span>
                      <span className="font-medium">24 Hours</span>
                    </li>
                  </ul>
                  <Badge className="mt-2" variant="secondary">24/7 During Exams</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    Extended hours during exam periods with increased staff support
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section>
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Library</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Central Library Building<br />Ground & First Floor</p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 40 2374 8999<br />Ext: 501</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibrand mb-2">Email</h3>
                  <p className="text-muted-foreground">library@mrec.ac.in</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Library;
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';

const AcademicSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-white py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center mb-4 text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Academic Support Services</h1>
          <p className="text-xl text-white/90">Comprehensive academic assistance for all students</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <BookOpen className="w-8 h-8 mr-3 text-primary" />
                Academic Excellence Support
              </CardTitle>
              <CardDescription className="text-lg">
                Our Academic Support Services are designed to help every student achieve their full potential through personalized assistance and comprehensive resources.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Services Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tutoring Services */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2 text-primary" />
                  Tutoring Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• One-on-one tutoring sessions</li>
                  <li>• Group study sessions</li>
                  <li>• Subject-specific assistance</li>
                  <li>• Exam preparation support</li>
                  <li>• Assignment help</li>
                </ul>
                <Badge className="mt-4" variant="secondary">Available 24/7</Badge>
              </CardContent>
            </Card>

            {/* Writing Center */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Writing Center</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Essay writing assistance</li>
                  <li>• Research paper guidance</li>
                  <li>• Citation and formatting help</li>
                  <li>• Proofreading services</li>
                  <li>• Academic writing workshops</li>
                </ul>
                <Badge className="mt-4" variant="secondary">Free Service</Badge>
              </CardContent>
            </Card>

            {/* Math Help Center */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Math Help Center</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Calculus support</li>
                  <li>• Statistics assistance</li>
                  <li>• Linear algebra help</li>
                  <li>• Problem-solving sessions</li>
                  <li>• Exam review sessions</li>
                </ul>
                <Badge className="mt-4" variant="outline">Drop-in Available</Badge>
              </CardContent>
            </Card>

            {/* Study Skills */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Study Skills Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Time management workshops</li>
                  <li>• Note-taking strategies</li>
                  <li>• Test-taking techniques</li>
                  <li>• Memory improvement methods</li>
                  <li>• Stress management</li>
                </ul>
                <Badge className="mt-4" variant="secondary">Workshop Series</Badge>
              </CardContent>
            </Card>

            {/* Career Counseling */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Career Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Career planning sessions</li>
                  <li>• Resume building</li>
                  <li>• Interview preparation</li>
                  <li>• Internship guidance</li>
                  <li>• Job search strategies</li>
                </ul>
                <Badge className="mt-4" variant="secondary">Professional Guidance</Badge>
              </CardContent>
            </Card>

            {/* Academic Advising */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Academic Advising</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Course selection guidance</li>
                  <li>• Degree planning</li>
                  <li>• Academic policy information</li>
                  <li>• Transfer credit evaluation</li>
                  <li>• Graduation requirements</li>
                </ul>
                <Badge className="mt-4" variant="outline">Personalized</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Academic Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Academic Building, 2nd Floor<br />Room 201-205</p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 40 2374 8999<br />Ext: 301</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">academic.support@mrec.ac.in</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Operating Hours */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Clock className="w-6 h-6 mr-2 text-primary" />
                Operating Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Regular Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Exam Period</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </li>
                  </ul>
                  <Badge className="mt-2" variant="secondary">Extended Hours</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default AcademicSupport;
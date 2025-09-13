import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Phone, Mail, Wifi, Car, Utensils, Dumbbell, Bus, Shield, Clock } from 'lucide-react';

const CampusFacilities = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-white py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center mb-4 text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Campus Facilities</h1>
          <p className="text-xl text-white/90">World-class infrastructure for an exceptional campus experience</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl">Modern Campus Infrastructure</CardTitle>
              <CardDescription className="text-lg">
                Our campus is designed to provide students with all the amenities and facilities needed for a comfortable, productive, and enriching university experience.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Facilities Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Campus Amenities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* WiFi & Internet */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wifi className="w-6 h-6 mr-2 text-primary" />
                  WiFi & Internet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• High-speed WiFi campus-wide</li>
                  <li>• 24/7 internet connectivity</li>
                  <li>• Dedicated student portals</li>
                  <li>• Free access for all students</li>
                  <li>• Technical support available</li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="secondary">Free</Badge>
                  <Badge variant="secondary">24/7</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Parking */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Car className="w-6 h-6 mr-2 text-primary" />
                  Parking Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• 500+ parking spaces</li>
                  <li>• Separate zones for cars & bikes</li>
                  <li>• 24/7 security surveillance</li>
                  <li>• Covered parking areas</li>
                  <li>• Easy access to buildings</li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="secondary">Secure</Badge>
                  <Badge variant="secondary">Large Capacity</Badge>
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
                  <li>• Multi-cuisine cafeteria</li>
                  <li>• Healthy meal options</li>
                  <li>• Vegetarian & non-veg choices</li>
                  <li>• Quick service counters</li>
                  <li>• Affordable pricing</li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="secondary">Hygienic</Badge>
                  <Badge variant="outline">Multi-cuisine</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Sports & Recreation */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Dumbbell className="w-6 h-6 mr-2 text-primary" />
                  Sports & Recreation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Modern gymnasium</li>
                  <li>• Outdoor sports courts</li>
                  <li>• Swimming pool</li>
                  <li>• Indoor games room</li>
                  <li>• Sports equipment rental</li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="secondary">Modern Equipment</Badge>
                  <Badge variant="secondary">All Sports</Badge>
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
                  <li>• Campus shuttle service</li>
                  <li>• Multiple route options</li>
                  <li>• Regular bus timings</li>
                  <li>• Safe & comfortable travel</li>
                  <li>• GPS tracking available</li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="secondary">Safe</Badge>
                  <Badge variant="outline">Multiple Routes</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-primary" />
                  Security Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• 24/7 security personnel</li>
                  <li>• CCTV surveillance</li>
                  <li>• ID card access system</li>
                  <li>• Emergency response team</li>
                  <li>• Safe campus environment</li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="secondary">24/7</Badge>
                  <Badge variant="secondary">High Security</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detailed Facilities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Detailed Facility Information</h2>
          
          {/* Cafeteria Details */}
          <Card className="mb-6 hover-lift">
            <CardHeader>
              <CardTitle className="text-xl">Central Cafeteria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Dining Options</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• South Indian cuisine</li>
                    <li>• North Indian specialties</li>
                    <li>• Chinese & Continental</li>
                    <li>• Fresh juice bar</li>
                    <li>• Snacks & beverages</li>
                    <li>• Healthy salad bar</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Timings & Features</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Open: 7:00 AM - 9:00 PM</li>
                    <li>• Seating capacity: 300+</li>
                    <li>• Air-conditioned dining</li>
                    <li>• Digital payment accepted</li>
                    <li>• Meal plans available</li>
                    <li>• Catering services</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sports Complex */}
          <Card className="mb-6 hover-lift">
            <CardHeader>
              <CardTitle className="text-xl">Sports Complex</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Indoor Facilities</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Basketball court</li>
                    <li>• Badminton courts (4)</li>
                    <li>• Table tennis tables (6)</li>
                    <li>• Chess & carrom room</li>
                    <li>• Modern gymnasium</li>
                    <li>• Yoga & aerobics studio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Outdoor Facilities</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cricket ground</li>
                    <li>• Football field</li>
                    <li>• Volleyball courts (2)</li>
                    <li>• Tennis courts (2)</li>
                    <li>• Running track (400m)</li>
                    <li>• Swimming pool (Olympic size)</li>
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
                Facility Operating Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Cafeteria</h3>
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
                      <span>Mon-Fri</span>
                      <span>6:00 AM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Weekends</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Transportation</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>First Bus</span>
                      <span>6:30 AM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Last Bus</span>
                      <span>8:30 PM</span>
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
              <CardTitle className="text-2xl text-center">Facility Management Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Administration Building<br />Ground Floor, Room 105</p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 40 2374 8999<br />Ext: 401</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">facilities@mrec.ac.in</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default CampusFacilities;
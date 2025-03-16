
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Briefcase, MapPin, Clock, CheckCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const departments = [
  "All",
  "Engineering",
  "Content",
  "Operations",
  "Marketing",
  "Design",
];

const jobOpenings = [
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for a talented Frontend Developer with experience in React, TypeScript, and modern web technologies to help build and improve our K-pop photo booth application.",
    requirements: [
      "3+ years of experience with React and TypeScript",
      "Strong understanding of responsive design principles",
      "Experience with state management (Redux, Context API, etc.)",
      "Knowledge of modern CSS approaches (Tailwind, CSS-in-JS)",
      "Passion for building delightful user experiences"
    ],
    benefits: [
      "Competitive salary and equity",
      "Remote-first work environment",
      "Flexible working hours",
      "Learning and development budget",
      "Annual team retreats"
    ]
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Seoul, South Korea",
    type: "Full-time",
    description: "Join our AI team to develop and optimize the machine learning models that power our virtual photo generation technology.",
    requirements: [
      "MS or PhD in Computer Science, AI, or related field",
      "Experience with computer vision and image processing",
      "Proficiency in Python and deep learning frameworks (PyTorch, TensorFlow)",
      "Understanding of GANs and image synthesis techniques",
      "Strong problem-solving skills and research mindset"
    ],
    benefits: [
      "Competitive salary and equity",
      "State-of-the-art equipment",
      "Relocation assistance to Seoul",
      "Korean language classes",
      "Health and wellness benefits"
    ]
  },
  {
    title: "K-pop Content Specialist",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    description: "Help us grow our collection of K-pop idols and content by researching, curating, and managing our digital assets library.",
    requirements: [
      "Deep knowledge of K-pop industry, groups, and idols",
      "Experience with digital asset management",
      "Excellent research and organization skills",
      "Basic photo editing abilities (Photoshop, GIMP)",
      "Fluency in English and Korean (preferred)"
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Free concert tickets for research",
      "Subscriptions to K-pop content platforms",
      "Professional development opportunities"
    ]
  },
  {
    title: "Customer Success Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description: "Ensure our K-pop fan users have an amazing experience with our platform by providing exceptional support and guidance.",
    requirements: [
      "2+ years of customer support experience",
      "Strong communication and empathy skills",
      "Problem-solving mindset",
      "Knowledge of K-pop culture preferred",
      "Experience with support ticketing systems"
    ],
    benefits: [
      "Competitive salary",
      "Flexible working hours",
      "Health and wellness benefits",
      "Career advancement opportunities",
      "Employee discount program"
    ]
  },
  {
    title: "Social Media Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Drive engagement and growth on our social media channels to help K-pop fans discover our photo booth platform.",
    requirements: [
      "3+ years of social media management experience",
      "Understanding of K-pop fan communities",
      "Content creation skills (graphics, video)",
      "Data-driven approach to social media strategy",
      "Experience growing social media accounts"
    ],
    benefits: [
      "Competitive salary",
      "Remote work environment",
      "Social media training budget",
      "Creative freedom",
      "Performance bonuses"
    ]
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful, intuitive interfaces for our photo booth platform that delight K-pop fans and enhance their experience.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Strong portfolio showcasing web and mobile designs",
      "Proficiency in design tools (Figma, Sketch)",
      "Understanding of web accessibility standards",
      "Experience with design systems"
    ],
    benefits: [
      "Competitive salary",
      "Design tool subscriptions",
      "Flexible working hours",
      "Professional development budget",
      "Regular design workshops"
    ]
  }
];

const Careers = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeDepartment, setActiveDepartment] = React.useState("All");

  const filteredJobs = jobOpenings.filter(job => {
    // Filter by search term
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by department
    const matchesDepartment = activeDepartment === "All" || job.department === activeDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <>
      <Helmet>
        <title>Careers | Join the K-pop Frame Team</title>
        <meta name="description" content="Join our innovative team and help create magical K-pop photo experiences for fans worldwide. View current job openings and apply today." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
                <p className="text-xl opacity-90 mb-8">Help us connect K-pop fans with their favorite idols</p>
                
                <div className="relative max-w-md mx-auto">
                  <Input
                    type="text"
                    placeholder="Search positions..."
                    className="pl-10 bg-white/90 text-gray-800 border-0 shadow-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-6">Life at K-pop Frame</h2>
                  <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                    We're a passionate team of K-pop enthusiasts, developers, designers, and business experts working together to create magical experiences for fans worldwide.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] duration-300">
                      <div className="text-pink-500 text-2xl font-bold mb-2">Creativity</div>
                      <p className="text-gray-700">We foster innovation and creative thinking to push boundaries</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] duration-300">
                      <div className="text-purple-500 text-2xl font-bold mb-2">Flexibility</div>
                      <p className="text-gray-700">Work remotely with flexible hours and focus on what matters</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] duration-300">
                      <div className="text-indigo-500 text-2xl font-bold mb-2">Impact</div>
                      <p className="text-gray-700">Make a real difference in how fans connect with K-pop culture</p>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
                
                {/* Department filter tabs */}
                <Tabs defaultValue="All" className="mb-8">
                  <TabsList className="grid grid-cols-3 md:grid-cols-6 bg-gray-100">
                    {departments.map((dept) => (
                      <TabsTrigger 
                        key={dept} 
                        value={dept}
                        onClick={() => setActiveDepartment(dept)}
                      >
                        {dept}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
                
                {filteredJobs.length > 0 ? (
                  <div className="space-y-6">
                    {filteredJobs.map((job, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                              <CardDescription className="text-sm text-gray-500 flex items-center gap-1 flex-wrap">
                                <Briefcase className="h-4 w-4" /> {job.department} 
                                <span className="mx-1">•</span>
                                <MapPin className="h-4 w-4" /> {job.location}
                              </CardDescription>
                            </div>
                            <Badge variant="outline" className={`
                              ${job.type === "Full-time" ? "bg-green-50 text-green-700 border-green-200" : 
                              "bg-blue-50 text-blue-700 border-blue-200"}
                            `}>
                              <Clock className="h-3 w-3 mr-1" />
                              {job.type}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4">{job.description}</p>
                          
                          <Tabs defaultValue="requirements" className="mt-6">
                            <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger value="requirements">Requirements</TabsTrigger>
                              <TabsTrigger value="benefits">Benefits</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="requirements" className="mt-4">
                              <ul className="space-y-2 text-gray-700">
                                {job.requirements.map((req, reqIndex) => (
                                  <li key={reqIndex} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </TabsContent>
                            
                            <TabsContent value="benefits" className="mt-4">
                              <ul className="space-y-2 text-gray-700">
                                {job.benefits.map((benefit, benefitIndex) => (
                                  <li key={benefitIndex} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </TabsContent>
                          </Tabs>
                          
                          <div className="mt-6">
                            <Button className="bg-purple-600 hover:bg-purple-700 transition-all hover:translate-y-[-2px]">
                              Apply Now <ArrowUpRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">No positions match your criteria</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your search terms or department filter</p>
                    <Button variant="outline" onClick={() => {
                      setSearchTerm("");
                      setActiveDepartment("All");
                    }}>
                      Reset Filters
                    </Button>
                  </div>
                )}
                
                <Separator className="my-12" />
                
                <div className="mt-16 text-center bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">Don't see a position that fits?</h3>
                  <p className="text-gray-700 mb-6">We're always looking for talented people to join our team. Send us your resume and tell us how you can contribute.</p>
                  <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
                    Send Open Application
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Careers;

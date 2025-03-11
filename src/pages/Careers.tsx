
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from 'lucide-react';

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
    ]
  }
];

const Careers = () => {
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
                <p className="text-xl opacity-90">Help us connect K-pop fans with their favorite idols</p>
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
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <div className="text-pink-500 text-2xl font-bold mb-2">Creativity</div>
                      <p className="text-gray-700">We foster innovation and creative thinking to push boundaries</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <div className="text-purple-500 text-2xl font-bold mb-2">Flexibility</div>
                      <p className="text-gray-700">Work remotely with flexible hours and focus on what matters</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <div className="text-indigo-500 text-2xl font-bold mb-2">Impact</div>
                      <p className="text-gray-700">Make a real difference in how fans connect with K-pop culture</p>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
                <div className="space-y-6">
                  {jobOpenings.map((job, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                            <CardDescription className="text-sm text-gray-500">
                              {job.department} • {job.location}
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {job.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{job.description}</p>
                        <div className="mt-4">
                          <h4 className="font-medium text-sm text-gray-900 mb-2">Requirements:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex}>{req}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6">
                          <Button className="bg-purple-600 hover:bg-purple-700">
                            Apply Now <ArrowUpRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
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

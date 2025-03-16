
import { JobOpening } from './types';

export const departments = [
  "All",
  "Engineering",
  "Content",
  "Operations",
  "Marketing",
  "Design",
];

export const jobOpenings: JobOpening[] = [
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

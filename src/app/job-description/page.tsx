// "use client"


// import React from 'react';
// import { PlusCircle, Calendar, Building2, GraduationCap, ClipboardList } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// const JobDescriptionPage = () => {
//   // Sample data - in a real app, this would come from props or an API
//   const jobData = {
//     title: "Frontend Developer",
//     company: "TechCorp Solutions",
//     description: "We're looking for a talented frontend developer to join our team and help build innovative web applications.",
//     deadline: "2025-02-15",
//     eligibility: ["Undergraduate graduating in 2025", "Strong JavaScript knowledge", "Experience with React"],
//     task: {
//       title: "Job Portal Frontend",
//       description: "Create a frontend website for a job portal using ReactJS. The portal should include job listings, search functionality, and an application system."
//     },
//     submissions: [
//       { id: 1, name: "Alice Johnson", submittedAt: "2025-01-15" },
//       { id: 2, name: "Bob Smith", submittedAt: "2025-01-16" },
//       { id: 3, name: "Carol Williams", submittedAt: "2025-01-17" }
//     ]
//   };

//   const handleSubmitTask = () => {
//     // Handle task submission logic here
//     console.log("Opening task submission form");
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Header Section */}
//       <div className="mb-12">
//         <h1 className="text-4xl font-bold mb-3">{jobData.title}</h1>
//         <div className="flex items-center gap-2 text-gray-600">
//           <Building2 className="w-5 h-5" />
//           <span className="text-xl">{jobData.company}</span>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="space-y-10">
//         {/* Job Description */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">About the Role</h2>
//           <p className="text-gray-700 text-lg leading-relaxed">{jobData.description}</p>
//         </div>

//         {/* Deadline */}
//         <div>
//           <div className="flex items-center gap-2 mb-2">
//             <Calendar className="w-5 h-5" />
//             <h2 className="text-2xl font-semibold">Application Deadline</h2>
//           </div>
//           <p className="text-lg text-red-600 ml-7">
//             {new Date(jobData.deadline).toLocaleDateString('en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric'
//             })}
//           </p>
//         </div>

//         {/* Eligibility Criteria */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <GraduationCap className="w-5 h-5" />
//             <h2 className="text-2xl font-semibold">Eligibility Criteria</h2>
//           </div>
//           <ul className="list-disc pl-10 space-y-2">
//             {jobData.eligibility.map((criterion, index) => (
//               <li key={index} className="text-gray-700 text-lg">{criterion}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Task Description */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <ClipboardList className="w-5 h-5" />
//             <h2 className="text-2xl font-semibold">Task Description</h2>
//           </div>
//           <div className="ml-7">
//             <h3 className="text-xl font-medium mb-2">{jobData.task.title}</h3>
//             <p className="text-gray-700 text-lg">{jobData.task.description}</p>
//           </div>
//         </div>

//         {/* Submissions */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-6">Submissions</h2>
//           <div className="space-y-4">
//             {jobData.submissions.map(submission => (
//               <div 
//                 key={submission.id} 
//                 className="flex items-center justify-between py-3 border-b last:border-b-0"
//               >
//                 <div>
//                   <p className="font-medium text-lg">{submission.name}</p>
//                   <p className="text-gray-600">
//                     Submitted: {new Date(submission.submittedAt).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <Badge variant="secondary">Submitted</Badge>
//               </div>
//             ))}
            
//             <Button 
//               onClick={handleSubmitTask}
//               className="w-full mt-8 flex items-center justify-center gap-2 py-6 text-lg"
//             >
//               <PlusCircle className="w-6 h-6" />
//               Submit Your Task
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobDescriptionPage;
"use client"

import React from 'react';
import { PlusCircle, Calendar, Building2, GraduationCap, ClipboardList, ChevronRight, DollarSign, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const JobDescriptionPage = () => {
  const jobData = {
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    description: "We're seeking a talented Senior Frontend Developer to join our innovative team and lead the development of cutting-edge web applications. As a key member of our engineering department, you'll be at the forefront of creating intuitive and responsive user interfaces that drive our products forward.",
    salary: {
      min: 120000,
      max: 180000,
      currency: "USD"
    },
    workArrangement: "Hybrid (2 days in office, 3 days remote)",
    deadline: "2025-02-15",
    responsibilities: [
      "Architect and implement complex frontend systems using React and Next.js",
      "Collaborate with UX designers to translate wireframes and mockups into responsive, accessible, and performant web applications",
      "Mentor junior developers and conduct code reviews to ensure high code quality and best practices",
      "Optimize application performance and improve core Web Vitals metrics",
      "Participate in agile ceremonies and contribute to technical decision-making processes"
    ],
    requirements: [
      "5+ years of experience in frontend development, with a focus on React ecosystem",
      "Strong understanding of modern JavaScript, HTML5, and CSS3",
      "Experience with state management solutions (e.g., Redux, MobX, or Recoil)",
      "Familiarity with server-side rendering and static site generation techniques",
      "Knowledge of responsive design principles and cross-browser compatibility issues",
      "Excellent problem-solving skills and attention to detail"
    ],
    benefits: [
      "Competitive salary with annual bonuses",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Generous paid time off and parental leave",
      "Professional development budget for conferences and courses",
      "Regular team-building events and hackathons"
    ],
    eligibility: [
      "Bachelor's degree in Computer Science or related field (or equivalent experience)",
      "Authorization to work in the United States",
      "Ability to occasionally travel for team meetings or conferences"
    ],
    task: {
      title: "Advanced Job Portal Frontend",
      description: "Design and implement a frontend for an advanced job portal using React and Next.js. The portal should include job listings with infinite scroll, advanced search and filtering capabilities, a responsive application system, and a dashboard for both job seekers and employers. Implement proper state management, ensure accessibility compliance, and optimize for performance. Bonus points for implementing real-time notifications using WebSockets."
    },
    submissions: [
      { id: 1, name: "Alice Johnson", submittedAt: "2025-01-15" },
      { id: 2, name: "Bob Smith", submittedAt: "2025-01-16" },
      { id: 3, name: "Carol Williams", submittedAt: "2025-01-17" }
    ]
  };

  const handleSubmitTask = () => {
    console.log("Opening task submission form");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">{jobData.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-100">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span className="text-xl">{jobData.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="text-lg">{jobData.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span className="text-lg">{`${jobData.salary.currency} ${jobData.salary.min.toLocaleString()} - ${jobData.salary.max.toLocaleString()}`}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-lg">{jobData.workArrangement}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">About the Role</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{jobData.description}</p>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Key Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {jobData.responsibilities.map((resp, index) => (
                    <li key={index} className="text-gray-700">{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Requirements</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {jobData.requirements.map((req, index) => (
                    <li key={index} className="text-gray-700">{req}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Benefits</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {jobData.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Task Description */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-blue-600">
                  <ClipboardList className="w-6 h-6" />
                  <h2 className="text-2xl font-semibold">Task Description</h2>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800">{jobData.task.title}</h3>
                  <p className="text-gray-700 text-lg">{jobData.task.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Deadline */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2 text-blue-600">
                  <Calendar className="w-6 h-6" />
                  <h2 className="text-2xl font-semibold">Application Deadline</h2>
                </div>
                <p className="text-xl font-medium text-red-600 ml-8">
                  {new Date(jobData.deadline).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </CardContent>
            </Card>

            {/* Eligibility Criteria */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-blue-600">
                  <GraduationCap className="w-6 h-6" />
                  <h2 className="text-2xl font-semibold">Eligibility Criteria</h2>
                </div>
                <ul className="list-none space-y-3">
                  {jobData.eligibility.map((criterion, index) => (
                    <li key={index} className="text-gray-700 text-lg flex items-start">
                      <Badge variant="secondary" className="mr-2 mt-1">0{index + 1}</Badge>
                      {criterion}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Submissions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 text-blue-600">Recent Submissions</h2>
                <div className="space-y-4">
                  {jobData.submissions.map(submission => (
                    <div 
                      key={submission.id} 
                      className="flex items-center justify-between py-3 border-b last:border-b-0"
                    >
                      <div>
                        <p className="font-medium text-lg text-gray-800">{submission.name}</p>
                        <p className="text-gray-600">
                          Submitted: {new Date(submission.submittedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Submitted</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={handleSubmitTask}
              className="w-full mt-8 flex items-center justify-center gap-2 py-6 text-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              <PlusCircle className="w-6 h-6" />
              Submit Your Task
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionPage;


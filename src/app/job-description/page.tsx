
"use client"
import React from 'react';
import { PlusCircle, Calendar, Building2, GraduationCap, ClipboardList, Globe, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const JobDescriptionPage = () => {
  const jobData = {
    title: "Frontend Developer",
    company: "TechCorp Solutions",
    companyInfo: {
      description: "TechCorp Solutions is a leading software development company specializing in innovative web applications and enterprise solutions. Founded in 2018, we've grown to a team of 150+ professionals serving clients worldwide.",
      size: "150+ employees",
      website: "techcorp.com"
    },
    description: "We're looking for a talented frontend developer to join our team and help build innovative web applications.",
    deadline: "2025-02-15",
    eligibility: ["Undergraduate graduating in 2025", "Strong JavaScript knowledge", "Experience with React"],
    task: {
      title: "Job Portal Frontend",
      description: "Create a frontend website for a job portal using ReactJS. The portal should include job listings, search functionality, and an application system."
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
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section - Full Width */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{jobData.title}</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 className="w-5 h-5" />
            <span className="text-xl">{jobData.company}</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-3">{jobData.companyInfo.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{jobData.companyInfo.size}</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span>{jobData.companyInfo.website}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Job Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{jobData.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              <CardTitle>Eligibility Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {jobData.eligibility.map((criterion, index) => (
                  <li key={index} className="text-gray-700">{criterion}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <ClipboardList className="w-5 h-5" />
              <CardTitle>Task Description</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">{jobData.task.title}</h3>
              <p className="text-gray-700">{jobData.task.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Deadline and Submissions */}
        <div className="space-y-6">
          <Card className="sticky top-6">
            <CardHeader className="flex flex-row items-center gap-2">
              <Calendar className="w-5 h-5" />
              <CardTitle>Application Deadline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-red-600 mb-6">
                {new Date(jobData.deadline).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <Button 
                onClick={handleSubmitTask}
                className="w-full flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-5 h-5" />
                Submit Your Task
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobData.submissions.map(submission => (
                  <div key={submission.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{submission.name}</p>
                      <p className="text-sm text-gray-600">
                        Submitted: {new Date(submission.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant="secondary">Submitted</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionPage;
"use client";

import React from 'react';
import { Button as UiButton} from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

import Example from "@/components/Example";
import thirdwebIcon from "@/../public/thirdweb.svg";
import Image from "next/image";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "solid" | "outline";
}

const Button: React.FC<ButtonProps> = ({ variant = "solid", children, className, ...props }) => {
  const variantClass = 
    variant === "ghost" ? "bg-transparent text-gray-600" : 
    variant === "outline" ? "border border-gray-600" : 
    "bg-blue-500 text-white";

  return (
    <button 
      className={`px-4 py-2 rounded ${variantClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};


const Navbar = () => (
  <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
    <div className="flex items-center">
      <h1 className="text-2xl font-bold">
        <span className="text-black">K</span>
        <span className="text-orange-500">arya proof</span>
      </h1>
    </div>
    <div className="flex space-x-6">
      <a href="#" className="text-orange-500 border-b-2 border-orange-500">Home</a>
      <a href="#" className="text-gray-600">About</a>
      <a href="#" className="text-gray-600">Contact Us</a>
      <a href="#" className="text-gray-600">Blog</a>
    </div>
    <div className="flex space-x-4">
      <Example/>
      <Button variant="ghost">Sign in</Button>
      <Button className="bg-[#38BDF8]">Sign Up</Button>
    </div>
  </nav>
);

const SearchSection = () => (
  <div className="flex space-x-4 mt-8">
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Job type" />
      </SelectTrigger>
    </Select>
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Location" />
      </SelectTrigger>
    </Select>
    <Button className="bg-orange-500 hover:bg-orange-600">
      Explore
    </Button>
  </div>
);
interface StatCardProps {
  icon: "briefcase" | "users" | "building"; // Limit to known icons
  number: string | number; // Either string or number
  label: string; // Expect a string for label
}

const StatCard :React.FC<StatCardProps> = ({ icon, number, label }) => (
  <Card className="w-[250px]">
    <CardContent className="flex items-center space-x-4 p-6">
      <div className={`p-3 rounded-lg ${icon === "briefcase" ? "bg-yellow-400" : 
        icon === "users" ? "bg-blue-400" : "bg-orange-500"}`}>
        {icon === "briefcase" && (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
        {icon === "users" && (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
        {icon === "building" && (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-bold">{number}</h3>
        <p className="text-gray-500">{label}</p>
      </div>
    </CardContent>
  </Card>
);
interface NotificationBubbleProps {
  avatar: string; // URL of the avatar image
  text: string;   // Notification message text
  position: string; // Tailwind CSS class or inline style for positioning
}

const NotificationBubble :React.FC<NotificationBubbleProps> = ({ avatar, text, position }) => (
  <div className={`absolute ${position} flex items-center bg-white rounded-lg p-2 shadow-lg`}>
    <img src={avatar} alt="User avatar" className="w-8 h-8 rounded-full" />
    <span className="ml-2 text-sm">{text}</span>
  </div>
);

const MainContent = () => (
  <div className="relative flex justify-between items-center max-w-7xl mx-auto px-4 py-16">
    <div className="w-1/2">
      <h1 className="text-5xl font-bold mb-4">
        It&apos;s Easy to Find<br />
        Your <span className="text-orange-500">Dream Job</span>
      </h1>
      <p className="text-gray-600 mb-8">
        Explore thousands of jobs in one place and get the job of your dream.
      </p>
      <SearchSection />
    </div>
    
    <div className="w-1/2 relative">
      <div className="relative w-[500px] h-[500px] bg-yellow-100 rounded-full overflow-hidden">
        <img
          src="/api/placeholder/500/500"
          alt="Job seeker"
          className="absolute bottom-0 right-0 w-[400px]"
        />
        
        <NotificationBubble 
          avatar="/api/placeholder/32/32"
          text="Applied"
          position="top-20 left-20"
        />
        
        <NotificationBubble 
          avatar="/api/placeholder/32/32"
          text="Found a dream company"
          position="top-40 right-20"
        />
        
        <NotificationBubble 
          avatar="/api/placeholder/32/32"
          text="Apple responded to your resume!"
          position="bottom-40 right-10"
        />
        
        <NotificationBubble 
          avatar="/api/placeholder/32/32"
          text="Became a programmer"
          position="bottom-20 left-20"
        />
      </div>
    </div>
  </div>
);

const Stats = () => (
  <div className="flex justify-center space-x-8 mt-16">
    <StatCard icon="briefcase" number="50K +" label="Job vacancy" />
    <StatCard icon="users" number="20K +" label="People Got Hired" />
    <StatCard icon="building" number="2K +" label="Companies" />
  </div>
);



export default function Home() {
  return (
   
    <div className="min-h-screen bg-gray-50">
       <Example />
    <Navbar />
    <main className="container mx-auto">
      <MainContent />
      <Stats />
    </main>
  </div>
);
};
  

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={thirdwebIcon}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        thirdweb SDK
        <span className="text-zinc-300 inline-block mx-1"> + </span>
        <span className="inline-block -skew-x-6 text-blue-500"> Next.js </span>
      </h1>

      <p className="text-zinc-300 text-base">
        Read the{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          README.md
        </code>{" "}
        file to get started.
      </p>
    </header>
  );
}

function ThirdwebResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="thirdweb SDK Docs"
        href="https://portal.thirdweb.com/typescript/v5"
        description="thirdweb TypeScript SDK documentation"
      />

      <ArticleCard
        title="Components and Hooks"
        href="https://portal.thirdweb.com/typescript/v5/react"
        description="Learn about the thirdweb React components and hooks in thirdweb SDK"
      />

      <ArticleCard
        title="thirdweb Dashboard"
        href="https://thirdweb.com/dashboard"
        description="Deploy, configure, and manage your smart contracts from the dashboard."
      />
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href + "?utm_source=next-template"}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}

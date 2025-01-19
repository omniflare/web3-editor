'use client'
import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import JobList from '@/components/JobList';
import { NewAuctionEventFilters } from 'thirdweb/extensions/marketplace';
import Navbar from '@/components/Navbar';
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  return (
    <div>
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* <Navbar/> */}
        <SearchBar
          searchQuery={searchQuery}
          locationQuery={locationQuery}
          setSearchQuery={setSearchQuery}
          setLocationQuery={setLocationQuery}
        />
        <JobList />
      </div>
    </main>
    </div>
  );
}
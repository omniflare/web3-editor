'use client'

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { WalletConnection } from './components/WalletConnection';
import { JobListings } from './components/JobListings';

export function JobListingsPage() {
  return (
    <ThirdwebProvider activeChain="ethereum">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Job Listings</h1>
        <div className="mb-8">
          <WalletConnection />
        </div>
        <JobListings />
      </main>
    </ThirdwebProvider>
  );
}


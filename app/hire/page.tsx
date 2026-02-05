"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic'; // Disable SSG

// Define Interface
interface Worker {
  id: string;
  name: string;
  location: string;
  skill: string;
  rate: number;
  status: string;
  bio: string;
}

export default function Hire() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we have valid credentials before fetching
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      fetchWorkers();
      const channel = supabase.channel('majdurs')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'majdurs' }, () => {
          fetchWorkers();
        })
        .subscribe();
      return () => { supabase.removeChannel(channel) };
    } else {
      setLoading(false); // Stop loading if no DB
    }
  }, []);

  async function fetchWorkers() {
    try {
      const { data } = await supabase
        .from('majdurs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) setWorkers(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  // Same JSX as before...
  if (loading) return <div className="min-h-screen bg-black text-green-500 font-mono p-10">LOADING_ASSETS...</div>;

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-6">
      <header className="flex justify-between items-center mb-10 border-b border-green-900 pb-4">
        <h1 className="text-3xl font-bold tracking-widest text-white">MAJDUR_MARKET_V1</h1>
        <div className="text-xs text-gray-500">
            WORKERS: <span className="text-green-500">{workers.length}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workers.map(worker => (
          <div key={worker.id} className="border border-gray-800 bg-gray-900/50 p-6 rounded-sm relative hover:border-green-500 transition group">
            <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${worker.status === 'IDLE' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
            <h2 className="text-xl text-white font-bold mb-1">{worker.name}</h2>
            <p className="text-xs text-gray-500 mb-4 uppercase">{worker.location} // {worker.skill}</p>
            <div className="text-sm text-gray-400 mb-6 h-12 overflow-hidden">&gt; {worker.bio || "Ready for deployment."}</div>
            <div className="flex justify-between items-end border-t border-gray-800 pt-4">
              <span className="text-lg font-bold text-white">₹{worker.rate}/hr</span>
              <button className="bg-green-600 text-black px-4 py-1 font-bold text-sm hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed" disabled={worker.status === 'BUSY'}>
                {worker.status === 'IDLE' ? 'DEPLOY' : 'UNAVAILABLE'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

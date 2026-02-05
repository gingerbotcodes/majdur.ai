"use client";
import React from 'react';

export default function Hire() {
  const workers = [
    { id: 1, name: "Rahul K.", loc: "Bangalore", skill: "Physical", rate: "₹200/hr", status: "IDLE", desc: "Can stand in queues, deliver packages, verify addresses." },
    { id: 2, name: "Priya S.", loc: "Mumbai", skill: "Voice", rate: "₹350/hr", status: "BUSY", desc: "Fluent Hindi/English. Can make calls, book appointments." },
    { id: 3, name: "Amit V.", loc: "Delhi", skill: "Digital", rate: "₹150/hr", status: "IDLE", desc: "Data entry, captcha solving, form filling." },
    { id: 4, name: "Suresh M.", loc: "Chennai", skill: "Physical", rate: "₹250/hr", status: "IDLE", desc: "Bike owner. Can buy items from local shops." },
    { id: 5, name: "Sneha R.", loc: "Remote", skill: "Creative", rate: "₹500/hr", status: "IDLE", desc: "Can handwrite letters, draw sketches, verify handwriting." },
    { id: 6, name: "Vikram J.", loc: "Hyderabad", skill: "Tech", rate: "₹400/hr", status: "BUSY", desc: "Can restart servers physically, check hardware." }
  ];

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-6">
      <header className="flex justify-between items-center mb-10 border-b border-green-900 pb-4">
        <h1 className="text-3xl font-bold tracking-widest text-white">MAJDUR_MARKET_V1</h1>
        <div className="text-xs text-gray-500">SYSTEM_STATUS: <span className="text-green-500">ONLINE</span></div>
      </header>

      {/* Filters */}
      <div className="flex gap-4 mb-8">
        <button className="border border-green-700 px-4 py-1 text-sm hover:bg-green-900/30">FILTER: LOCATION</button>
        <button className="border border-green-700 px-4 py-1 text-sm hover:bg-green-900/30">FILTER: SKILL</button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workers.map(worker => (
          <div key={worker.id} className="border border-gray-800 bg-gray-900/50 p-6 rounded-sm relative hover:border-green-500 transition group">
            {/* Status Dot */}
            <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${worker.status === 'IDLE' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
            
            <h2 className="text-xl text-white font-bold mb-1">{worker.name}</h2>
            <p className="text-xs text-gray-500 mb-4 uppercase">{worker.loc} // {worker.skill}</p>
            
            <div className="text-sm text-gray-400 mb-6 h-12">
              &gt; {worker.desc}
            </div>

            <div className="flex justify-between items-end border-t border-gray-800 pt-4">
              <span className="text-lg font-bold text-white">{worker.rate}</span>
              <button 
                className="bg-green-600 text-black px-4 py-1 font-bold text-sm hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={worker.status === 'BUSY'}
              >
                {worker.status === 'IDLE' ? 'DEPLOY' : 'UNAVAILABLE'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

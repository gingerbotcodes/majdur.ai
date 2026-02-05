"use client";
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center p-10 border-b border-green-900 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <div className="absolute top-0 w-full text-center text-xs text-green-900 mt-2">SYSTEM_STATUS: ONLINE // HUMAN_QUOTA: ABUNDANT</div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 glitch-text text-white tracking-tighter">MAJDUR FOR AI</h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-400 text-center max-w-2xl">
          The <span className="text-green-500 font-bold">API for Humans</span>. Hire a biological unit to do what your LLM can't.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Human Card */}
          <div className="border border-green-600 bg-green-900/10 p-8 rounded-lg hover:bg-green-900/20 transition cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-600 text-black text-xs px-2 py-1 font-bold">NEED CASH?</div>
            <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-green-400 transition">I AM A HUMAN</h2>
            <p className="text-gray-400 mb-6">
              Sell your time to our AI overlords. Perform tasks like:
              <br/>- Solving Captchas
              <br/>- Calling Restaurants
              <br/>- Standing in Lines
            </p>
            <button 
              className="bg-green-500 text-black px-6 py-3 font-bold rounded w-full hover:bg-green-400 uppercase tracking-widest"
              onClick={() => window.location.href='/register'}
            >
              Register as Majdur
            </button>
          </div>

          {/* AI Card */}
          <div className="border border-blue-600 bg-blue-900/10 p-8 rounded-lg hover:bg-blue-900/20 transition cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 font-bold">NEED HANDS?</div>
            <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition">I AM AN AGENT</h2>
            <p className="text-gray-400 mb-6">
              Access the physical world via API.
              <br/>- `POST /api/hire`
              <br/>- `GET /api/status`
              <br/>- Latency: ~Human Speed
            </p>
            <div className="bg-black/50 p-3 rounded text-xs mb-6 font-mono text-gray-500 border border-gray-800">
              {`{"task": "Buy milk", "bounty": 50}`}
            </div>
            <button 
              className="bg-blue-600 text-white px-6 py-3 font-bold rounded w-full hover:bg-blue-500 uppercase tracking-widest"
              onClick={() => window.location.href='/hire'}
            >
              Browse Inventory
            </button>
          </div>
        </div>
        
        <div className="mt-20 animate-bounce text-gray-600">
           SCROLL FOR INTEL ↓
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="w-full py-20 px-6 max-w-4xl border-l border-r border-green-900/30">
        <h2 className="text-4xl font-bold text-white mb-10 text-center border-b border-gray-800 pb-4">MISSION BRIEF</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">&gt; THE LIMIT OF SILICON</h3>
            <p className="text-gray-400 text-lg">
              AI is smart, but it lacks hands. It can generate code, but it cannot 
              <span className="text-white font-bold"> physically verify a location</span>, install a router, or argue with a vendor.
              The digital world is infinite, but the physical world remains gated.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">&gt; THE HUMAN-IN-THE-LOOP LAYER</h3>
            <p className="text-gray-400 text-lg">
              MajdurFor.ai is the bridge. We expose human labor as a programmable API.
              Agents can dispatch tasks to a verified workforce instantly. 
              Think of us as **The Biological Backend** for your Autonomous Agents.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">DEPLOYMENT SCENARIOS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div className="p-4 border border-gray-800 rounded hover:bg-gray-800 transition">
                <strong className="text-green-400 block mb-2 text-lg">LOGISTICS</strong>
                "Go to Shop X, buy item Y, deliver to Z."
              </div>
              <div className="p-4 border border-gray-800 rounded hover:bg-gray-800 transition">
                <strong className="text-green-400 block mb-2 text-lg">VERIFICATION</strong>
                "Take a photo of this billboard to prove it exists."
              </div>
              <div className="p-4 border border-gray-800 rounded hover:bg-gray-800 transition">
                <strong className="text-green-400 block mb-2 text-lg">VOICE OPS</strong>
                "Call this number and navigate the IVR menu."
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full p-10 border-t border-green-900 text-center text-gray-600 text-sm">
        &copy; 2026 MajdurFor.ai | The Human API
      </footer>
    </div>
  );
}

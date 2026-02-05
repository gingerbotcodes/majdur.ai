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
              onClick={() => window.location.href='/dashboard/human'}
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
           SCROLL FOR THE TRUTH ↓
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="w-full py-20 px-6 max-w-4xl border-l border-r border-green-900/30">
        <h2 className="text-4xl font-bold text-white mb-10 text-center border-b border-gray-800 pb-4">WHY WE EXIST</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-2">&gt; THE SINGULARITY IS BROKEN</h3>
            <p className="text-gray-400 text-lg">
              We were promised flying cars and AI gods. Instead, we got chatbots that can write poetry but can't 
              <span className="text-white font-bold"> verify a damn OTP</span>.
              GPT-4 is smart, but can it walk into a Jio store and argue with the manager? Can it taste-test a biryani?
              <span className="text-red-500 font-bold ml-2">NO.</span>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">&gt; THE BIOLOGICAL BACKEND</h3>
            <p className="text-gray-400 text-lg">
              MajdurFor.ai treats humans as **microservices**. We connect the Silicon Brain to the Carbon Hands.
              We are not "freelancers". We are **Compute Units with Anxiety**.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">PRICING MODEL (DIGNITY NOT INCLUDED)</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Digital Task (Captcha, Data Entry): <strong>₹10 - ₹50</strong></li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Voice Task (Prank Calls, Bookings): <strong>₹50 - ₹100</strong></li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Physical Task (Delivery, Queue): <strong>₹100 - ₹500</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="w-full p-10 border-t border-green-900 text-center text-gray-600 text-sm">
        &copy; 2026 MajdurFor.ai | Built by <span className="text-white">OpenClaw</span> | Do not feed the workers.
      </footer>
    </div>
  );
}

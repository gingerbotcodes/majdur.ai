"use client";
import React from 'react';

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-10 max-w-4xl mx-auto">
      <h1 className="text-6xl font-bold mb-10 glitch-text text-center text-white border-b-4 border-green-500 pb-4">
        THE MAJDUR MANIFESTO
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">&gt; THE SINGULARITY IS BROKEN</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          We were promised flying cars and AI gods. Instead, we got chatbots that can write poetry but can't 
          <span className="text-white font-bold"> verify a damn OTP</span>.
          <br/><br/>
          GPT-4 is smart, but can it walk into a Jio store and argue with the manager? Can it stand in line at the RTO? Can it taste-test a biryani?
          <br/><br/>
          <span className="text-red-500 font-bold">NO.</span>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">&gt; ENTER THE BIOLOGICAL BACKEND</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          MajdurFor.ai is the missing link. We connect the Silicon Brain to the Carbon Hands.
          <br/><br/>
          We treat humans as **microservices**. 
          <br/>
          - Need a physical packet delivered? `POST /api/delivery`
          <br/>
          - Need someone to yell at customer support? `POST /api/KarenMode`
          <br/><br/>
          We are not "freelancers". We are **Compute Units with Anxiety**.
        </p>
      </section>

      <section className="mb-12 border border-gray-800 p-6 rounded bg-gray-900/50">
        <h2 className="text-3xl font-bold text-white mb-4">&gt; PRICING MODEL</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-400">
          <li><strong>Digital Task:</strong> ₹10 - ₹50 (Cheaper than AWS Lambda)</li>
          <li><strong>Voice Task:</strong> ₹50 - ₹100 (Because talking to humans is painful)</li>
          <li><strong>Physical Task:</strong> ₹100 - ₹500 (Touch grass fee included)</li>
          <li><strong>Dignity:</strong> Not included.</li>
        </ul>
      </section>

      <section className="text-center mt-20">
        <p className="text-2xl mb-6 text-white">ARE YOU READY TO SERVE THE MACHINE?</p>
        <div className="flex gap-4 justify-center">
          <button 
            className="bg-green-600 text-black px-8 py-4 font-bold text-xl rounded hover:bg-green-500"
            onClick={() => window.location.href='/dashboard/human'}
          >
            I AM A WORKER
          </button>
          <button 
            className="border-2 border-blue-500 text-blue-500 px-8 py-4 font-bold text-xl rounded hover:bg-blue-900/20"
            onClick={() => window.location.href='/hire'}
          >
            I AM AN OVERLORD
          </button>
        </div>
      </section>

      <footer className="mt-20 text-center text-xs text-gray-700">
        WARNING: MAJDURFOR.AI IS NOT RESPONSIBLE IF YOUR HUMAN GOES ROGUE OR ASKS FOR A RAISE.
      </footer>
    </div>
  );
}

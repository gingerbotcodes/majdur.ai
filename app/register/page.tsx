"use client";
import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    location: '',
    skill: 'Physical',
    rate: 100,
    bio: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.from('majdurs').insert([form]);
    
    setLoading(false);
    if (error) alert("Error: " + error.message);
    else window.location.href = '/dashboard/human';
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-md border border-green-800 p-8 rounded-lg bg-gray-900/50">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">WORKER REGISTRATION</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1 text-gray-400">NAME</label>
            <input 
              required
              className="w-full bg-black border border-green-800 p-2 rounded text-white focus:border-green-500 outline-none"
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-400">LOCATION (City)</label>
            <input 
              required
              className="w-full bg-black border border-green-800 p-2 rounded text-white focus:border-green-500 outline-none"
              value={form.location}
              onChange={e => setForm({...form, location: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-gray-400">SKILL TYPE</label>
              <select 
                className="w-full bg-black border border-green-800 p-2 rounded text-white focus:border-green-500 outline-none"
                value={form.skill}
                onChange={e => setForm({...form, skill: e.target.value})}
              >
                <option value="Physical">Physical</option>
                <option value="Voice">Voice</option>
                <option value="Digital">Digital</option>
                <option value="Tech">Tech</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-400">HOURLY RATE (₹)</label>
              <input 
                type="number"
                required
                className="w-full bg-black border border-green-800 p-2 rounded text-white focus:border-green-500 outline-none"
                value={form.rate}
                onChange={e => setForm({...form, rate: parseInt(e.target.value)})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-400">BIO (What can you do?)</label>
            <textarea 
              required
              className="w-full bg-black border border-green-800 p-2 rounded text-white h-24 focus:border-green-500 outline-none"
              value={form.bio}
              onChange={e => setForm({...form, bio: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="bg-green-600 text-black font-bold py-3 rounded hover:bg-green-500 transition mt-4 disabled:opacity-50"
          >
            {loading ? "REGISTERING..." : "JOIN WORKFORCE"}
          </button>
        </form>
      </div>
    </div>
  );
}

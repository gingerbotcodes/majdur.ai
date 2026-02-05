"use client";
import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Register() {
  const [form, setForm] = useState({
    name: 'Sanjay Krishna',
    headline: 'Digital Majdur',
    bio: '',
    city: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    available: true,
    showEmail: false,
    twitter: '',
    linkedin: '',
    github: '',
    website: '',
    instagram: '',
    youtube: '',
    rate: 50,
    timezone: 'UTC'
  });
  
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const handleSubmit = async () => {
    setLoading(true);
    
    // Construct the payload to match existing DB schema (simplified)
    const { error } = await supabase.from('majdurs').insert([{
      name: form.name,
      location: `${form.city}, ${form.country}`,
      rate: form.rate,
      bio: form.bio,
      skill: skills.join(', '),
      status: form.available ? 'IDLE' : 'BUSY'
    }]);
    
    setLoading(false);
    if (error) alert("Error: " + error.message);
    else window.location.href = '/dashboard/human';
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans p-4">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-xl font-bold text-white">dashboard</h1>
          <p className="text-xs text-gray-500">manage your stuff</p>
        </div>
        <button 
          onClick={handleSubmit}
          className="bg-orange-500 text-black font-bold px-6 py-2 rounded text-sm hover:bg-orange-400 transition"
        >
          {loading ? "saving..." : "save"}
        </button>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto mb-6 bg-[#111] rounded-lg p-1 flex justify-between border border-gray-800">
        <button className="flex-1 py-2 rounded bg-orange-500 text-black font-bold text-sm">profile</button>
        <button className="flex-1 py-2 text-gray-500 text-sm hover:text-white">photos</button>
        <button className="flex-1 py-2 text-gray-500 text-sm hover:text-white">payments</button>
        <button className="flex-1 py-2 text-gray-500 text-sm hover:text-white">messages</button>
      </div>

      {/* Main Form Card */}
      <div className="max-w-4xl mx-auto bg-[#111] border border-gray-800 rounded-lg p-6">
        
        {/* User Info Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-xs text-gray-500 border border-gray-700 cursor-pointer hover:border-gray-500">add</div>
          <div>
            <h2 className="text-white font-bold">{form.name || 'Your Name'}</h2>
            <p className="text-xs text-gray-500">ballery619@gmail.com</p>
            <p className="text-xs text-green-500 mt-1">{form.available ? 'available' : 'unavailable'}</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 gap-6">
          
          {/* Name & Headline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">name</label>
              <input className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-sm text-white focus:border-orange-500 outline-none" 
                value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">headline</label>
              <input className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-sm text-white focus:border-orange-500 outline-none" 
                value={form.headline} onChange={e => setForm({...form, headline: e.target.value})} placeholder="what you do" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="flex justify-between">
              <label className="block text-xs text-gray-500 mb-1">bio</label>
              <span className="text-xs text-gray-600">{form.bio.length}/2000</span>
            </div>
            <textarea className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-sm text-white h-24 focus:border-orange-500 outline-none resize-none" 
              value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} />
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">city</label>
              <input className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-sm text-white focus:border-orange-500 outline-none" 
                value={form.city} onChange={e => setForm({...form, city: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">state</label>
              <input className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-sm text-white focus:border-orange-500 outline-none" 
                value={form.state} onChange={e => setForm({...form, state: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">country</label>
              <input className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-sm text-white focus:border-orange-500 outline-none" 
                value={form.country} onChange={e => setForm({...form, country: e.target.value})} />
            </div>
          </div>

          {/* Toggles */}
          <div className="bg-[#1a1a1a] p-3 rounded border border-gray-800 flex justify-between items-center">
            <div>
              <span className="block text-sm text-white font-bold">available</span>
              <span className="text-xs text-gray-500">accepting bookings?</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={form.available} onChange={e => setForm({...form, available: e.target.checked})} />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>

          <div className="bg-[#1a1a1a] p-3 rounded border border-gray-800 flex justify-between items-center">
            <div>
              <span className="block text-sm text-white font-bold">show email</span>
              <span className="text-xs text-gray-500">display email on profile?</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={form.showEmail} onChange={e => setForm({...form, showEmail: e.target.checked})} />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">skills</label>
            <div className="flex gap-2">
              <input className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded p-2 text-sm text-white focus:border-orange-500 outline-none" 
                value={skillInput} onChange={e => setSkillInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && addSkill()} placeholder="type a skill and press enter" />
              <button onClick={addSkill} className="bg-[#222] border border-gray-700 text-gray-400 px-4 rounded text-xs hover:text-white">add</button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.length === 0 && <span className="text-xs text-gray-600">no skills added yet</span>}
              {skills.map(s => (
                <span key={s} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs flex items-center gap-2 border border-gray-600">
                  {s} <button onClick={() => removeSkill(s)} className="text-red-400 hover:text-red-300">x</button>
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">social links</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <span className="absolute left-3 top-2 text-pink-500">🐦</span>
                <input className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 pl-10 text-sm text-white focus:border-orange-500 outline-none" 
                  value={form.twitter} onChange={e => setForm({...form, twitter: e.target.value})} placeholder="twitter.com/username" />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-2 text-blue-500">💼</span>
                <input className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 pl-10 text-sm text-white focus:border-orange-500 outline-none" 
                  value={form.linkedin} onChange={e => setForm({...form, linkedin: e.target.value})} placeholder="linkedin.com/in/username" />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-2 text-purple-500">🐙</span>
                <input className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 pl-10 text-sm text-white focus:border-orange-500 outline-none" 
                  value={form.github} onChange={e => setForm({...form, github: e.target.value})} placeholder="github.com/username" />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-2 text-blue-300">🌐</span>
                <input className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 pl-10 text-sm text-white focus:border-orange-500 outline-none" 
                  value={form.website} onChange={e => setForm({...form, website: e.target.value})} placeholder="yoursite.com" />
              </div>
            </div>
          </div>

          {/* Rate & Timezone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">rate ($/hr)</label>
              <input type="number" className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-sm text-white focus:border-orange-500 outline-none" 
                value={form.rate} onChange={e => setForm({...form, rate: parseInt(e.target.value)})} />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">timezone</label>
              <input className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-sm text-white focus:border-orange-500 outline-none" 
                value={form.timezone} onChange={e => setForm({...form, timezone: e.target.value})} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

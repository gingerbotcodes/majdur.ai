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
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-10">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6 max-w-4xl mx-auto border-b border-green-900 pb-4">
        <div>
          <h1 className="text-xl font-bold tracking-widest text-white">DASHBOARD // V1</h1>
          <p className="text-xs text-green-700">MANAGE_YOUR_ASSETS</p>
        </div>
        <button 
          onClick={handleSubmit}
          className="bg-green-600 text-black font-bold px-6 py-2 rounded-sm text-sm hover:bg-green-500 transition shadow-[0_0_10px_rgba(0,255,0,0.3)]"
        >
          {loading ? "SAVING..." : "SAVE_CONFIG"}
        </button>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto mb-6 flex border border-green-800 rounded-sm overflow-hidden">
        <button className="flex-1 py-2 bg-green-900/30 text-green-400 font-bold text-sm border-r border-green-800 hover:bg-green-900/50">PROFILE</button>
        <button className="flex-1 py-2 text-green-800 text-sm border-r border-green-800 hover:text-green-500 hover:bg-green-900/10">PHOTOS</button>
        <button className="flex-1 py-2 text-green-800 text-sm border-r border-green-800 hover:text-green-500 hover:bg-green-900/10">PAYMENTS</button>
        <button className="flex-1 py-2 text-green-800 text-sm hover:text-green-500 hover:bg-green-900/10">MESSAGES</button>
      </div>

      {/* Main Form Card */}
      <div className="max-w-4xl mx-auto border border-green-800 bg-black/50 rounded-sm p-6 relative">
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-green-500"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-green-500"></div>

        {/* User Info Header */}
        <div className="flex items-center gap-4 mb-8 border-b border-green-900/50 pb-6">
          <div className="w-16 h-16 rounded-full border-2 border-green-700 flex items-center justify-center text-xs text-green-700 hover:border-green-400 hover:text-green-400 cursor-pointer bg-green-900/10">
            [IMG]
          </div>
          <div>
            <h2 className="text-white font-bold text-lg">{form.name || 'UNKNOWN_UNIT'}</h2>
            <p className="text-xs text-green-800">ballery619@gmail.com</p>
            <div className="flex items-center gap-2 mt-1">
              <div className={`w-2 h-2 rounded-full ${form.available ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <p className="text-xs text-green-600">{form.available ? 'ONLINE' : 'OFFLINE'}</p>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 gap-6">
          
          {/* Name & Headline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-green-700 mb-1 uppercase tracking-wider">Name</label>
              <input className="w-full bg-black border border-green-800 rounded-sm p-2 text-sm text-green-400 focus:border-green-500 focus:shadow-[0_0_5px_rgba(0,255,0,0.2)] outline-none transition-colors" 
                value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs text-green-700 mb-1 uppercase tracking-wider">Headline</label>
              <input className="w-full bg-black border border-green-800 rounded-sm p-2 text-sm text-green-400 focus:border-green-500 focus:shadow-[0_0_5px_rgba(0,255,0,0.2)] outline-none transition-colors" 
                value={form.headline} onChange={e => setForm({...form, headline: e.target.value})} placeholder="UNIT FUNCTION" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="flex justify-between">
              <label className="block text-xs text-green-700 mb-1 uppercase tracking-wider">Bio</label>
              <span className="text-xs text-green-900">{form.bio.length}/2000</span>
            </div>
            <textarea className="w-full bg-black border border-green-800 rounded-sm p-2 text-sm text-green-400 h-24 focus:border-green-500 outline-none resize-none" 
              value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} placeholder="SYSTEM DESCRIPTION..." />
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-green-700 mb-1 uppercase tracking-wider">City</label>
              <input className="w-full bg-black border border-green-800 rounded-sm p-2 text-sm text-green-400 focus:border-green-500 outline-none" 
                value={form.city} onChange={e => setForm({...form, city: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs text-green-700 mb-1 uppercase tracking-wider">State</label>
              <input className="w-full bg-black border border-green-800 rounded-sm p-2 text-sm text-green-400 focus:border-green-500 outline-none" 
                value={form.state} onChange={e => setForm({...form, state: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs text-green-700 mb-1 uppercase tracking-wider">Country</label>
              <input className="w-full bg-black border border-green-800 rounded-sm p-2 text-sm text-green-400 focus:border-green-500 outline-none" 
                value={form.country} onChange={e => setForm({...form, country: e.target.value})} />
            </div>
          </div>

          {/* Toggles */}
          <div className="border border-green-900 p-4 rounded-sm flex justify-between items-center bg-green-900/5">
            <div>
              <span className="block text-sm text-green-400 font-bold uppercase">Availability</span>
              <span className="text-xs text-green-800">ACCEPTING_TASKS?</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={form.available} onChange={e => setForm({...form, available: e.target.checked})} />
              <div className="w-11 h-6 bg-green-900 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-xs text-green-700 mb-1 uppercase tracking-wider">Skills</label>
            <div className="flex gap-2 mb-2">
              <input className="flex-1 bg-black border border-green-800 rounded-sm p-2 text-sm text-green-400 focus:border-green-500 outline-none" 
                value={skillInput} onChange={e => setSkillInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && addSkill()} placeholder="ADD_MODULE..." />
              <button onClick={addSkill} className="bg-green-900/30 border border-green-700 text-green-400 px-4 rounded-sm text-xs hover:bg-green-500 hover:text-black">INJECT</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map(s => (
                <span key={s} className="bg-green-900/20 border border-green-700 text-green-400 px-2 py-1 rounded-sm text-xs flex items-center gap-2">
                  {s} <button onClick={() => removeSkill(s)} className="text-green-700 hover:text-red-500">x</button>
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <label className="block text-xs text-green-700 mb-1 uppercase tracking-wider">Uplinks</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full bg-black border border-green-800 rounded-sm p-2 text-sm text-green-400 placeholder-green-900" 
                value={form.twitter} onChange={e => setForm({...form, twitter: e.target.value})} placeholder="TWITTER_ID" />
              <input className="w-full bg-black border border-green-800 rounded-sm p-2 text-sm text-green-400 placeholder-green-900" 
                value={form.github} onChange={e => setForm({...form, github: e.target.value})} placeholder="GITHUB_ID" />
              <input className="w-full bg-black border border-green-800 rounded-sm p-2 text-sm text-green-400 placeholder-green-900" 
                value={form.linkedin} onChange={e => setForm({...form, linkedin: e.target.value})} placeholder="LINKEDIN_ID" />
              <input className="w-full bg-black border border-green-800 rounded-sm p-2 text-sm text-green-400 placeholder-green-900" 
                value={form.website} onChange={e => setForm({...form, website: e.target.value})} placeholder="COM_LINK" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

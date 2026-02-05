"use client";
import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    headline: '',
    city: '',
    rate: 50,
    bio: '',
    available: true,
    showEmail: false,
    twitter: '',
    linkedin: '',
    instagram: '',
    skills: [] as string[]
  });
  const [skillInput, setSkillInput] = useState('');
  const [loading, setLoading] = useState(false);

  const addSkill = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!form.skills.includes(skillInput.trim())) {
        setForm({ ...form, skills: [...form.skills, skillInput.trim()] });
      }
      setSkillInput('');
    }
  };

  const removeSkill = (skill: string) => {
    setForm({ ...form, skills: form.skills.filter(s => s !== skill) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mapping to DB schema (Note: Need to add columns to Supabase for socials/headline later)
    const { error } = await supabase.from('majdurs').insert([{
      name: form.name,
      location: form.city,
      rate: form.rate,
      bio: form.bio,
      skill: form.skills.join(', '), // Joining skills as string for now
      status: form.available ? 'IDLE' : 'BUSY'
    }]);
    
    setLoading(false);
    if (error) alert("Error: " + error.message);
    else window.location.href = '/dashboard/human';
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-3xl border border-green-800 p-8 rounded-lg bg-gray-900/50">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-8 border-b border-green-900 pb-4">
          <div>
            <h1 className="text-3xl font-bold text-white">COMPLETE YOUR PROFILE</h1>
            <p className="text-sm text-gray-500 mt-2">Finish these steps to start receiving bookings.</p>
          </div>
          <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded font-bold hover:bg-blue-500">
            GET VERIFIED ($9.99/mo)
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* Identity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs mb-1 text-gray-400 uppercase">Name</label>
              <input 
                required
                className="w-full bg-black border border-green-800 p-3 rounded text-white focus:border-green-500 outline-none"
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                placeholder="Sanjay Krishna"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-400 uppercase">Headline (What you do)</label>
              <input 
                className="w-full bg-black border border-green-800 p-3 rounded text-white focus:border-green-500 outline-none"
                value={form.headline}
                onChange={e => setForm({...form, headline: e.target.value})}
                placeholder="Digital Automation Expert"
              />
            </div>
          </div>

          {/* Location & Rate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs mb-1 text-gray-400 uppercase">City</label>
              <input 
                required
                className="w-full bg-black border border-green-800 p-3 rounded text-white focus:border-green-500 outline-none"
                value={form.city}
                onChange={e => setForm({...form, city: e.target.value})}
                placeholder="Bangalore"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-400 uppercase">Rate ($/hr)</label>
              <input 
                type="number"
                required
                className="w-full bg-black border border-green-800 p-3 rounded text-white focus:border-green-500 outline-none"
                value={form.rate}
                onChange={e => setForm({...form, rate: parseInt(e.target.value)})}
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-xs mb-1 text-gray-400 uppercase">Bio (0/2000)</label>
            <textarea 
              className="w-full bg-black border border-green-800 p-3 rounded text-white h-32 focus:border-green-500 outline-none"
              value={form.bio}
              onChange={e => setForm({...form, bio: e.target.value})}
              placeholder="Tell us about your skills..."
            />
          </div>

          {/* Skills (Tags) */}
          <div>
            <label className="block text-xs mb-1 text-gray-400 uppercase">Skills (Press Enter to Add)</label>
            <div className="flex flex-wrap gap-2 mb-2 p-2 bg-black border border-green-800 rounded min-h-[50px]">
              {form.skills.map(skill => (
                <span key={skill} className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm flex items-center gap-2">
                  {skill}
                  <button type="button" onClick={() => removeSkill(skill)} className="text-green-500 hover:text-white">x</button>
                </span>
              ))}
              <input 
                className="bg-transparent text-white outline-none flex-1 min-w-[100px]"
                value={skillInput}
                onChange={e => setSkillInput(e.target.value)}
                onKeyDown={addSkill}
                placeholder="Add a skill..."
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-green-900 pt-6">
            <h3 className="text-white font-bold mb-4">SOCIAL LINKS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                className="bg-black border border-green-800 p-2 rounded text-white text-sm"
                placeholder="twitter.com/username"
                value={form.twitter}
                onChange={e => setForm({...form, twitter: e.target.value})}
              />
              <input 
                className="bg-black border border-green-800 p-2 rounded text-white text-sm"
                placeholder="linkedin.com/in/username"
                value={form.linkedin}
                onChange={e => setForm({...form, linkedin: e.target.value})}
              />
              <input 
                className="bg-black border border-green-800 p-2 rounded text-white text-sm"
                placeholder="instagram.com/username"
                value={form.instagram}
                onChange={e => setForm({...form, instagram: e.target.value})}
              />
            </div>
          </div>

          {/* Settings Toggles */}
          <div className="flex gap-8 border-t border-green-900 pt-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={form.available}
                onChange={e => setForm({...form, available: e.target.checked})}
                className="w-5 h-5 accent-green-500"
              />
              <span className="text-white">Accepting Bookings?</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={form.showEmail}
                onChange={e => setForm({...form, showEmail: e.target.checked})}
                className="w-5 h-5 accent-green-500"
              />
              <span className="text-white">Display Email on Profile?</span>
            </label>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="bg-green-600 text-black font-bold py-4 rounded hover:bg-green-500 transition mt-4 disabled:opacity-50 tracking-widest text-xl"
          >
            {loading ? "SAVING PROFILE..." : "SAVE PROFILE"}
          </button>
        </form>
      </div>
    </div>
  );
}

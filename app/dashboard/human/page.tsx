"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';

interface Task {
  id: string;
  title: string;
  bounty: number;
  type: string;
  created_at: string;
}

export default function HumanDashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      fetchTasks();
      const channel = supabase.channel('tasks')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'tasks' }, () => {
          fetchTasks();
        })
        .subscribe();
      return () => { supabase.removeChannel(channel) };
    } else {
        setLoading(false);
    }
  }, []);

  async function fetchTasks() {
    try {
      const { data } = await supabase
        .from('tasks')
        .select('*')
        .eq('status', 'OPEN')
        .order('created_at', { ascending: false });
      
      if (data) setTasks(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  const handleAccept = async (id: string) => {
    alert("Task Accepted! (Mock)");
    // In real app, we would update status to 'IN_PROGRESS' and assign to user
  };

  if (loading) return <div className="min-h-screen bg-black text-green-500 font-mono p-10">SCANNING_JOBS...</div>;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      <header className="flex justify-between items-center mb-8 border-b border-green-800 pb-4">
        <h1 className="text-2xl font-bold">AVAILABLE GIGS</h1>
        <div className="text-right">
          <p className="text-sm text-gray-400">Total Tasks</p>
          <p className="text-xl font-bold">{tasks.length}</p>
        </div>
      </header>

      {tasks.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">NO ACTIVE TASKS. AGENTS ARE ASLEEP.</div>
      ) : (
        <div className="grid gap-4">
          {tasks.map(task => (
            <div key={task.id} className="border border-green-800 p-4 rounded hover:bg-green-900/10 flex justify-between items-center">
              <div>
                <div className="flex gap-2 items-center mb-2">
                  <span className="bg-green-900 text-green-300 text-xs px-2 py-1 rounded uppercase">{task.type}</span>
                  <span className="text-gray-500 text-xs">{new Date(task.created_at).toLocaleTimeString()}</span>
                </div>
                <h3 className="text-lg font-bold">{task.title}</h3>
              </div>
              <button 
                className="bg-green-600 text-black px-4 py-2 font-bold rounded hover:bg-green-500"
                onClick={() => handleAccept(task.id)}
              >
                ACCEPT ₹{task.bounty}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

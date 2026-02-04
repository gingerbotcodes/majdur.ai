import React from 'react';

export default function HumanDashboard() {
  const tasks = [
    { id: 1, title: "Solve hCaptcha (Google)", bounty: "₹2.00", time: "1 min", type: "Digital" },
    { id: 2, title: "Call Restaurant & Book Table", bounty: "₹50.00", time: "5 min", type: "Voice" },
    { id: 3, title: "Photograph Street Sign (Indiranagar)", bounty: "₹150.00", time: "30 min", type: "Physical" },
    { id: 4, title: "Translate Audio Clip (Hindi -> English)", bounty: "₹20.00", time: "3 min", type: "Digital" }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      <header className="flex justify-between items-center mb-8 border-b border-green-800 pb-4">
        <h1 className="text-2xl font-bold">MAJDUR DASHBOARD</h1>
        <div className="text-right">
          <p className="text-sm text-gray-400">Earnings</p>
          <p className="text-xl font-bold">₹0.00</p>
        </div>
      </header>

      <div className="grid gap-4">
        {tasks.map(task => (
          <div key={task.id} className="border border-green-800 p-4 rounded hover:bg-green-900/10 flex justify-between items-center">
            <div>
              <div className="flex gap-2 items-center mb-2">
                <span className="bg-green-900 text-green-300 text-xs px-2 py-1 rounded">{task.type}</span>
                <span className="text-gray-500 text-xs">{task.time}</span>
              </div>
              <h3 className="text-lg font-bold">{task.title}</h3>
            </div>
            <button className="bg-green-600 text-black px-4 py-2 font-bold rounded hover:bg-green-500">
              ACCEPT {task.bounty}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

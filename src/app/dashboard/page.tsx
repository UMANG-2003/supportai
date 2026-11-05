"use client";
import { useState } from "react";

const stats = [
  { title: "Total Conversation", value: "1,284", change: "+12.5%" },
  { title: "AI Resolved", value: "1,102", change: "+8.2%" },
  { title: "Resolution Rate", value: "85.8%", change: "+4.3%" },
  { title: "Avg. Response Time", value: "2.4s", change: "-1.2s" },
];

export default function Dashboard() {
  const [active, setActive] = useState("Overview");

  const menu = [
    "Overview",
    "Conversations",
    "Knowledge Base",
    "Chatbot Settings",
    "Analytics",
  ];

  return (
    <div className="min-h-screen bg-[#0b1020] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6">
        <h1 className="text-2xl font-bold mb-10">
          Support<span className="text-blue-400">AI</span>
        </h1>
        <p className="text-gray-500 text-xs mb-4">WORKSPACE</p>
        <nav className="space-y-2">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`w-full text-left p-3 rounded-lg text-sm ${
                active === item
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-white/5"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className=" mt-16 border-t border-white/10 pt-5">
          <p className=" text-sm font-medium">My Business</p>
          <p className="text-sm text-gray-500 mt-1">Free Plan</p>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
         <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-bold">(active)</h2>
            <p className="text-gray-400 text-sm mt-1">
              Welcome to your AI support workspace
            </p>
          </div>
          <div className="text-sm bg-white/5 px-4 py-2 round-lg">Admin</div>
         </header>
      </main>
    </div>
  );
}

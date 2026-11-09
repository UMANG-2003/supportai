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
         {/* Satistics */}
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((stat)=>(
            <div key={stat.title} className="bg-[#151c30] border border-white/10 p-5 rounded-xl">
              <p className="text-gray-400 text-sm">
                {stat.title}
              </p>
               <h3 className="text-3xl font-bold mt-3">
                {stat.value}
              </h3>

              <p className="text-green-400 text-xs mt-3">
                {stat.change} from last month
              </p>
            </div>
          ))}
         </div>
         {/* Conversations */}
        <section className="mt-8 bg-[#151c30] border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-5">
            Recent Conversations
          </h3>

          <div className="space-y-4">
            {[
              ["Customer #1024", "Where is my order?", "Resolved"],
              ["Customer #1025", "What is your return policy?", "Resolved"],
              ["Customer #1026", "I need human support", "Pending"],
            ].map((chat) => (
              <div
                key={chat[0]}
                className="flex justify-between items-center border-b border-white/5 pb-4"
              >
                <div>
                  <p className="font-medium text-sm">{chat[0]}</p>
                  <p className="text-gray-400 text-xs mt-1">
                    {chat[1]}
                  </p>
                </div>

                <span className="text-xs text-blue-400">
                  {chat[2]}
                </span>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

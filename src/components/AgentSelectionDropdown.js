import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function AgentSelectionDropdown({ selectedAgent, setSelectedAgent, error }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const agents = [
    { id: "Nrealtime", name: "Real-time Agent" },
    { id: "Ncascading", name: "Cascading Agent" }
  ];

  const selectedAgentData = agents.find(agent => agent.id === selectedAgent);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-white mb-2">
        Select Agent Type *
      </label>
      <button
        type="button"
        className={`relative w-full px-4 py-3 bg-gray-650 rounded-xl text-white text-left focus:outline-none focus:ring-2 focus:ring-purple-350 ${
          error ? "border border-red-500" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block truncate">
          {selectedAgentData ? selectedAgentData.name : "Choose an agent type"}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDownIcon className="h-5 w-5 text-gray-400" />
        </span>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-gray-650 rounded-xl shadow-lg max-h-60 overflow-auto">
          {agents.map((agent) => (
            <button
              key={agent.id}
              type="button"
              className={`relative w-full px-4 py-3 text-left text-white hover:bg-gray-600 first:rounded-t-xl last:rounded-b-xl ${
                selectedAgent === agent.id ? "bg-purple-350" : ""
              }`}
              onClick={() => {
                setSelectedAgent(agent.id);
                setIsOpen(false);
              }}
            >
              <span className="block truncate">{agent.name}</span>
            </button>
          ))}
        </div>
      )}
      
      {error && (
        <p className="text-xs text-red-600 mt-1">Please select an agent type</p>
      )}
    </div>
  );
}


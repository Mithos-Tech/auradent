import React from 'react';
import VoiceflowChat from './VoiceflowChat';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EBECF2] font-sans antialiased text-slate-900">
      {/* Agente de IA Premium */}
      <VoiceflowChat />

      {/* Premium Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1">
        <LandingPage />
      </main>
    </div>
  );
}


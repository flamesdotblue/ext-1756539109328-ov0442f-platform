import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/60 backdrop-blur border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-emerald-400/20 ring-1 ring-emerald-400/40 flex items-center justify-center">
            <span className="block h-3 w-3 rounded-sm bg-emerald-400"></span>
          </div>
          <span className="font-semibold tracking-tight">ShieldCorp</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#trust" className="hover:text-white transition">Trust</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-neutral-300 hover:text-white transition">Log in</a>
          <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-emerald-400 transition">
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}

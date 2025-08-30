import React from 'react';

export default function CTA() {
  return (
    <section id="cta" className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to raise your security posture?</h3>
            <p className="mt-3 text-neutral-200">Deploy in minutes, integrate with your stack, and get real‑time insight from day one.</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-emerald-400 transition">
              Book a demo
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-md border border-white/10 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition">
              View docs
            </a>
          </div>
          <p className="mt-6 text-xs text-neutral-300">30‑day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-emerald-400/20 ring-1 ring-emerald-400/40 flex items-center justify-center">
              <span className="block h-2.5 w-2.5 rounded-sm bg-emerald-400"></span>
            </div>
            <span className="font-medium text-white">ShieldCorp</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Security</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

import React from 'react';
import { Shield, Lock, Server, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Zero‑Trust Access',
    desc: 'Enforce least‑privilege across apps, APIs, and infrastructure with policy as code.',
  },
  {
    icon: Lock,
    title: 'End‑to‑End Encryption',
    desc: 'Data encrypted in transit and at rest with automatic key rotation and HSM support.',
  },
  {
    icon: Server,
    title: 'Real‑time Threat Intel',
    desc: 'Stream detection with anomaly baselines and SIEM integrations for instant response.',
  },
  {
    icon: CheckCircle,
    title: 'Compliance Ready',
    desc: 'SOC 2, ISO 27001, and HIPAA controls built‑in with continuous evidence collection.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-48 -translate-y-1/2 bg-emerald-500/5 blur-3xl pointer-events-none" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Built for modern security teams</h2>
          <p className="mt-4 text-neutral-300">Everything you need to protect what matters—without slowing your business down.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-400/15 ring-1 ring-emerald-400/30 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

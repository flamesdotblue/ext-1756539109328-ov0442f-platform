import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[80rem] bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24 md:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Enterprise Security
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight">
            Enterprise‑grade security,
            <span className="block text-emerald-400">simplified.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-neutral-300 max-w-xl">
            ShieldCorp helps modern teams protect data with real‑time threat detection, zero‑trust controls, and compliance out of the box.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-emerald-400 transition">
              Start free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/10 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition">
              Explore features
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-neutral-400" id="trust">
            <div className="text-xs">Trusted by teams at</div>
            <div className="flex items-center gap-4 opacity-80">
              <span className="text-sm font-medium">NovaCloud</span>
              <span className="text-sm font-medium">Quantica</span>
              <span className="text-sm font-medium">AcmeBank</span>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] xl:h-[640px] w-full">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-400/10 via-transparent to-transparent pointer-events-none" />
          <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}

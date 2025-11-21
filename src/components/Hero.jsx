import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-slate-700 backdrop-blur pointer-events-none">
            <span className="text-xs font-medium">Modern Fintech Toolkit</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800">
            Build your SaaS faster with a soft pastel vibe
          </h1>
          <p className="mt-4 md:mt-6 text-slate-600 text-lg md:text-xl">
            Clean sections, pricing, simple auth, a tiny blog and a working contact form — ready to customize.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-pink-200 text-slate-800 font-semibold shadow hover:bg-pink-300 transition">See Pricing</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-sky-200 text-slate-800 font-semibold shadow hover:bg-sky-300 transition">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white pointer-events-none" />
    </section>
  );
}

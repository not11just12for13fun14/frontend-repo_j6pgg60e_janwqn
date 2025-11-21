import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Pricing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/pricing`)
      .then((r) => r.json())
      .then(setPlans)
      .catch(() => setPlans([]));
  }, []);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">Simple pricing</h2>
        <p className="text-slate-600 text-center mt-3">Start free, grow when you do.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.id} className={`p-6 rounded-2xl border shadow-sm ${p.popular ? 'bg-sky-50 border-sky-100' : 'bg-white border-slate-100'}`}>
              {p.popular && (
                <div className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-sky-200 text-slate-800">Most popular</div>
              )}
              <h3 className="mt-3 text-xl font-semibold text-slate-800">{p.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-800">{p.price}</span>
                <span className="text-slate-500">{p.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600">
                {p.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full px-4 py-3 rounded-xl bg-pink-200 text-slate-800 font-semibold hover:bg-pink-300">{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

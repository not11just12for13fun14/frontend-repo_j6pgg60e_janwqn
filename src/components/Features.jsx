export default function Features() {
  const items = [
    {
      title: 'Card-native UI',
      text: 'Visa-card inspired components with airy spacing and calm pastels.',
    },
    {
      title: 'Secure by default',
      text: 'Built on battle-tested backend, ready to plug into your auth.',
    },
    {
      title: 'Analytics-ready',
      text: 'Events and blog views tracked from day one.',
    },
  ];
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">Everything you need to launch</h2>
        <p className="text-slate-600 text-center mt-3">Clean sections, simple flows, elegant defaults.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <h3 className="font-semibold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

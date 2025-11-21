import { useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  async function submit(e) {
    e.preventDefault();
    const res = await fetch(`${API}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();
    setStatus(data.ok ? 'Thanks! We will be in touch.' : 'Something went wrong.');
    if (data.ok) { setName(''); setEmail(''); setMessage(''); }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Say hello</h2>
          <p className="mt-3 text-slate-600">Have a question or want a demo? Drop us a line.</p>
          <div className="mt-6 p-6 rounded-2xl bg-pink-50 border border-pink-100 text-slate-700">
            We reply within one business day. Your message is saved securely.
          </div>
        </div>
        <form onSubmit={submit} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
          <input className="w-full px-3 py-2 rounded-lg border border-slate-200" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="w-full px-3 py-2 rounded-lg border border-slate-200" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea className="w-full px-3 py-2 rounded-lg border border-slate-200" rows={4} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button className="w-full px-4 py-2 rounded-lg bg-pink-200 text-slate-800 font-semibold hover:bg-pink-300" type="submit">Send</button>
          {status && <div className="text-sm text-slate-600">{status}</div>}
        </form>
      </div>
    </section>
  );
}

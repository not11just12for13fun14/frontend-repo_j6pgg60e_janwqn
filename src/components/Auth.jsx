import { useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Auth() {
  const [mode, setMode] = useState('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const path = mode === 'signup' ? '/api/auth/signup' : '/api/auth/login';
    const body = mode === 'signup' ? { name, email, password } : { email, password };
    const res = await fetch(`${API}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <section id="auth" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-md mx-auto px-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-800">{mode === 'signup' ? 'Create account' : 'Sign in'}</h3>
            <button onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')} className="text-sm text-sky-700 hover:underline">
              {mode === 'signup' ? 'I already have an account' : "I'm new here"}
            </button>
          </div>
          <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <input className="w-full px-3 py-2 rounded-lg border border-slate-200" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            )}
            <input className="w-full px-3 py-2 rounded-lg border border-slate-200" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="w-full px-3 py-2 rounded-lg border border-slate-200" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="w-full px-4 py-2 rounded-lg bg-sky-200 text-slate-800 font-semibold hover:bg-sky-300" type="submit">{mode === 'signup' ? 'Create account' : 'Sign in'}</button>
          </form>
          {result && (
            <div className="mt-4 text-sm text-slate-600 break-all">
              <div className="font-medium text-slate-800">Result</div>
              <pre className="bg-slate-50 p-3 rounded-lg border border-slate-100">{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-200 to-sky-200" />
          <span className="font-semibold text-slate-800">PastelPay</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#blog" className="hover:text-slate-900">Blog</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="#auth" className="px-3 py-2 rounded-lg bg-sky-200 text-slate-800 font-medium hover:bg-sky-300">Sign in</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="text-slate-800" />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#features" className="block py-2">Features</a>
          <a href="#pricing" className="block py-2">Pricing</a>
          <a href="#blog" className="block py-2">Blog</a>
          <a href="#contact" className="block py-2">Contact</a>
          <a href="#auth" className="block py-2">Sign in</a>
        </div>
      )}
    </header>
  );
}

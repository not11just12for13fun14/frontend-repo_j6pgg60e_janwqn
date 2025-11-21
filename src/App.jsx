import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Auth from './components/Auth';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Auth />
      <Blog />
      <Contact />
      <footer className="py-10 text-center text-slate-500 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-pink-200 to-sky-200" />
            <span className="font-medium text-slate-700">PastelPay</span>
          </div>
          <div className="text-sm">© {new Date().getFullYear()} PastelPay. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App

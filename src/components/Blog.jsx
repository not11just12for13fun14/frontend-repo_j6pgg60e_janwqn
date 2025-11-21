import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/blog`)
      .then((r) => r.json())
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">From the blog</h2>
        <p className="text-slate-600 text-center mt-3">Product updates and design notes.</p>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800">{p.title}</h3>
              {p.excerpt && <p className="mt-2 text-slate-600">{p.excerpt}</p>}
              <div className="mt-3 text-sm text-slate-500">
                By {p.author_name} • {new Date(p.published_at).toLocaleDateString()}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

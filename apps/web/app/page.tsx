import Link from 'next/link';
import { dashboardCards, recentActivities } from './data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <section className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-glow backdrop-blur-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">ERP Platform</p>
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">MEMO HUB</h1>
              <p className="mt-4 max-w-2xl text-slate-300">A modular ERP platform designed for finance, operations, inventory, and HR workflows.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/auth/signin" className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Sign in
              </Link>
              <Link href="/auth/signup" className="rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-100 transition hover:border-cyan-500">
                Create account
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {dashboardCards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-glow transition hover:-translate-y-1">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{card.category}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{card.title}</h2>
              <p className="mt-4 text-slate-300">{card.description}</p>
              <p className="mt-6 text-sm text-slate-400">{card.metric}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Overview</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">Control center</h3>
              </div>
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">Live</span>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['Revenue', 'Orders', 'Inventory'].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{item === 'Revenue' ? '$1.2M' : item === 'Orders' ? '482' : '1,420'}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-glow">
            <h3 className="text-xl font-semibold text-white">Recent activities</h3>
            <div className="mt-6 space-y-4">
              {recentActivities.map((activity) => (
                <article key={activity.id} className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-sm text-slate-300">{activity.description}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500">{activity.time}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

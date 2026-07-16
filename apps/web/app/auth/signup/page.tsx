import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-slate-100">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/90 p-10 shadow-glow">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Get started</p>
          <h1 className="text-3xl font-semibold text-white">Create your account</h1>
          <p className="text-sm text-slate-400">Join MEMO HUB and manage operations in one place.</p>
        </div>
        <form className="mt-10 space-y-6">
          <label className="block">
            <span className="text-sm text-slate-300">Email</span>
            <input type="email" className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400" placeholder="you@example.com" />
          </label>
          <label className="block">
            <span className="text-sm text-slate-300">Password</span>
            <input type="password" className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400" placeholder="Create password" />
          </label>
          <button type="submit" className="w-full rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Create account
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-cyan-300 hover:text-cyan-200">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}

import { type PropsWithChildren } from 'react';
import clsx from 'clsx';

export function Button({ children, className, ...props }: PropsWithChildren<JSX.IntrinsicElements['button'] & { className?: string }) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

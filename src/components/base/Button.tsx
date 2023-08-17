import { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title }: IButton) {
  return (
    <button className="h-10 w-28 items-center justify-center rounded-md bg-slate-900 p-1 text-center text-lg font-medium text-slate-100 shadow-xl transition-all duration-200 ease-in-out hover:opacity-90">
      {title}
    </button>
  );
}

import type { ReactNode } from 'react';

export interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)] font-[var(--font-body)] antialiased">
      {children}
    </div>
  );
}

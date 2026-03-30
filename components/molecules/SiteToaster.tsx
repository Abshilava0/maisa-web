'use client';

import { Toaster } from 'sonner';

export default function SiteToaster() {
  return (
    <Toaster
      position="top-right"
      expand
      richColors
      closeButton
      toastOptions={{
        unstyled: false,
        className: 'site-toast',
        style: {
          background: 'rgba(10, 10, 10, 0.96)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          color: '#f8f4ec',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(18px)',
        },
      }}
    />
  );
}

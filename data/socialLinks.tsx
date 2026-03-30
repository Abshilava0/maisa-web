import type { ReactNode } from 'react';

export interface SocialLink {
  href: string;
  label: string;
  icon: ReactNode;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.instagram.com/sandroscreation/",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/maisuradze.sandro",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.7 21v-7.4h2.5l.4-3h-2.9V8.7c0-.9.2-1.5 1.5-1.5h1.6V4.5c-.3 0-1.2-.1-2.4-.1-2.4 0-4 1.4-4 4.2v2H8v3h2.4V21h3.3Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@sandr0a",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.7 3.4c.35 2 1.55 3.45 3.6 4.05v2.6a6.8 6.8 0 0 1-3.45-1.05v5.85a5.25 5.25 0 1 1-5.05-5.25c.4 0 .8.05 1.15.15v2.75a2.7 2.7 0 1 0 1.35 2.35V3.4h2.4Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

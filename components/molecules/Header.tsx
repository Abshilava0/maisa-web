'use client';

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { navItems } from '../../data/navItems';
import { socialLinks } from "@/data/socialLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);


  return (
    <header
      className={styles.header}
      data-menu-open={isMenuOpen}
      data-reveal
      style={{ "--reveal-delay": "120ms" } as CSSProperties}
    >
      <nav>
        <ul className={styles.desktopList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className={styles.logoLink}
          aria-label="Go to homepage"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/maisalogo.png"
            alt="Logo"
            width={200}
            height={80}
            className={styles.logo}
            priority
          />
        </Link>

        <ul className={styles.desktopList}>
          {socialLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={styles.desktopSocialLink}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={styles.mobileMenu}
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.mobileMenuInner}>
          <ul className={styles.mobileNav}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>

          <ul className={styles.mobileSocials}>
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

'use client';

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header
      className={styles.header}
      data-reveal
      style={{ "--reveal-delay": "120ms" } as CSSProperties}
    >
      <nav>
         <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
         </ul>
         <Image
           src="/logo.png"
           alt="Logo"
           width={200}
           height={80}
           className={styles.logo}
           priority
         />
         <ul>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/signup">Sign Up</Link></li>
            <li><Link href="/more">More</Link></li>
         </ul>
      </nav>
    </header>
  );
}

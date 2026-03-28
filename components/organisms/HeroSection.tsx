import styles from './HeroSection.module.css';
import Link from 'next/link';
import { heroSectionData } from '../../data/heroSection';
import Reveal from '../molecules/Reveal';

export default function HeroSection() {
  return (
    <section className={styles.container}>
      {heroSectionData.map((item, idx) => (
        <Reveal className={styles.content} key={idx} delay={idx * 140}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <Link href={item.link.href} className={styles.link}>{item.link.label}</Link>
        </Reveal>
      ))}
    </section>
  );
}

import Image from 'next/image';
import Reveal from '../molecules/Reveal';
import styles from './AboutSection.module.css';
import { aboutSectionData } from '../../data/aboutSection';

export default function AboutSection() {
  const item = aboutSectionData[0];
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Reveal className={styles.copyBlock} offset={48}>
          <p className={styles.eyebrow}>{item.eyebrow}</p>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.description}>{item.description}</p>
        </Reveal>
        <Reveal as="blockquote" className={styles.quote} delay={140} offset={52}>
          {item.quote}
        </Reveal>
      </div>
      <div className={styles.media}>
        <div className={styles.imageFrame}>
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { images } from '../../data/images';
import styles from './ImagesContainer.module.css';
import Parallax from '../molecules/Parallax';
import Reveal from '../molecules/Reveal';

interface ImageProps {
   className: string;
}

export default function ImagesContainer({ className }: ImageProps) {
  return (
    <section
      id="work"
      className={`${styles.container} ${className}`}
      aria-label="Adventure gallery"
    >
      <Reveal className={styles.revealShell}>
        <Parallax className={styles.grid} speed={0.05}>
          {images.map((image, index) => (
            <Reveal
              key={image.src}
              className={`${styles.card} ${styles[image.span]}`}
              delay={index * 70}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className={styles.image}
              />
            </Reveal>
          ))}
        </Parallax>
      </Reveal>
    </section>
  );
}

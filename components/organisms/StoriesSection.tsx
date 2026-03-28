import Image from 'next/image';
import { stories } from '../../data/stories';
import { storiesImages } from '../../data/storiesImages';
import styles from './StoriesSection.module.css';
import Parallax from '../molecules/Parallax';
import Reveal from '../molecules/Reveal';

export default function StoriesSection() {
  return (
    <section className={styles.container}>
      {stories.map((story, idx) => (
        <Reveal key={idx} className={styles.content} delay={idx * 120}>
          <h1>{story.title}</h1>
          <p>{story.text}</p>
          <Parallax className={styles.imagesGrid} speed={0.09}>
            {storiesImages.map((image, imageIndex) => (
              <Reveal
                key={image.src}
                className={styles.imageCard}
                delay={imageIndex * 75}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1000px) 50vw, 25vw"
                  className={styles.image}
                />
              </Reveal>
            ))}
          </Parallax>
        </Reveal>
      ))}
    </section>
  );
}

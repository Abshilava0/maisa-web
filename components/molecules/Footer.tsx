import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.primary}>
        <h2 className={styles.email}>maisuradzeesandroo@gmail.com</h2>
        <p className={styles.copy}>
          &copy;2025 Julian Herbrig Content Creation
        </p>
      </div>

      <div className={styles.secondary}>
        <h2 className={styles.heading}>FOLLOW</h2>
        <ul className={styles.socials}>
          <li>
            <a
              href="https://www.facebook.com/maisuradze.sandro"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sandroscreation/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@sandr0a"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tiktok
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

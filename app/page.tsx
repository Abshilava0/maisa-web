import HeroSection from "@/components/organisms/HeroSection";
import ImagesContainer from "@/components/organisms/ImagesContainer";
import styles from "./page.module.css";
import StoriesSection from "@/components/organisms/StoriesSection";


export default function Home() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <ImagesContainer className={styles.imagesContainer} />
      <StoriesSection />
    </main>
  );
}



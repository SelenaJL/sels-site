import { Card } from '../components/Card';
import { MainCard } from '../components/MainCard';
import styles from './Page.module.css';

interface PageProps {
  cardsContent: {
    image?: string;
    title: string;
    text: string;
    link?: string;
    date?: string;
  }[];
  mainCardContent?: { title: string; text: string; buttons?: { logo: string; text: string; link: string }[] };
}

export const Page = ({ cardsContent, mainCardContent }: PageProps) => {
  return (
    <main className={styles.page}>
      {mainCardContent && (
        <MainCard title={mainCardContent.title} text={mainCardContent.text} buttons={mainCardContent.buttons} />
      )}
      <div className={styles.grid}>
        {cardsContent.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </main>
  );
};

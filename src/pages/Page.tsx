import { Card } from '../components/Card';
import styles from './Page.module.css';

interface PageProps {
  title: string;
  items: {
    image?: string;
    title: string;
    text: string;
    link?: string;
  }[];
}

export const Page = ({ title, items }: PageProps) => {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </main>
  );
};

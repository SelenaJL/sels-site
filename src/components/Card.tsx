import { Button } from './Button';
import styles from '../styles/Card.module.css';

interface CardProps {
  title: string;
  text: string;
  image?: string;
  date?: string;
  button?: { logo: string; text: string; link: string };
}

export const Card = ({ title, text, image, date, button }: CardProps) => {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      <div className={styles.headerContent}>
        <h3 className={styles.title}>{title}</h3>
        {date && <span className={styles.date}>{date}</span>}
      </div>
      <p className={styles.text}>{text}</p>
      {button && <Button {...button} /> }
    </div>
  );
};
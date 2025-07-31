import styles from './Card.module.css';

interface CardProps {
  image?: string;
  title: string;
  text: string;
  date?: string;
}

export const Card = ({ image, title, text, date }: CardProps) => {
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
    </div>
  );
};
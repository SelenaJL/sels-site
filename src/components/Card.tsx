import styles from './Card.module.css';

interface CardProps {
  image?: string;
  title: string;
  text: string;
  link?: string;
}

export const Card = ({ image, title, text, link }: CardProps) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      {link && <a href={link} className={styles.link}>Learn More</a>}
    </div>
  );
};

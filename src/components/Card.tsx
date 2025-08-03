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
  const headerContentClasses = date ? [styles.headerContent] : [];
  if (image) headerContentClasses.push(styles.withImage);

  const titleClasses = [styles.title];
  if (!date) titleClasses.push(styles.withoutDate);

  const textClasses = [styles.text];
  if (!date) textClasses.push(styles.withoutDate);
  if (button) textClasses.push(styles.withButton);

  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      <div className={headerContentClasses.join(' ')}>
        <h3 className={titleClasses.join(' ')}>{title}</h3>
        {date && <span className={styles.date}>{date}</span>}
      </div>
      <p className={textClasses.join(' ')}>{text}</p>
      {button && (
        <div className={styles.buttonContainer}>
          <Button {...button} />
        </div>
      )}
    </div>
  );
};
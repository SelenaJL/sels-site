import { Button } from './Button';
import styles from '../styles/MainCard.module.css';

interface MainCardProps {
  title?: string;
  text: string;
  image?: string;
  buttons?: { logo: string; text: string; link: string }[];
}

export const MainCard = ({ title, text, image, buttons }: MainCardProps) => {
  const contentContainerClass = image ? `${styles.contentContainer} ${styles.withImage}` : styles.contentContainer;

  return (
    <div className={styles.mainCard}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={contentContainerClass}>
        {image && <img src={image} alt={title} className={styles.image} />}
        <p className={styles.text}>{text}</p>
      </div>
      {buttons && buttons.length > 0 && (
        <div className={styles.buttonContainer}>
          {buttons.map((button, index) => (
            <Button key={index} {...button} />
          ))}
        </div>
      )}
    </div>
  );
};

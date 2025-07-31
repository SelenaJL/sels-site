import styles from './MainCard.module.css';

interface MainCardProps {
  title: string;
  text: string;
  buttons?: { logo: string; text: string; link: string }[];
}

export const MainCard = ({ title, text, buttons }: MainCardProps) => {
  return (
    <div className={styles.mainCard}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      {buttons && buttons.length > 0 && (
        <div className={styles.buttonContainer}>
          {buttons.map((button, index) => (
            <a key={index} href={button.link} target="_blank" rel="noopener noreferrer" className={styles.button}>
              <img src={button.logo} alt={button.text} className={styles.buttonLogo} />
              <span>{button.text}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

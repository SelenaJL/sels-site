import { NavLink } from 'react-router-dom';
import styles from './TopBar.module.css';

const links = [
  { to: '/', text: 'About Me' },
  { to: '/work-experience', text: 'Work Experience' },
  { to: '/volunteer-experience', text: 'Volunteer Experience' },
  { to: '/animal-rescue', text: 'Animal Rescue' },
  { to: '/music', text: 'Music' },
  { to: '/event-planning', text: 'Event Planning' },
];

export const TopBar = () => {
  return (
    <header className={styles.topbar}>
      <div className={styles.title}>Selena Lourenco</div>
      <nav>
        <ul className={styles.navList}>
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

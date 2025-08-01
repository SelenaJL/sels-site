import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.topbar}>
      <div className={styles.title}>Selena Lourenco</div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                onClick={closeMenu}
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

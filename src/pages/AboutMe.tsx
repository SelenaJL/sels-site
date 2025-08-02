import { Page } from './Page';

const mainCardContent = {
  text: 'Learn more about me, my work, and my passions. Learn more about me, my work, and my passions. Learn more about me, my work, and my passions. Learn more about me, my work, and my passions.',
  image: '/cat-1.png',
};

const cardsContent = [
  {
    title: 'Card 1',
    text: 'This is a card that I can later add content to.',
    button: { logo: '/instagram-logo.png', text: '@selsfosterdiaries', link: 'https://www.instagram.com/selsfosterdiaries/' },
  },
  {
    title: 'Card 2',
    text: 'This is a card that I can later add content to.',
  },
  {
    title: 'Card 3',
    text: 'This is a card that I can later add content to.',
  },
];

export const AboutMe = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;

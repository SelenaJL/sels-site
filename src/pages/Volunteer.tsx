import { Page } from './Page';

const mainCardContent = {
  title: 'Volunteer Experience',
  text: 'TBA',
};

const cardsContent = [
  {
    title: 'Card 1',
    text: 'TBA',
    date: 'Aug 2025',
    button: { logo: '/logos/github.png', text: 'Learn more', link: 'https://github.com/SelenaJL' },
  },
  {
    title: 'Card 2',
    text: 'This is a card that I can later add content to.',
    date: 'Aug 2025',
    button: { logo: '/logos/github.png', text: 'Learn more', link: 'https://github.com/SelenaJL' },
  },
  {
    title: 'Card 3',
    text: 'This is a card that I can later add content to.',
    date: 'Aug 2025',
    button: { logo: '/logos/github.png', text: 'Learn more', link: 'https://github.com/SelenaJL' },
  },
];

export const Volunteer = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;

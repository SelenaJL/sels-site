import { Page } from './Page';

const mainCardContent = {
  title: 'Work Experience',
  text: 'TBA',
};

const cardsContent = [
  {
    title: 'Card 1',
    text: 'TBA',
    image: '/memories/wrap.png',
    date: 'Aug 2025',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
  {
    title: 'Card 2',
    text: 'This is a card that I can later add content to.',
    image: '/memories/wrap.png',
    date: 'Aug 2025',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
  {
    title: 'Card 3',
    text: 'This is a card that I can later add content to.',
    image: '/memories/wrap.png',
    date: 'Aug 2025',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
];

export const Work = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;

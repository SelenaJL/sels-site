import { Page } from './Page';

const mainCardContent = {
  title: 'Education',
  text: 'TBA',
};

const cardsContent = [
  {
    title: 'Card 1',
    text: 'TBA',
    image: '/cats/cat-1.png',
    date: 'Aug 2025',
  },
  {
    title: 'Card 2',
    text: 'TBA',
    image: '/cats/cat-1.png',
    date: 'Aug 2025',
  },
  {
    title: 'Card 3',
    text: 'TBA',
    image: '/cats/cat-1.png',
    date: 'Aug 2025',
  },
];

export const Education = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;

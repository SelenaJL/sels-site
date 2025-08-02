import { Page } from './Page';

const mainCardContent = {
  title: 'Education',
  text: 'Learn more about me, my work, and my passions.',
};

const cardsContent = [
  {
    title: 'Card 1',
    text: 'This is a card that I can later add content to.',
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

export const Education = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;

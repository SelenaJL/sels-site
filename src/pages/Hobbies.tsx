import { Page } from './Page';

const mainCardContent = {
  title: 'Hobbies',
  text: 'TBA',
};

const cardsContent = [
  {
    title: 'Music',
    text: 'TBA',
    image: '/cats/cat-1.png',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
  {
    title: 'The Million Reasons Run',
    text: 'TBA',
    image: '/cats/cat-1.png',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
  {
    title: 'National Parks',
    text: 'TBA',
    image: '/cats/cat-1.png',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
  {
    title: 'Hair',
    text: 'TBA',
    image: '/cats/cat-1.png',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
  {
    title: 'NVC',
    text: 'TBA',
    image: '/cats/cat-1.png',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
  {
    title: 'Art ???',
    text: 'TBA',
    image: '/cats/cat-1.png',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
  {
    title: 'Cooking ???',
    text: 'TBA',
    image: '/cats/cat-1.png',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
];

export const Hobbies = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;

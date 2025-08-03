import { Page } from './Page';

const mainCardContent = {
  title: 'Side Projects',
  text: 'TBA',
  buttons: [
    { logo: '/logos/github.png', text: 'See what I\'ve built on GitHub', link: 'https://github.com/SelenaJL' },
  ],
};

const cardsContent = [
  {
    title: 'Wedding Planning App',
    text: 'TBA',
    image: '/cats/cat-1.png',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
  {
    title: 'My Swiftie Analysis',
    text: 'TBA',
    image: '/cats/cat-1.png',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
  {
    title: 'Noise Pollution Detection',
    text: 'TBA',
    image: '/cats/cat-1.png',
    button: { logo: '/logos/github.png', text: 'TBA', link: 'https://github.com/SelenaJL' },
  },
];

export const Projects = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;

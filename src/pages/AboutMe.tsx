import { Page } from './Page';

const birthDate = new Date('1997-11-03');
const birthMonth = birthDate.getMonth();
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
let age = currentDate.getFullYear() - birthDate.getFullYear();
if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDay() < birthDate.getDay())) {
  age--;
}

const mainCardContent = {
  title: "It's Me, Hi!",
  text: `You've landed on my personal website which I built to tell my story. \
  I'm a ${age} year old software developer who lives in Toronto, Canada with my husband and foster cats. \
  I've got a big heart and bigger personality which you can read more about below. \
  I've always welcomed tools for self-reflection because I believe that "to be loved is to be known" so the truest way to love myself is to continuously learn about myself. \
  From my education and work experience, to causes I volunteer for, to hobbies and side projects that spark my joy... it's all here! \
  I hope you enjoy learning about me and reach out so I can have the honour of learning about you too.`,
  image: '/profile.png',
  buttons: [
    { logo: '/logos/linkedin.png', text: 'Connect with me', link: 'https://www.linkedin.com/in/selena-lourenco/' },
  ],
};

const cardsContent = [
  {
    title: 'Helper',
    text: 'My Enneagram type is 2 which means I\'m motivated by a desire to be needed and loved. \
    I thrive when I\'m supporting others, building strong relationships, and making a difference. \
    I\'m compassionate and generous at my best but can be people-pleasing at my worst.',
    button: { logo: '/logos/enneagram.png', text: 'More about Enneagram', link: 'https://www.enneagraminstitute.com/' },
  },
  {
    title: 'Campaigner',
    text: 'My Myers Briggs type is ENFP (Extraverted, Intuitive, Feeling, Perceiving) which means I\'m motivated by authentic connection. \
    I thrive when I\’m working on creative and mission-driven projects. \
    I\'m enthusiastic and innovative at my best but can be impulsive at my worst.',
    button: { logo: '/logos/myers-briggs.png', text: 'More about Myers Briggs', link: 'https://www.16personalities.com/' },
  },
  {
    title: 'Influencer',
    text: 'My DiSC style is influence which means I\'m motivated by relationships and recognition. \
    I thrive in dynamic, social environments and roles that require strong communication and leadership. \
    I\'m charismatic and persuasive at my best but can be overcommitted at my worst.',
    button: { logo: '/logos/disc.png', text: 'More about DiSC', link: 'https://www.discprofile.com/disc-styles' },
  },
  {
    title: 'Explorer',
    text: 'My play personality is explore which means I\'m motivated by novelty and growth. \
    I thrive when I\'m free to experiment with ideas, follow my curiosity, ask questions, and express myself. \
    I\'m adventurous and open-minded at my best but can be easily distracted at my worst.',
    button: { logo: '/logos/play.png', text: 'More about play', link: 'https://nifplay.org/what-is-play/play-personalities/' },
  },
];

export const AboutMe = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;

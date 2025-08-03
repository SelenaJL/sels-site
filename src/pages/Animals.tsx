import { Page } from './Page';

const mainCardContent = {
  title: 'Animal Rescue',
  text: 'One of my biggest passions is helping animals. I\'ve volunteered for Pet Patrol Cat Rescue serving the Kitchener-Waterloo region, AVA Cat Rescue serving the Greater Toronto Area, \
  and TEAM Cat Rescue taking in cats from kill shelters all over the world. Thanks to these incredible non-profit organizations, I\'ve had the pleasure of fostering 23 cat and counting! \
  This includes socializing, providing medical care, and faciliating adoptions after the cats are rescued or surrended. You can read about each of my fosters below and find more photos on \
  my Instagram account. If you have questions about cats or contributing to your local rescues, I\'d be delighted to chat.',
  buttons: [
    { logo: '/logos/instagram.png', text: '@selsfosterdiaries', link: 'https://www.instagram.com/selsfosterdiaries/' },
    { logo: '/logos/team-cat.png', text: 'More about TEAM Cat', link: 'https://teamcatrescue.com/' },
    { logo: '/logos/pet-patrol.png', text: 'More about Pet Patrol', link: 'https://www.petpatrol.ca/' },
    { logo: '/logos/ava.png', text: 'More about AVA', link: 'https://www.avacats.org/' },
  ],
};

const cardsContent = [
  {
    image: '/cats/cat-23.png',
    title: 'Autumn',
    text: 'A beautiful, 9 year old, Nebelung female who loves cuddles and chasing shadows. She was surrendered but is now looking for her furever home!',
    date: 'Aug 2025 - Present',
  },
  {
    image: '/cats/cat-22.png',
    title: 'Plot Twist',
    text: 'An affectionate and playful 4 year old female who travelled all the way from Kuwait after being surrendered. Also known as Wardi which means "pink" in Arabic.',
    date: 'Jun-Jul 2025',
  },
  {
    image: '/cats/cat-20-21.png',
    title: 'Darius & Flanders',
    text: 'A bonded pair of 6 year old males who were surrended. Also known as Rocky who\'s obsessed with chasing wand toys and Saffy who has "wobbly cat" syndrome and loves being held like baby.',
    date: 'Feb 2024 - Mar 2025',
  },
  {
    image: '/cats/cat-18-19.png',
    title: 'Bob & Linda',
    text: 'A 1 year old bonded pair found and rescued when Linda miscarried due to a uterine infection. These two loved meowing for food and getting belly rubs',
    date: 'May-Sep 2023',
  },
  {
    image: '/cats/cat-17.png',
    title: 'Dumpling',
    text: 'A 1 year old calico female who came from Texas to have her eye removed. She can almost always be found making biscuts!',
    date: 'Apr 2023',
  },
  {
    image: '/cats/cat-15-16.png',
    title: 'Mako & Buffy',
    text: 'Two female kittens who were rescued from Texas and paired together. They soon became best friends and experts at loud purring.',
    date: 'Feb-Mar 2023',
  },
  {
    image: '/cats/cat-13-14.png',
    title: 'Queso & Quesadilla',
    text: 'Two kittens from the same litter who were rescued from Texas and adopted by a family with a young brother and sister to match their vibes.',
    date: 'Sep-Oct 2022',
  },
  {
    image: '/cats/cat-12.png',
    title: 'Spritzer',
    text: 'One of mama Daiquiri\'s kittens. Full of energy and always getting into trouble yet irresistible with his handsome Siamese coloring.',
    date: 'Jul-Dec 2021',
  },
  {
    image: '/cats/cat-10-11.png',
    title: 'Whisky & Gin',
    text: 'Two of mama Daiquiri\'s kittens. Male and female. One goofy and playful, one shy and sweet, both in need of many baths to rid them of ringworm - what an adventure!',
    date: 'Jul-Dec 2021',
  },
  {
    image: '/cats/cat-9.png',
    title: 'Daiquiri',
    text: 'An incredibly strong 2 year old mama who was found pregenant with FIV and 8 BB gun pellet wounds. She came from Texas for medical care and miraculously survived with her 3 kittens!',
    date: 'Jul-Dec 2021',
  },
  {
    image: '/cats/cat-8.png',
    title: 'Coffee',
    text: 'A 2 year old male and true inspiration, recovering extremely quickly from back leg amputation after being hit by a car. There\'s nothing this warrior can\'t do!',
    date: 'May-Jun 2021',
  },
  {
    image: '/cats/cat-7.png',
    title: 'Senesa',
    text: 'A 2 year old female rescued in Winter who was initially quite shy but would drool when given gentle pets which always made me laugh.',
    date: 'Feb-Apr 2021',
  },
  {
    image: '/cats/cat-6.png',
    title: 'Harper',
    text: 'A sweet female kitten who was found alone. After syringe feeding solid foods, we decided she was best off at the shelter where she could nurse from a mama cat.',
    date: 'Nov 2020',
  },
  {
    image: '/cats/cat-4-5.png',
    title: 'Luca & Leila',
    text: 'A gentle male kitten found in alone in a junkyard and a curious female kitten found alone in a cornfield who needed help getting healthy before adoption.',
    date: 'Oct 2020',
  },
  {
    image: '/cats/cat-2-3.png',
    title: 'Juliet & Juniper',
    text: 'Two female kittens from the same litter who were rescued from a barn with their whole family. Their tough act and hissing quickly turned into following me around and purring.',
    date: 'Sep 2020',
  },
  {
    image: '/cats/cat-1.png',
    title: 'Kotton',
    text: 'A 1 year old male who just needed some patience and love to break out of his shell and transform from a feral cat to a happy companion.',
    date: 'Jul-Aug 2020',
  },
];

export const Animals = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;

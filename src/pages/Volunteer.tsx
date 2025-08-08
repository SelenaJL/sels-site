import { Page } from './Page';

const mainCardContent = {
  title: 'Volunteer Experience',
  text: 'Being involved in the tech community beyond my workplace, especially with youth, is incredibly inspiring and fulfilling. \
  My goal is to be the role model I always wished I had growing up when I was instead told that women didn\'t belong in this field. \
  Through mentorship and public speaking, I\'m able to change that narrative and the programs below have given me that opportunity. \
  I\'m forever grateful for the work they do to empower the people of today to shape the world of tomorrow.',
};

const cardsContent = [
  {
    title: 'Technovation',
    text: 'As a coach for the global Technovation Girls program, I provided guidance and feedback to teams using Thunkable or MIT App Inventor. We covered UX research, design, code, API/AI integrations, business models, and presentation skills.',
    date: 'Oct 2024 - Apr 2025',
    image: '/memories/training.jpg',
    button: { logo: '/logos/technovation.png', text: 'Learn more', link: 'https://technovationchallenge.org/' },
  },
  {
    title: 'Network for Teaching Entrepreneurship',
    text: 'As a judge for the World Series of Innovation Impact League, I graded submissions for technical solutions related to the UN Sustainable Development Goals.',
    date: 'Jan 2025',
    image: '/memories/stickies.jpg',
    button: { logo: '/logos/nfte.png', text: 'Learn more', link: 'https://innovation.nfte.com/' },
  },
  {
    title: 'Mission Bit',
    text: 'As a member of the virtual career panel for the Tech Start program in parternship with Shopify, I spoke to 40+ undergraduate and graduate students about strategies for building developer skills and growing their network.',
    date: 'Oct 2024',
    image: '/memories/webcam.jpg',
    button: { logo: '/logos/mission-bit.png', text: 'Learn more', link: 'https://missionbit.org/programs/career-prep/tech-start-program/' },
  },
  {
    title: 'hEr VOLUTION',
    text: 'As a coach for the STEMing Up program, I hosted weekly sessions to help teams design and prototype technical projects then pitch them Dragon\'s Den style. I also provided feedback as a hackathon judge.',
    date: 'Jul 2020 - Aug 2024',
    image: '/memories/zoom.jpg',
    button: { logo: '/logos/hervolution.png', text: 'Learn more', link: 'https://hervolution.org/' },
  },
  {
    title: 'HRD Canada',
    text: 'As a member of the career panel for a webinar in partnership with the University of Waterloo\'s Work-Learn Institute, I spoke to 500+ attendees about how the COVID-19 pandemic might affect talent recuitment and retention.',
    date: 'Sep 2020',
    image: '/memories/hrd-talk.jpg',
    button: { logo: '/logos/uw.png', text: 'Watch now', link: 'https://uwaterloo.ca/work-learn-institute/events/webinar-future-work-and-your-talent-pipeline-what-covid-19' },
  },
  {
    title: 'IBM STEM for Girls',
    text: 'As a camp leader, I faciliated a day of activities to teach kids in grade 6 how to build and program self-driving robotic cars using Lego Mindstorms and the Scratch visual programming language.',
    date: 'Aug 2018',
    image: '/memories/lego.jpg',
    button: { logo: '/logos/ibm-stem.png', text: 'Learn more', link: 'https://ibmstemforgirls.wordpress.com/' },
  },
  {
    title: 'Tech Ladies',
    text: 'As a speaker and panelist for the Toronto meetup, I gave a lightning talk about the intersection of design and development to 60+ attendees then shared my experience with diversity in STEM.',
    date: 'Oct 2017',
    image: '/memories/pannel.jpg',
    button: { logo: '/logos/tech-ladies.png', text: 'Learn more', link: 'https://www.hiretechladies.com/' },
  },
];

export const Volunteer = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;

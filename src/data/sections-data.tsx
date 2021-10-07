import {
  Book,
  Briefcase,
  Deploy,
  Github,
  LinkedinOption,
  MailOption,
  User,
} from 'grommet-icons';
import { ButtonData, Company, CompanyDetails } from '../utils/types';
import { SocialData } from '../models/social-data';

export const EDUCATION_DATA = [
  'I graduated from Manipal Institute of Technology (Manipal) in 2020 with a Bachelor\'s\n'
  + ' degree in Computers and Communication (GPA 8.63) and a minor in Big Data.',
  'As part of my time here, I was the Category Head for System Admin and Web Development for\n'
  + ' multiple college fests, leading a batch of 15-20 students. I also mentored, then served\n'
  + ' as General Secretary and Academic Head for Teach Code for Good. TCfG is a non-profit\n'
  + ' initiative to teach basic computer knowledge and programming to underprivileged children.',
  'I have also been an active participant in the photography and computer science clubs, as\n'
  + ' well as the college football league.',
];

export const SKILLS_DATA = 'I\'m primarily a full-stack developer. I\'m proficient with front-end'
  + ' development using various JS frameworks like React (with Redux), Angular(with NgRx), and HTML'
  + ' preprocessors like Pug. On the back-end, I have worked most with Java and Spring. However, I'
  + ' have experience using Ruby (Sinatra) and  Node (Express) to get things done. I mainly work '
  + ' with relational databases and have a good grasp of database design and normalization.';

export const SKILLS_TERMS = [
  'React',
  'Redux',
  'Angular',
  'NgRx',
  'Pug',
  'Java',
  'Spring',
  'Ruby',
  'Sinatra',
  'Node',
  'Express',
];

export const EXPERIENCE_DATA: Record<Company, CompanyDetails> = {
  CMP_SAP: {
    company: 'CMP_SAP',
    companyName: 'SAP Labs',
    companyLink: 'https://www.sap.com/india/about/labs-india.html',
  },
  CMP_BLK: {
    company: 'CMP_BLK',
    companyName: 'BlackRock',
    companyLink: 'https://www.blackrock.com/corporate?userType=unknown',
  },
  CMP_SE: {
    company: 'CMP_SE',
    companyName: 'Schneider Electric',
    companyLink: 'https://www.se.com/in/en/',
  },
  CMP_HPCL: {
    company: 'CMP_HPCL',
    companyName: 'Hindustan Petroleum',
    companyLink: 'https://hindustanpetroleum.com/',
  },
};

export const SOCIAL_DATA: SocialData[] = [
  {
    icon: <LinkedinOption />,
    link: 'https://linkedin.com/in/arvind0598',
    name: 'LinkedIn',
  },
  {
    icon: <Github />,
    link: 'https://github.com/arvind0598',
    name: 'Github',
  },
  {
    icon: <MailOption />,
    link: 'mailto:hello@arvindsuresh.in',
    name: 'Mail',
  },
];

export const BUTTON_DATA: ButtonData[] = [
  {
    section: 'SECTION_ABOUT',
    tip: 'About Me',
    icon: <User />,
  },
  {
    section: 'SECTION_EXPERIENCE',
    tip: 'Experience',
    icon: <Briefcase />,
  },
  {
    section: 'SECTION_EDUCATION',
    tip: 'Education',
    icon: <Book />,
  },
  {
    section: 'SECTION_SKILLS',
    tip: 'Skills',
    icon: <Deploy />,
  },
];

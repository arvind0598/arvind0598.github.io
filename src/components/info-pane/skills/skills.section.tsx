import { Box, Heading, Paragraph } from 'grommet';
import React, { CSSProperties } from 'react';
import { SectionProps } from '../../../utils/types';

const getParagraphStyles = (isDesktop: boolean): CSSProperties => ({
  lineHeight: isDesktop ? '2em' : '1.5em',
});

const SkillsSection = ({ isDesktop }: SectionProps) => (
  <Box fill>
    <Heading level="1"> What do I do? </Heading>
    <Box width={isDesktop ? '80%' : '100%'}>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        I&apos;m primarily a full-stack developer. I&apos;m proficient with front-end development
        using various JS frameworks like React (with Redux), Angular (with NgRx), and HTML
        preprocessors like Pug. On the back-end, I have worked most with Java and Spring. However,
        I have experience using Ruby (Sinatra) and Node (Express) to get things done. I mainly work
        with relational databases and have a good grasp of database design and normalization.
      </Paragraph>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        I strongly believe in the importance of writing code that is readable, well-documented,
        and well-tested. To that end, I have experience testing with JUnit, Mockito, Jest, and
        Mocha - and always get ESLint, or Sonar set up before starting a project. I have also
        worked on API development and automation using Python and Selenium. I have experience in
        an Agile environment and a good understanding of version-control systems.
      </Paragraph>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        I occasionally dabble with other fields like competitive coding and machine learning, though
        admittedly mostly at a theoretical level.
      </Paragraph>
    </Box>
  </Box>
);

export default SkillsSection;

import { Box, Heading, Paragraph } from 'grommet';
import { SectionProps } from '../../../utils/types';
import { getParagraphStyles } from '../../../utils/render-data';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import HighlightedParagraph from '../../highlighter/highlighter.component';
import { SKILLS_DATA, SKILLS_TERMS } from '../../../data/sections-data';
import { useRef, useEffect } from 'react';

const SkillsSection = ({ isDesktop, isActive }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isActive) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [isActive]);

  return (
    <Box fill ref={ref} className="section-box">
      <Heading level="1"> What do I do? </Heading>
      <Box width={isDesktop ? '80%' : '100%'}>
        <HighlightedParagraph
          isDesktop={isDesktop}
          terms={SKILLS_TERMS}
          text={SKILLS_DATA}
        />
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
};
export default SkillsSection;

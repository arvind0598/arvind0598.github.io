import { Box, Heading, Paragraph } from 'grommet';
import React, { CSSProperties } from 'react';
import { SectionProps } from '../../../utils/types';

const getParagraphStyles = (isDesktop: boolean): CSSProperties => ({
  lineHeight: isDesktop ? '2em' : '1.5em',
});

const ExperienceSection = ({ isDesktop }: SectionProps) => (
  <Box fill>
    <Heading level="1"> Where have I worked? </Heading>
    <Box width={isDesktop ? '80%' : '100%'}>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        I&apos;m currently an Application engineer at BlackRock. In this role, I work as part of an
        Operations team. My primary tasks involve Web Development and automation for internal
        tooling. I led the development effort in refactoring and rewriting our primary ticketing
        tool, increasing coverage from 0 to 80% and cutting down on code smells by 90%. So far,
        we&apos;ve introduced features that save over 700 person-hours annually.
      </Paragraph>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        Before this, I completed a six-month internship with the same team, working on adding an
        attachment feature to the aforementioned internal ticketing tool. During
        college, I&apos;ve interned for shorter periods with Schneider Electric and Hindustan
        Petroleum over the summers.
      </Paragraph>
    </Box>
  </Box>
);

export default ExperienceSection;

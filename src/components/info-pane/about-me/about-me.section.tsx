import { Box, Heading, Paragraph } from 'grommet';
import React, { CSSProperties } from 'react';
import { SectionProps } from '../../../utils/types';

const getParagraphStyles = (isDesktop: boolean): CSSProperties => ({
  lineHeight: isDesktop ? '2em' : '1.5em',
});

const AboutMeSection = ({ isDesktop }: SectionProps) => (
  <Box fill>
    <Heading level="1"> Who Am I? </Heading>
    <Box width={isDesktop ? '80%' : '100%'}>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        I&apos;m an Application Engineer at BlackRock. In this role, I work primarily with
        full-stack web development and automation within an operations team.
      </Paragraph>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        I&apos;m passionate about my work, and I&apos;m always eager to connect with other
        developers who work with automation. While I enjoy all aspects of my job, I think my
        favorite stages of a project are ideation and development. I live for automating workflows.
      </Paragraph>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        I graduated from MIT Manipal in 2020 with a BTech in Computers and Communication and a minor
        in Big Data. I&apos;m always interested in hearing from interesting folk, so do contact me
        if you&apos;d like to connect and talk about whatever the latest new trendy JavaScript
        library there is.
      </Paragraph>
    </Box>
  </Box>
);

export default AboutMeSection;

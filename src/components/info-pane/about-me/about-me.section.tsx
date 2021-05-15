import { Box, Heading, Paragraph } from 'grommet';
import React, { CSSProperties } from 'react';
import { SectionProps } from '../../../utils/types';

const getParagraphStyles = (isDesktop: boolean): CSSProperties => ({
  lineHeight: isDesktop ? '2em' : '1.5em',
});

const AboutMeSection = ({ isDesktop }: SectionProps) => (
  <Box fill>
    <Box width={isDesktop ? '80%' : '100%'}>
      <Box fill pad="medium">
        <Heading level="3" fill>
          &quot;Arvind likes to code. He has excellent visual sense when designing interfaces, but
          much less so in other parts of his life, often favoring grey shirts on grey pants.&quot;
          <Paragraph size="medium" textAlign="end" style={getParagraphStyles(isDesktop)} fill>
            -Most people who know me.
          </Paragraph>
        </Heading>
      </Box>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        I&apos;m a software developer who prioritizes PRISTINE code above most other things in life.
        Entering the workforce has given me even more love for this work. I code products with
        great respect to standards because it makes life a lot easier for everyone involved.
      </Paragraph>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        When I&apos;m not working, you&apos;d usually find me playing 4X or turn-based strategy
        games on my laptop. If life is good, you&apos;d probably even find me outside playing
        football. I have made it a personal mission to pet every cat I come across, and so far,
        I must admit that it&apos;s been going splendidly.
      </Paragraph>
    </Box>
  </Box>
);

export default AboutMeSection;

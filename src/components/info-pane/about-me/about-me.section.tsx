import { Box, Paragraph } from 'grommet';
import { CSSProperties, useEffect, useRef } from 'react';
import { SectionProps } from '../../../utils/types';
import { getParagraphStyles } from '../../../utils/render-data';

const getQuoteStyles = (isDesktop: boolean): CSSProperties => ({
  ...getParagraphStyles(isDesktop),
  fontWeight: 500,
  fontStyle: 'italic',
});

const AboutMeSection = ({ isDesktop, isActive }: SectionProps) => {
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
      <Box width={isDesktop ? '80%' : '100%'}>
        <Paragraph style={getQuoteStyles(isDesktop)} fill>
          &quot;Arvind likes to code. He has excellent visual sense when designing interfaces, but
          much less so in other parts of his life, often favoring grey shirts on grey pants.&quot;
        </Paragraph>
        <Paragraph
          size="medium"
          textAlign="end"
          style={getQuoteStyles(isDesktop)}
          margin={{ bottom: 'medium' }}
          fill
        >
          -Most people who know me.
        </Paragraph>
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
};

export default AboutMeSection;

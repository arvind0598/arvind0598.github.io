import { Box, Heading, Paragraph } from 'grommet';
import React, { CSSProperties } from 'react';
import { SectionProps } from '../../../utils/types';

const getParagraphStyles = (isDesktop: boolean): CSSProperties => ({
  lineHeight: isDesktop ? '2em' : '1.5em',
});

const educationData = [
  'I graduated from Manipal Institute of Technology (Manipal) in 2020 with a Bachelor\'s degree in'
    + ' Computers and Communication (GPA 8.63) and a minor in Big Data.',
  'As part of my time here, I was the Category Head for System Admin and Web Development for'
    + ' multiple college fests, leading a batch of 15-20 students. I also mentored, then served as'
    + ' General Secretary and Academic Head for Teach Code for Good.'
    + ' TCfG is a non-profit initiative to teach basic computer knowledge and programming to'
    + ' underprivileged children.',
  'I have also been an active participant in the photography and computer science clubs, as well as'
    + ' the college football league.',
];

const EducationSection = ({ isDesktop }: SectionProps) => (
  <Box fill>
    <Heading level="1"> Where have I studied? </Heading>
    <Box width={isDesktop ? '80%' : '100%'}>
      {
        educationData.map((line) => (
          <Paragraph style={getParagraphStyles(isDesktop)} fill>
            { line }
          </Paragraph>
        ))
      }
    </Box>
  </Box>
);

export default EducationSection;

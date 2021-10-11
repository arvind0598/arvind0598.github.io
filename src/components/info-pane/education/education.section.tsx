import { Box, Heading } from 'grommet';
import { SectionProps } from '../../../utils/types';
import { EDUCATION_DATA } from '../../../data/sections-data';
import { renderData } from '../../../utils/render-data';
import { useRef, useEffect } from 'react';

const EducationSection = ({ isDesktop, isActive }: SectionProps) => {
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
      <Heading level="1"> Where have I studied? </Heading>
      <Box width={isDesktop ? '80%' : '100%'}>
        {
          EDUCATION_DATA.map((line, i) => renderData(isDesktop, line, i))
        }
      </Box>
    </Box>
  );
};

export default EducationSection;

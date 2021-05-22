import React from 'react';
import {
  Anchor,
  Box,
  Heading,
  Paragraph,
} from 'grommet';
import { Company, SectionProps } from '../../../utils/types';
import { EXPERIENCE_DATA } from '../../../data/sections-data';
import { getParagraphStyles } from '../../../utils/render-data';

const createCompanyAnchor = (companyName: Company): JSX.Element => {
  const companyData = EXPERIENCE_DATA[companyName];
  const anchorHref = companyData.companyLink || '#';
  return (
    <Anchor href={anchorHref} target="_blank">
      { companyData.companyName }
    </Anchor>
  );
};

const ExperienceSection = ({ isDesktop }: SectionProps) => (
  <Box fill>
    <Heading level="1"> Where have I worked? </Heading>
    <Box width={isDesktop ? '80%' : '100%'}>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        I&apos;m currently an Application engineer at { createCompanyAnchor('CMP_BLK')}
        . In this role, I work as part of an Operations team. My primary tasks involve Web
        Development and automation for internal tooling. I lead the development effort in
        refactoring and rewriting our primary ticketing tool, increasing coverage from &nbsp;
        <b>0 to 80% </b> and cutting down on code smells by <b>90%</b>. So far, we&apos;ve
        introduced features that save over <b>700</b> person-hours annually.
      </Paragraph>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        Before this, I completed a six-month internship with the same team, working on adding an
        attachment feature to the aforementioned internal ticketing tool, posed to save &nbsp;
        <b>300</b> hours every year. During college, I&apos;ve interned for shorter
        periods with { createCompanyAnchor('CMP_SE')} and &nbsp;
        { createCompanyAnchor('CMP_HPCL')} over the summers.
      </Paragraph>
    </Box>
  </Box>
);

export default ExperienceSection;

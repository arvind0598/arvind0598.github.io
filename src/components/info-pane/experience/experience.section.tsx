import {
  Anchor, Box, Heading, Paragraph,
} from 'grommet';
import React, { CSSProperties } from 'react';
import { Company, CompanyDetails, SectionProps } from '../../../utils/types';

const getParagraphStyles = (isDesktop: boolean): CSSProperties => ({
  lineHeight: isDesktop ? '2em' : '1.5em',
});

const createCompanyAnchor = (companyName: Company): JSX.Element => {
  const companies: Record<Company, CompanyDetails> = {
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
  const companyData = companies[companyName];
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

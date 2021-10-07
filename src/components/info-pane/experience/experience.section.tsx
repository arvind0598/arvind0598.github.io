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
      {companyData.companyName}
    </Anchor>
  );
};

const ExperienceSection = ({ isDesktop }: SectionProps) => (
  <Box fill>
    <Heading level="1"> Where have I worked? </Heading>
    <Box width={isDesktop ? '80%' : '100%'}>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        I&apos;m currently a Developer Advocate at&nbsp;
        {createCompanyAnchor('CMP_SAP')}
        . I work with ABAP and UI5 to address cross-cutting concerns, and help enable partners
        and developers to build, maintain and evolve their software solutions on the cloud.
      </Paragraph>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        Before this, I was a Full Stack Web Developer at&nbsp;
        {createCompanyAnchor('CMP_BLK')}
        . I helped support the growing Aladdin ecosystem and developed various solutions via
        our ticketing system that saved the team hundreds of hours each year. This role also
        extended to a near-complete refactor of the product, improving maintainability via
        reduced code smells, better documentation, and coverage that increased eight-fold. I
        also led a build-vs-buy analysis with external vendors for the tool, coordinating with
        various internal and external stakeholders.
      </Paragraph>
      <Paragraph style={getParagraphStyles(isDesktop)} fill>
        During university, I completed a six-month internship with the same team, working on
        adding an attachment feature to the aforementioned internal ticketing tool, posed to
        save&nbsp;
        <b>300</b>
        &nbsp;hours every year. During college, I&apos;ve interned for shorter
        periods with&nbsp;
        {createCompanyAnchor('CMP_SE')}
        &nbsp;and&nbsp;
        {createCompanyAnchor('CMP_HPCL')}
        &nbsp;over the summers.
      </Paragraph>
    </Box>
  </Box>
);

export default ExperienceSection;

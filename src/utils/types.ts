export type Section = 'SECTION_ABOUT'
| 'SECTION_EXPERIENCE'
| 'SECTION_EDUCATION'
| 'SECTION_SKILLS';

export type SectionProps = {
  isDesktop: boolean;
  isActive: boolean;
};

export type Company = 'CMP_SAP' | 'CMP_BLK' | 'CMP_SE' | 'CMP_HPCL';

export type CompanyDetails = {
  company: Company;
  companyName: string;
  companyLink: string;
};

export type ButtonData = {
  Component: (props: SectionProps) => JSX.Element;
  section: Section;
  href: string;
  tip: string;
  icon: JSX.Element;
  isActive?: boolean;
};

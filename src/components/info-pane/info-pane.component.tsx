import { Box, ResponsiveContext } from 'grommet';
import React, { useContext, useState } from 'react';
import SidebarComponent from '../sidebar/sidebar.component';
import { Section } from '../../utils/types';
import AboutMeSection from './about-me/about-me.section';
import ExperienceSection from './experience/experience.section';
import EducationSection from './education/education.section';
import SkillsSection from './skills/skills.section';

const InfoPaneComponent = () => {
  const displaySize = useContext(ResponsiveContext);
  const [selectedSection, setSelectedSection] = useState<Section>('SECTION_ABOUT');
  const isDesktop = displaySize !== 'small';

  const updateSelectedSection = (section: Section): void => {
    if (section !== selectedSection) {
      setSelectedSection(section);
    }
  };

  const getRenderedSection = (section: Section): JSX.Element | null => {
    switch (section) {
      case 'SECTION_ABOUT': {
        return <AboutMeSection isDesktop={isDesktop} />;
      }
      case 'SECTION_EXPERIENCE': {
        return <ExperienceSection isDesktop={isDesktop} />;
      }
      case 'SECTION_EDUCATION': {
        return <EducationSection isDesktop={isDesktop} />;
      }
      case 'SECTION_SKILLS': {
        return <SkillsSection isDesktop={isDesktop} />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <Box direction={isDesktop ? 'row' : 'column'} background="neutral-3" fill>
      <Box direction="row" pad="medium" fill id="info-pane">
        {
          getRenderedSection(selectedSection)
        }
      </Box>
      <Box direction="column" id="sidebar-wrapper">
        <SidebarComponent
          selectedSection={selectedSection}
          updateSelectedSection={updateSelectedSection}
        />
      </Box>
    </Box>
  );
};

export default InfoPaneComponent;

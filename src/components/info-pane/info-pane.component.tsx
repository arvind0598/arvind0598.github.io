import { Box, ResponsiveContext } from 'grommet';
import { useContext, useState } from 'react';
import SidebarComponent from '../sidebar/sidebar.component';
import { Section } from '../../utils/types';
import { BUTTON_DATA } from '../../data/sections-data';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import DisplayPaneComponent from '../display-pane/display-pane.component';

const InfoPaneComponent = () => {
  const displaySize = useContext(ResponsiveContext);
  const [selectedSection, setSelectedSection] = useState(0);
  const isDesktop = displaySize !== 'small';
  const sectionsList = BUTTON_DATA;

  const updateSelectedSection = (section: Section): void => {
    const sectionIndex = sectionsList.findIndex((button) => button.section === section);
    if (sectionIndex !== selectedSection) {
      sectionsList[selectedSection].isActive = false;
      sectionsList[sectionIndex].isActive = true;
      setSelectedSection(sectionIndex);
    }
  };

  return (
    <Box direction={isDesktop ? 'row' : 'column'} background="neutral-3" fill>
      <Box direction="column" fill id="info-pane">
        <SimpleBar style={{ maxHeight: '100vh' }}>
          {
            !isDesktop && <DisplayPaneComponent />
          }
          {
            BUTTON_DATA.map(({ Component, section, isActive }) => <Component isDesktop={isDesktop} isActive={isActive || false} key={section} />)
          }
        </SimpleBar>
      </Box>
      <Box direction="column" id="sidebar-wrapper">
        <SidebarComponent
          sections={BUTTON_DATA}
          updateSelectedSection={updateSelectedSection}
        />
      </Box>
    </Box>
  );
};

export default InfoPaneComponent;

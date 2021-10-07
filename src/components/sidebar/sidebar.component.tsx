import { useContext } from 'react';
import {
  Avatar,
  Nav,
  ResponsiveContext,
  Sidebar,
} from 'grommet';
import { DownloadOption } from 'grommet-icons';
import { ButtonData, Section } from '../../utils/types';
import SidebarButtonComponent from '../sidebar-button/sidebar-button.component';
import { BUTTON_DATA } from '../../data/sections-data';

type SidebarProps = {
  selectedSection: Section;
  // eslint-disable-next-line no-unused-vars
  updateSelectedSection: (section: Section) => void,
};

const SidebarComponent = ({
  selectedSection,
  updateSelectedSection,
}: SidebarProps) => {
  const displaySize = useContext(ResponsiveContext);
  const flexDirection = displaySize === 'small' ? 'column' : 'row';
  const antiFlexDirection = displaySize === 'small' ? 'row' : 'column';

  const createButton = ({ section, tip, icon }: ButtonData): JSX.Element => (
    <SidebarButtonComponent
      icon={icon}
      section={section}
      tip={tip}
      isSelectedButton={selectedSection === section}
      updateSelectedButton={updateSelectedSection}
      key={section}
    />
  );

  return (
    <Sidebar
      background="neutral-4"
      header={flexDirection === 'row'
            && <Avatar src="/android-chrome-192x192.png" />}
      footer={(
        <SidebarButtonComponent
          icon={<DownloadOption />}
          tip="Download Resume"
          section="SECTION_ABOUT"
          href="/Resume-2021.pdf"
          isSelectedButton={false}
          updateSelectedButton={() => {}}
          key="SECTION_DOWNLOAD"
        />
      )}
      direction={antiFlexDirection}
      pad={antiFlexDirection === 'row' ? 'medium' : 'small'}
    >
      <Nav direction={antiFlexDirection}>
        {
          BUTTON_DATA.map(createButton)
        }
      </Nav>
    </Sidebar>
  );
};

export default SidebarComponent;

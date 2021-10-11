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

type SidebarProps = {
  sections: ButtonData[];
  // eslint-disable-next-line no-unused-vars
  updateSelectedSection: (section: Section) => void,
};

const SidebarComponent = ({
  sections,
  updateSelectedSection,
}: SidebarProps) => {
  const displaySize = useContext(ResponsiveContext);
  const flexDirection = displaySize === 'small' ? 'column' : 'row';
  const antiFlexDirection = displaySize === 'small' ? 'row' : 'column';

  const createButton = ({ section, tip, icon, isActive }: ButtonData): JSX.Element => (
    <SidebarButtonComponent
      icon={icon}
      section={section}
      tip={tip}
      isSelectedButton={isActive || false}
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
          sections.map(createButton)
        }
      </Nav>
    </Sidebar>
  );
};

export default SidebarComponent;

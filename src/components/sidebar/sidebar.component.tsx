import {
  Avatar, Nav, ResponsiveContext, Sidebar,
} from 'grommet';
import * as Icons from 'grommet-icons';
import React, { useContext } from 'react';
import { Section } from '../../utils/types';
import SidebarButtonComponent from '../sidebar-button/sidebar-button.component';

type SidebarProps = {
    selectedSection: Section;
    // eslint-disable-next-line no-unused-vars
    updateSelectedSection: (section: Section) => void,
};

type ButtonData = {
    section: Section;
    tip: string;
    icon: JSX.Element;
};

const buttons: ButtonData[] = [
  {
    section: 'SECTION_ABOUT',
    tip: 'About Me',
    icon: <Icons.User />,
  },
  {
    section: 'SECTION_EXPERIENCE',
    tip: 'Experience',
    icon: <Icons.Briefcase />,
  },
  {
    section: 'SECTION_EDUCATION',
    tip: 'Education',
    icon: <Icons.Book />,
  },
  {
    section: 'SECTION_SKILLS',
    tip: 'Skills',
    icon: <Icons.Deploy />,
  },
];

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

  const toggleRenderMode = () => {
    console.log('feature not ready yet');
  };

  return (
    <Sidebar
      background="neutral-4"
      header={flexDirection === 'row'
            && <Avatar src="/android-chrome-192x192.png" onClick={() => toggleRenderMode()} />}
      footer={(
        <SidebarButtonComponent
          icon={<Icons.DownloadOption />}
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
          buttons.map(createButton)
        }
      </Nav>
    </Sidebar>
  );
};

export default SidebarComponent;

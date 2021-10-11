import {
  Anchor,
  Box,
  Image,
  Paragraph,
  ResponsiveContext,
} from 'grommet';
import { BorderType } from 'grommet/utils';
import { SocialData } from '../../models/social-data';
import { SOCIAL_DATA } from '../../data/sections-data';
import { useContext } from 'react';

const imageBorder: BorderType = {
  color: 'neutral-3',
  size: 'medium',
  style: 'solid',
  side: 'all',
};

const renderSocialMediaAnchor = ({ icon, link, name }: SocialData) => (
  <Anchor icon={icon} href={link} target="_blank" key={name} />
);

const DisplayPaneComponent = () => {
  const displaySize = useContext(ResponsiveContext);
  const isDesktop = displaySize !== 'small';
  const imageSize = isDesktop ? 'medium' : 'small';
  const imageMargin = isDesktop ? 'large' : 'small';

  return (
    <Box fill background="accent-1" justify="center" align="center" direction="column" id="display-box">
      <Box height={imageSize} width={imageSize} round="100%" border={imageBorder} margin={imageMargin}>
        <Image fit="cover" src="/profile.webp" style={{ borderRadius: '100%' }} />
      </Box>
      <Paragraph size="xlarge"> Arvind Suresh </Paragraph>
      <Paragraph size="large"> arvind0598@gmail.com </Paragraph>
      <Box as="nav" direction="row">
        {
          SOCIAL_DATA.map(renderSocialMediaAnchor)
        }
      </Box>
    </Box>
  );
};

export default DisplayPaneComponent;

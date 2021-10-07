import {
  Anchor,
  Box,
  Image,
  Paragraph,
} from 'grommet';
import { BorderType } from 'grommet/utils';
import { SocialData } from '../../models/social-data';
import { SOCIAL_DATA } from '../../data/sections-data';

const imageBorder: BorderType = {
  color: 'neutral-3',
  size: 'medium',
  style: 'solid',
  side: 'all',
};

const renderSocialMediaAnchor = ({ icon, link, name }: SocialData) => (
  <Anchor icon={icon} href={link} target="_blank" key={name} />
);

const DisplayPaneComponent = () => (
  <Box fill background="accent-1" justify="center" align="center" direction="column">
    <Box height="medium" width="medium" round="100%" border={imageBorder} margin="large">
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

export default DisplayPaneComponent;

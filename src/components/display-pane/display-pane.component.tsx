import React from 'react';
import {
  Anchor,
  Box, Image, Paragraph,
} from 'grommet';
import { BorderType } from 'grommet/utils';
import {
  LinkedinOption, Github, MailOption,
} from 'grommet-icons';

const imageBorder: BorderType = {
  color: 'neutral-3',
  size: 'medium',
  style: 'solid',
  side: 'all',
};

const DisplayPaneComponent = () => (
  <Box fill background="accent-1" justify="center" align="center" direction="column">
    <Box height="medium" width="medium" round="100%" border={imageBorder} margin="large">
      <Image fit="cover" src="/profile.jpg" style={{ borderRadius: '100%' }} />
    </Box>
    <Paragraph size="xxlarge"> Hey there, let&apos;s connect!</Paragraph>
    <Box as="nav" direction="row">
      <Anchor icon={<LinkedinOption />} href="https://linkedin.com/in/arvind0598" target="_blank" />
      <Anchor icon={<Github />} href="https://github.com/arvind0598" target="_blank" />
      <Anchor icon={<MailOption href="mailto:hello@arvindsuresh.in" target="_blank" />} />
    </Box>
  </Box>
);

export default DisplayPaneComponent;

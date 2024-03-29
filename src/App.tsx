import { useContext } from 'react';
import { Box, ResponsiveContext } from 'grommet';
import DisplayPaneComponent from './components/display-pane/display-pane.component';
import InfoPaneComponent from './components/info-pane/info-pane.component';

const App = () => {
  const displaySize = useContext(ResponsiveContext);
  if (displaySize === 'small') {
    return (
      <Box direction="column" fill>
        <InfoPaneComponent />
      </Box>
    );
  }

  return (
    <Box direction="row" fill>
      <Box width="40%">
        <DisplayPaneComponent />
      </Box>
      <Box width="60%">
        <InfoPaneComponent />
      </Box>
    </Box>
  );
};

export default App;

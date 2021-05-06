import React, {useContext} from 'react';
import {Box, ResponsiveContext} from "grommet";
import DisplayPaneComponent from "./components/display-pane/display-pane.component";
import InfoPaneComponent from "./components/info-pane/info-pane.component";

const App = () => {
    const displaySize = useContext(ResponsiveContext);
    console.log(displaySize);
    if (displaySize === "small") {
        return (
            <Box direction="column" pad="small" fill>
                <InfoPaneComponent/>
            </Box>
        )
    }

    return (
        <Box direction="row" pad="small" fill>
            <Box width="40%" background="neutral-4">
                <DisplayPaneComponent/>
            </Box>
            <Box width="60%">
                <InfoPaneComponent/>
            </Box>
        </Box>
    );
}

export default App;

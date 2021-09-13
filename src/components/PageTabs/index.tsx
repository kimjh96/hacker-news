import React from "react";

// Material UI
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function PageTabs(): JSX.Element {
  return (
    <Paper square>
      <Tabs value="top" indicatorColor="primary" textColor="primary">
        <Tab label="TOP" value="top" />
        <Tab label="NEW" value="new" />
        <Tab label="ASK" value="ask" />
        <Tab label="SHOW" value="show" />
        <Tab label="JOB" value="job" />
      </Tabs>
    </Paper>
  );
}

export default PageTabs;

import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

// Material UI
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

type PageTabsProps = {
  pending: boolean;
  category: string;
};

function PageTabs({ pending, category }: PageTabsProps): JSX.Element {
  const history = useHistory();

  const handleChangeTab = useCallback(
    (event: React.ChangeEvent<{}>, newValue: string) => history.push(`/news/${newValue}`),
    []
  );

  return (
    <Paper square>
      <Tabs indicatorColor="primary" textColor="primary" onChange={handleChangeTab} value={category}>
        <Tab label="TOP" value="topstories" disabled={pending} />
        <Tab label="NEW" value="newstories" disabled={pending} />
        <Tab label="ASK" value="askstories" disabled={pending} />
        <Tab label="SHOW" value="showstories" disabled={pending} />
        <Tab label="JOB" value="jobstories" disabled={pending} />
      </Tabs>
    </Paper>
  );
}

export default PageTabs;

import React from "react";
import dayjs from "dayjs";

// Material UI
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Material UI Icons
import LinkIcon from "@material-ui/icons/Link";

function NewsDetail(): JSX.Element {
  return (
    <Box p={2}>
      <Typography variant="h5">How Many People Can Someone Lead?</Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography color="textSecondary">Kim</Typography>
        <Typography color="textSecondary">{dayjs(new Date()).format("YYYY-MM-DD")}</Typography>
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="primary" startIcon={<LinkIcon />}>
          LINK
        </Button>
      </Box>
    </Box>
  );
}

export default NewsDetail;

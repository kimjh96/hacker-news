import React from "react";

// Material UI
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Material UI Icons
import InfoIcon from "@material-ui/icons/Info";

type FeedbackBoxProps = {
  message: string;
};

function FeedbackBox({ message }: FeedbackBoxProps): JSX.Element {
  return (
    <Box pt={10} pb={10} pl={2} pr={2} textAlign="center">
      <InfoIcon color="primary" fontSize="large" />
      <Typography variant="h6">{message}</Typography>
    </Box>
  );
}

export default FeedbackBox;

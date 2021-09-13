import React from "react";

// Material UI
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

type ProgressBoxProps = {
  message: string;
};

function ProgressBox({ message }: ProgressBoxProps): JSX.Element {
  return (
    <Box pt={10} pb={10} pl={2} pr={2} textAlign="center">
      <CircularProgress color="primary" />
      <Box mt={1}>
        <Typography variant="h6">{message}</Typography>
      </Box>
    </Box>
  );
}

export default ProgressBox;

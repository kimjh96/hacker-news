import React from "react";
import dayjs from "dayjs";

// Material UI
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// types
import { News } from "../../types";

const useStyles = makeStyles(() => createStyles({
  root: {
    cursor: "pointer"
  }
}));

type NewsCardProps = {
  news: News;
};

function NewsCard({ news: { title, by, time } }: NewsCardProps): JSX.Element {
  const classes = useStyles();

  return (
    <Card className={classes.root} square>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography color="textSecondary">{`by. ${by}`}</Typography>
          <Typography color="textSecondary">{dayjs(time * 1000).format("YYYY-MM-DD")}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default NewsCard;

import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

// Material UI
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Material UI Icons
import LinkIcon from "@material-ui/icons/Link";
import { News } from "../../types";

// Components
import ProgressBox from "../../components/ProgressBox";
import FeedbackBox from "../../components/FeedbackBox";

// API
import { fetchNewsDetailById } from "../../api";

function NewsDetail(): JSX.Element {
  const [news, setNews] = useState<News | null>(null);
  const [pending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { id } = useParams<{
    id: string;
  }>();

  const handleClickLinkButton = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const url = event.currentTarget.getAttribute("data-url");

    if (url) window.open(url);
  }, []);

  useEffect(() => {
    if (id) {
      setPending(true);
      setError(false);

      fetchNewsDetailById(Number(id))
        .then((response) => {
          setNews(response.data);
          setPending(false);

          if (!response.data) setError(true);
        })
        .catch(() => {
          setPending(false);
          setError(true);
        });
    }
  }, [id]);

  return (
    <Box p={2}>
      {pending && <ProgressBox message="Loading..." />}
      {!pending && news && (
        <>
          <Typography variant="h5">{news.title}</Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography color="textSecondary">{news.by}</Typography>
            <Typography color="textSecondary">{dayjs(news.time * 1000).format("YYYY-MM-DD")}</Typography>
          </Box>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<LinkIcon />}
              data-url={news.url}
              onClick={handleClickLinkButton}
            >
              LINK
            </Button>
          </Box>
        </>
      )}
      {!pending && error && <FeedbackBox message="존재하지 않는 뉴스입니다." />}
    </Box>
  );
}

export default NewsDetail;

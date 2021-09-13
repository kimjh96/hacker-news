import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import PageTabs from "../../components/PageTabs";
import NewsCard from "../../components/NewsCard";
import ProgressBox from "../../components/ProgressBox";
import FeedbackBox from "../../components/FeedbackBox";

// API
import { fetchNewsByCategory, fetchNewsDetailById } from "../../api";

// types
import { News as NewsT } from "../../types";

function News(): JSX.Element {
  const params = useParams<{
    category: string;
  }>();

  const [category, setCategory] = useState<string>("topstories");
  const [newsIds, setNewsIds] = useState<Array<number>>([]);
  const [newsList, setNewsList] = useState<NewsT[]>([]);
  const [pending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const { category: paramsCategory } = params;
    if (paramsCategory) {
      setCategory(paramsCategory);
    }
  }, [params]);

  useEffect(() => {
    setError(false);

    fetchNewsByCategory(category)
      .then((response) => {
        setPending(true);
        setNewsIds(response.data.sort((a: number, b: number) => b - a));
      })
      .catch(() => {
        setError(true);
        setPending(false);
      });
  }, [category]);

  useEffect(() => {
    if (newsIds.length !== 0) {
      Promise.all(newsIds.map((item) => fetchNewsDetailById(item)))
        .then((response) => {
          const dataList = response.map((item) => item.data).filter((item) => item);

          setNewsList(dataList);
          setPending(false);
        })
        .catch(() => {
          setError(true);
          setPending(false);
        });
    }
  }, [newsIds]);

  return (
    <>
      <PageTabs pending={pending} category={category} />
      {pending && <ProgressBox message="Loading..." />}
      {!pending && newsList.map((news) => <NewsCard key={`news-${news.id}`} category={category} news={news} />)}
      {error && <FeedbackBox message="잘못된 접근입니다." />}
    </>
  );
}

export default News;

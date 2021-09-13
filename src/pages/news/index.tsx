import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import PageTabs from "../../components/PageTabs";
import NewsCard from "../../components/NewsCard";
import ProgressBox from "../../components/ProgressBox";

// API
import { fetchNewsByCategory, fetchNewsDetailById } from "../../api";

// types
import { News as NewsT } from "../../types";

function News(): JSX.Element {
  const [newsIds, setNewsIds] = useState<Array<number>>([]);
  const [newsList, setNewsList] = useState<NewsT[]>([]);
  const [pending, setPending] = useState<boolean>(true);

  const { category } = useParams<{
    category: string;
  }>();

  useEffect(() => {
    fetchNewsByCategory(category || "topstories")
      .then((response) => {
        setPending(true);
        setNewsIds(response.data);
      })
      .catch(() => {
        alert("알 수 없는 오류입니다. 잠시 후 다시 시도해주세요!");
      });
  }, [category]);

  useEffect(() => {
    if (newsIds.length !== 0) {
      Promise.all(newsIds.map((item) => fetchNewsDetailById(item))).then((response) => {
        const dataList = response.map((item) => item.data).filter((item) => item);
        setNewsList(dataList);
        setPending(false);
      });
    }
  }, [newsIds]);

  return (
    <>
      <PageTabs pending={pending} category={category} />
      {pending && <ProgressBox message="Loading..." />}
      {!pending && newsList.map((news) => <NewsCard category={category} news={news} />)}
    </>
  );
}

export default News;

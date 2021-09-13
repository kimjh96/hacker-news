import React from "react";
import NewsCard from "../../components/NewsCard";

function News(): JSX.Element {
  return (
    <>
      {Array.from({ length: 10 }).map(() => (
        <NewsCard
          news={{
            by: "hihat",
            descendants: 80,
            id: 28502414,
            kids: [
              28504414, 28503147, 28503470, 28507902, 28502900, 28503275, 28504424, 28506838, 28507431, 28503083,
              28504634, 28504796, 28506760, 28506707, 28503596, 28505736, 28504273, 28503788, 28504848, 28503188,
              28502660
            ],
            score: 131,
            time: 1631463190,
            title: "How Many People Can Someone Lead?",
            type: "story",
            url: "https://www.patkua.com/blog/how-many-people-can-someone-lead/"
          }}
        />
      ))}
    </>
  );
}

export default News;

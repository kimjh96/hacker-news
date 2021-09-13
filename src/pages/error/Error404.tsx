import React from "react";

// Components
import FeedbackBox from "../../components/FeedbackBox";

function Error404(): JSX.Element {
  return <FeedbackBox message="존재하지 않는 페이지입니다." />;
}

export default Error404;

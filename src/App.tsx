import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";

// Pages
import News from "./pages/news";
import NewsDetail from "./pages/news/detail";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={News} />
        <Route exact path="/news/:category" component={News} />
        <Route exact path="/news/:category/:id" component={NewsDetail} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;

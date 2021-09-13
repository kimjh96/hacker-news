import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Layout from "./components/Layout";

// Pages
import News from "./pages/news";
import NewsDetail from "./pages/news/detail";
import Error404 from "./pages/error/error404";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={News} />
          <Route exact path="/news/:category" component={News} />
          <Route exact path="/news/:category/:id" component={NewsDetail} />
          <Route component={Error404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

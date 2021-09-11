import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Pages
import News from './pages/news';
import NewsDetail from './pages/news/detail';

function App() {
  return (
    <BrowserRouter>
      <Route exact path={'/'} component={News} />
      <Route exact path={'/news/:category'} component={News} />
      <Route exact path={'/news/:category/:id'} component={NewsDetail} />
    </BrowserRouter>
  );
}

export default App;

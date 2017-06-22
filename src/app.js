import React    from 'react';
import ReactDOM from 'react-dom';

import Header  from './views/header';
import Content from './views/content';
import Footer  from './views/footer';
import Granim  from './lib/granim';

console.info("Init App");

const root    = document.getElementById("root");
const body = (
  <div className="content">
    <div className="content">
      <Header  />
      <br />
      <Content />
      <br />

    </div>
    <Footer  />
  </div>
);

ReactDOM.render(body, root)

if (module.hot) {
  module.hot.accept();
}

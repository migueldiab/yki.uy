import React from 'react';
import ReactDOM from 'react-dom';

export default function content() {
  const root = document.getElementById("root");
  const expression = (new Date()).toLocaleTimeString()
  const content = (
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-4">
        <h2>Column 1</h2>
        {expression}
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
          <h2>Column 2</h2>
      </div>
      <div className="col-sm-12 col-lg-4">
          <h2>Column 3</h2>
      </div>
    </div>
  )
  ReactDOM.render(content, root);
}

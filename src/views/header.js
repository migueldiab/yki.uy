import React    from 'react';
import ReactDOM from 'react-dom';

export default function header() {
  const root = document.getElementById("header");
  const expression = <b>{2+2}</b>
  const content = (
    <div>
      <a href="#" role="button">Miguel A. Diab</a>
      <a href="#" role="button">Home</a>
      <a href="#" role="button">{expression}</a>
    </div>
  )
  ReactDOM.render(content, root);
}

import React    from 'react';
import ReactDOM from 'react-dom';

export default function header() {
  const root = document.getElementById("footer");
  const expression = <b>{2+2}</b>
  const content = (
    <p>Copyright &copy; Miguel A. Diab 2017 | Yki: IT & Engineering</p>
  )
  ReactDOM.render(content, root);
}

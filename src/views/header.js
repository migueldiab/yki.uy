import React    from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="sticky">
        <a href="#" className="logo">
          Miguel A. Diab
        </a>
        <a href="./downloads/miguel_a_diab_software_engineer.pdf" className="button">Resume</a>
        <span>|</span>
        <a href="mailto://migueldiab+web@gmail.com"
           className="button">
          Contact me
        </a>
      </header>
    )
  }
}

export default Header;

import React    from 'react';
import ReactDOM from 'react-dom';
import About    from './contents/about';
import Skills   from './contents/skills';
import Contact  from './contents/contact';

class Content extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-lg-offset-1">
          <About />
        </div>
        <div className="col-sm-12 col-md-4 col-md-offset-2 col-lg-3 col-lg-offset-1">
          <Skills />
          <Contact />
        </div>
      </div>
    )
  }
}

export default Content;

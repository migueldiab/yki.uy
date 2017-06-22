import React    from 'react';
import WordCloud from 'react-d3-cloud';

class About extends React.Component {


  render() {

    return (
      <div className="section"
           style={{
             fontSize: '20px'
           }}>
        <h3>About me...</h3>
        <p>
          I am a passionate and witty software engineer that loves challenges, great at problem solving, good with people and always optimistic.</p>
        <br />
        <p>
          Fluent in English, Spanish, Ruby and Java alike. I am methodical, straightforward and honest. Adept at all tech-related things, from coding to frameworks, from Star Trek to hardware, from board games to roller skating.
        </p>
        <br />
        <p>
          I love nicely-styled, concrete, self-contained code, the never ending battle at improving legacy code, refactoring and documenting, traveling, history and learning new things.
        </p>

        <br/>

        <div className="row" style={{
          'text-align': 'center'
        }}>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <img src="/images/logo_yki_bw.jpg" alt=""/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src="/images/java.png" alt=""/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src="/images/react.png" alt=""/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src="/images/ruby.png" alt=""/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src="/images/html5_logo.png" alt=""/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src="/images/sinatrarb.png" alt=""/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src="/images/groovy.png" alt=""/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src="/images/rspec.png" alt=""/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src="/images/github.png" alt=""/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src="/images/css3.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default About;

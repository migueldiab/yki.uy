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

        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            <img src="/images/html5_logo.png" alt=""/>
          </div>
          <div className="col-sm-4 col-md-3 col-lg-2">
            a
          </div>
          <div className="col-sm-4 col-md-3 col-lg-2">
            <img src="/images/css3_logo.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default About;

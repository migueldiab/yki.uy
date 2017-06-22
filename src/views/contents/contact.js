import React    from 'react';

class Contact extends React.Component {

  render() {
    return (
      <div className="section"
           style={{
             fontSize: '20px'
           }}>
        <h3>Phone:</h3>

        <p>
          (+1) 628-999-1156
        </p>

        <h3>Skype:</h3>

        <p>
          <a href="http://is.gd/OCdypW">migueldiab</a>
        </p>

        <h3>E-Mail:</h3>

        <p>
          <a href="mailto://migueldiab+web@gmail.com">
            miguel diab [at] gmail
          </a>
        </p>
      </div>
    )
  }
}

export default Contact;

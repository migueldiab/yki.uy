import React  from 'react';
import Granim from 'granim';

class ReactGranim extends React.Component {
  get defaultProps() {
    return {
      direction: 'diagonal',
      name: 'default-gradient',
      element: '#granim-canvas',
      opacity: [1, 1],
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ['#85A5CC', '#30395C'],
            ['#4A6491', '#85A5CC']
          ],
          transitionSpeed: 4000
        }
      }
    };
  }

  get style() {
    return {
      width:    '100%',
      height:   '100%',
      position: 'absolute',
      zIndex:  -1
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      granim: undefined
    }
  }

  componentDidMount() {
    this.setState({
      granim: new Granim(
        Object.assign({}, this.defaultProps, this.props)
      )
    });
  }

  render() {
    return (
      <canvas id="granim-canvas" style={Object.assign({}, this.style, this.props.style)}></canvas>
    );
  }
}

export default ReactGranim;

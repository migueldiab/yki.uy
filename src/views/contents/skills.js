import React       from 'react';
import SkillsCloud from './skills_cloud';

class Skills extends React.Component {

  render() {
    return (
      <div className="section"
           style={{
             fontSize: '20px'
           }}>
        <h3>Skills:</h3>

        <div className="card">
          <SkillsCloud />
        </div>
      </div>
    )
  }
}

export default Skills;

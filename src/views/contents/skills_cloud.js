import React    from 'react';
import WordCloud from 'react-d3-cloud';

class SkillsCloud extends React.Component {


  render() {
    const data = [
      { text: 'Java',          value: 45 },
      { text: 'Ruby',          value: 45 },
      { text: 'REST APIs',     value: 40 },
      { text: 'Sinatra',       value: 40 },
      { text: 'MiniTest',      value: 37 },
      { text: 'JUnit',         value: 37 },
      { text: 'JavaEE',        value: 37 },
      { text: 'JVM',           value: 35 },
      { text: 'Hibernate',     value: 35 },
      { text: 'ActiveRecord',  value: 35 },
      { text: 'Rails',         value: 33 },
      { text: 'Rack',          value: 33 },
      { text: 'RSpec',         value: 33 },
      { text: 'Agile',         value: 30 },
      { text: 'Scrum',         value: 30 },
      { text: 'Pairing',       value: 28 },
      { text: 'FactoryGirl',   value: 28 },
      { text: 'Groovy',        value: 28 },
      { text: 'Maven',         value: 28 },
      { text: 'JavaScript',    value: 25 },
      { text: 'AngularJS',     value: 25 },
      { text: 'Node',          value: 25 },
      { text: 'npm',           value: 25 },
      { text: 'ReactJS',       value: 25 },
      { text: 'JQuery',        value: 25 },
      { text: 'Yarn',          value: 25 },
      { text: 'Git',           value: 22 },
      { text: 'SVN',           value: 22 },
      { text: 'MySQL',         value: 22 },
      { text: 'MongoDB',       value: 20 },
      { text: 'Bootstrap',     value: 20 },
      { text: 'RabbitMQ',      value: 17 },
      { text: 'Redis',         value: 17 },
      { text: 'ElasticSearch', value: 17 },
      { text: 'Solr',          value: 15 },
      { text: 'Docker',        value: 15 },
      { text: 'Bower',         value: 15 },
      { text: 'CasperJS',      value: 15 },
      { text: 'CSS3',          value: 15 },
      { text: 'HTML5',         value: 15 },
      { text: 'Go Lang',       value: 10 },
      { text: 'Elixir',        value: 10 },
    ];

    const wordCloud = {
      width: 480,
      height: 400,
      fontSizeMapper: word => word.value
    };

    return (
      <div style={{
        overflow: 'hidden'
      }}>
        <div style={{
          'margin-left': '-60px'
        }}>
          <WordCloud
            data={data}
            width={wordCloud.width}
            height={wordCloud.height}
            fontSizeMapper={wordCloud.fontSizeMapper}
            style={{
              'margin-left': '-60px'
            }}
          />
        </div>
      </div>
    )
  }
}

export default SkillsCloud;

var React = require('react');

var ProgressBar = require('./ProgressBar');

var DemoProgressBarSection = React.createClass({
  render: function () {
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Progress Bars</h2>
        </div>
        <div className='rs-detail-section-body'>
          <ProgressBar progress={25} type='solid' status='ok'/>
          <br/>
          <ProgressBar progress={75} type='striped' status='ok'/>
          <br/>
          <ProgressBar progress={25} type='solid' status='warning'/>
          <br/>
          <ProgressBar progress={75} type='striped' status='warning'/>
          <br/>
          <ProgressBar progress={25} type='solid' status='error'/>
          <br/>
          <ProgressBar progress={75} type='striped' status='error'/>
          <br/>
          <ProgressBar progress={25} type='solid' status='info'/>
          <br/>
          <ProgressBar progress={75} type='striped' status='info'/>
        </div>
        <div className='rs-detail-section-body'>
          <h3>Fixed Width</h3>
          <ProgressBar progress={25} size='xsmall'/>
          <br/>
          <ProgressBar progress={25} size='small'/>
          <br/>
          <ProgressBar progress={25} size='medium'/>
          <br/>
          <ProgressBar progress={25} size='large'/>
          <br/>
          <ProgressBar progress={25} size='xlarge'/>
        </div>
      </div>
    );
  }
});

module.exports = DemoProgressBarSection;

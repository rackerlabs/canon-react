var React = require('react');

var DemoButtonSection = require('./DemoButtonSection');
var DemoButtonGroupSection = require('./DemoButtonGroupSection');
var DemoProgressBarSection = require('./DemoProgressBarSection');
var DemoStatusIndicatorSection = require('./DemoStatusIndicatorSection');
var DemoPopoverSection = require('./DemoPopoverSection');

var DemoView = React.createClass({
  render: function () {
    return (
      <div>
        <DemoButtonSection />
        <DemoButtonGroupSection />
        <DemoProgressBarSection />
        <DemoStatusIndicatorSection />
        <DemoPopoverSection />
      </div>
    );
  }
});

module.exports = DemoView;

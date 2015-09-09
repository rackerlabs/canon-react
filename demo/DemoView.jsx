var React = require('react');

var DemoButtonSection = require('./DemoButtonSection');
var DemoButtonGroupSection = require('./DemoButtonGroupSection');
var DemoPopoverSection = require('./DemoPopoverSection');
var DemoProgressBarSection = require('./DemoProgressBarSection');
var DemoStatusIndicatorSection = require('./DemoStatusIndicatorSection');
var DemoTooltipSection = require('./DemoTooltipSection');

var DemoView = React.createClass({
  render: function () {
    return (
      <div>
        <DemoButtonSection />
        <DemoButtonGroupSection />
        <DemoProgressBarSection />
        <DemoStatusIndicatorSection />
        <DemoPopoverSection />
        <DemoTooltipSection />
      </div>
    );
  }
});

module.exports = DemoView;

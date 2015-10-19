var React = require('react');

var DemoButtonSection = require('./DemoButtonSection');
var DemoButtonGroupSection = require('./DemoButtonGroupSection');
var DemoPopoverSection = require('./DemoPopoverSection');
var DemoProgressBarSection = require('./DemoProgressBarSection');
var DemoStatusIndicatorSection = require('./DemoStatusIndicatorSection');
var DemoTooltipSection = require('./DemoTooltipSection');
import DemoDropdownSection from './DemoDropdownSection';
import DemoFacetsSection from './DemoFacetsSection';

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
        <DemoDropdownSection />
        <DemoFacetsSection />
      </div>
    );
  }
});

module.exports = DemoView;

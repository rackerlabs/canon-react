var React = require('react');

var ButtonsSection = require('./ButtonsSection');
var ButtonGroupSection = require('./ButtonGroupSection');
var PopoverSection = require('./PopoverSection');
var ProgressBarsSection = require('./ProgressBarsSection');
var SectionHeader = require('./SectionHeader');
var StatusIndicatorSection = require('./StatusIndicatorSection');

var View = React.createClass({
  render: function () {
    return (
      <div>
        <div className="rs-inner">
          <div className="rs-container">
            <div className="rs-main">
              <div className="rs-content rs-panel">
          
                <SectionHeader id='buttons'>Buttons</SectionHeader>
                <ButtonsSection />

                <SectionHeader id='button-groups'>Button Groups</SectionHeader>
                <ButtonGroupSection />

                <SectionHeader id='progress-bars'>Progress Bars</SectionHeader>
                <ProgressBarsSection />

                <SectionHeader id='status-indicators'>Status Indicators</SectionHeader>
                <StatusIndicatorSection />

                <SectionHeader id='popovers'>Popovers</SectionHeader>
                <PopoverSection />

              </div>
            </div>
          </div>
        </div>

        <div className="rs-push"></div>
      </div>
    );
  }
});

module.exports = View;

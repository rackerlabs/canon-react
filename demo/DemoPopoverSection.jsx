var React = require('react');

var Button = require('./Button');
var DemoPopover = require('./DemoPopover');

var DemoPopoverSection = React.createClass({
  getInitialState: function () {
    return {
      rightPopoverOpen: false,
      leftPopoverOpen: false,
      bottomRightPopoverOpen: false,
      bottomLeftPopoverOpen: false
    };
  },

  _shouldCloseRightPopover: function () {
    this.setState({rightPopoverOpen: false});
  },

  _shouldCloseLeftPopover: function () {
    this.setState({leftPopoverOpen: false});
  },

  _shouldCloseBottomLeftPopover: function () {
    this.setState({bottomLeftPopoverOpen: false});
  },

  _shouldCloseBottomRightPopover: function () {
    this.setState({bottomRightPopoverOpen: false});
  },

  render: function () {
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Popovers</h2>
        </div>
        <div className='rs-detail-section-body'>
          <table>
            <tbody>
              <tr>
                <td>
                  <Button id='right-button-id' onClick={function () {this.setState({rightPopoverOpen: true});}.bind(this)}>Right</Button>
                  <DemoPopover placement='right' target='right-button-id' isOpen={this.state.rightPopoverOpen} onRequestClose={this._shouldCloseRightPopover}/>
                </td>
                <td>
                  <Button id='left-button-id' onClick={function () {this.setState({leftPopoverOpen: true});}.bind(this)}>Left</Button>
                  <DemoPopover placement='left' target='left-button-id' isOpen={this.state.leftPopoverOpen} onRequestClose={this._shouldCloseLeftPopover}/>
                </td>
              </tr>
              <tr>
                <td>
                  <Button id='bottom-right-button-id' onClick={function () {this.setState({bottomRightPopoverOpen: true});}.bind(this)}>Bottom Right</Button>
                  <DemoPopover placement='bottom-right' target='bottom-right-button-id' isOpen={this.state.bottomRightPopoverOpen} onRequestClose={this._shouldCloseBottomRightPopover}/>
                </td>
                <td>
                  <Button id='bottom-left-button-id' onClick={function () {this.setState({bottomLeftPopoverOpen: true});}.bind(this)}>Bottom Left</Button>
                  <DemoPopover placement='bottom-left' target='bottom-left-button-id' isOpen={this.state.bottomLeftPopoverOpen} onRequestClose={this._shouldCloseBottomLeftPopover}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = DemoPopoverSection;

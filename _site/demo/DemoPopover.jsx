var React = require('react');

var Button = require('./Button');
var Popover = require('./Popover');
var PopoverOverlay = require('./PopoverOverlay');
var PopoverBody = require('./PopoverBody');
var PopoverFooter = require('./PopoverFooter');
var ProcessingIndicator = require('./ProcessingIndicator');

var DemoPopover = React.createClass({
  propType: {
    isOpen: React.PropTypes.bool,
    onRequestClose: React.PropTypes.func
  },

  render: function () {
    return (
      <Popover placement={this.props.placement} isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose} target={this.props.target}>
        <PopoverOverlay>
          <PopoverBody>
            <form className='rs-form-horizontal rs-form-medium'>
              <div className='rs-control-group'>
                <label className='rs-control-label'>Field 1</label>
                <div className='rs-controls'>
                  <input type='text'/>
                </div>
              </div>
            </form>
          </PopoverBody>
          <PopoverFooter>
            <Button type='primary' onClick={this.props.onRequestClose}>Save</Button>
            <Button type='link' onClick={this.props.onRequestClose}>Cancel</Button>
            <ProcessingIndicator hidden={true} />
          </PopoverFooter>
        </PopoverOverlay>
      </Popover>
    );
  }
});

module.exports = DemoPopover;

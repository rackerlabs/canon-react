import React from 'react';

import Button from './Button';
import DemoPopover from './DemoPopover';

class DemoPopoverSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rightPopoverOpen: false,
      leftPopoverOpen: false,
      bottomRightPopoverOpen: false,
      bottomLeftPopoverOpen: false,
      bottomRightFunctionPopoverOpen: false,
      bottomLeftModalPopoverOpen: false
    };
  }

  _shouldCloseRightPopover() {
    this.setState({rightPopoverOpen: false});
  }

  _shouldCloseLeftPopover() {
    this.setState({leftPopoverOpen: false});
  }

  _shouldCloseBottomLeftPopover() {
    this.setState({bottomLeftPopoverOpen: false});
  }

  _shouldCloseBottomRightPopover() {
    this.setState({bottomRightPopoverOpen: false});
  }

  _shouldCloseBottomRightFunctionPopover() {
    this.setState({bottomRightFunctionPopoverOpen: false});
  }

  _shouldCloseBottomLeftModalPopover() {
    this.setState({bottomLeftModalPopoverOpen: false});
  }

  _getBottomLeftButton() {
    return React.findDOMNode(this.refs.bottomLeftButton);
  }

  render() {
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
                  <Button id='bottom-left-button-id' ref='bottomLeftButton' onClick={function () {this.setState({bottomLeftPopoverOpen: true});}.bind(this)}>Bottom Left</Button>
                  <DemoPopover placement='bottom-left' target={this._getBottomLeftButton} isOpen={this.state.bottomLeftPopoverOpen} onRequestClose={this._shouldCloseBottomLeftPopover}/>
                </td>
              </tr>
              <tr>
                <td>
                  <Button id='bottom-right-function-button-id' onClick={function () {this.setState({bottomRightFunctionPopoverOpen: true});}.bind(this)}>Bottom Right Function</Button>
                  <DemoPopover placement='bottom-right' target={function () { return document.getElementById('bottom-right-function-button-id');} } isOpen={this.state.bottomRightFunctionPopoverOpen} onRequestClose={this._shouldCloseBottomRightFunctionPopover}/>
                </td>
                <td>
                  <Button id='bottom-left-modal-button-id' onClick={function () {this.setState({bottomLeftModalPopoverOpen: true});}.bind(this)}>Modal</Button>
                  <DemoPopover placement='center' target={function () { return document.body; } } isOpen={this.state.bottomLeftModalPopoverOpen} onRequestClose={this._shouldCloseBottomLeftModalPopover}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DemoPopoverSection;

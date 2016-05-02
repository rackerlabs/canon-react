import React from 'react';
import ReactDOM from 'react-dom';

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
                  <Button id='right-button-id' onClick={() => { this.setState({rightPopoverOpen: true}) } }>Right</Button>
                  <DemoPopover
                    placement='right'
                    target='right-button-id'
                    isOpen={ this.state.rightPopoverOpen }
                    onRequestClose={ () => { this.setState({rightPopoverOpen: false}) } }/>
                </td>
                <td>
                  <Button id='left-button-id' onClick={() => { this.setState({leftPopoverOpen: true}) } }>Left</Button>
                  <DemoPopover
                    placement='left'
                    target='left-button-id'
                    isOpen={ this.state.leftPopoverOpen }
                    onRequestClose={ () => { this.setState({leftPopoverOpen: false}) } }/>
                </td>
              </tr>
              <tr>
                <td>
                  <Button id='bottom-right-button-id' onClick={() => { this.setState({bottomRightPopoverOpen: true}) } }>Bottom Right</Button>
                  <DemoPopover
                    placement='bottom-right'
                    target='bottom-right-button-id'
                    isOpen={ this.state.bottomRightPopoverOpen }
                    onRequestClose={ () => { this.setState({bottomRightPopoverOpen: false}) } }/>
                </td>
                <td>
                  <Button id='bottom-left-button-id' ref='bottomLeftButton' onClick={() => { this.setState({bottomLeftPopoverOpen: true}) }}>Bottom Left</Button>
                  <DemoPopover
                    placement='bottom-left'
                    target={ () => ReactDOM.findDOMNode(this.refs.bottomLeftButton) }
                    isOpen={ this.state.bottomLeftPopoverOpen }
                    onRequestClose={ () => { this.setState({bottomLeftPopoverOpen: false}) } }/>
                </td>
              </tr>
              <tr>
                <td>
                  <Button id='bottom-right-function-button-id' onClick={() => { this.setState({bottomRightFunctionPopoverOpen: true}) } }>Bottom Right Function</Button>
                  <DemoPopover
                    placement='bottom-right'
                    target={ () => document.getElementById('bottom-right-function-button-id') }
                    isOpen={ this.state.bottomRightFunctionPopoverOpen }
                    onRequestClose={() => { this.setState({bottomRightFunctionPopoverOpen: false}) } }/>
                </td>
                <td>
                  <Button id='bottom-left-modal-button-id' onClick={() => { this.setState({bottomLeftModalPopoverOpen: true}) } }>Modal</Button>
                  <DemoPopover
                    placement='center'
                    target={ () => document.body }
                    isOpen={ this.state.bottomLeftModalPopoverOpen }
                    isModal={ true }
                    onRequestClose={ () => { this.setState({bottomLeftModalPopoverOpen: false}) } }/>
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

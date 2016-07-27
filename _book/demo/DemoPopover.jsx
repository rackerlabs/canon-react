import React from 'react';

import Button from './Button';
import Popover from './Popover';
import PopoverOverlay from './PopoverOverlay';
import PopoverBody from './PopoverBody';
import PopoverFooter from './PopoverFooter';
import ProcessingIndicator from './ProcessingIndicator';

class DemoPopover extends React.Component {

  render() {
    return (
      <Popover placement={this.props.placement} isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose} target={this.props.target} isModal={ this.props.isModal }>
        <PopoverOverlay>
          <PopoverBody>
            <form className='rs-form-horizontal rs-form-medium'>
              <div className='rs-control-group'>
                <label className='rs-control-label'>Field 1</label>
                <div className='rs-controls'>
                  <input autoFocus type='text'/>
                </div>
              </div>
            </form>
          </PopoverBody>
          <PopoverFooter>
            <Button canonStyle='primary' onClick={this.props.onRequestClose}>Save</Button>
            <Button canonStyle='link' onClick={this.props.onRequestClose}>Cancel</Button>
            <ProcessingIndicator hidden={true} />
          </PopoverFooter>
        </PopoverOverlay>
      </Popover>
    );
  }
}

DemoPopover.propTypes = {
  isOpen: React.PropTypes.bool,
  onRequestClose: React.PropTypes.func
};

export default DemoPopover;

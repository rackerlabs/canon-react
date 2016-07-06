import React from 'react';

import Button from './Button';
import ErrorIndicator from './ErrorIndicator';
import Form from './Form';
import Popover from './Popover';
import PopoverBody from './PopoverBody';
import PopoverFooter from './PopoverFooter';
import PopoverOverlay from './PopoverOverlay';
import ProcessingIndicator from './ProcessingIndicator';

class FormPopover extends React.Component {
  render() {
    let submitComponent, cancelComponent, popoverProps;

    submitComponent = React.cloneElement(
      this.props.submitButton,
      { onClick: this._submit.bind(this), enabled: !this.props.processing }
    );
    cancelComponent = React.cloneElement(
      this.props.cancelButton,
      { onClick: this._cancel.bind(this), hidden: this.props.processing }
    );

    popoverProps = Object.assign({}, this.props);
    delete popoverProps.children;

    return (
      <Popover { ...this.props }>
        <PopoverOverlay>
          <Form onsubmit={ this.props.onSubmit } size={ this.props.formSize } horizontal={ this.props.horizontal }>
            <PopoverBody>
              { this.props.children }
            </PopoverBody>
            <PopoverFooter>
              <ErrorIndicator value={ this.props.error }/>
              { submitComponent }
              { cancelComponent }
              <ProcessingIndicator hidden={ !this.props.processing }/>
            </PopoverFooter>
          </Form>
        </PopoverOverlay>
      </Popover>
    );
  }

  _cancel(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    this.props.onRequestClose();
  }

  _submit(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    this.props.onSubmit(event);
  }
}

FormPopover.propTypes = {
  // form
  formSize: React.PropTypes.string,
  horizontal: React.PropTypes.bool,
  error: React.PropTypes.node,
  processing: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  // popover layout
  cancelButton: React.PropTypes.element.isRequired,
  submitButton: React.PropTypes.element.isRequired,
  // popover content
  children: React.PropTypes.node.isRequired,
  // popover
  isOpen: React.PropTypes.bool.isRequired,
  target: React.PropTypes.string.isRequired,
  placement: React.PropTypes.string.isRequired,
  onRequestClose: React.PropTypes.func.isRequired
};

FormPopover.defaultProps = {
  error: null,
  horizontal: true,
  cancelButton: <Button canonStyle="link">Cancel</Button>,
  submitButton: <Button canonStyle="primary">Submit</Button>,
  processing: false,
  isOpen: true,
  placement: 'right'
};

export default FormPopover;

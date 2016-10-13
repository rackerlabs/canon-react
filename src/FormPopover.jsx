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
      <Popover { ...popoverProps }>
        <PopoverOverlay>
          <Form onsubmit={ this.props.onSubmit } size={ this.props.formSize } horizontal={ this.props.horizontal }>
            <PopoverBody>
              { this.props.children }
            </PopoverBody>
            <PopoverFooter>
              <ErrorIndicator value={ this.props.error }/>
              { submitComponent }
              { this.props.additionalControls }
              { cancelComponent }
              { this._renderAdditionalFooterContent() }
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

  _renderAdditionalFooterContent() {
    if (this.props.additionalFooterContent) {
      return (
        <div className="rs-pull-right">
          { this.props.additionalFooterContent }
        </div>
      );
    }
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
  additionalControls: React.PropTypes.node,
  additionalFooterContent: React.PropTypes.node,
  // popover content
  children: React.PropTypes.node.isRequired,
  // popover
  isOpen: React.PropTypes.bool.isRequired,
  target: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.func
  ]).isRequired,
  placement: React.PropTypes.string.isRequired,
  onRequestClose: React.PropTypes.func.isRequired
};

FormPopover.defaultProps = {
  additionalControls: [],
  cancelButton: <Button canonStyle="link">Cancel</Button>,
  error: null,
  horizontal: true,
  isOpen: true,
  placement: 'right',
  processing: false,
  submitButton: <Button canonStyle="primary">Submit</Button>
};

export default FormPopover;

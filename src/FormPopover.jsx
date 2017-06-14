import React from 'react';
import PropTypes from 'prop-types';
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
          <Form onSubmit={ this.props.onSubmit } size={ this.props.formSize } horizontal={ this.props.horizontal }>
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
  formSize: PropTypes.string,
  horizontal: PropTypes.bool,
  error: PropTypes.node,
  processing: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // popover layout
  cancelButton: PropTypes.element.isRequired,
  submitButton: PropTypes.element.isRequired,
  additionalControls: PropTypes.node,
  additionalFooterContent: PropTypes.node,
  // popover content
  children: PropTypes.node.isRequired,
  // popover
  isOpen: PropTypes.bool.isRequired,
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  placement: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired
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

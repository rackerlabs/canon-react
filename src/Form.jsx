import React from 'react';
import classNames from 'classnames';

const SIZE_CLASSES = {
  'xsmall': 'rs-form-xsmall',
  'small': 'rs-form-small',
  'medium': 'rs-form-medium',
  'large': 'rs-form-large',
  'xlarge': 'rs-form-xlarge'
};

export default class Form extends React.Component {
  render() {
    let classes, sizeClass;

    sizeClass = SIZE_CLASSES[this.props.size];
    classes = classNames(
      'rs-form-horizontal',
      sizeClass,
      this.props.create ? 'rs-form-create' : undefined,
      this.props.className
    );

    return (
      <form {...this.props} className={classes}>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  create: React.PropTypes.boolean,
  className: React.PropTypes.string,
  size: React.PropTypes.oneOf(Object.keys(SIZE_CLASSES)),
  children: React.PropTypes.node.isRequired
};

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
      {
        'rs-form-create': this.props.create,
        'rs-form-horizontal': this.props.horizontal
      },
      this.props.className,
      sizeClass
    );

    return (
      <form { ...this.props } className={ classes }>
        { this.props.children }
      </form>
    );
  }
}

Form.propTypes = {
  create: React.PropTypes.bool,
  className: React.PropTypes.string,
  horizontal: React.PropTypes.bool,
  size: React.PropTypes.oneOf(Object.keys(SIZE_CLASSES)),
  children: React.PropTypes.node.isRequired
};

Form.defaultProps = {
  create: false,
  horizontal: true
};

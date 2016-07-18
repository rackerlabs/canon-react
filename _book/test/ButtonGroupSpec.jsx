import ButtonGroup from '../transpiled/ButtonGroup';
import Button from '../transpiled/Button';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('ButtonGroup', () => {
  let buttonGroup;

  beforeEach(() => {
    buttonGroup = TestUtils.renderIntoDocument(
      <ButtonGroup id='button-group' className="extra-class">
        <Button className='child-button'>Test</Button>
      </ButtonGroup>
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(buttonGroup).parentNode);
  });

  it('has the right classes', () => {
    expect(ReactDOM.findDOMNode(buttonGroup)).toHaveClass('rs-btn-group extra-class');
  });

  it('renders passed in props', () => {
    expect(ReactDOM.findDOMNode(buttonGroup).id).toBe('button-group');
  });

  it('renders passed in children', () => {
    expect(TestUtils.findRenderedDOMComponentWithClass(buttonGroup, 'child-button')).not.toBeNull();
  });
});

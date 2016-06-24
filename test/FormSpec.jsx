import Form from '../transpiled/Form';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Form', () => {
  let form;

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(form).parentNode);
  });

  it('adds the size class', () => {
    form = TestUtils.renderIntoDocument(<Form size="xsmall">test</Form>);
    expect(ReactDOM.findDOMNode(form)).toHaveClass('rs-form-xsmall');
  });

  it('does not add invalid size classes', () => {
    form = TestUtils.renderIntoDocument(<Form size="ginormous">test</Form>);
    expect(ReactDOM.findDOMNode(form)).not.toHaveClass('rs-form-ginormous');
  });

  it('adds the create class', () => {
    form = TestUtils.renderIntoDocument(<Form create>test</Form>);
    expect(ReactDOM.findDOMNode(form)).toHaveClass('rs-form-create');
  });

  it('does not add the create class if not present', () => {
    form = TestUtils.renderIntoDocument(<Form>test</Form>);
    expect(ReactDOM.findDOMNode(form)).not.toHaveClass('rs-form-create');
  });

  it('adds the horizontal class', () => {
    form = TestUtils.renderIntoDocument(<Form horizontal>test</Form>);
    expect(ReactDOM.findDOMNode(form)).toHaveClass('rs-form-horizontal');
  });

  it('does not add the horizontal class if horizontal is false', () => {
    form = TestUtils.renderIntoDocument(<Form horizontal={ false }>test</Form>);
    expect(ReactDOM.findDOMNode(form)).not.toHaveClass('rs-form-horizontal');
  });

  it('adds passed-in class names to the default ones', () => {
    form = TestUtils.renderIntoDocument(<Form className="some-nonsense">test</Form>);
    expect(ReactDOM.findDOMNode(form)).toHaveClass('some-nonsense');
    expect(ReactDOM.findDOMNode(form)).toHaveClass('rs-form-horizontal');
  });
});

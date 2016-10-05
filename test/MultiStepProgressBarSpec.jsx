import MultiStepProgressBar from '../transpiled/MultiStepProgressBar';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('MultiStepProgressBar', () => {
  let multiStepProgressBar;

  beforeEach(() => {
    multiStepProgressBar = TestUtils.renderIntoDocument(
      <MultiStepProgressBar/>
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(multiStepProgressBar).parentNode);
  });

  it('renders the progress container', () => {
    expect(TestUtils.findRenderedDOMComponentWithClass(multiStepProgressBar, 'rs-progress')).not.toBeNull();
  });

  it('renders the inner progress container', () => {
    expect(TestUtils.findRenderedDOMComponentWithClass(multiStepProgressBar, 'rs-progress-inner')).not.toBeNull();
  });

  describe('size', () => {
    const renderWithSize = (size) => {
      multiStepProgressBar = TestUtils.renderIntoDocument(<MultiStepProgressBar size={size} />);
    };

    it('defaults to no size', () => {
      expect(ReactDOM.findDOMNode(multiStepProgressBar).className).toBe('rs-progress');
    });

    it('xsmall', () => {
      renderWithSize('xsmall');

      expect(ReactDOM.findDOMNode(multiStepProgressBar)).toHaveClass('rs-progress-xsmall');
    });

    it('small', () => {
      renderWithSize('small');

      expect(ReactDOM.findDOMNode(multiStepProgressBar)).toHaveClass('rs-progress-small');
    });

    it('medium', () => {
      renderWithSize('medium');

      expect(ReactDOM.findDOMNode(multiStepProgressBar)).toHaveClass('rs-progress-medium');
    });

    it('large', () => {
      renderWithSize('large');

      expect(ReactDOM.findDOMNode(multiStepProgressBar)).toHaveClass('rs-progress-large');
    });

    it('xlarge', () => {
      renderWithSize('xlarge');

      expect(ReactDOM.findDOMNode(multiStepProgressBar)).toHaveClass('rs-progress-xlarge');
    });
  });
});

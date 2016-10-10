import ProgressBarContainer from '../transpiled/ProgressBarContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('ProgressBarContainer', () => {
  let progressBarContainer;

  beforeEach(() => {
    progressBarContainer = TestUtils.renderIntoDocument(
      <ProgressBarContainer/>
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(progressBarContainer).parentNode);
  });

  it('renders the progress container', () => {
    expect(TestUtils.findRenderedDOMComponentWithClass(progressBarContainer, 'rs-progress')).not.toBeNull();
  });

  it('renders the inner progress container', () => {
    expect(TestUtils.findRenderedDOMComponentWithClass(progressBarContainer, 'rs-progress-inner')).not.toBeNull();
  });

  describe('size', () => {
    const renderWithSize = (size) => {
      progressBarContainer = TestUtils.renderIntoDocument(<ProgressBarContainer size={size} />);
    };

    it('defaults to no size', () => {
      expect(ReactDOM.findDOMNode(progressBarContainer).className).toBe('rs-progress');
    });

    it('xsmall', () => {
      renderWithSize('xsmall');

      expect(ReactDOM.findDOMNode(progressBarContainer)).toHaveClass('rs-progress-xsmall');
    });

    it('small', () => {
      renderWithSize('small');

      expect(ReactDOM.findDOMNode(progressBarContainer)).toHaveClass('rs-progress-small');
    });

    it('medium', () => {
      renderWithSize('medium');

      expect(ReactDOM.findDOMNode(progressBarContainer)).toHaveClass('rs-progress-medium');
    });

    it('large', () => {
      renderWithSize('large');

      expect(ReactDOM.findDOMNode(progressBarContainer)).toHaveClass('rs-progress-large');
    });

    it('xlarge', () => {
      renderWithSize('xlarge');

      expect(ReactDOM.findDOMNode(progressBarContainer)).toHaveClass('rs-progress-xlarge');
    });
  });
});

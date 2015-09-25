import ProcessingIndicator from '../transpiled/ProcessingIndicator';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

describe('ProcessingIndicator', () => {
  let processingIndicator;

  beforeEach(() => {
    processingIndicator = TestUtils.renderIntoDocument(
      <ProcessingIndicator></ProcessingIndicator>
    );
  });

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(processingIndicator).parentNode);
  });

  it('has the rs-processing-indicator class', () => {
    expect(React.findDOMNode(processingIndicator)).toHaveClass('rs-processing-indicator');
  });

  it('renders an icon tag', () => {
    expect(TestUtils.findRenderedDOMComponentWithTag(processingIndicator, 'i')).not.toBeNull();
  });

  it('is hidden by default', () => {
    expect(React.findDOMNode(processingIndicator)).toHaveClass('rs-hidden');
  });

  it('is not hidden when hidden is false', () => {
    processingIndicator = TestUtils.renderIntoDocument(
      <ProcessingIndicator hidden={false}/>
    );

    expect(React.findDOMNode(processingIndicator)).not.toHaveClass('rs-hidden');
  });
});

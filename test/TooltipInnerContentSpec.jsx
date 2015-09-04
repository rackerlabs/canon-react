import React from 'react/addons';
import TooltipInnerContent from '../transpiled/TooltipInnerContent';
const TestUtils = React.addons.TestUtils;

describe('TooltipInnerContent', () => {
  let innerContent;

  beforeEach(() => {
    innerContent = TestUtils.renderIntoDocument(
      <TooltipInnerContent id='some-id'>
        Tooltip Content
      </TooltipInnerContent>
    );
  });

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(innerContent).parentNode);
  });

  it('renders the inner content element', () => {
    expect(TestUtils.findRenderedDOMComponentWithClass(innerContent, 'rs-tooltip-inner')).not.toBeNull();
  });

  it('renders passed in props', () => {
    expect(React.findDOMNode(innerContent).id).toBe('some-id');
  });

  it('renders passed in children', () => {
    expect(React.findDOMNode(innerContent).textContent).toBe('Tooltip Content');
  });
});

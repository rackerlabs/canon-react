import Divider from '../transpiled/Divider';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

describe('Divider', () => {
  let divider;

  beforeEach(() => {
    divider = TestUtils.renderIntoDocument(
      <Divider/>
    );
  });

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(divider).parentNode);
  });

  it('renders a divider', () => {
    expect(TestUtils.findRenderedDOMComponentWithTag(divider, 'li')).not.toBeNull();
  });

  it('has the correct class', () => {
    expect(React.findDOMNode(divider)).toHaveClass('rs-divider');
  });
});

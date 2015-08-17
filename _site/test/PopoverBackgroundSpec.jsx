var PopoverBackground = require('../transpiled/PopoverBackground');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('PopoverBackground', function () {
  var popoverBackground, requestClose;

  beforeEach(function () {
    requestClose = jasmine.createSpy('requestClose');

    popoverBackground = TestUtils.renderIntoDocument(
      <PopoverBackground onRequestClose={requestClose} />
    );
  });

  afterEach(function () {
    if (popoverBackground.isMounted()) {
      React.unmountComponentAtNode(React.findDOMNode(popoverBackground).parentNode);
    }
  });

  it('renders over the entire page to block events from other elements', function () {
    var backgroundStyle, backgroundElement;

    backgroundElement = TestUtils.findRenderedDOMComponentWithClass(popoverBackground, 'rs-popover-background-overlay');
    backgroundStyle = backgroundElement.getDOMNode().style;

    expect(backgroundStyle.position).toEqual('fixed');
    expect(backgroundStyle.left).toEqual('0px');
    expect(backgroundStyle.top).toEqual('0px');
    expect(backgroundStyle.width).toEqual('100%');
    expect(backgroundStyle.height).toEqual('100%');
    expect(backgroundStyle.zIndex).toEqual('999');
  });

  it('calls the request close callback when clicked', function () {
    TestUtils.Simulate.click(popoverBackground.getDOMNode());

    expect(requestClose).toHaveBeenCalled();
  });
});

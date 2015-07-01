var ButtonGroup = require('../transpiled/ButtonGroup');
var Button = require('../transpiled/Button');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('ButtonGroup', function () {
  var buttonGroup;

  beforeEach(function () {
    buttonGroup = TestUtils.renderIntoDocument(
      <ButtonGroup id='button-group' className="extra-class">
        <Button className='child-button'>Test</Button>
      </ButtonGroup>
    );
  });

  afterEach(function () {
    if (buttonGroup.isMounted()) {
      React.unmountComponentAtNode(React.findDOMNode(buttonGroup).parentNode);
    }
  });

  it('has the right classes', function () {
    expect(buttonGroup.getDOMNode()).toHaveClass('rs-btn-group extra-class');
  });

  it('renders passed in props', function () {
    expect(buttonGroup.getDOMNode().id).toBe('button-group');
  });

  it('renders passed in children', function () {
    expect(TestUtils.findRenderedDOMComponentWithClass(buttonGroup, 'child-button')).not.toBeNull();
  });
});

var ButtonGroup = require('../transpiled/ButtonGroup');
var Button = require('../transpiled/Button');
var TestUtils = React.addons.TestUtils;

describe('ButtonGroup', function () {
  var buttonGroup;

  beforeEach(function () {
    buttonGroup = TestUtils.renderIntoDocument(
      <ButtonGroup id='button-group'>
        <Button className='child-button'>Test</Button>
      </ButtonGroup>
    );
  });

  it('has the rs-btn-group class', function () {
    expect(buttonGroup.getDOMNode()).toHaveClass('rs-btn-group');
  });

  it('renders passed in props', function () {
    expect(buttonGroup.getDOMNode().id).toBe('button-group');
  });

  it('renders passed in children', function () {
    expect(TestUtils.findRenderedDOMComponentWithClass(buttonGroup, 'child-button')).not.toBeNull();
  });
});

var ActionButton = require('../transpiled/ActionButton');
var TestUtils = React.addons.TestUtils;

describe('ActionButton', function () {
  var button, clickFunction;

  beforeEach(function () {
    clickFunction = jasmine.createSpy('clickFunction');

    button = TestUtils.renderIntoDocument(
      <ActionButton id='button-id' className='test-button-class' onClick={clickFunction}>Button Text</ActionButton>
    );
  });

  it('is enabled by default', function () {
    expect(button.props.enabled).toBe(true);
    expect(button.getDOMNode()).not.toHaveClass('disabled');
  });

  it('renders a button', function () {
    expect(TestUtils.findRenderedDOMComponentWithTag(button, 'button')).not.toBeNull();
  });

  it('keeps the passed in classes', function () {
    expect(button.getDOMNode()).toHaveClass('test-button-class');
  });

  it('keeps all passed in properties', function () {
    expect(button.getDOMNode().id).toBe('button-id');
  });

  it('renders the text of the button', function () {
    expect(button.getDOMNode().textContent).toBe(' Button Text ');
  });

  it('executes the click function when clicked', function () {
    TestUtils.Simulate.click(button.getDOMNode());

    expect(clickFunction).toHaveBeenCalled();
  });

  it('is not hidden when hidden is false', function () {
    expect(button.getDOMNode()).not.toHaveClass('rs-hidden');
  });

  it('is hidden when hidden is true', function () {
    button = TestUtils.renderIntoDocument(
      <ActionButton hidden={true}>Button Text</ActionButton>
    );

    expect(button.getDOMNode()).toHaveClass('rs-hidden');
  });

  it('has action button classes', function () {
    expect(button.getDOMNode()).toHaveClass('rs-btn');
    expect(button.getDOMNode()).toHaveClass('rs-btn-action');
  });

  describe('when disabled', function () {
    beforeEach(function () {
      button = TestUtils.renderIntoDocument(
        <ActionButton enabled={false} onClick={clickFunction}>Button text</ActionButton>
      );
    });

    it('adds a disabled class to the button', function () {
      expect(button.getDOMNode()).toHaveClass('disabled');
    });

    it('does not execute the click function when clicked', function () {
      TestUtils.Simulate.click(button.getDOMNode());

      expect(clickFunction).not.toHaveBeenCalled();
    });
  });
});

var Button = require('../transpiled/Button');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('Button', function () {
  var button, clickFunction;

  beforeEach(function () {
    clickFunction = jasmine.createSpy('clickFunction');

    button = TestUtils.renderIntoDocument(
      <Button id='button-id' className='test-button-class' onClick={clickFunction}>Button Text</Button>
    );
  });

  afterEach(function () {
    if (button.isMounted()) {
      React.unmountComponentAtNode(React.findDOMNode(button).parentNode);
    }
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
    expect(button.getDOMNode().textContent).toBe('Button Text');
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
      <Button hidden={true}>Button Text</Button>
    );

    expect(button.getDOMNode()).toHaveClass('rs-hidden');
  });

  describe('button types', function () {
    it('primary', function () {
      button = TestUtils.renderIntoDocument(
        <Button type='primary'>Button Text</Button>
      );

      expect(button.getDOMNode()).toHaveClass('rs-btn');
      expect(button.getDOMNode()).toHaveClass('rs-btn-primary');
    });

    it('secondary', function () {
      button = TestUtils.renderIntoDocument(
        <Button type='secondary'>Button Text</Button>
      );

      expect(button.getDOMNode()).toHaveClass('rs-btn');
    });

    it('link', function () {
      button = TestUtils.renderIntoDocument(
        <Button type='link'>Button Text</Button>
      );

      expect(button.getDOMNode()).toHaveClass('rs-btn');
      expect(button.getDOMNode()).toHaveClass('rs-btn-link');
    });

    it('login', function () {
      button = TestUtils.renderIntoDocument(
        <Button type='login'>Button Text</Button>
      );

      expect(button.getDOMNode()).toHaveClass('rs-btn');
      expect(button.getDOMNode()).toHaveClass('rs-btn-login');
    });

    it('cog', function () {
      button = TestUtils.renderIntoDocument(
        <Button type='cog'>Button Text</Button>
      );

      expect(button.getDOMNode()).toHaveClass('rs-cog');
    });

    it('delete', function () {
      button = TestUtils.renderIntoDocument(
        <Button type='delete'>Button Text</Button>
      );

      expect(button.getDOMNode()).toHaveClass('rs-delete');
    });

    it('edit', function () {
      button = TestUtils.renderIntoDocument(
        <Button type='edit'>Button Text</Button>
      );

      expect(button.getDOMNode()).toHaveClass('rs-edit');
    });

    it('plus', function () {
      button = TestUtils.renderIntoDocument(
        <Button type='plus'>Button Text</Button>
      );

      expect(button.getDOMNode()).toHaveClass('rs-plus');
    });
  });

  describe('when disabled', function () {
    beforeEach(function () {
      button = TestUtils.renderIntoDocument(
        <Button enabled={false} onClick={clickFunction}>Button text</Button>
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

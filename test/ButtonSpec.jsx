import Button from '../transpiled/Button';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

describe('Button', () => {
  let button, clickCalled;

  const clickFunction = () => clickCalled = true;

  beforeEach(() => {
    clickCalled = false;

    button = TestUtils.renderIntoDocument(
      <Button id='button-id' className='test-button-class' onClick={clickFunction}>Button Text</Button>
    );
  });

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(button).parentNode);
  });

  it('is enabled by default', () => {
    expect(button.props.enabled).toBe(true);
    expect(React.findDOMNode(button)).not.toHaveClass('disabled');
  });

  it('renders a button', () => {
    expect(TestUtils.findRenderedDOMComponentWithTag(button, 'button')).not.toBeNull();
  });

  it('keeps the passed in classes', () => {
    expect(React.findDOMNode(button)).toHaveClass('test-button-class');
  });

  it('keeps all passed in properties', () => {
    expect(React.findDOMNode(button).id).toBe('button-id');
  });

  it('renders the text of the button', () => {
    expect(React.findDOMNode(button).textContent).toBe('Button Text');
  });

  it('executes the click function when clicked', () => {
    TestUtils.Simulate.click(React.findDOMNode(button));

    expect(clickCalled).toBe(true);
  });

  it('is not hidden when hidden is false', () => {
    expect(React.findDOMNode(button)).not.toHaveClass('rs-hidden');
  });

  it('is hidden when hidden is true', () => {
    button = TestUtils.renderIntoDocument(
      <Button hidden={true}>Button Text</Button>
    );

    expect(React.findDOMNode(button)).toHaveClass('rs-hidden');
  });

  describe('button types', () => {
    it('primary', () => {
      button = TestUtils.renderIntoDocument(
        <Button type='primary'>Button Text</Button>
      );

      expect(React.findDOMNode(button)).toHaveClass('rs-btn');
      expect(React.findDOMNode(button)).toHaveClass('rs-btn-primary');
    });

    it('secondary', () => {
      button = TestUtils.renderIntoDocument(
        <Button type='secondary'>Button Text</Button>
      );

      expect(React.findDOMNode(button)).toHaveClass('rs-btn');
    });

    it('link', () => {
      button = TestUtils.renderIntoDocument(
        <Button type='link'>Button Text</Button>
      );

      expect(React.findDOMNode(button)).toHaveClass('rs-btn');
      expect(React.findDOMNode(button)).toHaveClass('rs-btn-link');
    });

    it('login', () => {
      button = TestUtils.renderIntoDocument(
        <Button type='login'>Button Text</Button>
      );

      expect(React.findDOMNode(button)).toHaveClass('rs-btn');
      expect(React.findDOMNode(button)).toHaveClass('rs-btn-login');
    });

    it('cog', () => {
      button = TestUtils.renderIntoDocument(
        <Button type='cog'>Button Text</Button>
      );

      expect(React.findDOMNode(button)).toHaveClass('rs-cog');
    });

    it('delete', () => {
      button = TestUtils.renderIntoDocument(
        <Button type='delete'>Button Text</Button>
      );

      expect(React.findDOMNode(button)).toHaveClass('rs-delete');
    });

    it('edit', () => {
      button = TestUtils.renderIntoDocument(
        <Button type='edit'>Button Text</Button>
      );

      expect(React.findDOMNode(button)).toHaveClass('rs-edit');
    });

    it('plus', () => {
      button = TestUtils.renderIntoDocument(
        <Button type='plus'>Button Text</Button>
      );

      expect(React.findDOMNode(button)).toHaveClass('rs-plus');
    });
  });

  describe('when disabled', () => {
    beforeEach(() => {
      button = TestUtils.renderIntoDocument(
        <Button enabled={false} onClick={clickFunction}>Button text</Button>
      );
    });

    it('adds a disabled class to the button', () => {
      expect(React.findDOMNode(button)).toHaveClass('disabled');
    });

    it('does not execute the click function when clicked', () => {
      TestUtils.Simulate.click(React.findDOMNode(button));

      expect(clickCalled).toBe(false);
    });
  });
});

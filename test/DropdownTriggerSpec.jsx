import DropdownTrigger from '../transpiled/DropdownTrigger';

import Button from '../transpiled/Button';
import Dropdown from '../transpiled/Dropdown';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

describe('DropdownTrigger', () => {
  var dropdownTrigger, tether, button;

  const renderDropdown = () => {
    dropdownTrigger = TestUtils.renderIntoDocument(
      <DropdownTrigger dropdown={<Dropdown><Button onClick={() => {}}>Hello</Button>Content</Dropdown>}>
        <Button>Hello</Button>
      </DropdownTrigger>
    );

    tether = jasmine.createSpyObj('tether', ['destroy']);
    spyOn(dropdownTrigger, '_createTether').andReturn(tether);
  };

  const clickTrigger = () => {
    button = TestUtils.findRenderedComponentWithType(dropdownTrigger, Button);
    TestUtils.Simulate.click(React.findDOMNode(button));
  };

  describe('when rendering the DropdownTrigger', () => {
    afterEach(() => {
      React.unmountComponentAtNode(React.findDOMNode(dropdownTrigger).parentNode);
    });

    it('renders the passed in trigger', () => {
      renderDropdown();

      button = TestUtils.findRenderedComponentWithType(dropdownTrigger, Button);

      expect(React.findDOMNode(button).textContent).toBe('Hello');
    });

    it('does not display the dropdown initially', () => {
      renderDropdown();

      expect(dropdownTrigger._dropdownNode).toBeUndefined();
    });

    describe('trigger click', () => {
      it('renders the dropdown', () => {
        var dropdownContainer;

        renderDropdown();
        clickTrigger();

        dropdownContainer = document.querySelector('.dropdown-container');

        expect(dropdownContainer).not.toBeNull();
        expect(dropdownTrigger._dropdownNode).not.toBeNull();
      });

      it('renders the dropdown to the bottom of the trigger', () => {
        renderDropdown();
        clickTrigger();

        expect(dropdownTrigger._createTether).toHaveBeenCalledWith({
          element: React.findDOMNode(dropdownTrigger._containerDiv),
          target: React.findDOMNode(dropdownTrigger),
          attachment: 'top left',
          targetAttachment: 'bottom left'
        });
      });

      it('hides the dropdown when the trigger is clicked again', () => {
        renderDropdown();
        clickTrigger();

        TestUtils.Simulate.click(React.findDOMNode(button));

        expect(tether.destroy).toHaveBeenCalled();
        expect(dropdownTrigger._dropdownNode).toBeNull();
      });

      it('hides the dropdown when pressing escape', () => {
        var keyUpEvent;

        renderDropdown('right');
        clickTrigger();

        keyUpEvent = document.createEvent('CustomEvent');
        keyUpEvent.initEvent('keyup', true, true);
        keyUpEvent.keyCode = 27;
        document.dispatchEvent(keyUpEvent);

        expect(tether.destroy).toHaveBeenCalled();
        expect(dropdownTrigger._dropdownNode).toBeNull();
      });

      it('hides the dropdown when clicking outside of the dropdown', () => {
        renderDropdown('right');
        clickTrigger();

        TestUtils.Simulate.click(React.findDOMNode(dropdownTrigger));

        expect(tether.destroy).toHaveBeenCalled();
        expect(dropdownTrigger._dropdownNode).toBeNull();
      });

      it('does not hide the dropdown when clicking inside of the dropdown', () => {
        var dropdownButton;

        renderDropdown('right');
        clickTrigger();

        dropdownButton = TestUtils.findRenderedComponentWithType(dropdownTrigger._dropdownNode, Button);
        TestUtils.Simulate.click(React.findDOMNode(dropdownButton));

        expect(tether.destroy).not.toHaveBeenCalled();
        expect(dropdownTrigger._dropdownNode).not.toBeNull();
      });
    });
  });

  it('cleans up when the component is unmounted', () => {
    renderDropdown('right');
    clickTrigger();

    React.unmountComponentAtNode(React.findDOMNode(dropdownTrigger).parentNode);

    expect(tether.destroy).toHaveBeenCalled();
    expect(dropdownTrigger._tether).toBeNull();
    expect(dropdownTrigger._dropdownNode).toBeNull();
    expect(document.body.getElementsByClassName('dropdown-container').length).toEqual(0);
  });
});

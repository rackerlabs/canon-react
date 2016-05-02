import DropdownTrigger from '../transpiled/DropdownTrigger';

import Button from '../transpiled/Button';
import Dropdown from '../transpiled/Dropdown';
import DropdownItem from '../transpiled/DropdownItem';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('DropdownTrigger', () => {
  let dropdownTrigger, tether, button;

  const hideFunction = () => { };

  const renderDropdown = (menuAlignment) => {
    dropdownTrigger = TestUtils.renderIntoDocument(
      <DropdownTrigger alignment={menuAlignment} dropdown={<Dropdown hideCallback={hideFunction}><DropdownItem id='test-dropdown-item'>Hello</DropdownItem></Dropdown>}>
        <Button>Hello</Button>
      </DropdownTrigger>
    );

    tether = jasmine.createSpyObj('tether', ['destroy', 'position']);
    spyOn(dropdownTrigger, '_createTether').and.returnValue(tether);
  };

  const clickTrigger = () => {
    button = TestUtils.findRenderedComponentWithType(dropdownTrigger, Button);
    TestUtils.Simulate.click(ReactDOM.findDOMNode(button));
  };

  describe('when rendering the DropdownTrigger', () => {
    afterEach(() => {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(dropdownTrigger).parentNode);
    });

    it('renders the passed in trigger', () => {
      renderDropdown();

      button = TestUtils.findRenderedComponentWithType(dropdownTrigger, Button);

      expect(ReactDOM.findDOMNode(button).textContent).toBe('Hello');
    });

    it('does not display the dropdown initially', () => {
      renderDropdown();

      expect(dropdownTrigger._dropdownNode).toBeUndefined();
    });

    describe('trigger click', () => {
      it('renders the dropdown', () => {
        let dropdownContainer;

        renderDropdown();
        clickTrigger();

        dropdownContainer = document.querySelector('.dropdown-container');

        expect(dropdownContainer).not.toBeNull();
        expect(dropdownTrigger._dropdownNode).not.toBeNull();
      });

      it('renders the dropdown to the bottom of the trigger, tethering on the left by default', () => {
        renderDropdown();
        clickTrigger();

        expect(dropdownTrigger._createTether).toHaveBeenCalledWith({
          element: ReactDOM.findDOMNode(dropdownTrigger._containerDiv),
          target: ReactDOM.findDOMNode(dropdownTrigger),
          attachment: 'top left',
          targetAttachment: 'bottom left'
        });
      });

      it("tethers the dropdown on the right when value 'right' is passed in as alignment prop", () => {
        renderDropdown('right');
        clickTrigger();

        expect(dropdownTrigger._createTether).toHaveBeenCalledWith({
          element: ReactDOM.findDOMNode(dropdownTrigger._containerDiv),
          target: ReactDOM.findDOMNode(dropdownTrigger),
          attachment: 'top right',
          targetAttachment: 'bottom right'
        });
      });

      it('calls position on the tether', () => {
        renderDropdown();
        clickTrigger();

        expect(tether.position).toHaveBeenCalled();
      });

      it('passes the alignment prop to the dropdown', () => {
        renderDropdown();
        clickTrigger();

        expect(dropdownTrigger.props.dropdown.props.alignment).toBe('left');
      });

      it('hides the dropdown when the trigger is clicked again', () => {
        renderDropdown();
        clickTrigger();

        TestUtils.Simulate.click(ReactDOM.findDOMNode(button));

        expect(tether.destroy).toHaveBeenCalled();
        expect(dropdownTrigger._dropdownNode).toBeNull();
      });

      it('hides the dropdown when pressing escape', () => {
        let keyUpEvent;

        renderDropdown();
        clickTrigger();

        keyUpEvent = document.createEvent('CustomEvent');
        keyUpEvent.initEvent('keyup', true, true);
        keyUpEvent.keyCode = 27;
        document.dispatchEvent(keyUpEvent);

        expect(tether.destroy).toHaveBeenCalled();
        expect(dropdownTrigger._dropdownNode).toBeNull();
      });

      it('hides the dropdown when clicking outside of the dropdown', () => {
        renderDropdown();
        clickTrigger();

        TestUtils.Simulate.click(ReactDOM.findDOMNode(dropdownTrigger));

        expect(tether.destroy).toHaveBeenCalled();
        expect(dropdownTrigger._dropdownNode).toBeNull();
      });

      it('hides the dropdown when a dropdown item is clicked', () => {
        renderDropdown();
        clickTrigger();

        TestUtils.Simulate.click(document.getElementById('test-dropdown-item'));

        expect(tether.destroy).toHaveBeenCalled();
        expect(dropdownTrigger._dropdownNode).toBeNull();
      });
    });
  });

  it('cleans up when the component is unmounted', () => {
    renderDropdown('right');
    clickTrigger();

    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(dropdownTrigger).parentNode);

    expect(tether.destroy).toHaveBeenCalled();
    expect(dropdownTrigger._tether).toBeNull();
    expect(dropdownTrigger._dropdownNode).toBeNull();
    expect(document.body.getElementsByClassName('dropdown-container').length).toEqual(0);
  });
});

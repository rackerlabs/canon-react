import Popover from '../transpiled/Popover';
import FormPopover from '../transpiled/FormPopover';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import Button from '../transpiled/Button';
import Form from '../transpiled/Form';
import ErrorIndicator from '../transpiled/ErrorIndicator';
import PopoverBody from '../transpiled/PopoverBody';
import PopoverFooter from '../transpiled/PopoverFooter';
import PopoverOverlay from '../transpiled/PopoverOverlay';
import ProcessingIndicator from '../transpiled/ProcessingIndicator';

describe('FormPopover', () => {
  let onCancel, onSubmit, tether;

  beforeEach(() => {
    setFixtures('<div id="content"><div id="container"></div><div id="popover-target></div></div>');
    onCancel = jasmine.createSpy('onCancel');
    onSubmit = jasmine.createSpy('onSubmit');

    tether = jasmine.createSpyObj('tether', ['destroy', 'position']);
    spyOn(Popover.prototype, '_createTether').and.returnValue(tether);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('container'));
    jasmine.getFixtures().cleanUp();
  });

  const formPopover = (popoverProps) => (
    <FormPopover
      onRequestClose={ onCancel }
      onSubmit={ onSubmit }
      target="popover-target"
      isOpen={ true }
      { ...popoverProps }>
      testing child rendering
    </FormPopover>
  );

  describe('behavior', () => {
    let eventSpy;

    const renderPopover = (popoverProps) => {
      ReactDOM.render(
        formPopover(popoverProps),
        document.getElementById('container')
      );
    };

    beforeEach(() => {
      eventSpy = jasmine.createSpy('eventSpy');
      renderPopover({});
    });

    it('prevents default behavior on submit', () => {
      ReactTestUtils.Simulate.click(
        document.querySelector('.rs-btn-primary'),
        { preventDefault: eventSpy }
      );

      expect(eventSpy).toHaveBeenCalled();
    });

    it('fires the submit callback on click', () => {
      ReactTestUtils.Simulate.click(document.querySelector('.rs-btn-primary'));

      expect(onSubmit).toHaveBeenCalled();
    });

    it('prevents default behavior on cancel', () => {
      ReactTestUtils.Simulate.click(
        document.querySelector('.rs-btn-link'),
        { preventDefault: eventSpy }
      );

      expect(eventSpy).toHaveBeenCalled();
    });

    it('fires the request close callback on cancel', () => {
      ReactTestUtils.Simulate.click(document.querySelector('.rs-btn-link'));

      expect(onCancel).toHaveBeenCalled();
    });
  });

  describe('rendering', () => {
    let additionalControls, additionalFooterContent, anotherButton, cancel, errorIndicator,
      form, popover, popoverBody, popoverFooter, popoverOverlay, processingIndicator, submit;

    const shallowRenderPopover = (popoverProps) => {
      let submitIndex, footerComponents, innerComponents;
      submitIndex = 1;
      popover = shallow(formPopover(popoverProps));

      popoverOverlay = popover.children();
      form = popoverOverlay.children();
      [ popoverBody, popoverFooter ] = form.children().map((n) => n);

      footerComponents = popoverFooter.children();

      errorIndicator = footerComponents.first();
      submit = footerComponents.at(submitIndex);
      processingIndicator = footerComponents.last();
      innerComponents = footerComponents.slice(submitIndex + 1, footerComponents.length - 1);
      additionalControls = innerComponents.findWhere((n) => n.type() === Button && !n.children().equals('Cancel'));
      cancel = innerComponents.findWhere((n) => n.type() === Button && n.children().equals('Cancel'));
      additionalFooterContent = innerComponents.last();
      if (cancel.equals(additionalFooterContent.getNode())) {
        additionalFooterContent = undefined;
      }
    };

    beforeEach(() => {
      anotherButton = <Button>Another Button</Button>;
      shallowRenderPopover({ additionalControls: anotherButton });
    });

    it('renders the Popover', () => {
      expect(popover.type()).toBe(Popover);
    });

    it('renders the PopoverOverlay', () => {
      expect(popoverOverlay.type()).toBe(PopoverOverlay);
    });

    it('renders the Form', () => {
      expect(form.type()).toBe(Form);
    });

    it('passes the size prop to the form', () => {
      shallowRenderPopover({ formSize: 'medium' });
      expect(form.prop('size')).toBe('medium');
    });

    it('defaults the horizontal prop to true', () => {
      expect(form.prop('horizontal')).toBe(true);
    });

    it('passes the horizontal prop to the form', () => {
      shallowRenderPopover({ horizontal: false });
      expect(form.prop('horizontal')).toBe(false);
    });

    it('renders the PopoverBody', () => {
      expect(popoverBody.type()).toBe(PopoverBody);
    });

    it('renders the children within the PopoverBody', () => {
      expect(popoverBody.children().equals('testing child rendering')).toBe(true);
    });

    it('renders the PopoverFooter', () => {
      expect(popoverFooter.type()).toBe(PopoverFooter);
    });

    it('renders the ErrorIndicator', () => {
      expect(errorIndicator.type()).toBe(ErrorIndicator);
    });

    it('passes errors to the error indicator', () => {
      shallowRenderPopover({ error: 'this is a test error message' });
      expect(errorIndicator.prop('value')).toBe('this is a test error message');
    });

    it('renders the submit component', () => {
      expect(submit.type()).toBe(Button);
    });

    it('has the correct canonStyle on the submit component', () => {
      expect(submit.prop('canonStyle')).toBe('primary');
    });

    it('enables the submit component', () => {
      expect(submit.prop('enabled')).toBe(true);
    });

    it('renders the additionalControls if passed in', () => {
      expect(additionalControls.equals(anotherButton)).toBe(true);
    });

    it('renders the cancel component', () => {
      expect(cancel.type()).toBe(Button);
    });

    it('has the correct canonStyle on the cancel component', () => {
      expect(cancel.prop('canonStyle')).toBe('link');
    });

    it('shows the cancel component', () => {
      expect(cancel.prop('hidden')).toBe(false);
    });

    describe('prop additionalFooterContent', () => {
      const additionalContent = <div><span>content</span></div>;

      beforeEach(() => {
        shallowRenderPopover({ additionalFooterContent: additionalContent });
      });

      it('renders the content if prop is truthy', () => {
        expect(
          additionalFooterContent.equals(<div className="rs-pull-right">{ additionalContent }</div>)
        ).toBe(true);
      });

      it('does not render the wrapping element when prop is falsy', () => {
        shallowRenderPopover();
        expect(additionalFooterContent).toBe(undefined);
      });

      it('pulls the content to the right', () => {
        expect(additionalFooterContent.hasClass('rs-pull-right')).toBe(true);
      });
    });

    it('renders the ProcessingIndicator', () => {
      expect(processingIndicator.type()).toBe(ProcessingIndicator);
    });

    it('hides the ProcessingIndicator', () => {
      expect(processingIndicator.prop('hidden')).toBe(true);
    });

    describe('while processing', () => {
      beforeEach(() => {
        shallowRenderPopover({ processing: true });
      });

      it('disables submit', () => {
        expect(submit.prop('enabled')).toBe(false);
      });

      it('hides cancel', () => {
        expect(cancel.prop('hidden')).toBe(true);
      });

      it('shows the processing indicator', () => {
        expect(processingIndicator.prop('hidden')).toBe(false);
      });
    });
  });
});

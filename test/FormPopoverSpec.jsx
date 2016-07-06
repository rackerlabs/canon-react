import Popover from '../transpiled/Popover';
import FormPopover from '../transpiled/FormPopover';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

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
      TestUtils.Simulate.click(
        document.querySelector('.rs-btn-primary'),
        { preventDefault: eventSpy }
      );

      expect(eventSpy).toHaveBeenCalled();
    });

    it('fires the submit callback on click', () => {
      TestUtils.Simulate.click(document.querySelector('.rs-btn-primary'));

      expect(onSubmit).toHaveBeenCalled();
    });

    it('prevents default behavior on cancel', () => {
      TestUtils.Simulate.click(
        document.querySelector('.rs-btn-link'),
        { preventDefault: eventSpy }
      );

      expect(eventSpy).toHaveBeenCalled();
    });

    it('fires the request close callback on cancel', () => {
      TestUtils.Simulate.click(document.querySelector('.rs-btn-link'));

      expect(onCancel).toHaveBeenCalled();
    });
  });

  describe('rendering', () => {
    let popover, popoverOverlay, form, popoverBody, popoverFooter, errorIndicator,
      submit, cancel, processingIndicator;

    const shallowRenderPopover = (popoverProps) => {
      const renderer = TestUtils.createRenderer();
      renderer.render(formPopover(popoverProps));

      popover = renderer.getRenderOutput();
      popoverOverlay = popover.props.children;
      form = popoverOverlay.props.children;
      [ popoverBody, popoverFooter ] = form.props.children;
      [ errorIndicator, submit, cancel, processingIndicator ] = popoverFooter.props.children;
    };

    beforeEach(() => {
      shallowRenderPopover({});
    });

    it('renders the Popover', () => {
      expect(popover.type).toBe(Popover);
    });

    it('renders the PopoverOverlay', () => {
      expect(popoverOverlay.type).toBe(PopoverOverlay);
    });

    it('renders the Form', () => {
      expect(form.type).toBe(Form);
    });

    it('passes the size prop to the form', () => {
      shallowRenderPopover({ formSize: 'medium' });
      expect(form.props.size).toBe('medium');
    });

    it('defaults the horizontal prop to true', () => {
      expect(form.props.horizontal).toBe(true);
    });

    it('passes the horizontal prop to the form', () => {
      shallowRenderPopover({ horizontal: false });
      expect(form.props.horizontal).toBe(false);
    });

    it('renders the PopoverBody', () => {
      expect(popoverBody.type).toBe(PopoverBody);
    });

    it('renders the children within the PopoverBody', () => {
      expect(popoverBody.props.children).toEqual('testing child rendering');
    });

    it('renders the PopoverFooter', () => {
      expect(popoverFooter.type).toBe(PopoverFooter);
    });

    it('renders the ErrorIndicator', () => {
      expect(errorIndicator.type).toBe(ErrorIndicator);
    });

    it('passes errors to the error indicator', () => {
      shallowRenderPopover({ error: 'this is a test error message' });
      expect(errorIndicator.props.value).toBe('this is a test error message');
    });

    it('renders the submit component', () => {
      expect(submit.type).toBe(Button);
    });

    it('has the correct canonStyle on the submit component', () => {
      expect(submit.props.canonStyle).toBe('primary');
    });

    it('enables the submit component', () => {
      expect(submit.props.enabled).toBe(true);
    });

    it('renders the cancel component', () => {
      expect(cancel.type).toBe(Button);
    });

    it('has the correct canonStyle on the cancel component', () => {
      expect(cancel.props.canonStyle).toBe('link');
    });

    it('shows the cancel component', () => {
      expect(cancel.props.hidden).toBe(false);
    });

    it('renders the ProcessingIndicator', () => {
      expect(processingIndicator.type).toBe(ProcessingIndicator);
    });

    it('hides the ProcessingIndicator', () => {
      expect(processingIndicator.props.hidden).toBe(true);
    });

    describe('while processing', () => {
      beforeEach(() => {
        shallowRenderPopover({ processing: true });
      });

      it('disables submit', () => {
        expect(submit.props.enabled).toBe(false);
      });

      it('hides cancel', () => {
        expect(cancel.props.hidden).toBe(true);
      });

      it('shows the processing indicator', () => {
        expect(processingIndicator.props.hidden).toBe(false);
      });
    });
  });
});

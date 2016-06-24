import Popover from '../transpiled/Popover';
import FormPopover from '../transpiled/FormPopover';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

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

  const renderPopover = (popoverProps) => {
    ReactDOM.render(
      <FormPopover
        onRequestClose={onCancel}
        onSubmit={onSubmit}
        target="popover-target"
        isOpen={true}
        {...popoverProps}>
        test
      </FormPopover>,
      document.getElementById('container')
    );
  };

  it('fires the submit callback on click', () => {
    renderPopover({});
    TestUtils.Simulate.click(document.querySelector('.rs-btn-primary'));

    expect(onSubmit).toHaveBeenCalled();
  });

  it('prevents default behavior on submit', () => {
    let eventCancelSpy;

    eventCancelSpy = jasmine.createSpy('eventCancelSpy');
    renderPopover({});
    TestUtils.Simulate.click(
      document.querySelector('.rs-btn-primary'),
      { preventDefault: eventCancelSpy }
    );

    expect(eventCancelSpy).toHaveBeenCalled();
  });

  it('fires the request close callback on cancel', () => {
    renderPopover({});
    TestUtils.Simulate.click(document.querySelector('.rs-btn-link'));

    expect(onCancel).toHaveBeenCalled();
  });

  it('prevents default behavior on cancel', () => {
    let eventCancelSpy;

    eventCancelSpy = jasmine.createSpy('eventCancelSpy');
    renderPopover({});
    TestUtils.Simulate.click(
      document.querySelector('.rs-btn-link'),
      { preventDefault: eventCancelSpy }
    );

    expect(eventCancelSpy).toHaveBeenCalled();
  });

  describe('while processing', () => {
    beforeEach(() => {
      renderPopover({ processing: true });
    });

    it('disables submit', () => {
      expect(document.querySelector('.rs-btn-primary')).toHaveClass('disabled');
    });

    it('hides cancel', () => {
      expect(document.querySelector('.rs-btn-link')).not.toBe(null);
    });

    it('shows the processing indicator', () => {
      expect(document.querySelector('.rs-processing-indicator')).not.toHaveClass('rs-hidden');
    });
  });

  it('enables submit', () => {
    renderPopover({});
    expect(document.querySelector('.rs-btn-primary')).not.toHaveClass('disabled');
  });

  it('shows cancel', () => {
    renderPopover({});
    expect(document.querySelector('.rs-btn-link')).not.toHaveClass('rs-hidden');
  });

  it('hides the processing indicator', () => {
    expect(document.querySelector('.rs-processing-indicator')).toBe(null);
  });

  it('passes errors to the validation block', () => {
    renderPopover({ error: 'this is a test error message' });
    expect(document.querySelector('.rs-validation-block').textContent).toBe(' this is a test error message');
  });

  it('passes the formSize prop to the form', () => {
    renderPopover({ formSize: 'medium' });
    expect(document.querySelector('form')).toHaveClass('rs-form-medium');
  });

  it('passes the horizontal prop to the form', () => {
    renderPopover({ horizontal: false });
    expect(document.querySelector('form')).not.toHaveClass('rs-form-horizontal');
  });

  it('passes the horizontal prop defaulting to true to the form', () => {
    renderPopover();
    expect(document.querySelector('form')).toHaveClass('rs-form-horizontal');
  });
});

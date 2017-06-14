import Form from '../transpiled/Form';
import React from 'react';
import { shallow } from 'enzyme';

describe('Form', () => {
  let form;

  const renderWithProps = (props) => {
    return shallow(
      <Form { ...props }>
        Test Content
      </Form>
    );
  };

  beforeEach(() => {
    form = renderWithProps();
  });

  it('adds the horizontal class as the only default class', () => {
    expect(form.hasClass('rs-form-horizontal')).toBe(true);
  });

  it('adds the horizontal class if horizontal is true', () => {
    form = renderWithProps({ horizontal: true });

    expect(form.hasClass('rs-form-horizontal')).toBe(true);
  });

  it('does not add the horizontal class if horizontal is false', () => {
    form = renderWithProps({ horizontal: false });

    expect(form.hasClass('')).toBe(true);
  });

  it('adds a valid size class', () => {
    form = renderWithProps({ size: 'xsmall', horizontal: false });

    expect(form.hasClass('rs-form-xsmall')).toBe(true);
  });

  it('adds the create class if create is true', () => {
    form = renderWithProps({ create: true, horizontal: false });

    expect(form.hasClass('rs-form-create')).toBe(true);
  });

  it('does not add the create class if create is false', () => {
    form = renderWithProps({ create: false, horizontal: false });

    expect(form.hasClass('')).toBe(true);
  });

  it('adds passed-in class names', () => {
    form = renderWithProps({ className: 'some-nonsense', horizontal: false });

    expect(form.hasClass('some-nonsense')).toBe(true);
  });
});

import Form from '../transpiled/Form';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Form', () => {
  let renderer;

  const renderWithProps = (props) => {
    renderer.render(
      <Form { ...props }>
        Test Content
      </Form>
    );
  };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('adds the horizontal class as the only default class', () => {
    renderWithProps({});
    const form = renderer.getRenderOutput();

    expect(form.props.className).toEqual('rs-form-horizontal');
  });

  it('adds the horizontal class if horizontal is true', () => {
    renderWithProps({ horizontal: true });
    const form = renderer.getRenderOutput();

    expect(form.props.className).toEqual('rs-form-horizontal');
  });

  it('does not add the horizontal class if horizontal is false', () => {
    renderWithProps({ horizontal: false });
    const form = renderer.getRenderOutput();

    expect(form.props.className).toEqual('');
  });

  it('adds a valid size class', () => {
    renderWithProps({ size: 'xsmall', horizontal: false });
    const form = renderer.getRenderOutput();

    expect(form.props.className).toEqual('rs-form-xsmall');
  });

  it('does not add an invalid size classes', () => {
    renderWithProps({ size: 'ginormous', horizontal: false });
    const form = renderer.getRenderOutput();

    expect(form.props.className).toEqual('');
  });

  it('adds the create class if create is true', () => {
    renderWithProps({ create: true, horizontal: false });
    const form = renderer.getRenderOutput();

    expect(form.props.className).toEqual('rs-form-create');
  });

  it('does not add the create class if create is false', () => {
    renderWithProps({ create: false, horizontal: false });
    const form = renderer.getRenderOutput();

    expect(form.props.className).toEqual('');
  });

  it('adds passed-in class names', () => {
    renderWithProps({ className: 'some-nonsense', horizontal: false });
    const form = renderer.getRenderOutput();

    expect(form.props.className).toEqual('some-nonsense');
  });
});

import { shallow } from 'enzyme';
import ErrorOverlay from '../transpiled/ErrorOverlay';
import ListTableOverlay from '../transpiled/ListTableOverlay';

describe('ErrorOverlay', () => {
  let errorOverlay, overlay;

  beforeEach(() => {
    errorOverlay = shallow(
      <ErrorOverlay message="This is an error message" />
    );

    overlay = errorOverlay.find(ListTableOverlay);
  });

  it('renders a root ListTableOverlay', () => {
    expect(errorOverlay.type()).toBe(ListTableOverlay);
  });

  it('passes an rs-table-overlay-error className', () => {
    expect(overlay.props().className).toBe('rs-table-overlay-error');
  });

  describe('the message', () => {
    let message;

    beforeEach(() => {
      message = shallow(overlay.props().message);
    });

    it('has an error indicator icon', () => {
      expect(message.find('.rs-icon-error-indicator').length).toBe(1);
    });

    it('has the expected text', () => {
      expect(message.text()).toBe('This is an error message');
    });
  });
});

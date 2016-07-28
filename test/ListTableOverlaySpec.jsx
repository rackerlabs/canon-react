import { shallow } from 'enzyme';
import ListTableOverlay from '../transpiled/ListTableOverlay';

describe('ListTableOverlay', () => {
  let overlay;

  describe('when rendering with all properties', () => {
    beforeEach(() => {
      overlay = shallow(
        <ListTableOverlay
          title="This is a title"
          subtitle="This is a subtitle"
          message="This is a message"
        />
      );
    });

    it('renders the wrapper divs', () => {
      expect(overlay.find('.rs-table-overlay').length).toBe(1);
      expect(overlay.find('.rs-table-overlay').find('.rs-table-overlay-content').length).toBe(1);
    });

    it('renders the title', () => {
      expect(overlay.find('.rs-table-overlay-title').text()).toBe('This is a title');
    });

    it('renders the subtitle', () => {
      expect(overlay.find('.rs-table-overlay-subtitle').text()).toBe('This is a subtitle');
    });

    it('renders the message', () => {
      expect(overlay.find('.rs-table-overlay-message').text()).toBe('This is a message');
    });
  });

  describe('when the title, subtitle, and message properties are not defined', () => {
    beforeEach(() => {
      overlay = shallow(<ListTableOverlay />);
    });

    it('does not render the title div', () => {
      expect(overlay.find('.rs-table-overlay-title').length).toBe(0);
    });

    it('does not render the subtitle div', () => {
      expect(overlay.find('.rs-table-overlay-subtitle').length).toBe(0);
    });

    it('does not render the message div', () => {
      expect(overlay.find('.rs-table-overlay-message').length).toBe(0);
    });
  });

  it('adds the supplied class', () => {
    overlay = shallow(<ListTableOverlay className="blah" />);

    expect(overlay.find('.blah').length).toBe(1);
  });
});

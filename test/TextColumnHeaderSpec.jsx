import { shallow } from 'enzyme';
import SortDirection from '../transpiled/SortDirection';
import TextColumnHeader from '../transpiled/TextColumnHeader';

describe('TextColumnHeader', () => {
  let header;

  describe('when the header is not sortable', () => {
    beforeEach(() => {
      header = shallow(
        <TextColumnHeader sortable={ false } label="This is a label" className="test-class" />
      );
    });

    it('adds a table header', () => {
      expect(header.type()).toBe('th');
    });

    it('adds the text span with the label', () => {
      expect(header.find('.rs-table-sort-text').text()).toBe('This is a label');
    });

    it('adds the supplied className', () => {
      expect(header.find('.rs-table-sort-text').hasClass('test-class')).toBe(true);
    });
  });

  describe('when the header is sortable', () => {
    let sortSpy;

    beforeEach(() => {
      sortSpy = jasmine.createSpy('onSort');

      header = shallow(
        <TextColumnHeader sortable direction={ SortDirection.ASCENDING }
          onSort={ sortSpy } label="This is another label" className="test-class" />
      );
    });

    it('adds a table header', () => {
      expect(header.type()).toBe('th');
    });

    it('adds a link with the rs-table-sort class', () => {
      expect(header.find('a').length).toBe(1);
      expect(header.find('a').hasClass('rs-table-sort')).toBe(true);
    });

    it('adds the supplied className', () => {
      expect(header.find('a').hasClass('test-class')).toBe(true);
    });

    it('does not adds the ascending class', () => {
      expect(header.find('a').hasClass('rs-table-sort-asc')).toBe(true);
    });

    it('adds the text span with the label', () => {
      expect(header.find('.rs-table-sort-text').text()).toBe('This is another label');
    });

    it('adds the sort indicator spacing span', () => {
      expect(header.find('.rs-table-sort-indicator').length).toBe(1);
    });

    describe('when the sort link is clicked', () => {
      let event;

      beforeEach(() => {
        const clickHandler = header.find('a').props().onClick;
        event = {
          preventDefault: jasmine.createSpy('preventDefault'),
          stopPropagation: jasmine.createSpy('stopPropagation')
        };

        clickHandler(event);
      });

      it('reverses the direction', () => {
        expect(sortSpy).toHaveBeenCalledWith(SortDirection.DESCENDING);
      });

      it('prevents the default link behavior', () => {
        expect(event.preventDefault).toHaveBeenCalled();
      });

      it('stops the event propagation', () => {
        expect(event.stopPropagation).toHaveBeenCalled();
      });
    });
  });
});

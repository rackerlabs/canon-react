import { shallow } from 'enzyme';
import CheckboxColumnHeader from '../transpiled/CheckboxColumnHeader';

describe('CheckboxColumnHeader', () => {
  it('renders correctly', () => {
    const header = shallow(
      <CheckboxColumnHeader />
    );

    expect(header.type()).toBe('th');
    expect(header.hasClass('rs-table-checkbox')).toBe(true);
  });

  it('adds the supplied className', () => {
    const header = shallow(
      <CheckboxColumnHeader className="test-class" />
    );

    expect(header.hasClass('test-class')).toBe(true);
  });
});

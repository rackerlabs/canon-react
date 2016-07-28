import { shallow } from 'enzyme';
import LoadingOverlay from '../transpiled/LoadingOverlay';
import ListTableOverlay from '../transpiled/ListTableOverlay';

describe('LoadingOverlay', () => {
  let loadingOverlay;

  it('renders correctly', () => {
    loadingOverlay = shallow(
      <LoadingOverlay />
    );

    expect(loadingOverlay.equals(
      <ListTableOverlay className="rs-table-overlay-loading" message="Loading&hellip;" />
    )).toBe(true);
  });
});

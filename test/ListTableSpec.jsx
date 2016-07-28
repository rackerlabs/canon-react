import { shallow } from 'enzyme';
import ListTable from '../transpiled/ListTable';
import ListTableOverlaySelector from '../transpiled/ListTableOverlaySelector';
import OverlayStatus from '../transpiled/OverlayStatus';

describe('ListTable', () => {
  let listTable, overlayStatus, emptyOverlay, errorOverlay, loadingOverlay;

  beforeEach(() => {
    overlayStatus = OverlayStatus.NONE;
    emptyOverlay = <span className="empty_overlay">I'm so empty!</span>;
    errorOverlay = <span className="error_overlay">There was a problem loading your data!</span>;
    loadingOverlay = <span className="loading_overlay">I'm loading your data!</span>;

    listTable = shallow(
      <ListTable { ...{overlayStatus, emptyOverlay, errorOverlay, loadingOverlay} }>
        <span className="test-child-1" />
        <span className="test-child-2" />
      </ListTable>
    );
  });

  it('renders a table element with the rs-list-table class', () => {
    const table = listTable.find('table');

    expect(table.length).toBe(1);
    expect(table.hasClass('rs-list-table')).toBe(true);
  });

  it('renders its children', () => {
    expect(listTable.find('span').length).toBe(2);
  });

  it('renders a ListTableOverlaySelector with the overlay status and overlays', () => {
    const selector = listTable.find(ListTableOverlaySelector);

    expect(selector.length).toBe(1);
    expect(selector.props().overlayStatus).toBe(overlayStatus);
    expect(selector.props().emptyOverlay).toBe(emptyOverlay);
    expect(selector.props().errorOverlay).toBe(errorOverlay);
    expect(selector.props().loadingOverlay).toBe(loadingOverlay);
  });
});

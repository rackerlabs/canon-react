import { shallow } from 'enzyme';
import EmbeddedListTable from '../transpiled/EmbeddedListTable';
import ListTableOverlaySelector from '../transpiled/ListTableOverlaySelector';
import OverlayStatus from '../transpiled/OverlayStatus';

describe('EmbeddedListTable', () => {
  let listTable, overlayStatus, emptyOverlay, errorOverlay, loadingOverlay;

  beforeEach(() => {
    overlayStatus = OverlayStatus.NONE;
    emptyOverlay = <span className="empty_overlay">I'm so empty!</span>;
    errorOverlay = <span className="error_overlay">There was a problem loading your data!</span>;
    loadingOverlay = <span className="loading_overlay">I'm loading your data!</span>;

    listTable = shallow(
      <EmbeddedListTable { ...{overlayStatus, emptyOverlay, errorOverlay, loadingOverlay} }>
        <span className="test-child-1" />
        <span className="test-child-2" />
      </EmbeddedListTable>
    );
  });

  it('renders a wrapper div', () => {
    expect(listTable.type()).toBe('div');
    expect(listTable.hasClass('rs-embedded-list-table-wrapper')).toBe(true);
  });

  it('renders a table element with the rs-list-table and rs-embedded-list-table classes', () => {
    const table = listTable.find('table');

    expect(table.length).toBe(1);
    expect(table.hasClass('rs-list-table')).toBe(true);
    expect(table.hasClass('rs-embedded-list-table')).toBe(true);
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

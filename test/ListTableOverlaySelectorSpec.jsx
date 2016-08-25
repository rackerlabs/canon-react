import { shallow } from 'enzyme';
import ListTableOverlaySelector from '../transpiled/ListTableOverlaySelector';
import OverlayStatus from '../transpiled/OverlayStatus';

describe('ListTableOverlaySelector', () => {
  it('renders the empty overlay if overlayStatus is EMPTY', () => {
    const selector = shallow(
      <ListTableOverlaySelector
        overlayStatus={ OverlayStatus.EMPTY }
        emptyOverlay={ <span className="empty_overlay">I'm so empty!</span> }
        errorOverlay={ <span className="error_overlay">There was a problem loading your data!</span> }
        loadingOverlay={ <span className="loading_overlay">I'm loading your data!</span> }
      />
    );

    expect(selector.find('.empty_overlay').length).toBe(1);
    expect(selector.find('.error_overlay').length).toBe(0);
    expect(selector.find('.loading_overlay').length).toBe(0);
  });

  it('renders the error overlay if overlayStatus is ERROR', () => {
    const selector = shallow(
      <ListTableOverlaySelector
        overlayStatus={ OverlayStatus.ERROR }
        emptyOverlay={ <span className="empty_overlay">I'm so empty!</span> }
        errorOverlay={ <span className="error_overlay">There was a problem loading your data!</span> }
        loadingOverlay={ <span className="loading_overlay">I'm loading your data!</span> }
      />
    );

    expect(selector.find('.empty_overlay').length).toBe(0);
    expect(selector.find('.error_overlay').length).toBe(1);
    expect(selector.find('.loading_overlay').length).toBe(0);
  });

  it('renders the loading overlay if overlayStatus is LOADING', () => {
    const selector = shallow(
      <ListTableOverlaySelector
        overlayStatus={ OverlayStatus.LOADING }
        emptyOverlay={ <span className="empty_overlay">I'm so empty!</span> }
        errorOverlay={ <span className="error_overlay">There was a problem loading your data!</span> }
        loadingOverlay={ <span className="loading_overlay">I'm loading your data!</span> }
      />
    );

    expect(selector.find('.empty_overlay').length).toBe(0);
    expect(selector.find('.error_overlay').length).toBe(0);
    expect(selector.find('.loading_overlay').length).toBe(1);
  });

  it('does not render an overlay if overlayStatus is NONE', () => {
    const selector = shallow(
      <ListTableOverlaySelector
        overlayStatus={ OverlayStatus.NONE }
        emptyOverlay={ <span className="empty_overlay">I'm so empty!</span> }
        errorOverlay={ <span className="error_overlay">There was a problem loading your data!</span> }
        loadingOverlay={ <span className="loading_overlay">I'm loading your data!</span> }
      />
    );

    expect(selector.find('.empty_overlay').length).toBe(0);
    expect(selector.find('.error_overlay').length).toBe(0);
    expect(selector.find('.loading_overlay').length).toBe(0);
  });
});

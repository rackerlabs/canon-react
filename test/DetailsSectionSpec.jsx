import DetailsSection from '../transpiled/DetailsSection';
import DetailsSectionSubtitle from '../transpiled/DetailsSectionSubtitle';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

describe('DetailsSection', () => {
  let detailsSection, currentState, toggleState, header;

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(detailsSection).parentNode);
  });

  toggleState = ((isCollapsed) => {
    currentState = isCollapsed;
  });

  it('displays the title but no subtitle without prop', () => {
    let title, hasSubtitle;

    detailsSection = ReactTestUtils.renderIntoDocument(<DetailsSection title="title" />);
    title = ReactTestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-title');
    hasSubtitle = ReactTestUtils.scryRenderedDOMComponentsWithClass(detailsSection, 'rs-detail-section-subtitle').length === 1;
    expect(title.textContent).toBe('title');
    expect(hasSubtitle).toBe(false);
  });

  it('does not display a title when not passed as prop', () => {
    let hasTitle;

    detailsSection = ReactTestUtils.renderIntoDocument(<DetailsSection />);
    hasTitle = ReactTestUtils.scryRenderedDOMComponentsWithClass(detailsSection, 'rs-detail-section-title').length === 1;
    expect(hasTitle).toBe(false);
  });

  it('displays the subtitle when passed prop', () => {
    let subtitle;

    detailsSection = ReactTestUtils.renderIntoDocument(<DetailsSection title="title" subtitle={ <DetailsSectionSubtitle>subtitle</DetailsSectionSubtitle> }/>);
    subtitle = ReactTestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-subtitle');
    expect(subtitle.textContent).toBe('subtitle');
  });

  it('renders component with props id', () => {
    detailsSection = ReactTestUtils.renderIntoDocument(<DetailsSection id="id" title="title" />);
    expect(ReactDOM.findDOMNode(detailsSection).id).toBe('id');
  });

  it('displays children', () => {
    let sectionChild;

    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title"><span className="test-child">test value</span></DetailsSection>
    );
    sectionChild = ReactTestUtils.findRenderedDOMComponentWithClass(detailsSection, 'test-child');
    expect(sectionChild.textContent).toBe('test value');
  });

  it('displays passed in header', () => {
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title" headers={ <div className="header">headers</div> }><span className="test-child">test value</span></DetailsSection>
    );
    header = ReactTestUtils.findRenderedDOMComponentWithClass(detailsSection, 'header');
    expect(header.textContent).toBe('headers');
  });

  it('has only default class when custom class not provided and does not render caret', () => {
    let caretRendered;
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title">
        Test Detail List
      </DetailsSection>
    );

    caretRendered = ReactTestUtils.scryRenderedDOMComponentsWithClass(detailsSection, 'rs-caret').length === 1;
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section');
    expect(ReactDOM.findDOMNode(detailsSection)).not.toHaveClass('expanded');
    expect(ReactDOM.findDOMNode(detailsSection)).not.toHaveClass('collapsed');
    expect(caretRendered).toBe(false);
  });

  it('non-collapsible section does not change on click', () => {
    let caretRendered;
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title">
        Test Detail List
      </DetailsSection>
    );

    header = ReactTestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-header');
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    caretRendered = ReactTestUtils.scryRenderedDOMComponentsWithClass(detailsSection, 'rs-caret').length === 1;
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section');
    expect(ReactDOM.findDOMNode(detailsSection)).not.toHaveClass('rs-collapsible-section collapsed');
    expect(ReactDOM.findDOMNode(detailsSection)).not.toHaveClass('rs-collapsible-section expanded');
    expect(caretRendered).toBe(false);

  });

  it('renders collapsible section with caret when passed collapsible as prop', () => {
    let caretRendered;
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title" collapsible={ true }>
        Test Detail List
      </DetailsSection>
    );

    caretRendered = ReactTestUtils.scryRenderedDOMComponentsWithClass(detailsSection, 'rs-caret').length === 1;
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section expanded');
    expect(caretRendered).toBe(true);
  });

  it('renders collapsible section as loading when passed isLoading and collapsible props', () => {
    let caretRendered, loading;
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection isLoading={ true } title="title" collapsible={ true }>
        Test Detail List
      </DetailsSection>
    );

    caretRendered = ReactTestUtils.scryRenderedDOMComponentsWithClass(detailsSection, 'rs-caret').length === 1;
    loading = ReactTestUtils.scryRenderedDOMComponentsWithClass(detailsSection, 'loading').length === 1;
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section expanded');
    expect(caretRendered).toBe(true);
    expect(loading).toBe(true);
  });

  it('renders collapsible section as initially collapsed when passed props', () => {
    let caretRendered;
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title" collapsible={ true } initialCollapsed={ true }>
        Test Detail List
      </DetailsSection>
    );

    caretRendered = ReactTestUtils.scryRenderedDOMComponentsWithClass(detailsSection, 'rs-caret').length === 1;
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section collapsed');
    expect(caretRendered).toBe(true);
  });

  it('renders collapsible section initally collapsed and loading when passed props', () => {
    let caretRendered, loading;
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title" isLoading={ true } collapsible={ true } initialCollapsed={ true }>
        Test Detail List
      </DetailsSection>
    );

    caretRendered = ReactTestUtils.scryRenderedDOMComponentsWithClass(detailsSection, 'rs-caret').length === 1;
    loading = ReactTestUtils.scryRenderedDOMComponentsWithClass(detailsSection, 'loading').length === 1;
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section collapsed');
    expect(caretRendered).toBe(true);
    expect(loading).toBe(true);
  });

  it('expanded section collapses on single click', () => {
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title" collapsible={ true }>
        Test Detail List
      </DetailsSection>
    );

    header = ReactTestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-header');
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section collapsed');
  });

  it('collapsed section expands on single click', () => {
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title" collapsible={ true }>
        Test Detail List
      </DetailsSection>
    );

    header = ReactTestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-header');
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section expanded');
  });

  it('section collapses and expands properly on multiple clicks', () => {
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title" collapsible={ true }>
        Test Detail List
      </DetailsSection>
    );

    header = ReactTestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-header');
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section expanded');
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section collapsed');
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section expanded');
  });

  it('section inititally expanded collapses and expands properly on multiple clicks', () => {
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title" collapsible={ true } initialCollapsed={ false }>
        Test Detail List
      </DetailsSection>
    );

    header = ReactTestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-header');
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section expanded');
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section collapsed');
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section expanded');
  });

  it('section initally expanded updates currentState with onToggleCollapsed', () => {
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title" collapsible={ true } initialCollapsed={ currentState = false } onToggleCollapsed={ toggleState }
       >
          Test Detail List
      </DetailsSection>
    );

    header = ReactTestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-header');
    expect(currentState).toBe(false);
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(currentState).toBe(true);
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(currentState).toBe(false);
  });

  it('section initally collapsed updates currentState with onToggleCollapsed', () => {
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title" collapsible={ true } initialCollapsed={ currentState = true } onToggleCollapsed={ toggleState }>
          Test Detail List
      </DetailsSection>
    );

    header = ReactTestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-header');
    expect(currentState).toBe(true);
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(currentState).toBe(false);
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(currentState).toBe(true);
  });

  it('section expands and collapses properly on multiple clicks', () => {
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title" collapsible={ true }>
        Test Detail List
      </DetailsSection>
    );

    header = ReactTestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-header');
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section collapsed');
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section expanded');
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(header));
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section collapsed');
  });

  it('section doesnt collapse when clicking on body', () => {
    detailsSection = ReactTestUtils.renderIntoDocument(
      <DetailsSection title="title" collapsible={ true }>
        Test Detail List
      </DetailsSection>
    );

    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section expanded');
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(detailsSection));
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section expanded');
  });
});

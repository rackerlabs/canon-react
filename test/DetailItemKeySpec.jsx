import DetailItemKey from '../transpiled/DetailItemKey';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('DetailItemKey', () => {
  let detailItemKey;

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(detailItemKey).parentNode);
  });

  it('renders provided class name correctly', () => {
    detailItemKey = TestUtils.renderIntoDocument(
      <DetailItemKey id='detail-item-key-id' className='test-detail-item-key-class'>
        Test Detail Item
      </DetailItemKey>
    );

    expect(ReactDOM.findDOMNode(detailItemKey)).toHaveClass('rs-detail-key test-detail-item-key-class');
  });

  it('has only default classs when custom class not provided', () => {
    detailItemKey = TestUtils.renderIntoDocument(
      <DetailItemKey id='rs-detail-key'>
        Test Detail Item Key
      </DetailItemKey>
    );

    expect(ReactDOM.findDOMNode(detailItemKey)).toHaveClass('rs-detail-key');
  });

  it('has correct id when passed in as prop', () => {
    detailItemKey = TestUtils.renderIntoDocument(
      <DetailItemKey id='detail-item-key-id' className='test-detail-item-key-class'>
        Test Detail Item
      </DetailItemKey>
    );

    expect(ReactDOM.findDOMNode(detailItemKey).id).toBe('detail-item-key-id');
  });

  it('renders passed in children', () => {
    detailItemKey = TestUtils.renderIntoDocument(
      <DetailItemKey id='detail-item-id' className='test-detail-item-key-class'>
        <div id='target-child'>Target Child</div>
      </DetailItemKey>
    );

    expect(TestUtils.findRenderedDOMComponentWithClass(detailItemKey, 'test-detail-item-key-class')).not.toBeNull();
  });
});

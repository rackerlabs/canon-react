import DetailItem from '../transpiled/DetailItem';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('DetailItem', () => {
  let detailItem;

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(detailItem).parentNode);
  });

  it('renders provided class name correctly', () => {
    detailItem = TestUtils.renderIntoDocument(
      <DetailItem id='detail-item-id' className='test-detail-item-class'>
        Test Detail Item
      </DetailItem>
    );

    expect(ReactDOM.findDOMNode(detailItem)).toHaveClass('rs-detail-item test-detail-item-class');
  });

  it('has only default classs when custom class not provided', () => {
    detailItem = TestUtils.renderIntoDocument(
      <DetailItem id='detail-item-id'>
        Test Detail Item
      </DetailItem>
    );

    expect(ReactDOM.findDOMNode(detailItem)).toHaveClass('rs-detail-item');
  });

  it('has correct id when passed in as prop', () => {
    detailItem = TestUtils.renderIntoDocument(
      <DetailItem id='detail-item-id' className='test-detail-item-class'>
        Test Detail Item
      </DetailItem>
    );

    expect(ReactDOM.findDOMNode(detailItem).id).toBe('detail-item-id');
  });

  it('renders passed in children', () => {
    detailItem = TestUtils.renderIntoDocument(
      <DetailItem id='detail-item-id' className='test-detail-item-class'>
        <div id='target-child'>Target Child</div>
      </DetailItem>
    );

    expect(TestUtils.findRenderedDOMComponentWithClass(detailItem, 'test-detail-item-class')).not.toBeNull();
  });
});

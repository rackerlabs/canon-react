import DetailItemValue from '../transpiled/DetailItemValue';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('DetailItemValue', () => {
  let detailItemValue;

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(detailItemValue).parentNode);
  });

  it('renders provided class name correctly', () => {
    detailItemValue = TestUtils.renderIntoDocument(
      <DetailItemValue id='detail-item-value-id' className='test-detail-item-value-class'>
        Test Detail Item
      </DetailItemValue>
    );

    expect(ReactDOM.findDOMNode(detailItemValue)).toHaveClass('rs-detail-value test-detail-item-value-class');
  });

  it('has only default class when custom class not provided', () => {
    detailItemValue = TestUtils.renderIntoDocument(
      <DetailItemValue id='rs-detail-value'>
        Test Detail Item Value
      </DetailItemValue>
    );

    expect(ReactDOM.findDOMNode(detailItemValue)).toHaveClass('rs-detail-value');
  });

  it('has correct id when passed in as prop', () => {
    detailItemValue = TestUtils.renderIntoDocument(
      <DetailItemValue id='detail-item-value-id' className='test-detail-item-value-class'>
        Test Detail Item
      </DetailItemValue>
    );

    expect(ReactDOM.findDOMNode(detailItemValue).id).toBe('detail-item-value-id');
  });

  it('renders passed in children', () => {
    detailItemValue = TestUtils.renderIntoDocument(
      <DetailItemValue id='detail-item-id' className='test-detail-item-value-class'>
        <div id='target-child'>Target Child</div>
      </DetailItemValue>
    );

    expect(TestUtils.findRenderedDOMComponentWithClass(detailItemValue, 'test-detail-item-value-class')).not.toBeNull();
  });
});

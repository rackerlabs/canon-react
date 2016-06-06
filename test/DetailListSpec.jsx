import DetailList from '../transpiled/DetailList';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('DetailList', () => {
  let detailList;

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(detailList).parentNode);
  });

  it('renders provided class name correctly', () => {
    detailList = TestUtils.renderIntoDocument(
      <DetailList id='detail-list-id' className='test-detail-list-class'>
        Test Detail List
      </DetailList>
    );

    expect(ReactDOM.findDOMNode(detailList)).toHaveClass('rs-detail-list test-detail-list-class');
  });

  it('has only default classs when custom class not provided', () => {
    detailList = TestUtils.renderIntoDocument(
      <DetailList id='detail-list-id'>
        Test Detail List
      </DetailList>
    );

    expect(ReactDOM.findDOMNode(detailList)).toHaveClass('rs-detail-list');
  });

  it('has correct id when passed in as prop', () => {
    detailList = TestUtils.renderIntoDocument(
      <DetailList id='detail-list-id' className='test-detail-list-class'>
        Test Detail List
      </DetailList>
    );

    expect(ReactDOM.findDOMNode(detailList).id).toBe('detail-list-id');
  });

  it('renders passed in children', () => {
    detailList = TestUtils.renderIntoDocument(
      <DetailList id='detail-list-id' className='test-detail-list-class'>
        <div id='target-child'>Target Child</div>
      </DetailList>
    );

    expect(TestUtils.findRenderedDOMComponentWithClass(detailList, 'test-detail-list-class')).not.toBeNull();
  });
});

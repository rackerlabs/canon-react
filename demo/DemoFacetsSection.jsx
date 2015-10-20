import React from 'react';

import FacetsSection from './FacetsSection';

class DemoFacetsSection extends React.Component {

  render() {
    let facetData, style;

    facetData = [
      {label: 'TAGS', criteria: [
        {label: 'Development', count: 3, filter: function () {}},
        {label: 'Staging', count: 1, filter: function () {}},
        {label: 'Production', count: 1, filter: function () {}},
        {label: 'Billing', count: 3, filter: function () {}},
        {label: 'Marketing', count: 2, filter: function () {}},
        {label: 'Product', count: 5, filter: function () {}},
        {label: 'Engineering', count: 8, filter: function () {}},
        {label: 'Sales', count: 2, filter: function () {}},
        {label: 'Finance', count: 1, filter: function () {}}
      ]},
      {label: 'STATUS', criteria: [
        {label: 'Error', count: 2, filter: function () {}, iconClass: 'rs-status-error'},
        {label: 'Rebooting', count: 3, filter: function () {}, iconClass: 'rs-status-warning'},
        {label: 'Active', count: 5, filter: function () {}, iconClass: 'rs-status-ok'}
      ]},
      {label: 'IMAGE', criteria: [
        {label: 'Ubuntu', count: 3, filter: function () {}},
        {label: 'RHEL 6.4', count: 1, filter: function () {}},
        {label: 'Debian 7 Wheezy', count: 2, filter: function () {}},
        {label: 'Vyatta Network OS 6.5R2', count: 4, filter: function () {}}
      ]},
      {label: 'Flavor', criteria: [
        {label: '2 GB Standard Instance', count: 10, filter: function () {}},
        {label: '512 MB Standard Instance', count: 10, filter: function () {}}
      ]},
    ];
    style = {maxWidth: '270px'};
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Facets</h2>
        </div>
        <div className='rs-detail-section-body' style={style}>
          <FacetsSection facetSectionHeader={"Filter Products"} facetData={facetData}/>
        </div>
      </div>
    );
  }
}

export default DemoFacetsSection;

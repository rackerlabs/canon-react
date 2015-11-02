import React from 'react';

import FacetsSection from './FacetsSection';

class DemoFacetsSection extends React.Component {

  render() {
    let facetData, style;

    facetData = {
      'TAGS': {
        'No Count': {filter: function () {}},
        'Zero Count': {count: 0, filter: function () {}},
        'Disabled': {disabled: true, filter: function () {}},
        'Development': {count: 3, filter: function () {}},
        'Staging': {count: 1, filter: function () {}},
        'Production': {count: 1, filter: function () {}},
        'Billing': {count: 3, filter: function () {}},
        'Marketing': {count: 2, filter: function () {}},
        'Product': {count: 5, filter: function () {}},
        'Engineering': {count: 8, filter: function () {}},
        'Sales': {count: 2, filter: function () {}},
        'Finance': {count: 1, filter: function () {}}
      },
      'STATUS': {
        'Error': {count: 2, filter: function () {}, iconClass: 'rs-status-error'},
        'Rebooting': {count: 3, filter: function () {}, iconClass: 'rs-status-warning'},
        'Active': {count: 5, filter: function () {}, iconClass: 'rs-status-ok'}
      },
      'IMAGE': {
        'Ubuntu': {count: 3, filter: function () {}},
        'RHEL 6.4': {count: 1, filter: function () {}},
        'Debian 7 Wheezy': {count: 2, filter: function () {}},
        'Vyatta Network OS 6.5R2': {count: 4, filter: function () {}}
      },
      'Flavor': {
        '2 GB Standard Instance': {count: 10, filter: function () {}},
        '512 MB Standard Instance': {count: 10, filter: function () {}}
      }
    };
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

import React from 'react';

import Criteria from './Criteria';
import Facet from './Facet';
import FacetsSection from './FacetsSection';

class DemoFacetsSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCriteria: {}
    };
  }

  render() {
    let style;

    style = {maxWidth: '270px'};
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Facets</h2>
        </div>
        <div className='rs-detail-section-body' style={style}>
          <FacetsSection
            sectionHeader={"Filter Products"}
            selectedCriteria={this.state.selectedCriteria}
            onSelectionChanged={this._handleSelectionChanged.bind(this)}>
            <Facet label='Tags' id={'Tags'}>
              <Criteria label={'No Count'} id={'No-Count'} />
              <Criteria label={'Zero Count'} id={'Zero Count'} count={0} />
              <Criteria label={'Disabled'} id={'Disabled'} count={0} disabled={true} />
              <Criteria label={'Development'} id={'Development'} count={3} />
              <Criteria label={'Staging'} id={'Staging'} count={1} />
              <Criteria label={'Production'} id={'Production'} count={1} />
              <Criteria label={'Billing'} id={'Billing'} count={3} />
              <Criteria label={'Marketing'} id={'Marketing'} count={2} />
              <Criteria label={'Product'} id={'Product'} count={8} />
              <Criteria label={'Engineering'} id={'Engineering'} count={2} />
              <Criteria label={'Sales'} id={'Sales'} count={1} />
              <Criteria label={'Finance'} id={'Finance'} count={1} />
            </Facet>
            <Facet label='Status' id={'Status'}>
              <Criteria label={'Error'} id={'Error'} count={2} iconClass={'rs-status-error'} />
              <Criteria label={'Rebooting'} id={'Rebooting'} count={3} iconClass={'rs-status-warning'} />
              <Criteria label={'Active'} id={'Active'} count={5} iconClass={'rs-status-ok'} />
            </Facet>
            <Facet label='Image' id={'Image'}>
              <Criteria label={'Ubuntu'} id={'Ubuntu'} count={3} />
              <Criteria label={'RHEL 6.4'} id={'rhel6.4'} count={1} />
              <Criteria label={'Debian 7 Wheezy'} id={'Debian7Wheezy'} count={2} />
              <Criteria label={'Vyatta Network OS 6.5R2'} id={'VyattaNetworkOS-6.5R2'} count={4} />
            </Facet>
            <Facet label='Flavor' id={'Flavor'}>
              <Criteria label={'2 GB Standard Instance'} id={'2 GB Standard Instance'} count={10} />
              <Criteria label={'512 MB Standard Instance'} id={'512 MB Standard Instance'} count={10} />
            </Facet>
          </FacetsSection>
        </div>
      </div>
    );
  }

  _handleSelectionChanged(selectedCriteria) {
    this.setState({ selectedCriteria: selectedCriteria });
  }
}

export default DemoFacetsSection;

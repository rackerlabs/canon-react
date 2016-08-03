import React from 'react';
import { CodeHeader, CodeListItem, PropertyHeader, Row } from './Common';

import { Criteria, Facet, FacetsSection } from 'canon-react';

class FacetSection extends React.Component {
  render() {
    return (
      <div className="website-content-section">
        <div className="content-section-body">
          <Row>
            <p><a href="http://rackerlabs.github.io/canon/ui-components/#facets" target="_blank">Facets</a> are used to apply filters to tables</p>
          </Row>

          <Row>
            <h3>Components</h3>
            <ul>
              <CodeListItem>FacetsSection</CodeListItem>
              <CodeListItem>Facet</CodeListItem>
              <CodeListItem>Criteria</CodeListItem>
            </ul>
          </Row>

          <Row>
            <CodeHeader>FacetsSection</CodeHeader>
            <p>The <code>FacetsSection</code> component is a container that renders a header and its <code>Facet</code> children.  It passes the selection state and select callbacks to each <code>Facet</code> child. The <code>FacetsSection</code> has seven properties:</p>
            <ul>
              <CodeListItem>sectionHeader</CodeListItem>
              <CodeListItem>selectedCriteria</CodeListItem>
              <CodeListItem>onSelectionChanged</CodeListItem>
              <CodeListItem>onCriteriaSelection</CodeListItem>
              <CodeListItem>onCriteriaDeselection</CodeListItem>
              <CodeListItem>onFacetClear</CodeListItem>
              <CodeListItem>onClearAll</CodeListItem>
            </ul>

            <PropertyHeader>sectionHeader</PropertyHeader>
            <p><code>sectionHeader</code> is the plain text header of the section</p>

            <PropertyHeader>selectedCriteria</PropertyHeader>
            <p><code>selectedCriteria</code> is an object that indicates which criteria are selected.  It should be in the form <code>{'{facetId: {criteriaId: true}}'}</code>  As long as a truthy value exists at <code>selectedCriteria[facetId][criteriaId]</code> then the selection is valid.</p>

            <PropertyHeader>onSelectionChanged</PropertyHeader>
            <p><code>onSelectionChanged</code> is a callback that fires from any selection change event including
              criteria select, critiera deselect, facet clear, and clear all.
              It calculates the new selectedCritiera object and passes it back as a callback argument.
              It is up to the renderer of this component to rerender the <code>FacetsSection</code> with the new selectedCriteria prop
              for the change to take effect.  This callback is fired after all other selection callbacks.
            </p>

            <PropertyHeader>onCriteriaSelection</PropertyHeader>
            <p><code>onCriteriaSelection</code> is a callback that fires when a criteria is selected.  It passes the facetId and criteriaId as callback arguments.  It is an optional property, and fires before onSelectionChanged.</p>

            <PropertyHeader>onCriteriaDeselection</PropertyHeader>
            <p><code>onCriteriaDeselection</code> is a callback that fires when a selected criteria is deselected.  It passes the facetId and criteriaId as callback arguments.  It is an optional property, and fires before onSelectionChanged.</p>

            <PropertyHeader>onFacetClear</PropertyHeader>
            <p><code>onFacetClear</code> is a callback that fires when the facet clear link is clicked.  It passes the facetId of the cleared facet as a callback argument.  It is an optional property, and fires before onSelectionChanged.</p>

            <PropertyHeader>onClearAll</PropertyHeader>
            <p><code>onClearAll</code> is a callback that fires when clear all link is clicked.  It is an optional property, and fires before onSelectionChanged.</p>
          </Row>

          <Row>
            <CodeHeader>Facet</CodeHeader>
            <p>The <code>Facet</code> component renders header and list of <code>Criteria</code>, passing selection state and a selection callback to its <code>Criteria</code> children. The <code>Facet</code> has seven properties:</p>
            <ul>
              <CodeListItem>label</CodeListItem>
              <CodeListItem>id</CodeListItem>
              <CodeListItem>onSelectionChanged</CodeListItem>
              <CodeListItem>onFacetClear</CodeListItem>
              <CodeListItem>selectedCriteria</CodeListItem>
              <CodeListItem>truncationLength</CodeListItem>
              <CodeListItem>truncationEnabled</CodeListItem>
            </ul>

            <PropertyHeader>label</PropertyHeader>
            <p><code>label</code> is the plain text header of the <code>Facet</code></p>

            <PropertyHeader>id</PropertyHeader>
            <p><code>id</code> is used to identify the facet in selection changed callbacks.  It should be unique for each <code>Facet</code> rendered in a <code>FacetsSection</code></p>

            <PropertyHeader>onSelectionChanged</PropertyHeader>
            <p><code>onSelectionChanged</code> is a callback that fires whenever a selction event occurs, including criteria select, criteria deselect, and facet clear.  When rendered in a <code>FacetsSection</code> the onSelectionChanged callback from the section will be passed into the <code>Facet</code>.</p>

            <PropertyHeader>onFacetClear</PropertyHeader>
            <p><code>onFacetClear</code> is a callback that fires when the facet clear link is clicked.
              This link appears when any criteria within the facet are selected.  The callback passes the id of this
              <code>Facet</code> as an argument.  When rendered in a <code>FacetsSection</code> the onFacetClear
              callback from the section will be passed into the <code>Facet</code>.
            </p>

            <PropertyHeader>selectedCriteria</PropertyHeader>
            <p><code>selectedCriteria</code> is an object that indicates which criteria are selected.  It should be in the form <code>{'{criteriaId: true}'}</code>  As long as a truthy value exists at <code>selectedCriteria[criteriaId]</code> then the selection is valid.</p>

            <PropertyHeader>truncationLength</PropertyHeader>
            <p><code>truncationLength</code> is a number that indicates how many criteria a facet will show before truncating.  If a facet contains more criteria then it will stop displaying them and render a more link.  When clicked, the link expands to show the rest of the criteria.  The default value is 5.</p>

            <PropertyHeader>truncationEnabled</PropertyHeader>
            <p><code>truncationEnabled</code> is a boolean flag that can be set to false to ignore the <code>truncationLength</code> and always display all <code>Criteria</code>.  The default value is true.</p>
          </Row>

          <Row>
            <CodeHeader>Criteria</CodeHeader>
            <p>The <code>Criteria</code> component is a single row within a facet.  It renders a label, count, and optional icon.  It can be selected and deselected by clicking anywhere on the row.  The <code>Criteria</code> component has eight properties:</p>
            <ul>
              <CodeListItem>label</CodeListItem>
              <CodeListItem>id</CodeListItem>
              <CodeListItem>count</CodeListItem>
              <CodeListItem>iconClass</CodeListItem>
              <CodeListItem>isSelected</CodeListItem>
              <CodeListItem>disabled</CodeListItem>
              <CodeListItem>onSelectionChanged</CodeListItem>
            </ul>
          </Row>

          <PropertyHeader>label</PropertyHeader>
          <p><code>label</code> is plain text to display in the row</p>

          <PropertyHeader>id</PropertyHeader>
          <p><code>id</code> is used to identify the criteria in selection changed callbacks.  It should be unique for each <code>Criteria</code> rendered in a <code>Facet</code></p>

          <PropertyHeader>count</PropertyHeader>
          <p><code>count</code> is a number that indicates how many entities in the corresponding table there are that match the filter associated with this criteria.  It is displayed next to the label.</p>

          <PropertyHeader>iconClass</PropertyHeader>
          <p><code>iconClass</code> is a class name that will be applied to a span rendered before the label.</p>

          <PropertyHeader>isSelected</PropertyHeader>
          <p><code>isSelected</code> is a boolean flag indicating the selection state of this criteria.  When true, a selected class is applied.</p>

          <PropertyHeader>disabled</PropertyHeader>
          <p><code>disabled</code> is a boolean flag that, when true, makes the criteria unselectable.</p>

          <PropertyHeader>onSelectionChanged</PropertyHeader>
          <p><code>onSelectionChanged</code> is a callback that fires when the criteria is selcted or deselected.  It passes the new selected state and the id of the criteria as arguments.  When rendered in a <code>Facet</code> the callback will be provided.</p>

          <Row>
            <h3>Facets Example</h3>
            <div className="span-3">
              <FacetContainer />
            </div>
            <div className="span-8">
              <pre><code className="html">
                {
                  "class FacetContainer extends React.Component {\n" +
                  "  constructor(props) {\n" +
                  "    super(props);\n" +
                  "    this.state = {\n" +
                  "      selectedCriteria: {}\n" +
                  "    };\n" +
                  "  }\n" +
                  "\n" +
                  "  render() {\n" +
                  "    return (\n" +
                  "      <FacetsSection\n" +
                  "        sectionHeader={'Filter Products'}\n" +
                  "        selectedCriteria={this.state.selectedCriteria}\n" +
                  "        onSelectionChanged={this._handleSelectionChanged.bind(this)}\n" +
                  "        onCriteriaSelection={this._handleCriteriaSelection.bind(this)}\n" +
                  "        onCriteriaDeselection={this._handleCriteriaDeselection.bind(this)}\n" +
                  "        onFacetClear={this._handleFacetClear.bind(this)}\n" +
                  "        onClearAll={this._handleClearAll.bind(this)}>\n" +
                  "        <Facet label='Tags' id={'Tags'} truncationEnabled={false}>\n" +
                  "          <Criteria label={'No Count'} id={'No-Count'} />\n" +
                  "          <Criteria label={'Zero Count'} id={'Zero Count'} count={0} />\n" +
                  "          <Criteria label={'Disabled'} id={'Disabled'} count={0} disabled={true} />\n" +
                  "          <Criteria label={'Development'} id={'Development'} count={3} />\n" +
                  "          <Criteria label={'Staging'} id={'Staging'} count={1} />\n" +
                  "          <Criteria label={'Production'} id={'Production'} count={1} />\n" +
                  "        </Facet>\n" +
                  "        <Facet label='Status' id={'Status'}>\n" +
                  "          <Criteria label={'Error'} id={'Error'} count={2} iconClass={'rs-status-error'} />\n" +
                  "          <Criteria label={'Rebooting'} id={'Rebooting'} count={3} iconClass={'rs-status-warning'} />\n" +
                  "          <Criteria label={'Active'} id={'Active'} count={5} iconClass={'rs-status-ok'} />\n" +
                  "        </Facet>\n" +
                  "        <Facet label='Image' id={'Image'} truncationLength={3}>\n" +
                  "          <Criteria label={'Ubuntu'} id={'Ubuntu'} count={3} />\n" +
                  "          <Criteria label={'RHEL 6.4'} id={'rhel6.4'} count={1} />\n" +
                  "          <Criteria label={'Debian 7 Wheezy'} id={'Debian7Wheezy'} count={2} />\n" +
                  "          <Criteria label={'Vyatta Network OS 6.5R2'} id={'VyattaNetworkOS-6.5R2'} count={4} />\n" +
                  "        </Facet>\n" +
                  "        <Facet label='Flavor' id={'Flavor'}>\n" +
                  "          <Criteria label={'2 GB Standard'} id={'2 GB Standard'} count={10} />\n" +
                  "          <Criteria label={'512 MB Standard'} id={'512 MB Standard'} count={10} />\n" +
                  "        </Facet>\n" +
                  "      </FacetsSection>\n" +
                  "    );\n" +
                  "  }\n" +
                  "\n" +
                  "  _handleSelectionChanged(selectedCriteria) {\n" +
                  "    this.setState({ selectedCriteria: selectedCriteria });\n" +
                  "  }\n" +
                  "\n" +
                  "  _handleCriteriaSelection(facetId, criteriaId) {\n" +
                  "    //apply filter for selected critiera\n" +
                  "    console.log('Criteria Selection ' + facetId + ',' + criteriaId);\n" +
                  "  }\n" +
                  "\n" +
                  "  _handleCriteriaDeselection(facetId, criteriaId) {\n" +
                  "    //remove filter for critiera\n" +
                  "    console.log('Criteria Deselection ' + facetId + ',' + criteriaId);\n" +
                  "  }\n" +
                  "\n" +
                  "  _handleFacetClear(facetId) {\n" +
                  "    //remove filter for all critiera in facet\n" +
                  "    Object.keys(this.state.selectedCriteria[facetId]).forEach(function (criteriaId) {\n" +
                  "      this._handleCriteriaDeselection(facetId, criteriaId);\n" +
                  "    }, this);\n" +
                  "    console.log('Facet Clear ' + facetId);\n" +
                  "  }\n" +
                  "\n" +
                  "  _handleClearAll() {\n" +
                  "    Object.keys(this.state.selectedCriteria).forEach(function (facetId) {\n" +
                  "      this._handleFacetClear(facetId);\n" +
                  "    }, this)\n" +
                  "    console.log('Clear All');\n" +
                  "  }\n" +
                  "}\n"
                }
              </code></pre>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

class FacetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCriteria: {}
    };
  }

  render() {
    return (
      <FacetsSection
        sectionHeader={"Filter Products"}
        selectedCriteria={this.state.selectedCriteria}
        onSelectionChanged={this._handleSelectionChanged.bind(this)}
        onCriteriaSelection={this._handleCriteriaSelection.bind(this)}
        onCriteriaDeselection={this._handleCriteriaDeselection.bind(this)}
        onFacetClear={this._handleFacetClear.bind(this)}
        onClearAll={this._handleClearAll.bind(this)}>
        <Facet label='Tags' id={'Tags'} truncationEnabled={false}>
          <Criteria label={'No Count'} id={'No-Count'} />
          <Criteria label={'Zero Count'} id={'Zero Count'} count={0} />
          <Criteria label={'Disabled'} id={'Disabled'} count={0} disabled={true} />
          <Criteria label={'Development'} id={'Development'} count={3} />
          <Criteria label={'Staging'} id={'Staging'} count={1} />
          <Criteria label={'Production'} id={'Production'} count={1} />
        </Facet>
        <Facet label='Status' id={'Status'}>
          <Criteria label={'Error'} id={'Error'} count={2} iconClass={'rs-status-error'} />
          <Criteria label={'Rebooting'} id={'Rebooting'} count={3} iconClass={'rs-status-warning'} />
          <Criteria label={'Active'} id={'Active'} count={5} iconClass={'rs-status-ok'} />
        </Facet>
        <Facet label='Image' id={'Image'} truncationLength={3}>
          <Criteria label={'Ubuntu'} id={'Ubuntu'} count={3} />
          <Criteria label={'RHEL 6.4'} id={'rhel6.4'} count={1} />
          <Criteria label={'Debian 7 Wheezy'} id={'Debian7Wheezy'} count={2} />
          <Criteria label={'Vyatta Network OS 6.5R2'} id={'VyattaNetworkOS-6.5R2'} count={4} />
        </Facet>
        <Facet label='Flavor' id={'Flavor'}>
          <Criteria label={'2 GB Standard'} id={'2 GB Standard'} count={10} />
          <Criteria label={'512 MB Standard'} id={'512 MB Standard'} count={10} />
        </Facet>
      </FacetsSection>
    );
  }

  _handleSelectionChanged(selectedCriteria) {
    this.setState({ selectedCriteria: selectedCriteria });
  }

  _handleCriteriaSelection(facetId, criteriaId) {
    //apply filter for selected critiera
    console.log('Criteria Selection ' + facetId + ',' + criteriaId);
  }

  _handleCriteriaDeselection(facetId, criteriaId) {
    //remove filter for critiera
    console.log('Criteria Deselection ' + facetId + ',' + criteriaId);
  }

  _handleFacetClear(facetId) {
    //remove filter for all critiera in facet
    Object.keys(this.state.selectedCriteria[facetId]).forEach(function (criteriaId) {
      this._handleCriteriaDeselection(facetId, criteriaId);
    }, this);
    console.log('Facet Clear ' + facetId);
  }

  _handleClearAll() {
    Object.keys(this.state.selectedCriteria).forEach(function (facetId) {
      this._handleFacetClear(facetId);
    }, this);
    console.log('Clear All');
  }
}

export default FacetSection;

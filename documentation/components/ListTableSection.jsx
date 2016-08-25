import { Component } from 'react';
import {
  CheckboxColumnHeader,
  EmbeddedListTable,
  EmptyOverlay,
  ErrorOverlay,
  ListTable,
  ListTableBody,
  ListTableHeader,
  ListTableRow,
  LoadingOverlay,
  OverlayStatus,
  SortDirection,
  StatusColumnHeader,
  TextColumnHeader } from 'canon-react';
import { CodeHeader, CodeListItem, PropertyHeader, Row } from './Common';

const TableExampleRow = ({ instance }) => (
  <ListTableRow key={ instance.id } data-model_id={ instance.id }>
    <td className="rs-table-status rs-table-status-ok"></td>
    <td className="rs-table-checkbox"><input type="checkbox" /></td>
    <td className="rs-table-text">{ instance.name }</td>
    <td className="rs-table-text">{ instance.count }</td>
  </ListTableRow>
);

class TableExamples extends Component {
  constructor() {
    super();

    this.state = {
      sortColumn: 'name',
      direction: SortDirection.ASCENDING
    };

    this._handleSort = this._handleSort.bind(this);
  }

  render() {
    const sortedCollection = this._sort();

    return (
      <Row>
        <h4>List Table</h4>
        <ListTable>
          <ListTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction }>
            <StatusColumnHeader />
            <CheckboxColumnHeader />
            <TextColumnHeader columnId="name" className="table-name" sortable label="Name" />
            <TextColumnHeader columnId="count" className="table-count" sortable label="Count" />
          </ListTableHeader>
          <ListTableBody collection={ sortedCollection }>
            <TableExampleRow />
          </ListTableBody>
        </ListTable>
        <hr />
        <h4>Empty Overlay</h4>
        <ListTable overlayStatus= { OverlayStatus.EMPTY }>
          <ListTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction }>
            <StatusColumnHeader />
            <CheckboxColumnHeader />
            <TextColumnHeader columnId="name" className="table-name" sortable label="Name" />
            <TextColumnHeader columnId="count" className="table-count" sortable label="Count" />
          </ListTableHeader>
          <ListTableBody collection={ [] }>
            <TableExampleRow />
          </ListTableBody>
        </ListTable>
        <hr />
        <h4>Loading Overlay</h4>
        <ListTable overlayStatus= { OverlayStatus.LOADING }>
          <ListTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction }>
            <StatusColumnHeader />
            <CheckboxColumnHeader />
            <TextColumnHeader columnId="name" className="table-name" sortable label="Name" />
            <TextColumnHeader columnId="count" className="table-count" sortable label="Count" />
          </ListTableHeader>
          <ListTableBody collection={ [] }>
            <TableExampleRow />
          </ListTableBody>
        </ListTable>
      </Row>
    );
  }

  _handleSort(sortDirection, columnId) {
    this.setState({
      sortColumn: columnId,
      direction: sortDirection
    });
  }

  _sort() {
    return Array.from(COLLECTION).sort(this._compareRows.bind(this));
  }

  _compareRows(row1, row2) {
    if (this.state.sortColumn === 'name') {
      return this._compareStringValues(row1.name, row2.name);
    } else if (this.state.sortColumn === 'count') {
      return this._compareNumericValues(row1.count, row2.count);
    }
  }

  _compareStringValues(a, b) {
    if (this.state.direction === SortDirection.ASCENDING) {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  }

  _compareNumericValues(a, b) {
    if (a === b) {
      return 0;
    }

    if (this.state.direction === SortDirection.ASCENDING) {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    } else {
      if (a > b) {
        return -1;
      } else {
        return 1;
      }
    }
  }
}

const COLLECTION = [
  { id: 1, name: 'one', count: 1 },
  { id: 2, name: 'two', count: 42 },
  { id: 3, name: 'three', count: 12 },
  { id: 4, name: 'four', count: 6 }
];

class ListTableSection extends Component {
  render() {
    return (
      <div className="website-content-section">
        <div className="content-section-body">
          
          <Row>
            <p><a href="http://rackerlabs.github.io/canon/ui-components/#tables" target="_blank">Tables</a> are used to manage many items, like lists of servers, tickets, or files. Canon-React offers two components for implementing tables: <code>ListTable</code> and <code>EmbeddedListTable</code>.</p>
          </Row>

          <Row>
            <h3>Components</h3>
            <ul>
              <CodeListItem>ListTable</CodeListItem>
              <CodeListItem>EmbeddedListTable</CodeListItem>
            </ul>
          </Row>

          <Row>
            <CodeHeader>ListTable / EmbeddedListTable</CodeHeader>
            <p>The <code>ListTable</code> and <code>EmbeddedListTable</code> components are the main wrapper components for a table. They accept the following properties:</p>
            <ul>
              <CodeListItem>overlayStatus</CodeListItem>
              <CodeListItem>emptyOverlay</CodeListItem>
              <CodeListItem>errorOverlay</CodeListItem>
              <CodeListItem>loadingOverlay</CodeListItem>
            </ul>

            <PropertyHeader>overlayStatus</PropertyHeader>
            <p>(Optional - type:<code>oneOf(OverlayStatus)</code>) Takes a value of <code>'none'</code>, <code>'empty'</code>, <code>'error'</code>, or <code>'loading'</code>, and describes what overlay should be shown on the table. An <code>OverlayStatus</code> enum is available with the values <code>NONE</code>, <code>EMPTY</code>, <code>ERROR</code>, and <code>LOADING</code> that can be used with the <code>overlayStatus</code> property.</p>

            <PropertyHeader>emptyOverlay</PropertyHeader>
            <p>(Optional - type:node) The <code>EmptyOverlay</code> component describes the table's empty state.</p>

            <PropertyHeader>errorOverlay</PropertyHeader>
            <p>(Optional - type:node) The <code>ErrorOverlay</code> component describes the table's error state.</p>

            <PropertyHeader>loadingOverlay</PropertyHeader>
            <p>(Optional - type:node) The <code>LoadingOverlay</code> component describes the table's loading state.</p>

            <p>The <code>EmbeddedListTable</code> accepts an additional (optional) property, <code>size</code>, which accepts the values <code>'small'</code>, <code>'medium'</code>, and <code>'large'</code>. This value specifies how tall the embedded list table will be.</p>
          </Row>

          <Row>
            <CodeHeader>ListTableHeader</CodeHeader>
            <p>The <code>ListTableHeader</code> component specifies how the table header is rendered, as well as how sorting is handled. The children of the <code>ListTableHeader</code> are assumed to be <code>th</code> elements or a component that will resolve to a <code>th</code>. For example, a valid <code>ListTableHeader</code> is:</p>
            <pre><code className="lang-js">
              {
`<ListTableHeader>
  <th className="rs-table-status" />
  <th className="rs-table-sort-text" />
</ListTableHeader>`
              }
            </code></pre>
            <p>The <code>ListTableHeader</code> accepts the following properties:</p>
            <ul>
              <CodeListItem>direction</CodeListItem>
              <CodeListItem>onSort</CodeListItem>
              <CodeListItem>sortColumn</CodeListItem>
            </ul>
            <PropertyHeader>direction</PropertyHeader>
            <p>(Optional - type:<code>oneOf(SortDirection)</code>) Indicates the direction in which the table is sorted. This value is passed down to sortable columns. Valid values are <code>'asc'</code> or <code>'desc'</code>. An <code>SortDirection</code> enum with values <code>ASCENDING</code> and <code>DESCENDING</code> is provided as a convenience.</p>
            <PropertyHeader>onSort</PropertyHeader>
            <p>(Optional - type:func) A function that is invoked when a sortable column header is clicked. The function is invoked with the sort direction and the <code>columnId</code> on which the data should be sorted.</p>
            <PropertyHeader>sortColumn</PropertyHeader>
            <p>(Optional - type:string) The <code>columnId</code> by which the data is being sorted.</p>

            <p>There are several predefined header cell components available from canon-react:</p>
            <ul>
              <CodeListItem>CheckboxColumnHeader</CodeListItem>
              <CodeListItem>StatusColumnHeader</CodeListItem>
              <CodeListItem>TextColumnHeader</CodeListItem>
            </ul>
            <p>The <code>TextColumnHeader</code> is the only predefined header cell component that is sortable. It accepts the following properties:</p>
            <ul>
              <CodeListItem>columnId</CodeListItem>
              <CodeListItem>label</CodeListItem>
              <CodeListItem>sortable</CodeListItem>
              <CodeListItem>onSort</CodeListItem>
              <CodeListItem>direction</CodeListItem>
            </ul>
            <p><code>onSort</code> and <code>direction</code> are properties that are passed to the component by the <code>ListTableHeader</code>.</p>
            <PropertyHeader>columnId</PropertyHeader>
            <p>(Optional - type:string) The ID of the column. This value will be used to reference by which column the data shall be sorted.</p>
            <PropertyHeader>label</PropertyHeader>
            <p>(Optional - type:string) The label that will be displayed in the column header cell.</p>
            <PropertyHeader>sortable</PropertyHeader>
            <p>(Optional - type:bool) Indicates if the column is sortable.</p>

          </Row>

          <Row>
            <CodeHeader>ListTableBody</CodeHeader>
            <p>The <code>ListTableBody</code> takes a collection of data and clones its children for each object of the passed in collection. This component has two properties:</p>
            <ul>
              <CodeListItem>collection</CodeListItem>
              <CodeListItem>keyGenerator</CodeListItem>
            </ul>

            <PropertyHeader>collection</PropertyHeader>
            <p>(Required - type:<code>arrayOf(object)</code>) Accepts an array of objects that when iterated over, will be passed to the children of the table.</p>

            <PropertyHeader>keyGenerator</PropertyHeader>
            <p>(Optional - type:func) By default, the <code>ListTableBody</code> will set the <code>key</code> property of each row to the <code>id</code> property of the instance member of the collection. Alternatively, a unique key property can be specified with the <code>keyGenerator</code> property. This property accepts a function that will receive the instance object, index, and full array (similar to the arguments of a <code>forEach</code> callback).</p>
          </Row>

          <Row>
            <CodeHeader>ListTableRow</CodeHeader>
            <p>The <code>ListTableRow</code> component is a convenience component for passing the instance member of a collection to each of its children. It is not required to use this component to render rows within a list table. It accepts the following properties:</p>

            <PropertyHeader>instance</PropertyHeader>
            <p>(Optional - type:object) Accepts an object that will be passed to the rendered child components of the row (table cells).</p>
          </Row>

          <Row>
            <h5>Overlays</h5>
            <p>There are three predefined overlay components that are rendered when the table is in a zero state (containing no data): the <code>EmptyOverlay</code>, <code>ErrorOverlay</code>, and <code>LoadingOverlay</code>. Each of these components are default overlays for the <code>ListTable</code> and <code>EmbeddedListTable</code> wrapper components. There is also a <code>ListTableOverlay</code> component which is wrapped by each of these predefined overlays, and can be used if the table needs some non-default overlay behavior.</p>
          </Row>

          <Row>
            <CodeHeader>EmptyOverlay</CodeHeader>
            <p>The <code>EmptyOverlay</code> is to be used when data has been loaded, but there is nothing in the collection to display. It accepts the following properties:</p>
            <ul>
              <CodeListItem>title</CodeListItem>
              <CodeListItem>subtitle</CodeListItem>
              <CodeListItem>message</CodeListItem>
            </ul>
            <PropertyHeader>title</PropertyHeader>
            <p>(Required - type:node) The title of the content</p>
            <PropertyHeader>subtitle</PropertyHeader>
            <p>(Optional - type:node) The subtitle of the content</p>
            <PropertyHeader>message</PropertyHeader>
            <p>(Optional - type:node) A message giving further information about the data being displayed in the table</p>
          </Row>

          <Row>
            <CodeHeader>LoadingOverlay</CodeHeader>
            <p>The <code>LoadingOverlay</code> is to be used while data for the table is being loaded. It does not accept any properties.</p>
          </Row>

          <Row>
            <CodeHeader>ErrorOverlay</CodeHeader>
            <p>The <code>ErrorOverlay</code> is to be used when there is an error fetching data for the table. It accepts the following property:</p>
            <ul>
              <CodeListItem>message</CodeListItem>
            </ul>
            <PropertyHeader>message</PropertyHeader>
            <p>(Required - type:node) A message detailing the error about retrieving data.</p>
          </Row>

          <Row>
            <CodeHeader>ListTableOverlay</CodeHeader>
            <p>The <code>ListTableOverlay</code> is wrapped by each of the above overlays, and can be used when some non-default overlay behavior is required. It accepts the following properties:</p>
            <ul>
              <CodeListItem>title</CodeListItem>
              <CodeListItem>subtitle</CodeListItem>
              <CodeListItem>message</CodeListItem>
            </ul>
            <PropertyHeader>title</PropertyHeader>
            <p>(Optional - type:node) The title of the content</p>
            <PropertyHeader>subtitle</PropertyHeader>
            <p>(Optional - type:node) The subtitle of the content</p>
            <PropertyHeader>message</PropertyHeader>
            <p>(Optional - type:node) A message giving further information about the data being displayed in the table</p>
          </Row>

          <Row>
            <h3>Table Examples</h3>
          </Row>
          <TableExamples />

          <Row>
            <h3>Code Examples</h3>
            <pre><code className="lang-js">
            {
`
class TableExamples extends Component {
  constructor() {
    super();

    this.state = {
      sortColumn: 'name',
      direction: SortDirection.ASCENDING
    };

    this._handleSort = this._handleSort.bind(this);
  }

  render() {
    const sortedCollection = this._sort();

    return (
      <Row>
        <h4>List Table</h4>
        <ListTable>
          <ListTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction }>
            <StatusColumnHeader />
            <CheckboxColumnHeader />
            <TextColumnHeader columnId="name" className="table-name" sortable label="Name" />
            <TextColumnHeader columnId="count" className="table-count" sortable label="Count" />
          </ListTableHeader>
          <ListTableBody collection={ sortedCollection }>
            <TableExampleRow />
          </ListTableBody>
        </ListTable>
        <hr />
        <h4>Empty Overlay</h4>
        <ListTable overlayStatus= { OverlayStatus.EMPTY }>
          <ListTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction }>
            <StatusColumnHeader />
            <CheckboxColumnHeader />
            <TextColumnHeader columnId="name" className="table-name" sortable label="Name" />
            <TextColumnHeader columnId="count" className="table-count" sortable label="Count" />
          </ListTableHeader>
          <ListTableBody collection={ [] }>
            <TableExampleRow />
          </ListTableBody>
        </ListTable>
        <hr />
        <h4>Loading Overlay</h4>
        <ListTable overlayStatus= { OverlayStatus.LOADING }>
          <ListTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction }>
            <StatusColumnHeader />
            <CheckboxColumnHeader />
            <TextColumnHeader columnId="name" className="table-name" sortable label="Name" />
            <TextColumnHeader columnId="count" className="table-count" sortable label="Count" />
          </ListTableHeader>
          <ListTableBody collection={ [] }>
            <TableExampleRow />
          </ListTableBody>
        </ListTable>
      </Row>
    );
  }

  _handleSort(sortDirection, columnId) {
    this.setState({
      sortColumn: columnId,
      direction: sortDirection
    });
  }

  _sort() {
    return Array.from(COLLECTION).sort(this._compareRows.bind(this));
  }

  _compareRows(row1, row2) {
    if (this.state.sortColumn === 'name') {
      return this._compareStringValues(row1.name, row2.name);
    } else if (this.state.sortColumn === 'count') {
      return this._compareNumericValues(row1.count, row2.count);
    }
  }

  _compareStringValues(a, b) {
    if (this.state.direction === SortDirection.ASCENDING) {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  }

  _compareNumericValues(a, b) {
    if (a === b) {
      return 0;
    }

    if (this.state.direction === SortDirection.ASCENDING) {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    } else {
      if (a > b) {
        return -1;
      } else {
        return 1;
      }
    }
  }
}

const TableExampleRow = ({ instance }) => (
  <ListTableRow key={ instance.id } data-model_id={ instance.id }>
    <td className="rs-table-status rs-table-status-ok"></td>
    <td className="rs-table-checkbox"><input type="checkbox" /></td>
    <td className="rs-table-text">{ instance.name }</td>
    <td className="rs-table-text">{ instance.count }</td>
  </ListTableRow>
);

const COLLECTION = [
  { id: 1, name: 'one', count: 1 },
  { id: 2, name: 'two', count: 42 },
  { id: 3, name: 'three', count: 12 },
  { id: 4, name: 'four', count: 6 }
];`
            }
            </code></pre>
          </Row>
        </div>
      </div>
    );
  }
}

export default ListTableSection;

import { Component } from 'react';

export class CodeHeader extends Component {
  render() {
    return (
      <h5>
        <code>{ this.props.children }</code>
      </h5>
    );
  }
}

export class CodeListItem extends Component {
  render() {
    return (
      <li><code>{ this.props.children }</code></li>
    );
  }
}

export class PropertyHeader extends Component {
  render() {
    return (
      <h6>
        <code>{ this.props.children }</code>
      </h6>
    );
  }
}

export class Row extends Component {
  render() {
    return (
      <div className="rs-row">
        { this.props.children }
      </div>
    );
  }
}

export class SectionHeader extends Component {
  render() {
    return (
      <div className="header-section" id={this.props.id}>
        <div className="header-section-subtitle">components</div>
        <div className="header-section-title">{this.props.children}</div>
      </div>
    );
  }
}

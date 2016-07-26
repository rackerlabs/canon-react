import React from 'react';

import { SectionHeader } from './Common';

class ComponentView extends React.Component {
  render() {
    return (
      <div>
        <div className="rs-inner">
          <div className="rs-container">
            <div className="rs-main">
              <div className="rs-content rs-panel">
                <SectionHeader id={ this.props.id }>{ this.props.name }</SectionHeader>
                { this.props.children }
              </div>
            </div>
          </div>
        </div>
        <div className="rs-push"></div>
      </div>
    );
  }
}

ComponentView.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

export default ComponentView;
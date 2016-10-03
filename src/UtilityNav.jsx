import React from 'react';

export default class UtilityNav extends React.Component {

  render() {
    return (
      <div className="rs-nav-utility">
        <div className="rs-container">
          { this.props.children }
        </div>
      </div>
    );
  }

};

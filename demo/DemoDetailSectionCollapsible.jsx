import React from 'react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import DetailList from './DetailList';
import DetailItem from './DetailItem';
import DetailItemKey from './DetailItemKey';
import DetailItemValue from './DetailItemValue';
import DetailsSection from './DetailsSection';

class DemoDetailSectionCollapsible extends React.Component {
  render() {
    return (
      <DetailsSection isCollapsible={ true } title="Collapsible Details Section">
        <table>
          <thead>
            <tr>
              <td>Component</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <DetailList>
                  <DetailItem>
                    <DetailItemKey>Server ID</DetailItemKey>
                    <DetailItemValue>adfsad-lkjasdli-aldjsdk-alkasdlkf</DetailItemValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailItemKey>Region</DetailItemKey>
                    <DetailItemValue>Dallas (DFW)</DetailItemValue>
                  </DetailItem>
                </DetailList>
              </td>
            </tr>
          </tbody>
        </table>
      </DetailsSection>
    );
  }
}

export default DemoDetailSectionCollapsible;

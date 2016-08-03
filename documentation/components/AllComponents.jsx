import React from 'react';

import ComponentView from './ComponentView'

import ButtonGroupSection from './ButtonGroupSection';
import ButtonsSection from './ButtonsSection';
import DropdownSection from './DropdownSection';
import FacetSection from './FacetSection';
import PopoverSection from './PopoverSection';
import ProgressBarsSection from './ProgressBarsSection';
import StatusIndicatorSection from './StatusIndicatorSection';
import TooltipSection from './TooltipSection';
import DetailSection from './DetailSection';
import FormsSection from './FormsSection';

export const ButtonView = React.createClass({
  render() {
    return(
      <ComponentView id="buttons" name="Buttons" >
        <ButtonsSection />
      </ComponentView>
    );
  }
});

export const ButtonGroupView = React.createClass({
  render() {
    return(
      <ComponentView id="button-groups" name="Button Groups" >
        <ButtonGroupSection />
      </ComponentView>
    );
  }
});

export const DropdownView = React.createClass({
  render() {
    return(
      <ComponentView id="dropdown" name="Dropdowns" >
        <DropdownSection />
      </ComponentView>
    );
  }
});

export const FacetsView = React.createClass({
  render() {
    return(
      <ComponentView id="facets" name="Facets" >
        <FacetSection />
      </ComponentView>
    );
  }
});

export const PopoverView = React.createClass({
  render() {
    return(
      <ComponentView id="popovers" name="Popovers" >
        <PopoverSection />
      </ComponentView>
    );
  }
});

export const ProgressBarsView = React.createClass({
  render() {
    return(
      <ComponentView id="progress-bars" name="Progress Bars" >
        <ProgressBarsSection />
      </ComponentView>
    );
  }
});

export const StatusIndicatorView = React.createClass({
  render() {
    return(
      <ComponentView id="status-indicators" name="Status Indicators" >
        <StatusIndicatorSection />
      </ComponentView>
    );
  }
});

export const TooltipView = React.createClass({
  render() {
    return(
      <ComponentView id="tooltips" name="Tooltips" >
        <TooltipSection />
      </ComponentView>
    );
  }
});

export const DetailView = React.createClass({
  render() {
    return(
      <ComponentView id="detail" name="Details" >
        <DetailSection />
      </ComponentView>
    );
  }
})

export const FormsView = React.createClass({
  render() {
    return(
      <ComponentView id="forms" name="Forms" >
        <FormsSection />
      </ComponentView>
    );
  }
})

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import * as section from './components/AllComponents';

import View from './components/View';

(() => {

  ReactDOM.render(

    <Router history={ browserHistory }>
      <Route path="docs/components.html" component={ View }/>
      <Route path="docs/components/buttons.html" component={ section.ButtonView }/>
      <Route path="docs/components/button-groups.html" component={ section.ButtonGroupView }/>
      <Route path="docs/components/progress-bars.html" component={ section.ProgressBarsView }/>
      <Route path="docs/components/status-indicators.html" component={ section.StatusIndicatorView }/>
      <Route path="docs/components/popovers.html" component={ section.PopoverView }/>
      <Route path="docs/components/tooltips.html" component={ section.TooltipView }/>
      <Route path="docs/components/facets.html" component={ section.FacetsView }/>
      <Route path="docs/components/dropdown.html" component={ section.DropdownView }/>
      <Route path="docs/components/detail.html" component={ section.DetailView }/>
      <Route path="docs/components/forms.html" component={ section.FormsView }/>
    </Router>
    , document.getElementById('components-content'));
})();
import { Component } from 'react';
import { Row } from './Common';

import {
  Button,
  Popover,
  PopoverOverlay,
  PopoverBody,
  PopoverFooter } from 'canon-react';

class UpdateNamePopover extends Component {
  render() {
    return (
      <Popover placement={this.props.placement}
       isOpen={this.props.isOpen}
       target={this.props.target}
       onRequestClose={this.props.onRequestClose}>
        <PopoverOverlay>
          <PopoverBody>
            <form>
              <label>Name</label>
              <input type='text'></input>
            </form>
          </PopoverBody>
          <PopoverFooter>
            <Button canonStyle='primary' onClick={this.props.onRequestClose}>Save</Button>
            <Button canonStyle='link' onClick={this.props.onRequestClose}>Cancel</Button>
          </PopoverFooter>
        </PopoverOverlay>
      </Popover>
    );
  }
}

class PopoverParent extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldShowUpdateNamePopover: false
    };
  }

  showUpdateNamePopover() {
    this.setState({shouldShowUpdateNamePopover: true});
  }

  requestUpdateNameClose() {
    this.setState({shouldShowUpdateNamePopover: false});
  }

  render() {
    return (
      <div>
        <Button id='update-name-button' canonStyle='primary' onClick={this.showUpdateNamePopover.bind(this)}>Update Name</Button>
        <UpdateNamePopover placement='right'
         target={ () => document.getElementById('update-name-button') }
         onRequestClose={this.requestUpdateNameClose.bind(this)}
         isOpen={this.state.shouldShowUpdateNamePopover} />
      </div>
    );
  }
}

class PopoverSection extends React.Component {
  render() {
    return (
      <div className="website-content-section">
        <div className="content-section-body">
          
          <Row>
            <p><a href="http://rackerlabs.github.io/canon/ui-components/#popover" target="_blank">Popovers</a> are used to display more information or to perform some action on an entity.</p>
          </Row>

          <Row>
            <h3>Components</h3>
            <ul>
              <li><code>Popover</code></li>
              <li><code>PopoverOverlay</code></li>
              <li><code>PopoverBody</code></li>
              <li><code>PopoverFooter</code></li>
            </ul>
          </Row>

          <Row>
            <h5><code>Popover</code></h5>
            <p>The <code>Popover</code> component controls the behavior of the popover itself (positioning, open/closed, request for close, etc.). The <code>Popover</code> has four properties:</p>
            <ul>
              <li><code>placement</code></li>
              <li><code>isOpen</code></li>
              <li><code>onRequestClose</code></li>
              <li><code>target</code></li>
              <li><code>offset</code></li>
            </ul>
            <h6><code>placement</code></h6>
            <p><code>placement</code> defines the position of the popover in relation to its target. The following values are allowed:</p>
            <ul>
              <li><code>right</code></li>
              <li><code>bottom-right</code></li>
              <li><code>left</code></li>
              <li><code>bottom-left</code></li>
              <li><code>center</code></li>
            </ul>
            <p><code>center</code> behaves slightly differently than the other placement properties. The popover is placed over the center of the target element and no arrow is rendered. This positioning is useful for modal like behavior where the target is the document body.</p>

            <h6><code>isOpen</code></h6>
            <p><code>isOpen</code> accepts boolean values and defines whether or not the popover is open or clsoed. It is up to the parent component to decide whether or not a popover should be displayed. This is necessary to allow for such things as allowing the processing of a command to finish before closing a popover.</p>

            <h6><code>onRequestClose</code></h6>
            <p><code>onRequestClose</code> is a callback that is used to notify a parent component that some action has occured requesting the closing of a popover. This could be the clicking of a cancel link on the popover, pressing the escape key, or clicking off of the popover. The popover itself will monitor events for the escape key and clicking outside of the popover and will invoke the request close callback at such time.</p>

            <h6><code>target</code></h6>
            <p><code>target</code> accepts either a string ID or a function that returns the element at which the popover will be pointing.</p>

            <h6><code>offset</code></h6>
            <p>canon-react uses <a href='http://tether.io/' target='_blank'>tether.io</a> for positioning of the popover. The popover component has an `offset` property that when specified will override the default offsets that canon-react is using to configure the tether. This property accepts a string in the same format that tether accepts.</p>

            <h5><code>PopoverOverlay</code></h5>
            <p>The <code>PopoverOverlay</code> component renders the outer markup of a popover, as well as the arrow of the popover. It accepts a <code>placement</code> prop (passed to it from the <code>Popover</code>) which is used to determine the position of the arrow relative to the target at which the popover will be pointing. The values accepted are the same as those of the <code>Popover</code>.</p>

            <h5><code>PopoverBody</code> and <code>PopoverFooter</code></h5>
            <p>These components should be used together when displaying a popover that will do some sort of form processing. If a popover is only being used to display information, these components aren't needed. The body and footer components simply wrap their children in the appropriate markup for a popover form. They don't do any special processing of the children to be rendered. any change of state of buttons rendered in the footer is the responsibilitiy of the consumer to update. This allows for greater flexibility of the what the body and footer can be composed of.</p>
          </Row>

          <Row>
            <h3>Popover Example</h3>
            <p>A popover rendered to the right of the button:</p>
            <PopoverParent />
            <h6>Rendering the popover and trigger</h6>
            <pre>
              <code className="html">
              {"var PopoverParent = React.createClass({\n" +
              "  showUpdateNamePopover: function () {\n" +
              "    this.setState({shouldShowUpdateNamePopover: true});\n" +
              "  },\n\n" +

              "  hideUpdateNamePopover: function () {\n" +
              "    this.setState({shouldShowUpdateNamePopover: false});\n" +
              "  },\n\n" +

              "  requestUpdateNameClose: function () {\n" +
              "    // if a request is not processing\n" +
              "    this.hideUpdateNamePopover();\n" +
              "  },\n\n" +

              "  render: function () {\n" +
              "    return (\n" +
              "      <div>\n" +
              "        <Button id='update-name-button' onClick={this.showUpdateNamePopover}>Update Name</Button>\n" +
              "        <UpdateNamePopover placement='right'\n" +
              "         isOpen={this.state.shouldShowUpdateNamePopover}\n" +
              "         onRequestClose={this.requestUpdateNameClose}\n" +
              "         target='update-name-button' />\n" +
              "      </div>\n" +
              "    );\n" +
              "  }\n" +
              "});"}
              </code>
            </pre>

            <h6>Update Name Popover</h6>
            <pre>
              <code className="html">
              {"var UpdateNamePopover = React.createClass({\n" +
                "  _processSave: function () {\n" +
                "    // perform the action needed to process the input of this form.\n" +
                "    // this will trigger a state update to indicate the action is processing.\n" +
                "    // this can be done through callbacks or with stores.\n" +
                "  },\n\n" +

                "  render: function () {\n" +
                "    return (\n" +
                "      <Popover placement={this.props.placement}\n" +
                "       isOpen={this.props.isOpen}\n" +
                "       onRequestClose={this.props.onRequestClose}\n" +
                "       target={this.props.target}>\n" +
                "        <PopoverOverlay>\n" +
                "         <PopoverBody>\n" +
                "           <form>\n" +
                "             <label>Name</label>\n" +
                "             <input type='text' />\n" +
                "           </form>\n" +
                "         </PopoverBody>\n" +
                "         <PopoverFooter>\n" +
                "           <Button canonStyle='primary' onClick={this._processSave}>Save</Button>\n" +
                "           <Button canonStyle='link' onClick={this.props.onRequestClose}>Cancel</Button>\n" +
                "           <ProcessingIndicator />\n" +
                "         </PopoverFooter>\n" +
                "        </PopoverOverlay>\n" +
                "      </Popover>\n" +
                "    );\n" +
                "  }\n" +
                "});"}
              </code>
            </pre>
          </Row>

        </div>
      </div>);
  }
}

export default PopoverSection;

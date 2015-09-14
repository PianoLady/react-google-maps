import {
  default as React,
  Component,
} from "react";

import {
  default as HeatmapLayerCreator,
  heatmapLayerDefaultPropTypes,
  heatmapLayerControlledPropTypes,
  heatmapLayerEventPropTypes,
} from "./creators/heatmapLayerCreator";

export default class HeatmapLayer extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...heatmapLayerDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...heatmapLayerControlledPropTypes,
    // Event [onEventName]
    ...heatmapLayerEventPropTypes,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
  getDraggable () { return this.state.heatmapLayer.getDraggable(); }

  getEditable () { return this.state.heatmapLayer.getEditable(); }

  getData () { return this.state.heatmapLayer.getData(); }

  getVisible () { return this.state.heatmapLayer.getVisible(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer

  state = {
  }

  componentDidMount () {
    const {mapHolderRef, ...heatmapLayerProps} = this.props;
    const heatmapLayer = HeatmapLayerCreator._createHeatmapLayer(mapHolderRef, heatmapLayerProps);

    this.setState({ heatmapLayer });
  }

  render () {
    if (this.state.heatmapLayer) {
      return (
        <HeatmapLayerCreator heatmapLayer={this.state.heatmapLayer} {...this.props}>
          {this.props.children}
        </HeatmapLayerCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}

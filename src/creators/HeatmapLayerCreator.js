import {
  default as React,
  PropTypes,
  Component,
} from "react";

import {default as HeatmapLayerEventList} from "../eventLists/HeatmapLayerEventList";
import {default as eventHandlerCreator} from "../utils/eventHandlerCreator";
import {default as defaultPropsCreator} from "../utils/defaultPropsCreator";
import {default as composeOptions} from "../utils/composeOptions";
import {default as componentLifecycleDecorator} from "../utils/componentLifecycleDecorator";

import {default as GoogleMapHolder} from "./GoogleMapHolder";

export const heatmapLayerControlledPropTypes = {
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
  draggable: PropTypes.bool,
  editable: PropTypes.bool,
  options: PropTypes.object,
  data: PropTypes.any,
  visible: PropTypes.bool,
};

export const heatmapLayerDefaultPropTypes = defaultPropsCreator(heatmapLayerControlledPropTypes);

const heatmapLayerUpdaters = {
  draggable (draggable, component) { component.getHeatmapLayer().setDraggable(draggable); },
  editable  (editable, component) { component.getHeatmapLayer().setEditable(editable); },
  options   (options, component) { component.getHeatmapLayer().setOptions(options); },
  data      (data, component) { component.getHeatmapLayer().setData(data); },
  visible   (visible, component) { component.getHeatmapLayer().setVisible(visible); },
};

const {eventPropTypes, registerEvents} = eventHandlerCreator(HeatmapLayerEventList);

export const heatmapLayerEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: "getHeatmapLayer",
  updaters: heatmapLayerUpdaters,
})
export default class HeatmapLayerCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    heatmapLayer: PropTypes.object.isRequired,
  }

  static _createHeatmapLayer (mapHolderRef, heatmapLayerProps) {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
    const heatmapLayer = new google.maps.visualization.HeatmapLayer(composeOptions(heatmapLayerProps, [
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayerOptions
      "draggable",
      "editable",
      "data",
      "visible",
    ]));

    heatmapLayer.setMap(mapHolderRef.getMap());

    return heatmapLayer;
  }

  getHeatmapLayer () {
    return this.props.heatmapLayer;
  }

  render () {
    return (<noscript />);
  }
}

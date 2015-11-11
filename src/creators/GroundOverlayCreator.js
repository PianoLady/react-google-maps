import {
  default as React,
  PropTypes,
  Component,
  Children,
} from "react";

import {default as GroundOverlayEventList} from "../eventLists/GroundOverlayEventList";
import {default as eventHandlerCreator} from "../utils/eventHandlerCreator";
import {default as defaultPropsCreator} from "../utils/defaultPropsCreator";
import {default as composeOptions} from "../utils/composeOptions";
import {default as componentLifecycleDecorator} from "../utils/componentLifecycleDecorator";

import {default as GoogleMapHolder} from "./GoogleMapHolder";

export const groundOverlayControlledPropTypes = {
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
//
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
  clickable: PropTypes.bool,
  opacity: PropTypes.number,
};

export const groundOverlayDefaultPropTypes = defaultPropsCreator(groundOverlayControlledPropTypes);

const groundOverlayUpdaters = {
  clickable   (clickable, component) { component.getGroundOverlay().setClickable(clickable); },
  opacity     (opacity, component) { component.getGroundOverlay().setOpacity(opacity); },
};

const {eventPropTypes, registerEvents} = eventHandlerCreator(GroundOverlayEventList);

export const groundOverlayEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: "getGroundOverlay",
  updaters: groundOverlayUpdaters,
})
export default class GroundOverlayCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    groundOverlay: PropTypes.object.isRequired,
  }

  static _createGroundOverlay (groundOverlayProps) {
    const {mapHolderRef, bounds, imgSrc} = groundOverlayProps;
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
    //const groundOverlay = new google.maps.GroundOverlay(composeOptions(groundOverlayProps, groundOverlayControlledPropTypes));

    let minLat = grid[0];
    let maxLat = grid[1];
    let minLng = grid[2];
    let maxLng = grid[3];

    var latLngBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(minLat, minLng),
        new google.maps.LatLng(maxLat, maxLng));

    const groundOverlay = new google.maps.GroundOverlay(imgSrc, latLngBounds);

    groundOverlay.setMap(mapHolderRef.getMap());

    return groundOverlay;
  }

  getGroundOverlay () {
    return this.props.groundOverlay;
  }

  render () {
    const {mapHolderRef, children} = this.props;

    if (0 < Children.count(children)) {
      return (
        <div>{Children.map(children, childElement =>
          childElement && React.cloneElement(childElement, {
            mapHolderRef,
            anchorHolderRef: this,
          })
        )}</div>
      );
    } else {
      return (<noscript />);
    }
  }
}

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsGroundOverlayEventList = require("../eventLists/GroundOverlayEventList");

var _eventListsGroundOverlayEventList2 = _interopRequireDefault(_eventListsGroundOverlayEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var groundOverlayControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
  clickable: _react.PropTypes.bool,
  opacity: _react.PropTypes.number
};

exports.groundOverlayControlledPropTypes = groundOverlayControlledPropTypes;
var groundOverlayDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(groundOverlayControlledPropTypes);

exports.groundOverlayDefaultPropTypes = groundOverlayDefaultPropTypes;
var groundOverlayUpdaters = {
  clickable: function clickable(_clickable, component) {
    component.getGroundOverlay().setClickable(_clickable);
  },
  opacity: function opacity(_opacity, component) {
    component.getGroundOverlay().setOpacity(_opacity);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsGroundOverlayEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var groundOverlayEventPropTypes = eventPropTypes;

exports.groundOverlayEventPropTypes = groundOverlayEventPropTypes;

var GroundOverlayCreator = (function (_Component) {
  _inherits(GroundOverlayCreator, _Component);

  function GroundOverlayCreator() {
    _classCallCheck(this, _GroundOverlayCreator);

    _get(Object.getPrototypeOf(_GroundOverlayCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(GroundOverlayCreator, [{
    key: "getGroundOverlay",
    value: function getGroundOverlay() {
      return this.props.groundOverlay;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var children = _props.children;

      if (0 < _react.Children.count(children)) {
        return _react2["default"].createElement(
          "div",
          null,
          _react.Children.map(children, function (childElement) {
            return childElement && _react2["default"].cloneElement(childElement, {
              mapHolderRef: mapHolderRef,
              anchorHolderRef: _this
            });
          })
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "_createGroundOverlay",
    value: function _createGroundOverlay(groundOverlayProps) {
      var mapHolderRef = groundOverlayProps.mapHolderRef;
      var bounds = groundOverlayProps.bounds;
      var imgSrc = groundOverlayProps.imgSrc;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
      //const groundOverlay = new google.maps.GroundOverlay(composeOptions(groundOverlayProps, groundOverlayControlledPropTypes));

<<<<<<< HEAD
      var minLat = bounds[0];
      var maxLat = bounds[1];
      var minLng = bounds[2];
      var maxLng = bounds[3];

      var latLngBounds = new google.maps.LatLngBounds(new google.maps.LatLng(minLat, minLng), new google.maps.LatLng(maxLat, maxLng));

      var groundOverlay = new google.maps.GroundOverlay(imgSrc, latLngBounds);
||||||| merged common ancestors
      var groundOverlay = new google.maps.GroundOverlay(imgSrc, bounds);
=======
      var minLat = grid[0];
      var maxLat = grid[1];
      var minLng = grid[2];
      var maxLng = grid[3];

      var latLngBounds = new google.maps.LatLngBounds(new google.maps.LatLng(minLat, minLng), new google.maps.LatLng(maxLat, maxLng));

      var groundOverlay = new google.maps.GroundOverlay(imgSrc, latLngBounds);
>>>>>>> 8116c32d4c685d888fd6b7a0f812102552b7034c

      groundOverlay.setMap(mapHolderRef.getMap());

      return groundOverlay;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      groundOverlay: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _GroundOverlayCreator = GroundOverlayCreator;
  GroundOverlayCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getGroundOverlay",
    updaters: groundOverlayUpdaters
  })(GroundOverlayCreator) || GroundOverlayCreator;
  return GroundOverlayCreator;
})(_react.Component);

exports["default"] = GroundOverlayCreator;
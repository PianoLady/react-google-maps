"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _eventListsHeatmapLayerEventList = require("../eventLists/HeatmapLayerEventList");

var _eventListsHeatmapLayerEventList2 = _interopRequireDefault(_eventListsHeatmapLayerEventList);

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

var heatmapLayerControlledPropTypes = {
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  data: _react.PropTypes.any,
  gradient: _react.PropTypes.any,
  visible: _react.PropTypes.bool
};

exports.heatmapLayerControlledPropTypes = heatmapLayerControlledPropTypes;
var heatmapLayerDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(heatmapLayerControlledPropTypes);

exports.heatmapLayerDefaultPropTypes = heatmapLayerDefaultPropTypes;
var heatmapLayerUpdaters = {
  draggable: function draggable(_draggable, component) {
    component.getHeatmapLayer().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getHeatmapLayer().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getHeatmapLayer().setOptions(_options);
  },
  data: function data(_data, component) {
    component.getHeatmapLayer().setData(_data);
  },
  visible: function visible(_visible, component) {
    component.getHeatmapLayer().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsHeatmapLayerEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var heatmapLayerEventPropTypes = eventPropTypes;

exports.heatmapLayerEventPropTypes = heatmapLayerEventPropTypes;

var HeatmapLayerCreator = (function (_Component) {
  _inherits(HeatmapLayerCreator, _Component);

  function HeatmapLayerCreator() {
    _classCallCheck(this, _HeatmapLayerCreator);

    _get(Object.getPrototypeOf(_HeatmapLayerCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(HeatmapLayerCreator, [{
    key: "getHeatmapLayer",
    value: function getHeatmapLayer() {
      return this.props.heatmapLayer;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createHeatmapLayer",
    value: function _createHeatmapLayer(mapHolderRef, heatmapLayerProps) {
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
      var heatmapLayer = new google.maps.visualization.HeatmapLayer((0, _utilsComposeOptions2["default"])(heatmapLayerProps, [
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayerOptions
      "draggable", "editable", "data", "gradient", "visible"]));

      heatmapLayer.setMap(mapHolderRef.getMap());

      return heatmapLayer;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      heatmapLayer: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _HeatmapLayerCreator = HeatmapLayerCreator;
  HeatmapLayerCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getHeatmapLayer",
    updaters: heatmapLayerUpdaters
  })(HeatmapLayerCreator) || HeatmapLayerCreator;
  return HeatmapLayerCreator;
})(_react.Component);

exports["default"] = HeatmapLayerCreator;
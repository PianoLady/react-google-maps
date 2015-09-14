"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _creatorsHeatmapLayerCreator = require("./creators/HeatmapLayerCreator");

var _creatorsHeatmapLayerCreator2 = _interopRequireDefault(_creatorsHeatmapLayerCreator);

var HeatmapLayer = (function (_Component) {
  _inherits(HeatmapLayer, _Component);

  function HeatmapLayer() {
    _classCallCheck(this, HeatmapLayer);

    _get(Object.getPrototypeOf(HeatmapLayer.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(HeatmapLayer, [{
    key: "getDraggable",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getDraggable() {
      return this.state.heatmapLayer.getDraggable();
    }
  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state.heatmapLayer.getEditable();
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.state.heatmapLayer.getData();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.heatmapLayer.getVisible();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;

      var heatmapLayerProps = _objectWithoutProperties(_props, ["mapHolderRef"]);

      var heatmapLayer = _creatorsHeatmapLayerCreator2["default"]._createHeatmapLayer(mapHolderRef, heatmapLayerProps);

      this.setState({ heatmapLayer: heatmapLayer });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.heatmapLayer) {
        return _react2["default"].createElement(
          _creatorsHeatmapLayerCreator2["default"],
          _extends({ heatmapLayer: this.state.heatmapLayer }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsHeatmapLayerCreator.heatmapLayerDefaultPropTypes, _creatorsHeatmapLayerCreator.heatmapLayerControlledPropTypes, _creatorsHeatmapLayerCreator.heatmapLayerEventPropTypes),
    enumerable: true
  }]);

  return HeatmapLayer;
})(_react.Component);

exports["default"] = HeatmapLayer;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
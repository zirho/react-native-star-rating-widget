"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StarBorder = _ref => {
  let {
    size,
    color
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    height: size,
    viewBox: "0 0 24 24",
    width: size
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    fill: color,
    d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
  }));
};

const StarFull = _ref2 => {
  let {
    size,
    color
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    height: size,
    viewBox: "0 0 24 24",
    width: size
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    fill: color,
    d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
  }));
};

const RTL_TRANSFORM = {
  transform: [{
    rotateY: "180deg"
  }]
};

const StarHalf = _ref3 => {
  let {
    size,
    color
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    height: size,
    viewBox: "0 0 24 24",
    width: size,
    style: _reactNative.I18nManager.isRTL ? RTL_TRANSFORM : undefined
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Rect, {
    fill: "none",
    height: "24",
    width: "24",
    x: "0"
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    fill: color,
    d: "M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z"
  }));
};

const StarIcon = _ref4 => {
  let {
    type,
    size,
    color,
    starHalf = StarHalf,
    starBorder = StarBorder,
    starFull = StarFull
  } = _ref4;
  const Component = type === "full" ? starFull : type === "half" ? starHalf : starBorder;
  return /*#__PURE__*/_react.default.createElement(Component, {
    size: size,
    color: color
  });
};

var _default = StarIcon;
exports.default = _default;
//# sourceMappingURL=StarIcon.js.map
import React from "react";
import { I18nManager } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

const StarBorder = _ref => {
  let {
    size,
    color
  } = _ref;
  return /*#__PURE__*/React.createElement(Svg, {
    height: size,
    viewBox: "0 0 24 24",
    width: size
  }, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
  }));
};

const StarFull = _ref2 => {
  let {
    size,
    color
  } = _ref2;
  return /*#__PURE__*/React.createElement(Svg, {
    height: size,
    viewBox: "0 0 24 24",
    width: size
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement(Path, {
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
  return /*#__PURE__*/React.createElement(Svg, {
    height: size,
    viewBox: "0 0 24 24",
    width: size,
    style: I18nManager.isRTL ? RTL_TRANSFORM : undefined
  }, /*#__PURE__*/React.createElement(Rect, {
    fill: "none",
    height: "24",
    width: "24",
    x: "0"
  }), /*#__PURE__*/React.createElement(Path, {
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
  return /*#__PURE__*/React.createElement(Component, {
    size: size,
    color: color
  });
};

export default StarIcon;
//# sourceMappingURL=StarIcon.js.map
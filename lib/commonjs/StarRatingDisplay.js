"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _StarIcon = _interopRequireDefault(require("./StarIcon"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultColor = "#fdd835";

const StarRatingDisplay = _ref => {
  let {
    rating,
    maxStars = 5,
    starSize = 32,
    color = defaultColor,
    emptyColor = color,
    style,
    starStyle,
    testID,
    starFull,
    starHalf,
    starBorder
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.starRating, style],
    testID: testID
  }, (0, _utils.getStars)(rating, maxStars).map((starType, i) => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: i,
      style: starStyle
    }, /*#__PURE__*/_react.default.createElement(_StarIcon.default, {
      type: starType,
      size: starSize,
      color: starType === "empty" ? emptyColor : color,
      starFull: starFull,
      starHalf: starHalf,
      starBorder: starBorder
    }));
  }));
};

const styles = _reactNative.StyleSheet.create({
  starRating: {
    flexDirection: "row",
    alignSelf: "flex-start"
  },
  star: {
    marginHorizontal: 5
  }
});

var _default = StarRatingDisplay;
exports.default = _default;
//# sourceMappingURL=StarRatingDisplay.js.map
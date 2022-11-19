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

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const defaultColor = "#fdd835";
const defaultAnimationConfig = {
  easing: _reactNative.Easing.elastic(2),
  duration: 300,
  scale: 1.2,
  delay: 300
};

const StarRating = _ref => {
  let {
    rating,
    maxStars = 5,
    starSize = 32,
    onChange,
    color = defaultColor,
    emptyColor = color,
    enableHalfStar = true,
    enableSwiping = true,
    onRatingStart,
    onRatingEnd,
    animationConfig = defaultAnimationConfig,
    style,
    starStyle,
    testID,
    starFull,
    starHalf,
    starBorder
  } = _ref;

  const width = _react.default.useRef();

  const ref = _react.default.useRef(null);

  const [isInteracting, setInteracting] = _react.default.useState(false);

  const handleInteraction = _react.default.useCallback(function (x) {
    let isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _reactNative.I18nManager.isRTL;

    if (width.current) {
      if (isRTL) {
        handleInteraction(width.current - x, false);
        return;
      }

      const newRating = Math.max(0, Math.min(Math.round(x / width.current * maxStars * 2 + 0.2) / 2, maxStars));

      if (newRating !== rating) {
        onChange(enableHalfStar ? newRating : Math.ceil(newRating));
      }
    }
  }, [enableHalfStar, maxStars, onChange, rating]);

  const panResponder = _react.default.useMemo(() => {
    return _reactNative.PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: e => {
        if (enableSwiping) {
          handleInteraction(e.nativeEvent.locationX);
        }
      },
      onPanResponderStart: e => {
        onRatingStart === null || onRatingStart === void 0 ? void 0 : onRatingStart();
        handleInteraction(e.nativeEvent.locationX);
        setInteracting(true);
      },
      onPanResponderEnd: () => {
        onRatingEnd === null || onRatingEnd === void 0 ? void 0 : onRatingEnd();
        setTimeout(() => {
          setInteracting(false);
        }, animationConfig.delay || defaultAnimationConfig.delay);
      }
    });
  }, [animationConfig.delay, enableSwiping, handleInteraction, onRatingStart, onRatingEnd]);

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    ref: ref,
    style: [styles.starRating, style]
  }, panResponder.panHandlers, {
    onLayout: () => {
      if (ref.current) {
        ref.current.measure((_x, _y, w, _h) => width.current = w);
      }
    },
    testID: testID
  }), (0, _utils.getStars)(rating, maxStars).map((starType, i) => {
    return /*#__PURE__*/_react.default.createElement(AnimatedIcon, {
      key: i,
      active: isInteracting && rating - i >= 0.5,
      animationConfig: animationConfig,
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

const AnimatedIcon = _ref2 => {
  let {
    active,
    animationConfig,
    children,
    style
  } = _ref2;
  const {
    scale = defaultAnimationConfig.scale,
    easing = defaultAnimationConfig.easing,
    duration = defaultAnimationConfig.duration
  } = animationConfig;

  const animatedSize = _react.default.useRef(new _reactNative.Animated.Value(active ? scale : 1));

  _react.default.useEffect(() => {
    const animation = _reactNative.Animated.timing(animatedSize.current, {
      toValue: active ? scale : 1,
      useNativeDriver: true,
      easing,
      duration
    });

    animation.start();
    return animation.stop;
  }, [active, scale, easing, duration]);

  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    pointerEvents: "none",
    style: [styles.star, style, {
      transform: [{
        scale: animatedSize.current
      }]
    }]
  }, children);
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

var _default = StarRating;
exports.default = _default;
//# sourceMappingURL=StarRating.js.map
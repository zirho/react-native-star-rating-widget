function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { PanResponder, StyleSheet, View, Animated, Easing, I18nManager } from "react-native";
import StarIcon from "./StarIcon";
import { getStars } from "./utils";
const defaultColor = "#fdd835";
const defaultAnimationConfig = {
  easing: Easing.elastic(2),
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
  const width = React.useRef();
  const ref = React.useRef(null);
  const [isInteracting, setInteracting] = React.useState(false);
  const handleInteraction = React.useCallback(function (x) {
    let isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : I18nManager.isRTL;

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
  const panResponder = React.useMemo(() => {
    return PanResponder.create({
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
  return /*#__PURE__*/React.createElement(View, _extends({
    ref: ref,
    style: [styles.starRating, style]
  }, panResponder.panHandlers, {
    onLayout: () => {
      if (ref.current) {
        ref.current.measure((_x, _y, w, _h) => width.current = w);
      }
    },
    testID: testID
  }), getStars(rating, maxStars).map((starType, i) => {
    return /*#__PURE__*/React.createElement(AnimatedIcon, {
      key: i,
      active: isInteracting && rating - i >= 0.5,
      animationConfig: animationConfig,
      style: starStyle
    }, /*#__PURE__*/React.createElement(StarIcon, {
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
  const animatedSize = React.useRef(new Animated.Value(active ? scale : 1));
  React.useEffect(() => {
    const animation = Animated.timing(animatedSize.current, {
      toValue: active ? scale : 1,
      useNativeDriver: true,
      easing,
      duration
    });
    animation.start();
    return animation.stop;
  }, [active, scale, easing, duration]);
  return /*#__PURE__*/React.createElement(Animated.View, {
    pointerEvents: "none",
    style: [styles.star, style, {
      transform: [{
        scale: animatedSize.current
      }]
    }]
  }, children);
};

const styles = StyleSheet.create({
  starRating: {
    flexDirection: "row",
    alignSelf: "flex-start"
  },
  star: {
    marginHorizontal: 5
  }
});
export default StarRating;
//# sourceMappingURL=StarRating.js.map
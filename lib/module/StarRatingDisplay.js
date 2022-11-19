import React from "react";
import { StyleSheet, View } from "react-native";
import StarIcon from "./StarIcon";
import { getStars } from "./utils";
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
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.starRating, style],
    testID: testID
  }, getStars(rating, maxStars).map((starType, i) => {
    return /*#__PURE__*/React.createElement(View, {
      key: i,
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

const styles = StyleSheet.create({
  starRating: {
    flexDirection: "row",
    alignSelf: "flex-start"
  },
  star: {
    marginHorizontal: 5
  }
});
export default StarRatingDisplay;
//# sourceMappingURL=StarRatingDisplay.js.map
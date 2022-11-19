import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { IconProps } from "./StarIcon";
declare type Props = {
    rating: number;
    color?: string;
    emptyColor?: string;
    maxStars?: number;
    starSize?: number;
    enableHalfStar?: boolean;
    style?: StyleProp<ViewStyle>;
    starStyle?: StyleProp<ViewStyle>;
    testID?: string;
    starFull?: React.FC<IconProps>;
    starHalf?: React.FC<IconProps>;
    starBorder?: React.FC<IconProps>;
};
declare const StarRatingDisplay: ({ rating, maxStars, starSize, color, emptyColor, style, starStyle, testID, starFull, starHalf, starBorder, }: Props) => JSX.Element;
export default StarRatingDisplay;

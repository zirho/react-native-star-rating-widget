import React from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import StarIcon, { IconProps } from "./StarIcon";
import { getStars } from "./utils";

type Props = {
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

const defaultColor = "#fdd835";

const StarRatingDisplay = ({
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
    starBorder,
}: Props) => {
    return (
        <View style={[styles.starRating, style]} testID={testID}>
            {getStars(rating, maxStars).map((starType, i) => {
                return (
                    <View key={i} style={starStyle}>
                        <StarIcon
                            type={starType}
                            size={starSize}
                            color={starType === "empty" ? emptyColor : color}
                            starFull={starFull}
                            starHalf={starHalf}
                            starBorder={starBorder}
                        />
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    starRating: {
        flexDirection: "row",
        alignSelf: "flex-start",
    },
    star: {
        marginHorizontal: 5,
    },
});

export default StarRatingDisplay;

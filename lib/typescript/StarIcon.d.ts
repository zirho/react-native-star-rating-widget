import React from "react";
export declare type IconProps = {
    size: number;
    color: string;
};
declare const StarIcon: ({ type, size, color, starHalf, starBorder, starFull, }: IconProps & {
    type: "full" | "half" | "empty";
    starHalf?: React.FC<IconProps> | undefined;
    starBorder?: React.FC<IconProps> | undefined;
    starFull?: React.FC<IconProps> | undefined;
}) => JSX.Element;
export default StarIcon;

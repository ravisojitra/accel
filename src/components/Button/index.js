import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder8: "rounded-radius8" };
const variants = {
  FillIndigo900: "bg-indigo_900 text-white_A700",
  OutlineGray200:
    "bg-white_A700 border border-gray_200 border-solid text-bluegray_800",
  OutlineGray200_1: "border border-gray_200 border-solid text-bluegray_800",
  FillDeeppurple50: "bg-deep_purple_50 text-indigo_900",
};
const sizes = { sm: "p-[10px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf([
    "FillIndigo900",
    "OutlineGray200",
    "OutlineGray200_1",
    "FillDeeppurple50",
  ]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder8",
  variant: "FillIndigo900",
  size: "sm",
};

export { Button };

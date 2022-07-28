import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder6: "rounded-radius6" };
const variants = {
  FillBlueA200: "bg-blue_A200 text-white_A700",
  OutlineBluegray901:
    "bg-bluegray_902 border border-bluegray_901 border-solid text-bluegray_200",
};
const sizes = {
  sm: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  md: "lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px]",
};

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
      } ${sizes[size] || ""} common-button `}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder6"]),
  variant: PropTypes.oneOf(["FillBlueA200", "OutlineBluegray901"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  leftIcon: null,
  rightIcon: null,
  shape: "RoundedBorder6",
  variant: "FillBlueA200",
  size: "sm",
};

export { Button };

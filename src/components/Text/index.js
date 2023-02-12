import React from "react";
const variantClasses = {
  h1: "font-semibold sm:text-[42px] md:text-[48px] text-[56px]",
  h2: "sm:text-[22px] md:text-[24px] text-[26px]",
  h3: "font-semibold sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "text-[15px]",
  h5: "text-[14px]",
  h6: "font-semibold text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

import React from "react";
import Icon, { IconProps } from "src/components/base/Icon";

interface ArrowProps extends Omit<IconProps, "name"> {
  isOpen: boolean;
}

const Arrow: React.FC<ArrowProps> = ({ isOpen, ...rest }) => (
  <span tw="inline-block ml-10">
    {isOpen ? (
      <Icon name="minus" width={24} height={24} {...rest} />
    ) : (
      <Icon name="plus" width={24} height={24} {...rest} />
    )}
  </span>
);

export default Arrow;

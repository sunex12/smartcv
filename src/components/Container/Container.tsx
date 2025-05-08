import { ComponentProps, FC } from "react";

type ContainerProps = ComponentProps<"div">;

export const Container: FC<ContainerProps> = ({ className, ...rest }) => {
  return <div className={`container ${className}`} {...rest}></div>;
};
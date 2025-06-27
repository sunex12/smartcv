import { ReactNode, ButtonHTMLAttributes } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BlueButton = ({ children, className = "", ...props }: Props) => {
  return (
    <button
      className={`text-lg font-bold max-w-[300px] w-full py-3 bg-mainColor rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

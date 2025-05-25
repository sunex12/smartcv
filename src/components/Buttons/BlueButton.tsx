import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const BlueButton = ({ children, className }: Props) => {
  return (
    <>
      <button
        className={`text-lg font-bold max-w-[300px] w-full py-3 bg-mainColor rounded-lg ${className}`}
      >
        {children}
      </button>
    </>
  );
};

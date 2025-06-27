import { ReactNode, MouseEventHandler } from "react";

type PaymentButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const PaymentButton = ({ children, onClick }: PaymentButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-lg font-bold max-w-[200px] w-full py-3 bg-mainColor rounded-lg"
    >
      {children}
    </button>
  );
};

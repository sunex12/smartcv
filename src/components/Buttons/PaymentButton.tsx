import { ReactNode } from "react";

export const PaymentButton = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <button className="text-lg font-bold max-w-[200px] w-full py-3 bg-mainColor rounded-lg">
        {children}
      </button>
    </>
  );
};

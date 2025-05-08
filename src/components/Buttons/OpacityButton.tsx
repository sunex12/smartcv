import { ReactNode } from "react";

export const OpacityButton = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <button className="text-lg text-mainColor font-semibold  max-w-[300px] w-full py-3 border border-2 border-mainColor rounded-lg mt-5">
        {children}
      </button>
    </>
  );
};

import { PaymentButton } from "../components/Buttons/PaymentButton";

export const AnalysisResumePay = () => {
  return (
    <div className="-mt-6 flex flex-col min-h-screen">
      <h2 className="text-center text-2xl font-semibold">Payment</h2>
      <h3 className="text-center text-lg font-semibold mt-9 mb-8">
        1 $ for analysis
      </h3>
      <p className="text-sm mt-4">You’ll receive:</p>
      <p className="text-sm mt-4">🎯 A fully formatted and improved CV</p>
      <p className="text-sm mt-4">
        📝 With all grammar fixes, suggestions & enhancements
      </p>
      <p className="text-sm mt-4">
        📂 Available for download in PDF 📄 or Word 🧾 format
      </p>
      <div className=" text-center mt-auto mb-8">
        <PaymentButton>Payment</PaymentButton>
      </div>
    </div>
  );
};

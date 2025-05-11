import { Link } from "react-router-dom";
import { PaymentButton } from "../components/Buttons/PaymentButton";

export const UploadResumePay = () => {
  return (
    <div className="-mt-6 flex flex-col min-h-screen">
      <h2 className="text-center text-2xl font-semibold">Payment</h2>
      <h3 className="text-center text-lg font-semibold mt-9 mb-8">
        0.50 $ for analysis
      </h3>
      <p className="text-sm mt-4">You’ll receive:</p>
      <p className="text-sm mt-4">
        ✅ Checks for grammar and style errors – corrects language mistakes and
        weak phrasing.
      </p>
      <p className="text-sm mt-4">
        🧱 Evaluates structure and logic – makes sure the sections are
        well-organized and clear.
      </p>
      <p className="text-sm mt-4">
        💡 Gives professional improvement tips – what to add, fix, or remove.
      </p>
      <p className="text-sm mt-4">
        🔍 Analyzes relevance for the job market – checks how strong your resume
        is for your field.
      </p>
      <p className="text-sm mt-4">
        ⭐ Gives a score from 1 to 10 – how strong your resume is overall.
      </p>
      <div className="text-center mt-10">
        <Link to="/analysis-resume">
          <PaymentButton>Payment</PaymentButton>
        </Link>
      </div>
    </div>
  );
};

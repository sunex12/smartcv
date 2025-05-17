import { BlueButton } from "../components/Buttons/BlueButton";
import { Link } from "react-router-dom";

export const UploadResume = () => {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-center text-2xl font-semibold">
        Enter or upload resume
      </h2>
      <textarea
        className="mt-8 p-5 w-[294px] h-[170px] bg-[#fff] rounded-lg placeholder:text-xs placeholder:text-[#8F8F8F]
         placeholder:font-semibold shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        placeholder="Enter resume"
      ></textarea>
      <p className="mt-4 mb-6 text-[#8F8F8F] font-semibold">Or</p>
      <label className="cursor-pointer text-mainColor font-semibold text-lg mb-8 block">
        Upload resume
        <input type="file" className="hidden" />
      </label>
      <Link to="/upload-resume-payment">
        <BlueButton>Analyze resume for 0.50 $</BlueButton>
      </Link>
    </div>
  );
};

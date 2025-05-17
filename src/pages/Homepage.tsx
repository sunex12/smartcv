import { BlueButton } from "../components/Buttons/BlueButton";
import { OpacityButton } from "../components/Buttons/OpacityButton";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="justify-between px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">SmartCV</h1>
        <p className="text-sm font-medium text-mainColor mt-7">
          Improve your resume with AI. Analyze, fix, and impress — instantly.
        </p>
      </div>

      <div className="text-center mt-48 space-y-4">
        <Link to="/upload-resume">
          <BlueButton>Analyze your resume</BlueButton>
        </Link>
        <Link to="/instruction">
          <OpacityButton>Instruction</OpacityButton>
        </Link>
      </div>
    </div>
  );
};

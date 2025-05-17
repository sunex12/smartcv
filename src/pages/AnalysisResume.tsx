import { BlueButton } from "../components/Buttons/BlueButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export const AnalysisResume = () => {
  return (
    <div className="text-center mt-8">
      <h2 className="text-center text-2xl font-semibold">Analysis results</h2>
      <div style={{ width: 120, height: 120, margin: "30px auto" }}>
        <CircularProgressbar
          value={72}
          text={`${7.2}`}
          styles={buildStyles({
            pathColor: "#5BA8D7",
            textColor: "white",
            trailColor: "#211F1F",
            textSize: "36px",
          })}
        />
      </div>
      <h3 className="text-center text-2xl font-semibold">
        Proposals for improvement
      </h3>

      <label className="cursor-pointer text-mainColor font-semibold text-lg mb-8 mt-6 block">
        Download
        <input type="file" className="hidden" />
      </label>

      <Link to="/analysis-resume-payment">
        <BlueButton className="text-sm">
          Download the finished resume for 1 $
        </BlueButton>
      </Link>
    </div>
  );
};

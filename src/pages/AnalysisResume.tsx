import { BlueButton } from "../components/Buttons/BlueButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export const AnalysisResume = () => {
  return (
    <div className="mt-8">
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
        Proposal for improvement
      </h3>
      <div className="mt-8 mb-8 mx-auto w-[300px] h-[270px] bg-gray-300 overflow-y-scroll p-4 bg-[#363333] rounded-lg">
        <p className="text-sm leading-relaxed">
          Šis ir ļoti garš teksts, kas neietilpst vienā skatā.
          <br />
          Lietotājs var ritināt uz augšu un leju, lai izlasītu visu.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          <br />
          Nisi ut aliquip ex ea commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse.
          <br />
          Cillum dolore eu fugiat nulla pariatur.
          <br />
          Excepteur sint occaecat cupidatat non proident.
          <br />
          Sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          Un vēl vairāk teksta, tikai lai parādītu scroll efektu.
        </p>
      </div>
      <Link to="/analysis-resume-payment">
        <BlueButton className="text-sm">
          Download the finished resume for 1 $
        </BlueButton>
      </Link>
    </div>
  );
};

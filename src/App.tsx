import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Homepage } from "./pages/Homepage";
import { Instruction } from "./pages/Instruction";
import { UploadResume } from "./pages/UploadResume";
import { UploadResumePay } from "./pages/UploadResumePay";
import { AnalysisResume } from "./pages/AnalysisResume";
import { AnalysisResumePay } from "./pages/AnalysisResumePay";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} index />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/upload-resume" element={<UploadResume />} />
          <Route path="/upload-resume-payment" element={<UploadResumePay />} />
          <Route path="/analysis-resume" element={<AnalysisResume />} />
          <Route path="/analysis-resume-payment" element={<AnalysisResumePay />} />
        </Route>
      </Routes>
    </>
  );
};

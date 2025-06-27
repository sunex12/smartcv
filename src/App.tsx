import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Homepage } from "./pages/Homepage";
import { Instruction } from "./pages/Instruction";
import { UploadResume } from "./pages/UploadResume";
import { UploadResumePay } from "./pages/UploadResumePay";
import { AnalysisResume } from "./pages/AnalysisResume";
// import { AnalysisResumePay } from "./pages/AnalysisResumePay";
// import { ResumeFormat } from "./pages/ResumeFormat";
// import { Archive } from "./pages/Archive";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/smartcv" element={<Layout />}>
          <Route path="/smartcv" element={<Homepage />} index />
          <Route path="/smartcv/instruction" element={<Instruction />} />
          <Route path="/smartcv/upload-resume" element={<UploadResume />} />
          <Route path="/smartcv/upload-resume-payment" element={<UploadResumePay />} />
          <Route path="/smartcv/analysis-resume" element={<AnalysisResume />} />
          {/* <Route path="/smartcv/analysis-resume-payment" element={<AnalysisResumePay />} />
          <Route path="/smartcv/resume-format" element={<ResumeFormat />} />
          <Route path="/smartcv/archive" element={<Archive />} /> */}
        </Route>
      </Routes>
    </>
  );
};

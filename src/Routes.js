import React from "react";
import Otp from "pages/Otp";
import AllCompaniesDetail from "pages/AllCompaniesDetail";
import AllCompanies from "pages/AllCompanies";
import InterestsReceivedOne from "pages/InterestsReceivedOne";
import Login from "pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/interestsreceivedone"
          element={<InterestsReceivedOne />}
        />
        <Route path="/allcompanies" element={<AllCompanies />} />
        <Route path="/allcompaniesdetail" element={<AllCompaniesDetail />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;

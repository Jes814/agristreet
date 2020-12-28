import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Compare from "../components/compare/Compare";

function ComparePage() {
  return (
    <div className="bg-gray-100">
      <div>
        <Navbar />
      </div>
      <div>
        <Compare />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ComparePage;

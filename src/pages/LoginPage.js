import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/login/Login";

function LoginPage() {
  return (
    <div className="bg-gray-100">
      <div>
        <Navbar />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SellerForm from "../components/sell/SellerForm";

function SellCreateAccount() {
  return (
    <div className="bg-gray-100">
      <div>
        <Navbar />
      </div>
      <div>
        <SellerForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SellCreateAccount;

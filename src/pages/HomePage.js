import React from "react";
import Categories from "../components/home/Categories";
import NewArrival from "../components/home/NewArrival";
import Slider from "../components/home/Slider";
import Farmers from "../components/home/Farmers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavbarTwo from "../components/NavbarTwo";

function HomePage() {
  return (
    <div className="bg-gray-100">
      <div>
        <Navbar />
      </div>
      <div>
        <NavbarTwo />
      </div>
      <div className="mx-auto max-w-7xl">
        <Slider />
      </div>
      <div>
        <NewArrival />
      </div>
      <div>
        <Categories />
      </div>
      <div className="mx-auto max-w-7xl">
        <Farmers />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;

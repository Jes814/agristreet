import React from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import pineapple from "../../../resources/veggie3.jpeg";
import bg from "../../../resources/bg_2.jpg";

function ViewProductDetails() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="h-screen md:mx-auto md:max-w-7xl">
        <div className="flex items-center justify-between my-10 bg-gray-100 border-2 border-green-400 rounded-lg shadow-xl">
          <div className="w-1/2 border-r-2 border-green-400">
            <img
              className="w-full rounded-lg"
              src={pineapple}
              alt="selected-product"
            />
          </div>
          <div className="w-1/2">
            {/* Product Title */}
            <div className="p-2 font-semibold">
              <h2 className="text-2xl">Sweet Pineapple</h2>
            </div>

            {/* Customer Review */}
            <div className="flex p-2">
              <div className="pr-4 text-green-400">
                <i class="fa fa-star fill-current" aria-hidden="true"></i>
                <i class="fa fa-star fill-current" aria-hidden="true"></i>
                <i class="fa fa-star fill-current" aria-hidden="true"></i>
                <i class="fa fa-star fill-current" aria-hidden="true"></i>
                <i class="fa fa-star fill-current" aria-hidden="true"></i>
              </div>
              <div>(customer review)</div>
            </div>

            {/* Product price */}
            <div className="p-2 text-2xl font-semibold text-green-400">
              $70.00
            </div>

            {/* Product Description */}
            <div className="p-2">
              Quis cillum aute cillum cillum id occaecat ipsum ut est. Veniam
              est ut elit voluptate id non aute ut labore adipisicing nostrud
              occaecat laboris sint. Aliqua culpa amet nisi exercitation Lorem
              adipisicing. Aliqua labore ad eu elit amet Lorem. Incididunt
              consectetur Lorem ut veniam proident deserunt adipisicing.
            </div>

            {/* Options */}
            <div className="flex items-center p-2">
              <div className="flex items-center w-1/2">
                <div className="pr-2 font-semibold">
                  <p>Quantity</p>
                </div>
                <div className="border-2 border-green-400">
                  <input
                    className="w-20 p-2 rounded-lg focus:outline-none"
                    placeholder="Qty.."
                  />
                </div>
              </div>
              <div className="w-1/2 text-white duration-300 ease-in-out transform bg-green-400 border-2 border-green-400 rounded-lg hover:bg-gray-100 hover:text-green-400">
                <button className="w-full py-2 font-semibold focus:outline-none">
                  Add To Cart
                </button>
              </div>
            </div>

            {/* WishList */}
            <div className="p-2 font-semibold">
              <i
                class="fa fa-asterisk fill-current text-green-400"
                aria-hidden="true"
              ></i>{" "}
              Add to Wishlist
            </div>

            {/* Compare */}
            <div className="p-2 font-semibold">
              <i
                class="fa fa-asterisk  fill-current text-green-400"
                aria-hidden="true"
              ></i>{" "}
              Compare
            </div>

            {/* Category */}
            <div className="flex items-center p-2 font-semibold">
              Category:{" "}
              <span className="pl-2 text-xl text-green-400">Fruits</span>
            </div>
          </div>
        </div>

        {/* Image List */}
        <div className="grid w-1/2 grid-cols-4 gap-4">
          <div className="py-2">
            <img src={bg} alt="image-list" />
          </div>
          <div className="py-2">
            <img src={bg} alt="image-list" />
          </div>
          <div className="py-2">
            <img src={bg} alt="image-list" />
          </div>
          <div className="py-2">
            <img src={bg} alt="image-list" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default ViewProductDetails;

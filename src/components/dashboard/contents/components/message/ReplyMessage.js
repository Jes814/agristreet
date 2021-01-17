import React from "react";
import { Link } from "react-router-dom";

function ReplyMessage() {
  return (
    <div className="m-20">
      <div className="overflow-y-auto bg-gray-100 border-2 border-b-0 border-green-400 rounded-lg rounded-bl-none rounded-br-none h-96">
        <div className="flex justify-start">
          <div className="w-1/2 p-4">
            <p className="p-3 text-lg font-semibold text-white bg-blue-400 rounded-lg">
              Hello
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-1/2 p-4">
            <p className="p-3 text-lg font-semibold text-right text-white bg-blue-400 rounded-lg">
              Hello 2
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-1/2 p-4">
            <p className="p-3 text-lg font-semibold text-white bg-blue-400 rounded-lg">
              Hello
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-1/2 p-4">
            <p className="p-3 text-lg font-semibold text-right text-white bg-blue-400 rounded-lg">
              Hello 2
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-1/2 p-4">
            <p className="p-3 text-lg font-semibold text-white bg-blue-400 rounded-lg">
              Hello
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-1/2 p-4">
            <p className="p-3 text-lg font-semibold text-right text-white bg-blue-400 rounded-lg">
              Hello 2
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 border-2 border-green-400 rounded-bl-lg rounded-br-lg">
        <div className="flex justify-between">
          <div className="w-4/5 p-4">
            <textarea
              className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none"
              rows={3}
              placeholder="type reply here...."
            ></textarea>
          </div>
          <div className="w-1/5 p-4">
            <div className="py-2 mx-4 text-center duration-200 ease-in transform border-2 border-green-400 rounded-full cursor-pointer px-7 hover:border-blue-400 hover:bg-blue-400 hover:text-white">
              <button className="font-semibold focus:outline-none">Send</button>
            </div>
            <Link to="/farmer-dashboard/messages">
              <div className="py-2 mx-4 my-1 text-center duration-200 ease-in transform border-2 border-green-400 rounded-full cursor-pointer px-7 hover:border-blue-400 hover:bg-blue-400 hover:text-white">
                <button className="font-semibold focus:outline-none">
                  Back
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReplyMessage;

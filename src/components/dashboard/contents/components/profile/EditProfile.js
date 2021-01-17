import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import image from "../../../../../resources/bg_2.jpg";

function EditProfile() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="m-20">
      <div className="bg-gray-100 border-2 border-green-400 rounded-lg">
        <h2 className="p-4 text-2xl font-semibold">Edit Profile</h2>
        <div className="flex justify-between p-4 ">
          <div className="w-1/2">
            {/* Firstname Input */}
            <div className="flex items-center justify-between py-4">
              <div className="w-1/2 text-xl">
                <label>Firstname</label>
              </div>
              <div className="w-1/2">
                <input
                  className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none"
                  placeholder="Firstname...."
                />
              </div>
            </div>

            {/* Middlename Input */}
            <div className="flex items-center justify-between py-4">
              <div className="w-1/2 text-xl">
                <label>Middlename</label>
              </div>
              <div className="w-1/2">
                <input
                  className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none"
                  placeholder="Middlename...."
                />
              </div>
            </div>

            {/* Lastname Input */}
            <div className="flex items-center justify-between py-4">
              <div className="w-1/2 text-xl">
                <label>Lastname</label>
              </div>
              <div className="w-1/2">
                <input
                  className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none"
                  placeholder="Lastname...."
                />
              </div>
            </div>

            {/* Email address Input */}
            <div className="flex items-center justify-between py-4">
              <div className="w-1/2 text-xl">
                <label>Email Address</label>
              </div>
              <div className="w-1/2">
                <input
                  className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none"
                  placeholder="Email Address...."
                />
              </div>
            </div>

            {/* Birthday Input */}
            <div className="flex items-center justify-between py-4">
              <div className="w-1/2 text-xl">
                <label>Birthday</label>
              </div>
              <div className="w-1/2">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
            </div>

            {/* Mobile Input */}
            <div className="flex items-center justify-between py-4">
              <div className="w-1/2 text-xl">
                <label>Mobile</label>
              </div>
              <div className="w-1/2">
                <input
                  className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none"
                  placeholder="Mobile number...."
                />
              </div>
            </div>

            {/* Gender Input */}
            <div className="flex items-center justify-between py-4">
              <div className="w-1/2 text-xl">
                <label>Gender</label>
              </div>
              <div className="w-1/2">
                <select className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none">
                  <option>Select 1</option>
                  <option>Select 2</option>
                  <option>Select 3</option>
                  <option>Select 4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-1/2 px-4">
            <div className="flex justify-center">
              <div className="h-48 p-4 bg-white border-2 border-green-400 rounded-lg">
                <div className="flex justify-center">
                  <i className="py-4 text-gray-300 fill-current fa fa-file-image-o fa-4x"></i>
                </div>
                <p className="py-4 font-semibold text-gray-300">
                  No image selected
                </p>
              </div>
            </div>
            <div className="flex justify-center py-4">
              <div className="px-12 py-2 mx-4 duration-200 ease-in transform border-2 border-green-400 rounded-full cursor-pointer hover:border-blue-400 hover:bg-blue-400 hover:text-white">
                <button className="font-semibold focus:outline-none">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;

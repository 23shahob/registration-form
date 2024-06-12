import React, { useState } from "react";

const RegistrationForm = () => {
  const [isActive, setIsActive] = useState(null);

  return (
    <div className="w-[752px] rounded bg-white">
      <form>
        <div className="border-b border-[#005875] px-[52px] py-10">
          <h1 className="text-[32px] font-bold leading-[145%] text-[#005875]">
            Registration Form
          </h1>
          <p className="font-medium leading-[160%] text-[#005875]">
            Fill out the form carefully for registration
          </p>
        </div>
        <div className="border-b border-[#005875] px-[38px]">
          <div
            className={`mx-1 mb-3 mt-7 rounded px-[10px] py-3 ${isActive === 1 ? "bg-[#dbf3fa]" : "bg-white"}`}
          >
            <label className="mb-4 block font-medium text-[#005875]">
              Student Name
            </label>
            <div className="flex gap-2">
              <span>
                <input
                  className="h-10 w-full rounded border border-[#005875] px-3 hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  type="text"
                  required
                  onFocus={() => {
                    setIsActive(1);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                />
                <label className="mt-3 block text-[12px] text-[#1a728f]">
                  First Name
                </label>
              </span>
              <span>
                <input
                  className="h-10 w-full rounded border border-[#005875] px-3 hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  type="text"
                  required
                  onFocus={() => {
                    setIsActive(1);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                />
                <label className="mt-3 block text-[12px] text-[#1a728f]">
                  Middle Name
                </label>
              </span>
              <span>
                <input
                  className="h-10 w-full rounded border border-[#005875] px-3 hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  type="text"
                  required
                  onFocus={() => {
                    setIsActive(1);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                />
                <label className="mt-3 block text-[12px] text-[#1a728f]">
                  Last Name
                </label>
              </span>
            </div>
          </div>
          <div className="flex w-full">
            <div
              className={`mx-1 my-3 w-1/2 rounded px-[10px] py-3 ${isActive == 2 ? "bg-[#dbf3fa]" : "bg-white"}`}
            >
              <label
                className="mb-4 block font-medium text-[#005875]"
                htmlFor="birthDate"
              >
                Birth Date
              </label>
              <div className="flex gap-2">
                <div>
                  <select
                    required
                    className="h-10 w-full rounded border border-[#005875] text-[#005875] hover:ring focus:outline-none focus:ring-2 focus:ring-[#367c96] hover:focus:ring-[#005875]"
                    onFocus={() => {
                      setIsActive(2);
                    }}
                    onBlur={() => {
                      setIsActive(null);
                    }}
                  >
                    <option>Please select</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                  <label className="mt-1 block text-xs text-[#1a728f]">
                    Month
                  </label>
                </div>
                <div>
                  <select
                    required
                    className="h-10 w-full rounded border border-[#005875] text-[#005875] hover:ring focus:outline-none focus:ring-2 focus:ring-[#367c96] hover:focus:ring-[#005875]"
                    onFocus={() => {
                      setIsActive(2);
                    }}
                    onBlur={() => {
                      setIsActive(null);
                    }}
                  >
                    <option>Please select</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <label className="mt-1 block text-xs text-[#1a728f]">
                    Day
                  </label>
                </div>
                <div>
                  <select
                    required
                    className="h-10 w-full rounded border border-[#005875] text-[#005875] hover:ring focus:outline-none focus:ring-2 focus:ring-[#367c96] hover:focus:ring-[#005875]"
                    onFocus={() => {
                      setIsActive(2);
                    }}
                    onBlur={() => {
                      setIsActive(null);
                    }}
                  >
                    <option>Please select</option>
                    {Array.from({ length: 100 }, (_, i) => (
                      <option key={2023 - i}>{2023 - i}</option>
                    ))}
                  </select>
                  <label className="mt-1 block text-xs text-[#1a728f]">
                    Year
                  </label>
                </div>
              </div>
            </div>
            <div
              className={`mx-1 my-3 w-1/2 rounded px-[10px] py-3 ${isActive === 3 ? "bg-[#dbf3fa]" : "bg-white"}`}
            >
              <label className="mb-4 block font-medium text-[#005875]">
                Gender
              </label>
              <div>
                <select
                  required
                  className="h-10 w-full rounded border border-[#005875] text-[#005875] hover:ring focus:outline-none focus:ring-2 focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  onFocus={() => {
                    setIsActive(3);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                >
                  <option>Please select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>N/A</option>
                </select>
              </div>
            </div>
          </div>
          <div
            className={`mx-1 mb-3 mt-7 rounded px-[10px] py-3 ${isActive === 4 ? "bg-[#dbf3fa]" : "bg-white"}`}
          >
            <label className="mb-4 block font-medium text-[#005875]">
              Address
            </label>
            <div className="flex flex-col gap-y-6">
              <div>
                <input
                  className="h-10 w-full rounded border border-[#005875] px-3 hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  type="text"
                  required
                  onFocus={() => {
                    setIsActive(4);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                />
                <label className="mt-3 block text-[12px] text-[#1a728f]">
                  Street Address
                </label>
              </div>
              <div>
                <input
                  className="h-10 w-full rounded border border-[#005875] px-3 hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  type="text"
                  required
                  onFocus={() => {
                    setIsActive(4);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                />
                <label className="mt-3 block text-[12px] text-[#1a728f]">
                  Street Address Line 2
                </label>
              </div>
              <div className="flex gap-6">
                <div className="w-1/2">
                  <input
                    className="h-10 w-full rounded border border-[#005875] px-3 hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                    type="text"
                    required
                    onFocus={() => {
                      setIsActive(4);
                    }}
                    onBlur={() => {
                      setIsActive(null);
                    }}
                  />
                  <label className="mt-3 block text-[12px] text-[#1a728f]">
                    City
                  </label>
                </div>
                <div className="w-1/2">
                  <input
                    className="h-10 w-full rounded border border-[#005875] px-3 hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                    type="text"
                    required
                    onFocus={() => {
                      setIsActive(4);
                    }}
                    onBlur={() => {
                      setIsActive(null);
                    }}
                  />
                  <label className="mt-3 block text-[12px] text-[#1a728f]">
                    State / Province
                  </label>
                </div>
              </div>
              <div>
                <input
                  className="h-10 w-full rounded border border-[#005875] px-3 hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  type="text"
                  required
                  onFocus={() => {
                    setIsActive(4);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                />
                <label className="mt-3 block text-[12px] text-[#1a728f]">
                  Postal / Zip Code
                </label>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div
              className={`mx-1 my-3 w-1/2 rounded px-[10px] py-3 ${isActive === 5 ? "bg-[#dbf3fa]" : "bg-white"}`}
            >
              <label className="mb-4 block font-medium text-[#005875]">
                Student E-mail
              </label>
              <div>
                <input
                  className="h-10 w-full rounded border border-[#005875] px-3 placeholder:font-light placeholder:text-[#005875] hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  type="email"
                  required
                  placeholder="ex: myname@example.com"
                  onFocus={() => {
                    setIsActive(5);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                />
                <label className="mt-3 block text-[12px] text-[#1a728f]">
                  example@example.com
                </label>
              </div>
            </div>
            <div
              className={`mx-1 my-3 w-1/2 rounded px-[10px] py-3 ${isActive === 6 ? "bg-[#dbf3fa]" : "bg-white"}`}
            >
              <label className="mb-4 block font-medium text-[#005875]">
                Mobile Number
              </label>
              <div>
                <input
                  required
                  className="h-10 w-full rounded border border-[#005875] px-3 placeholder:font-light placeholder:text-[#005875] hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  type="text"
                  placeholder="(000) 000-0000"
                  onFocus={() => {
                    setIsActive(6);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div
              className={`mx-1 my-3 w-1/2 rounded px-[10px] py-3 ${isActive === 7 ? "bg-[#dbf3fa]" : "bg-white"}`}
            >
              <label className="mb-4 block font-medium text-[#005875]">
                Phone Number
              </label>
              <div>
                <input
                  className="h-10 w-full rounded border border-[#005875] px-3 placeholder:font-light placeholder:text-[#005875] hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  type="text"
                  required
                  placeholder="(000) 000-0000"
                  onFocus={() => {
                    setIsActive(7);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                />
              </div>
            </div>
            <div
              className={`mx-1 my-3 w-1/2 rounded px-[10px] py-3 ${isActive === 8 ? "bg-[#dbf3fa]" : "bg-white"}`}
            >
              <label className="mb-4 block font-medium text-[#005875]">
                Work Number
              </label>
              <div>
                <input
                  className="h-10 w-full rounded border border-[#005875] px-3 placeholder:font-light placeholder:text-[#005875] hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  type="text"
                  required
                  placeholder="(000) 000-0000"
                  onFocus={() => {
                    setIsActive(8);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div
              className={`mx-1 my-3 w-1/2 rounded px-[10px] py-3 ${isActive === 9 ? "bg-[#dbf3fa]" : "bg-white"}`}
            >
              <label className="mb-4 block font-medium text-[#005875]">
                Company
              </label>
              <div>
                <input
                  className="h-10 w-full rounded border border-[#005875] px-3 hover:ring focus:outline-none focus:ring focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  type="text"
                  required
                  onFocus={() => {
                    setIsActive(9);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                />
              </div>
            </div>
            <div
              className={`mx-1 my-3 w-1/2 rounded px-[10px] py-3 ${isActive === 10 ? "bg-[#dbf3fa]" : "bg-white"}`}
            >
              <label className="mb-4 block font-medium text-[#005875]">
                Courses
              </label>
              <div>
                <select
                  required
                  className="h-10 w-full rounded border border-[#005875] text-[#005875] hover:ring focus:outline-none focus:ring-2 focus:ring-[#367c96] hover:focus:ring-[#005875]"
                  onFocus={() => {
                    setIsActive(10);
                  }}
                  onBlur={() => {
                    setIsActive(null);
                  }}
                >
                  <option>Please select</option>
                  <option>Windows 8</option>
                  <option>Introduction to Linux</option>
                  <option>English 101</option>
                  <option>English 102</option>
                  <option>Creative Writing 1</option>
                  <option>Creative Writing 2</option>
                  <option>History 101</option>
                  <option>History 102</option>
                  <option>Math 101</option>
                  <option>Math 102</option>
                </select>
              </div>
            </div>
          </div>
          <div
            className={`mx-1 my-3 rounded px-[10px] py-3 ${isActive === 11 ? "bg-[#dbf3fa]" : "bg-white"}`}
          >
            <label className="mb-4 block font-medium text-[#005875]">
              Additional Comments
            </label>
            <textarea
              onFocus={() => {
                setIsActive(11);
              }}
              onBlur={() => {
                setIsActive(null);
              }}
              className="h-[150px] min-h-10 w-full rounded border border-[#005875] px-2 py-2 hover:ring focus:outline-none focus:ring-2 focus:ring-[#367c96] hover:focus:ring-[#005875]"
            />
          </div>
        </div>
        <div className="flex justify-center px-14 py-8">
          <button className="h-12 w-[180px] rounded bg-[#005875] font-medium text-white hover:opacity-50">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

"use client";
import React, { useState } from "react";

function FormSection() {
  const [step, setStep] = useState(1);
  const [members, setMembers] = useState([
    { name: "", email: "", contact: "", faculty: "", batch: "" },
  ]);

  // Handle input change for current member
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMembers((prev) =>
      prev.map((m, idx) => (idx === step - 1 ? { ...m, [name]: value } : m))
    );
  };

  // Go to next member (up to 5)
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 5) {
      setMembers((prev) => [
        ...prev,
        { name: "", email: "", contact: "", faculty: "", batch: "" },
      ]);
      setStep(step + 1);
    }
  };

  // Go to previous member
  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  // Submit all members
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registered team:\n" + JSON.stringify(members, null, 2));
  };

  // For label numbering
  const memberNum = step.toString().padStart(2, "0");

  return (
    <div
      className="relative flex flex-row items-stretch justify-between h-[90vh] w-full rounded-[40px] overflow-hidden p-8 m-8"
      style={{ backgroundColor: "#E6DBCE" }}
    >
      {/* Left Illustration */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/lady red.png"
          alt="Line Art"
          className="object-contain h-[80%] w-auto"
          style={{ minWidth: 320 }}
        />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center relative">
        <form
          className="w-full max-w-xl bg-transparent flex flex-col gap-6 px-4"
          onSubmit={step === 5 ? handleSubmit : handleNext}
        >
          <label className="flex flex-col font-bold text-[#222] text-lg mb-1">
            {`Member ${memberNum} Name`}
            <input
              type="text"
              name="name"
              value={members[step - 1].name}
              onChange={handleChange}
              className="mt-2 p-4 rounded-xl border-none outline-none bg-white bg-opacity-80 focus:bg-opacity-100 transition placeholder:text-[#222] text-base font-normal"
              required
              placeholder={`Enter member ${memberNum} name`}
              style={{ background: "rgba(255,255,255,0.7)" }}
            />
          </label>
          <label className="flex flex-col font-bold text-[#222] text-lg mb-1">
            {`Member ${memberNum} email`}
            <input
              type="email"
              name="email"
              value={members[step - 1].email}
              onChange={handleChange}
              className="mt-2 p-4 rounded-xl border-none outline-none bg-white bg-opacity-80 focus:bg-opacity-100 transition placeholder:text-[#222] text-base font-normal"
              required
              placeholder={`Enter member ${memberNum} email`}
              style={{ background: "rgba(255,255,255,0.7)" }}
            />
          </label>
          <label className="flex flex-col font-bold text-[#222] text-lg mb-1">
            {`Member ${memberNum} Contact number`}
            <input
              type="tel"
              name="contact"
              value={members[step - 1].contact}
              onChange={handleChange}
              className="mt-2 p-4 rounded-xl border-none outline-none bg-white bg-opacity-80 focus:bg-opacity-100 transition placeholder:text-[#222] text-base font-normal"
              required
              placeholder={`Enter member ${memberNum} contact number`}
              style={{ background: "rgba(255,255,255,0.7)" }}
            />
          </label>
          <label className="flex flex-col font-bold text-[#222] text-lg mb-1">
            {`Member ${memberNum} Faculty of Studying`}
            <input
              type="text"
              name="faculty"
              value={members[step - 1].faculty}
              onChange={handleChange}
              className="mt-2 p-4 rounded-xl border-none outline-none bg-white bg-opacity-80 focus:bg-opacity-100 transition placeholder:text-[#222] text-base font-normal"
              required
              placeholder={`Enter member ${memberNum} faculty`}
              style={{ background: "rgba(255,255,255,0.7)" }}
            />
          </label>
          <label className="flex flex-col font-bold text-[#222] text-lg mb-1">
            {`Member ${memberNum} Batch`}
            <input
              type="text"
              name="batch"
              value={members[step - 1].batch}
              onChange={handleChange}
              className="mt-2 p-4 rounded-xl border-none outline-none bg-white bg-opacity-80 focus:bg-opacity-100 transition placeholder:text-[#222] text-base font-normal"
              required
              placeholder={`Enter member ${memberNum} batch`}
              style={{ background: "rgba(255,255,255,0.7)" }}
            />
          </label>
          <div className="flex justify-between items-center mt-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={step === 1}
              className={`px-6 py-2 rounded-lg font-bold transition ${
                step === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#650E17] text-white hover:bg-[#4a0a12]"
              }`}
              style={
                step === 1 ? {} : { backgroundColor: "#650E17", color: "#fff" }
              }
            >
              Previous
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg font-bold text-white transition"
              style={{ backgroundColor: "#650E17" }}
            >
              {step === 5 ? "Register" : "Next"}
            </button>
          </div>
        </form>
        {/* Vertical Register Now Badge */}
        <div className="absolute right-0 top-32 -translate-y-1/2 z-40">
          <div
            className="bg-[#650E17] text-white font-bold px-4 py-3 rounded-l-lg text-lg tracking-wide"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              letterSpacing: "0.1em",
            }}
          >
            #Register_Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;

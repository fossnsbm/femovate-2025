"use client";
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

function FormSection() {
  const MIN_MEMBERS = 3;
  const MAX_MEMBERS = 5;

  const [step, setStep] = useState(1);
  const [teamName, setTeamName] = useState(""); // <-- Add team name state
  const [members, setMembers] = useState(
    Array(MIN_MEMBERS).fill({
      name: "",
      email: "",
      contact: "",
      faculty: "",
      batch: "",
    })
  );

  // Handle input change for current member
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMembers((prev) =>
      prev.map((m, idx) => (idx === step - 1 ? { ...m, [name]: value } : m))
    );
  };

  // Validate current member fields
  const isCurrentMemberValid = () => {
    const current = members[step - 1];
    return (
      current.name.trim() &&
      current.email.trim() &&
      current.contact.trim() &&
      current.faculty.trim() &&
      current.batch.trim()
    );
  };

  // Go to next member (up to MAX_MEMBERS)
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCurrentMemberValid()) {
      alert("Please fill all fields for this member before proceeding.");
      return;
    }

    if (step < MAX_MEMBERS) {
      if (step === members.length) {
        setMembers((prev) => [
          ...prev,
          { name: "", email: "", contact: "", faculty: "", batch: "" },
        ]);
      }
      setStep(step + 1);
    }
  };

  // Go to previous member
  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  // Submit all members (only if at least MIN_MEMBERS are filled)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isCurrentMemberValid()) {
      alert("Please fill all fields for this member before submitting.");
      return;
    }
    if (!teamName.trim()) {
      alert("Please enter a team name.");
      return;
    }

    const filledMembers = members.slice(0, Math.max(step, MIN_MEMBERS));
    try {
      await addDoc(collection(db, "registrations"), {
        teamName, // <-- Save team name
        members: filledMembers,
        timestamp: new Date(),
      });
      alert("Registration successful!");
      // Reset form
      setStep(1);
      setTeamName(""); // <-- Reset team name
      setMembers(
        Array(MIN_MEMBERS).fill({
          name: "",
          email: "",
          contact: "",
          faculty: "",
          batch: "",
        })
      );
    } catch (error: any) {
      console.error("Error submitting form:", error);
      alert(
        `Error submitting form: ${error.message}\n\nCheck Firestore rules.`
      );
    }
  };

  // For label numbering
  const memberNum = step.toString().padStart(2, "0");

  return (
    <div
      className="relative flex flex-row items-stretch justify-between h-[90vh] w-full rounded-[40px] overflow-hidden p-8 m-8"
      style={{ backgroundColor: "#E6DBCE" }}
    >
      {/* Left Illustration */}
      <div className="flex-1 flex items-start justify-start">
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
          className="w-full max-w-xl bg-[#E6DBCE] bg-opacity-100 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col gap-6 transition-all duration-300 ease-in-out"
          onSubmit={step === MAX_MEMBERS ? handleSubmit : handleNext}
        >
          {/* Team Name Input */}

          <h2 className="text-2xl font-bold text-[#222] mb-4 text-center">
            Member {memberNum}
          </h2>

          <label className="flex flex-col font-medium text-[#222] text-base mb-2">
            Team Name
            <input
              type="text"
              name="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="mt-1 p-3 rounded-lg border-none outline-none bg-white bg-opacity-90 focus:bg-opacity-100 transition placeholder:text-gray-500 text-sm"
              required
              placeholder="Enter team name"
            />
          </label>

          <label className="flex flex-col font-medium text-[#222] text-base mb-2">
            Name
            <input
              type="text"
              name="name"
              value={members[step - 1].name}
              onChange={handleChange}
              className="mt-1 p-3 rounded-lg border-none outline-none bg-white bg-opacity-90 focus:bg-opacity-100 transition placeholder:text-gray-500 text-sm"
              required
              placeholder={`Enter member ${memberNum} name`}
            />
          </label>
          <label className="flex flex-col font-medium text-[#222] text-base mb-2">
            Email
            <input
              type="email"
              name="email"
              value={members[step - 1].email}
              onChange={handleChange}
              className="mt-1 p-3 rounded-lg border-none outline-none bg-white bg-opacity-90 focus:bg-opacity-100 transition placeholder:text-gray-500 text-sm"
              required
              placeholder={`Enter member ${memberNum} email`}
            />
          </label>
          <label className="flex flex-col font-medium text-[#222] text-base mb-2">
            Contact Number
            <input
              type="tel"
              name="contact"
              value={members[step - 1].contact}
              onChange={handleChange}
              className="mt-1 p-3 rounded-lg border-none outline-none bg-white bg-opacity-90 focus:bg-opacity-100 transition placeholder:text-gray-500 text-sm"
              required
              placeholder={`Enter member ${memberNum} contact number`}
            />
          </label>
          <label className="flex flex-col font-medium text-[#222] text-base mb-2">
            Faculty
            <input
              type="text"
              name="faculty"
              value={members[step - 1].faculty}
              onChange={handleChange}
              className="mt-1 p-3 rounded-lg border-none outline-none bg-white bg-opacity-90 focus:bg-opacity-100 transition placeholder:text-gray-500 text-sm"
              required
              placeholder={`Enter member ${memberNum} faculty`}
            />
          </label>
          <label className="flex flex-col font-medium text-[#222] text-base mb-2">
            Batch
            <input
              type="text"
              name="batch"
              value={members[step - 1].batch}
              onChange={handleChange}
              className="mt-1 p-3 rounded-lg border-none outline-none bg-white bg-opacity-90 focus:bg-opacity-100 transition placeholder:text-gray-500 text-sm"
              required
              placeholder={`Enter member ${memberNum} batch`}
            />
          </label>

          <div className="flex justify-between items-center mt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2 rounded-lg font-semibold text-white"
                style={{ backgroundColor: "#650E17" }}
              >
                Previous
              </button>
            )}

            {/* Show only Next for steps 1 and 2 */}
            {step < MIN_MEMBERS && (
              <button
                type="submit"
                className="ml-auto px-6 py-2 rounded-lg font-semibold text-white"
                style={{ backgroundColor: "#650E17" }}
                onClick={handleNext}
              >
                Next
              </button>
            )}

            {/* From step 3 to 4: Show both Register and Next */}
            {step >= MIN_MEMBERS && step < MAX_MEMBERS && (
              <>
                <button
                  type="button"
                  className="px-6 py-2 rounded-lg font-semibold text-white"
                  style={{ backgroundColor: "#650E17" }}
                  onClick={handleSubmit}
                >
                  Register
                </button>
                <button
                  type="submit"
                  className="ml-2 px-6 py-2 rounded-lg font-semibold text-white"
                  style={{ backgroundColor: "#650E17" }}
                  onClick={handleNext}
                >
                  Next
                </button>
              </>
            )}

            {/* Final step: Only Register */}
            {step === MAX_MEMBERS && (
              <button
                type="button"
                className="px-6 py-2 rounded-lg font-semibold text-white"
                style={{ backgroundColor: "#650E17" }}
                onClick={handleSubmit}
              >
                Register
              </button>
            )}
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

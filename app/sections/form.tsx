"use client";
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

function FormSection() {
  const MIN_MEMBERS = 3;
  const MAX_MEMBERS = 5;

  const [step, setStep] = useState(1);
  const [teamName, setTeamName] = useState(""); 
  const [members, setMembers] = useState(
    Array(MIN_MEMBERS).fill({
      name: "",
      email: "",
      contact: "",
      faculty: "",
      batch: "",
    })
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMembers((prev) =>
      prev.map((m, idx) => (idx === step - 1 ? { ...m, [name]: value } : m))
    );
  };

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

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

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
        teamName,
        members: filledMembers,
        timestamp: new Date(),
      });
      alert("Registration successful!");
      setStep(1);
      setTeamName("");
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

  const memberNum = step.toString().padStart(2, "0");

  return (
    <div id="register" className="flex items-center justify-center bg-[#E6DBCE] px-4 py-8 my-20">
      <div className="w-full max-w-6xl bg-[#E6DBCE] rounded-[40px] overflow-hidden flex flex-col md:flex-row">
      
      {/* Left Illustration */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <img
        src="/lady red.png"
        alt="Line Art Face"
        className="object-contain max-h-[500px] w-full"
        />
      </div>

      {/* Right Form */}
      <div className="relative md:w-1/2 w-full flex flex-col justify-center p-8">
        
        {/* Vertical Badge */}
        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
        <div className="bg-[#650E17] text-white px-3 py-2 text-sm font-bold tracking-wide rounded-l-lg [writing-mode:vertical-rl] [text-orientation:mixed]">
          #Register_Now
        </div>
        </div>

        <form
        onSubmit={step === MAX_MEMBERS ? handleSubmit : handleNext}
        className="flex flex-col gap-4"
        >
        <h2 className="text-2xl font-bold text-[#222] mb-2 text-center">
          Member {memberNum}
        </h2>

        <label className="font-semibold text-[#222] text-sm md:text-base">
          Team Name
          <input
          type="text"
          name="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Enter team name"
          required
          className="mt-1 w-full px-4 py-2 rounded-md bg-white bg-opacity-90 focus:bg-opacity-100 border-none outline-none text-sm"
          />
        </label>

        <label className="font-semibold text-[#222] text-sm md:text-base">
          Name
          <input
          type="text"
          name="name"
          value={members[step - 1].name}
          onChange={handleChange}
          placeholder="Enter name"
          required
          className="mt-1 w-full px-4 py-2 rounded-md bg-white bg-opacity-90 focus:bg-opacity-100 border-none outline-none text-sm"
          />
        </label>

        <label className="font-semibold text-[#222] text-sm md:text-base">
          Email
          <input
          type="email"
          name="email"
          value={members[step - 1].email}
          onChange={handleChange}
          placeholder="Enter email"
          required
          className="mt-1 w-full px-4 py-2 rounded-md bg-white bg-opacity-90 focus:bg-opacity-100 border-none outline-none text-sm"
          />
        </label>

        <label className="font-semibold text-[#222] text-sm md:text-base">
          Contact
          <input
          type="tel"
          name="contact"
          value={members[step - 1].contact}
          onChange={handleChange}
          placeholder="Enter contact number"
          required
          className="mt-1 w-full px-4 py-2 rounded-md bg-white bg-opacity-90 focus:bg-opacity-100 border-none outline-none text-sm"
          />
        </label>

        <label className="font-semibold text-[#222] text-sm md:text-base">
          Faculty
          <input
          type="text"
          name="faculty"
          value={members[step - 1].faculty}
          onChange={handleChange}
          placeholder="Enter faculty"
          required
          className="mt-1 w-full px-4 py-2 rounded-md bg-white bg-opacity-90 focus:bg-opacity-100 border-none outline-none text-sm"
          />
        </label>

        <label className="font-semibold text-[#222] text-sm md:text-base">
          Batch
          <input
          type="text"
          name="batch"
          value={members[step - 1].batch}
          onChange={handleChange}
          placeholder="Enter batch"
          required
          className="mt-1 w-full px-4 py-2 rounded-md bg-white bg-opacity-90 focus:bg-opacity-100 border-none outline-none text-sm"
          />
        </label>

        {/* Buttons */}
        <div className="flex justify-between pt-4">
          {step > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500"
          >
            Previous
          </button>
          )}
          <button
          type="submit"
          className="ml-auto px-4 py-2 rounded-md bg-[#650E17] text-white hover:bg-[#8A1E29]"
          >
          {step === MAX_MEMBERS ? "Submit" : "Next"}
          </button>
        </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default FormSection;

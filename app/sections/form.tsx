"use client";
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

function FormSection() {
  const MIN_MEMBERS = 3;
  const MAX_MEMBERS = 5;

  const [step, setStep] = useState(1);
  const [teamName, setTeamName] = useState("");
  const [teamNameLocked, setTeamNameLocked] = useState(false);
  const [members, setMembers] = useState(
    Array(MIN_MEMBERS).fill({
      name: "",
      email: "",
      contact: "",
      faculty: "",
      batch: "",
    })
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [direction, setDirection] = useState(0);
  const [teamSize, setTeamSize] = useState<number | null>(null);

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

    if (step === 1 && teamName.trim() && !teamNameLocked) {
      setTeamNameLocked(true);
    }

    if (step < (teamSize || MAX_MEMBERS)) {
      if (step === members.length) {
        setMembers((prev) => [
          ...prev,
          { name: "", email: "", contact: "", faculty: "", batch: "" },
        ]);
      }
      setDirection(1);
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const handleTeamSizeSelect = (size: number) => {
    setTeamSize(size);
    if (size < members.length) {
      setMembers(members.slice(0, size));
    } else if (size > members.length) {
      const newMembers = [...members];
      while (newMembers.length < size) {
        newMembers.push({ name: "", email: "", contact: "", faculty: "", batch: "" });
      }
      setMembers(newMembers);
    }
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
    if (!teamSize || teamSize < MIN_MEMBERS || teamSize > MAX_MEMBERS) {
      alert("Please select a valid team size (3-5 members).");
      return;
    }

    setIsSubmitting(true);
    const filledMembers = members.slice(0, teamSize);
    
    try {
      await addDoc(collection(db, "registrations"), {
        teamName,
        members: filledMembers,
        teamSize,
        timestamp: new Date(),
      });
      
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Registration successful!");
        setStep(1);
        setTeamName("");
        setTeamNameLocked(false);
        setTeamSize(null);
        setMembers(
          Array(MIN_MEMBERS).fill({
            name: "",
            email: "",
            contact: "",
            faculty: "",
            batch: "",
          })
        );
      }, 1500);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert(`Error submitting form: ${error.message}\n\nCheck Firestore rules.`);
    }
  };

  const memberNum = step.toString().padStart(2, "0");

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="register" className="relative overflow-hidden bg-gradient-to-br from-[#F8F1E9] to-[#E6DBCE] px-4 py-16 md:py-24">
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#650E17] opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#650E17] opacity-5 rounded-full translate-x-32 translate-y-32"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white bg-opacity-80 backdrop-blur-sm rounded-[40px] overflow-hidden shadow-xl flex flex-col md:flex-row"
        >
          {/* Left Illustration */}
          <div className="md:w-1/2 w-full flex items-center justify-center p-8 md:p-12 bg-gradient-to-br from-[#650E17] to-[#8A1E29]">
            <motion.img
              src="/lady red.png"
              alt="Line Art Face"
              className="object-contain max-h-[400px] w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
            <div className="absolute bottom-8 left-8 text-white text-sm font-medium">
              <span className="block">Member {memberNum} of {teamSize || MAX_MEMBERS}</span>
              <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mt-1">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(step / (teamSize || MAX_MEMBERS)) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative md:w-1/2 w-full flex flex-col justify-center p-8 md:p-12">
            {/* Vertical Badge - Mobile */}
            <div className="md:hidden absolute top-0 right-4 transform -translate-y-1/2 z-10">
              <div className="bg-[#650E17] text-white px-4 py-2 text-sm font-bold tracking-wide rounded-b-lg">
                #Register_Now
              </div>
            </div>

            {/* Vertical Badge - Desktop */}
            <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
              <div className="bg-[#650E17] text-white px-3 py-2 text-sm font-bold tracking-wide rounded-l-lg [writing-mode:vertical-rl] [text-orientation:mixed]">
                #Register_Now
              </div>
            </div>

            <form
              onSubmit={step === (teamSize || MAX_MEMBERS) ? handleSubmit : handleNext}
              className="flex flex-col gap-4"
            >
              <h2 className="text-3xl font-bold text-[#650E17] mb-1 text-center font-serif">
                Team Registration
              </h2>
              
              {/* Team Name Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Name
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={teamName}
                  onChange={(e) => !teamNameLocked && setTeamName(e.target.value)}
                  placeholder="Enter your team name"
                  required
                  disabled={teamNameLocked}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    teamNameLocked 
                      ? 'bg-gray-100 border-gray-200 text-gray-600' 
                      : 'border-gray-300 focus:ring-2 focus:ring-[#650E17] focus:border-[#650E17]'
                  } transition-all`}
                />
                {teamNameLocked && (
                  <button 
                    type="button"
                    onClick={() => setTeamNameLocked(false)}
                    className="absolute right-2 top-9 text-xs text-[#650E17] font-medium hover:underline"
                  >
                    Edit
                  </button>
                )}
              </div>

              {/* Team Size Selection - Now more prominent */}
              {step === 1 && !teamNameLocked && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How many members in your team?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[3, 4, 5].map((size) => (
                      <motion.button
                        key={size}
                        type="button"
                        onClick={() => handleTeamSizeSelect(size)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`px-4 py-4 rounded-lg border-2 transition-all flex flex-col items-center justify-center ${
                          teamSize === size
                            ? 'bg-[#650E17] text-white border-[#650E17] shadow-md'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#650E17]'
                        }`}
                      >
                        <span className="text-2xl font-bold text-red-950">{size}</span>
                        <span className="text-xs mt-1 text-red-950">Members</span>
                      </motion.button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Minimum {MIN_MEMBERS}, maximum {MAX_MEMBERS} members
                  </p>
                </div>
              )}

              {/* Member Form - Only shown after team size is selected */}
              {teamSize && (
                <div className="relative h-[380px] overflow-hidden">
                  <AnimatePresence custom={direction} mode="popLayout">
                    <motion.div
                      key={step}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="absolute inset-0"
                    >
                      <div className="space-y-4">
                        <p className="text-center text-gray-600 mb-2 text-sm">
                          Member {memberNum} Details
                        </p>

                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                               Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={members[step - 1].name}
                              onChange={handleChange}
                              placeholder="Enter member's name"
                              required
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#650E17] focus:border-[#650E17] transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Student Email 
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={members[step - 1].email}
                              onChange={handleChange}
                              placeholder="Enter nsbm student email"
                              required
                              pattern=".+@students\.nsbm\.ac\.lk$"
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#650E17] focus:border-[#650E17] transition-all"
                            />
                          
                          </div>

                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Contact Number
                            </label>
                            <input
                              type="tel"
                              name="contact"
                              value={members[step - 1].contact}
                              onChange={handleChange}
                              placeholder="Enter phone number"
                              required
                              inputMode="tel"
                              pattern="[0-9]{10,15}"
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#650E17] focus:border-[#650E17] transition-all"
                            />
                            </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Faculty
                              </label>
                              <input
                                type="text"
                                name="faculty"
                                value={members[step - 1].faculty}
                                onChange={handleChange}
                                placeholder="e.g. FOC"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#650E17] focus:border-[#650E17] transition-all"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Batch
                              </label>
                              <input
                                type="text"
                                name="batch"
                                value={members[step - 1].batch}
                                onChange={handleChange}
                                placeholder="e.g. 23.1"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#650E17] focus:border-[#650E17] transition-all"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                {step > 1 && (
                  <motion.button
                    type="button"
                    onClick={handlePrev}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6B7280] to-[#4B5563] text-white hover:from-[#4B5563] hover:to-[#374151] transition-all shadow-md font-medium flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Previous
                  </motion.button>
                )}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`ml-auto px-6 py-3 rounded-lg text-white font-medium transition-all shadow-md flex items-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gradient-to-r from-[#8A1E29] to-[#650E17] cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#650E17] to-[#8A1E29] hover:from-[#8A1E29] hover:to-[#650E17]'
                  }`}
                  disabled={isSubmitting || (step === 1 && !teamSize)}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : step === (teamSize || MAX_MEMBERS) ? (
                    <>
                      Submit Team
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Next Member
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FormSection;
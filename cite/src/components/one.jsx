import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { MdOutlineWarningAmber } from "react-icons/md";

const One = () => {
  const [one, setOne] = useState("");
  const [year, setYear] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);

  const generate = () => {
    if (one && year) {
      setShowModal(true);
    } else {
      setShowInvalid(true);
    }
  };

  const closeInvalid = () => setShowInvalid(false);
  const closeModal = () => setShowModal(false);

  const copyToClipboard = () => {
    const citation = `${one}, ${year}`;
    navigator.clipboard.writeText(citation);
    alert("Citation copied to clipboard!");
  };

  return (
    <div className="main font-[Poppins] px-4 py-10 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="form bg-white shadow-2xl rounded-xl p-6 md:p-8 w-full max-w-md transition-all">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-gray-800 text-center">Citation Generator</h1>
        
        <div className="mb-6">
          <label htmlFor="authorName" className="block text-gray-600 mb-2 text-sm md:text-base">Enter Author Name:</label>
          <input
            type="text"
            id="authorName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., John Doe"
            onChange={(e) => setOne(e.target.value)}
            value={one}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="year" className="block text-gray-600 mb-2 text-sm md:text-base">Enter Publication Year:</label>
          <input
            type="number"
            id="year"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 2023"
            onChange={(e) => setYear(e.target.value)}
            value={year}
          />
        </div>

        <div className="mb-8">
          <label htmlFor="citationStyle" className="block text-gray-600 mb-2 text-sm md:text-base">Select the Citation Style</label>
          <select
            id="citationStyle"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select the Citation Style</option>
            <option value="APA">APA</option>
            <option value="Harvard">Harvard</option>
          </select>
        </div>

        <div className="text-center">
          <button
            onClick={generate}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all text-sm md:text-base">
            Generate Citation
          </button>
        </div>
      </div>

      {/* Modal for Citation */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 md:p-8 w-full max-w-md shadow-2xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Generated Citation</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">{`${one}, ${year}`}</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button
                onClick={copyToClipboard}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all text-sm md:text-base">
                Copy to Clipboard
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-all text-sm md:text-base">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Invalid Entry */}
      {showInvalid && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 md:p-8 w-full max-w-sm shadow-2xl relative">
            <div className="flex flex-col items-center">
              <MdOutlineWarningAmber className="text-yellow-500 text-6xl mb-4" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Incomplete Form</h2>
              <p className="text-gray-600 text-center text-sm md:text-base">
                Please fill out all fields before generating the citation.
              </p>
            </div>
            
            <button
              onClick={closeInvalid}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-all">
              <IoClose className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default One;

import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { MdOutlineWarningAmber } from "react-icons/md";

const Four = () => {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [year, setYear] = useState("");
  const [sel, setSel] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);
  const [res, setRes] = useState("");

  const generate = () => {
    if (one && year && sel && two) {
      const citation = sel === "APA"
        ? `(${one} et al., ${year})`
        : `(${one} et al., ${year})`;
      setRes(citation);
      setShowModal(true);
    } else {
      setShowInvalid(true);
    }
  };

  const copyToClipboard = () => {
    let citation = "";
    if (one && year && sel && two && three) {
      citation = `(${one} et al., ${year})`;
    }
    navigator.clipboard.writeText(citation);
    alert("Citation copied to clipboard!");
  };

  return (
    <div className="font-[Poppins] px-4 py-8 min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-2xl">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Citation Generator</h1>

        {/* Input Fields */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-gray-600 mb-1">Author Name 1</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. John Doe"
              value={one}
              onChange={(e) => setOne(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Author Name 2</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Jane Smith"
              value={two}
              onChange={(e) => setTwo(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Author Name 3</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Optional"
              value={three}
              onChange={(e) => setThree(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Author Name 4</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Optional"
              value={four}
              onChange={(e) => setFour(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-gray-600 mb-1">Publication Year</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 2023"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-600 mb-1">Citation Style</label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={sel}
            onChange={(e) => setSel(e.target.value)}
          >
            <option value="">Select Citation Style</option>
            <option value="APA">APA</option>
            <option value="Harvard">Harvard</option>
          </select>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={generate}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all">
            Generate Citation
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Generated Citation</h2>
            <p className="text-center text-gray-700 mb-6">{res}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={copyToClipboard}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg">
                Copy
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Invalid Modal */}
      {showInvalid && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl relative">
            <div className="flex flex-col items-center text-center">
              <MdOutlineWarningAmber className="text-yellow-500 text-6xl mb-4" />
              <h2 className="text-xl font-bold text-gray-800 mb-2">Incomplete Form</h2>
              <p className="text-gray-600">Please fill all required fields before generating the citation.</p>
            </div>
            <button
              onClick={() => setShowInvalid(false)}
              className="absolute top-4 right-4 text-red-600 hover:text-red-800">
              <IoClose className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Four;

import React, { useState } from 'react';
import Hi from '../imgs/hi.jpg';

const Cite = () => {
  const [count, setCount] = useState("");
  localStorage.setItem("count", count);
  const hello = localStorage.getItem("count");

  let content;

  switch (parseInt(count)) {
    case 1:
      content = (
        <div className="form">
          <FormField label="Enter the name of the author:" />
          <FormField label="Enter the year of publication:" />
          <FormField label="Enter the title of the publication:" />
          <FormField label="Enter the name of the author:" />
          <SubmitButton />
        </div>
      );
      break;
    case 2:
      content = (
        <div className="form">
          <FormField label="Enter the name of the author:" />
          <FormField label="Enter the name of the author:" />
          <FormField label="Enter the year of publication:" />
          <FormField label="Enter the title of the publication:" />
          <FormField label="Enter the name of the author:" />
          <SubmitButton />
        </div>
      );
      break;
    case 3:
      content = (
        <div className="form">
          <FormField label="Enter the name of the author:" />
          <FormField label="Enter the name of the author:" />
          <FormField label="Enter the name of the author:" />
          <FormField label="Enter the year of publication:" />
          <FormField label="Enter the title of the publication:" />
          <FormField label="Enter the name of the author:" />
          <SubmitButton />
        </div>
      );
      break;
    case 4:
      content = (
        <div className="form">
          <FormField label="Enter the name of the author:" />
          <FormField label="Enter the year of publication:" />
          <FormField label="Enter the title of the publication:" />
          <FormField label="Enter the name of the author:" />
          <SubmitButton />
        </div>
      );
      break;
    case 0:
      content = <h1 className="text-red-600">Enter a number</h1>;
      break;
    default:
      content = null;
  }

  return (
    <div className="main bg-blue-700 h-[100vh] font-[Poppins] text-white">
      <div className="flex">
        <div className="img">
          <img
            src={Hi}
            alt="Welcome"
            className="h-[100vh] rounded-tr-[50px] rounded-br-[50px]"
          />
        </div>
        <div className="c px-[80px] py-[80px] space-y-[2em]">
          <div className="sub">
            <h1 className="text-3xl font-bold">WELCOME TO CITATION HUB</h1>
            <p className="text-lg">Over here, we make citation easy and fast</p>
          </div>
          <div className="form flex flex-col space-y-4">
            <label htmlFor="authorCount">Enter the number of Authors</label>
            <div className="inp">
              <input
                type="number"
                id="authorCount"
                className="outline-none bg-transparent border border-white rounded-tr-[10px] rounded-bl-[10px] px-4 py-2"
                onChange={(e) => setCount(e.target.value)}
                value={hello}
              />
            </div>
          </div>
          <div className="s">{content}</div>
        </div>
      </div>
    </div>
  );
};

const FormField = ({ label }) => (
  <div className="form-field">
    <label htmlFor="inputField" className="block mb-2">
      {label}
    </label>
    <div className="inp">
      <input
        type="text"
        id="inputField"
        className="outline-none bg-transparent border border-white rounded-tr-[10px] rounded-bl-[10px] px-4 py-2"
      />
    </div>
  </div>
);

const SubmitButton = () => (
  <div className="sub mt-4">
    <button className="bg-white text-blue-700 font-bold px-6 py-2 rounded-tr-[10px] rounded-bl-[10px] hover:bg-gray-200 transition duration-300">
      SUBMIT
    </button>
  </div>
);

export default Cite;

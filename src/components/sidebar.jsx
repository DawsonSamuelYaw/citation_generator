import React from 'react';
import { GrGroup } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi2";
import { PiPersonArmsSpreadDuotone } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white h-full w-[200px] font-[Poppins] fixed">
      <div className="px-4 py-6">
        <h1 className="text-xl font-bold mb-8">Citation Hub</h1>
        <ul className="space-y-4">
          <li className="flex items-center hover:bg-gray-700 hover:text-blue-400 rounded-md px-3 py-2 transition-all">
            <PiPersonArmsSpreadDuotone className="text-lg" />
            <Link to="/one" className="ml-3 text-sm">One Author</Link>
          </li>
          <li className="flex items-center hover:bg-gray-700 hover:text-blue-400 rounded-md px-3 py-2 transition-all">
            <RiGroupLine className="text-lg" />
            <Link to="/two" className="ml-3 text-sm">Two Authors</Link>
          </li>
          <li className="flex items-center hover:bg-gray-700 hover:text-blue-400 rounded-md px-3 py-2 transition-all">
            <GrGroup className="text-lg" />
            <Link to="/three" className="ml-3 text-sm">Three Authors</Link>
          </li>
          <li className="flex items-center hover:bg-gray-700 hover:text-blue-400 rounded-md px-3 py-2 transition-all">
            <HiUserGroup className="text-lg" />
            <Link to="/four" className="ml-3 text-sm">Four Authors</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default sidebar;

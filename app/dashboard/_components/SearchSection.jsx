import React from 'react';
import { Search } from "lucide-react";
import Link from 'next/link';

function SearchSection() {
  const List = ["software", "laptop", "new supplier", "new item"];

  return (
    <div className="flex justify-center flex-col items-center text-white p-10 bg-primary w-full">
      {/* Search Bar */}
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex gap-2 items-center p-2 border rounded-md bg-white">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full outline-none text-black"
          />
        </div>
      </div>

      {/* Circles with Text */}
      <div className="mt-8 flex justify-around w-full max-w-md">
        {List.map((item, index) => (
          item === "new item" ? (
            <Link key={index} href="/dashboard/newitem">
              <div
                className="flex justify-center items-center h-20 w-20 rounded-full bg-white text-primary font-bold text-center cursor-pointer"
              >
                {item}
              </div>
            </Link>
          ) : (
            <div
              key={index}
              className="flex justify-center items-center h-20 w-20 rounded-full bg-white text-primary font-bold text-center"
            >
              {item}
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default SearchSection;

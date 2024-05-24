import { Book, SearchIcon } from "lucide-react";
import React from "react";

function Header() {
  return (
    <header className=" h-20 flex justify-between items-center px-8 fixed w-full bg-black shadow-md shadow-slate-800">
      <h1 className=" text-4xl font-light flex items-center gap-2 cursor-pointer">
        {" "}
        <Book size={30} color="lightgreen" /> Your Notes
      </h1>
      <div className=" md:w-1/4 flex items-center gap-2 border-zinc-700 border py-2 px-4 rounded-3xl">
        <input
          type="text"
          name="query"
          id="query"
          className=" bg-transparent text-white flex-1 outline-none"
        />
        <SearchIcon color="gray" />
      </div>
    </header>
  );
}

export default Header;

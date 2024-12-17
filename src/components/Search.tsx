import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

type SearchProps = {
  onSearch: (city: string) => void;
};

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-md mx-auto mb-6 bg-stone-800 rounded-lg shadow-lg"
    >
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
      <input
        type="text"
        placeholder="Enter city name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-12 pl-10 pr-4 rounded-lg bg-transparent border-b-2 border-zinc-500 focus:border-zinc-300 outline-none text-zinc-50 placeholder-zinc-400"
      />
    </form>
  );
};

export default Search;

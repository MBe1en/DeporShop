import { IoFilter } from "react-icons/io5";

export function ButtonBurger({ onClick }) {
  return (
      <button
        onClick={onClick}
        className="text-amber-300 text-lg bg-black rounded-lg p-3 hover:text-amber-300 focus:outline-none"
      >
        <IoFilter />
      </button>

  );
}

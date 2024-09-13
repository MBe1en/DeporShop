
export function Button({ children, onClick }) {
  return (
    <button
      className="flex w-full justify-center rounded-sm bg-amber-300 tracking-wider px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900  shadow-md hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}


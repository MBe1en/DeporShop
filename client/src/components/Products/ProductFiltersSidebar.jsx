import React, { useState } from "react";
import { useProducts } from "../../context/ProductContext";

const ProductFiltersSidebar = () => {
  const { setFilters } = useProducts();

  //---- Handle filter changes ----//

  // Category
  const categories = ["Indumentaria", "Calzado", "Accesorios"];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoriesChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  console.log(selectedCategories);

  // Price
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(10000);

  // Gender
  const [gender, setGender] = useState("");

  const handlePriceMinChange = (e) => setPriceMin(e.target.value);
  const handlePriceMaxChange = (e) => setPriceMax(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);

  //---- Handle submit ----//

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update filters in the context
    setFilters({
      //   category,
      categories: selectedCategories,
      priceMin: parseFloat(priceMin),
      priceMax: parseFloat(priceMax),
      gender,
    });
  };

  return (
    <div className="w-full bg-black rounded-2xl shadow-2xl shadow-slate-800 text-slate-100 mt-10 p-6">
      {/* Filter by Category */}
      <div className="p-3 pt-4 pb-2 mb-4 border border-slate-400 rounded-md">
        <label for="category" className="text-md dark:text-gray-300">
          CATEGORY
        </label>
        {categories.map((category) => (
          <div key={category} className="mt-2 mb-2 text-sm">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoriesChange(category)}
                className="form-checkbox h-4 w-5 ml-2 accent-amber-400 checked  hover:cursor-pointer"
              />
              <span className="ml-2">{category}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Filter by Price Range */}
      <div className="mb-6">
        <label htmlFor="priceMin" className="block mb-2">
          Price Range
        </label>
        <div className="flex space-x-4">
          <input
            type="number"
            id="priceMin"
            value={priceMin}
            onChange={handlePriceMinChange}
            placeholder="Min Price"
            className="w-1/2 bg-black text-amber-300 border border-yellow-500 p-2"
          />
          <input
            type="number"
            id="priceMax"
            value={priceMax}
            onChange={handlePriceMaxChange}
            placeholder="Max Price"
            className="w-1/2 bg-black text-amber-300 border border-yellow-500 p-2"
          />
        </div>
      </div>

      {/* Filter by Gender */}
      <div className="mt-3 mb-6">
        <select
          id="gender"
          value={gender}
          onChange={handleGenderChange}
          className="w-full bg-black text-amber-300 border border-yellow-500 p-2"
        >
          <option value="">Gender</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-yellow-500 text-black p-2 hover:bg-yellow-400 transition duration-200"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default ProductFiltersSidebar;

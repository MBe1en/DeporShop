import React, { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import "../../../src/index.css";

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
  const [priceMax, setPriceMax] = useState(1000000);

  const handlePriceMinChange = (e) => setPriceMin(e.target.value);
  const handlePriceMaxChange = (e) => setPriceMax(e.target.value);

  // Gender
  const genders = ["Hombre", "Mujer", "Unisex"];
  const [selectedGenders, setSelectedGenders] = useState([]);

  const handleGendersChange = (gender) => {
    setSelectedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((c) => c !== gender)
        : [...prev, gender]
    );
  };

  // const handleGenderChange = (e) => setGender(e.target.value);

  //---- Handle submit ----//

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update filters in the context
    setFilters({
      categories: selectedCategories,
      priceMin: priceMin,
      priceMax: priceMax,
      genders: selectedGenders,
    });
  };

  return (
    <div className="w-full bg-black rounded-2xl shadow-2xl shadow-slate-800 text-slate-100 mt-14 p-3 md:p-6">
      <div className="p-2 md:p-3 md:pt-4 pb-2 mb-4 border border-slate-400 rounded-md">
        <label
          for="orderby"
          className="text-md md:text-lg tracking-[.25em]  dark:text-gray-300"
        >
          ORDER BY
        </label>
        <select className="w-full m-2 p-3 bg-black text-slate-100 border-slate-400">
          <option value="PrecioASC">Precio ASC</option>
          <option value="PrecioDESC">Precio DESC</option>
        </select>
      </div>

      {/* Filter by Category */}

      <div className="p-2 md:p-3 md:pt-4 pb-2 mb-4 border border-slate-400 rounded-md">
        <label
          for="category"
          className="text-md md:text-lg tracking-[.25em]  dark:text-gray-300"
        >
          CATEGORY
        </label>
        {categories.map((category) => (
          <div
            key={category}
            className="mt-2 mb-2 text-sm md:text-md lg:text-lg tracking-wider"
          >
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoriesChange(category)}
                className="form-checkbox md:h-4 md:w-5 md:ml-2 accent-amber-400 checked hover:cursor-pointer"
              />
              <span className="ml-2">{category}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Filter by Price Range */}
      <div className="p-2 md:p-3 md:pt-4 pb-2 mb-4 border border-slate-400 rounded-md">
        <label
          for="priceRange"
          className="text-md md:text-lg tracking-[.25em] dark:text-gray-300"
        >
          PRICE RANGE
        </label>
        <div className="flex space-x-4">
          {/* Price Min and Max Inputs */}
          <div className="w-full flex flex-col md:flex-row items-center my-3">
            <div className="w-full space-x-2 mx-2 my-1 md:my-0">
              <span className="text-lg">$</span>
              <input
                type="number"
                value={priceMin}
                onChange={handlePriceMinChange}
                className="bg-black border border-slate-400 rounded-md p-2 w-10/12"
                min="0"
                max={priceMax}
                step="1000"
              />
            </div>
            <div className="w-full space-x-2 mx-2 my-1 md:my-0">
              <span className="text-lg">$</span>
              <input
                type="number"
                value={priceMax}
                onChange={handlePriceMaxChange}
                className="bg-black border border-slate-400 rounded-md p-2 w-10/12"
                min={priceMin}
                max="1000000"
                step="1000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter by Gender */}
      <div className="p-2 md:p-3 md:pt-4 pb-2 mb-4 border border-slate-400 rounded-md">
        <label
          for="gender"
          className="text-md md:text-lg tracking-[.25em]  dark:text-gray-300"
        >
          GENDER
        </label>
        {genders.map((gender) => (
          <div
            key={gender}
            className="mt-2 mb-2 text-sm md:text-md lg:text-lg tracking-wider"
          >
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value={gender}
                checked={selectedGenders.includes(gender)}
                onChange={() => handleGendersChange(gender)}
                className="form-checkbox md:h-4 md:w-5 md:ml-2 accent-amber-400 checked hover:cursor-pointer"
              />
              <span className="ml-2">{gender}</span>
            </label>
          </div>
        ))}
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

import React, { useEffect, useState } from "react";
import { useGetCategories } from "../../hooks/useCategory.jsx";
import "../../../src/index.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const ProductFiltersSidebar = () => {
  const [orderBy, setOrderBy] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1000000);
  const [selectedGenders, setSelectedGenders] = useState([]);

  const { isPending, isError, data, error } = useGetCategories();
  const categories = Array.isArray(data?.data) ? data.data : [];

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  let filterQuery = ``; //`orderBy=${orderBy}&`;

  useEffect(() => {
    const categoryID = searchParams.get("category") || "";
    setSelectedCategories([...selectedCategories, categoryID]);
  }, []);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      filterQuery += `category=${selectedCategories.join(",")}&`;
    }

    filterQuery += `priceMin=${priceMin}&priceMax=${priceMax}&`;

    if (selectedGenders.length > 0) {
      filterQuery += `gender=${selectedGenders.join(",")}&`;
    }

    filterQuery = filterQuery.slice(0, -1);

    navigate(`/product?${filterQuery}`);
  }, [orderBy, selectedCategories, priceMin, priceMax, selectedGenders]);

  //---- Handle filter changes ----//

  //Order by
  // const handleOrderByChange = (orderBy) => {
  //   setOrderBy(orderBy);
  // };

  // Categories
  const handleCategoriesChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category._id)
        ? prev.filter((c) => c !== category._id)
        : [...prev, category._id]
    );
  };

  // Price
  const handlePriceMinChange = (e) => setPriceMin(e.target.value);
  const handlePriceMaxChange = (e) => setPriceMax(e.target.value);

  // Gender
  const genders = ["Hombre", "Mujer", "Unisex"];
  const handleGendersChange = (gender) => {
    setSelectedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((c) => c !== gender)
        : [...prev, gender]
    );
  };

  return (
    <div className="w-full bg-black rounded-2xl shadow-[0px_15px_15px_-5px_rgba(30,41,59,0.9)] shadow-slate-800 text-slate-100 mt-10 p-2 md:p-4 ">
      <div className="p-2 md:px-3 md:py-1 mb-3 border border-slate-400 rounded-md">
        <label
          htmlFor="orderby"
          className="text-sm md:text-md tracking-[.25em]  dark:text-gray-300"
        >
          ORDER BY
        </label>
        <select
          className="w-11/12 m-2 mb-3 p-2 bg-black text-slate-100 text-sm border border-slate-400  rounded-md"
          name="orderBy"
          defaultValue={"name"}
          onChange={(e) => handleOrderByChange(e.target.value)}
        >
          <option value="priceASC">Precio ASC</option>
          <option value="priceDESC">Precio DESC</option>
          <option value="name">Name</option>
        </select>
      </div>

      {/* Filter by Category */}

      <div className="p-2 md:px-3 md:py-1 md:pt-2 mb-3 border border-slate-400 rounded-md">
        <label
          htmlFor="category"
          className="text-sm md:text-md tracking-[.25em]  dark:text-gray-300"
        >
          CATEGORY
        </label>
        {categories.map((category) => (
          <div
            key={category._id}
            className="mt-2 mb-2 text-sm md:text-md tracking-wider"
          >
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value={category._id}
                checked={selectedCategories.includes(category._id)}
                onChange={() => handleCategoriesChange(category)}
                className="form-checkbox md:h-4 md:w-5 md:ml-2 accent-amber-400 checked:bg-amber-400 checked:border-amber-400 hover:cursor-pointer"
              />
              <span className="ml-2">{category.name}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Filter by Price Range */}
      <div className="p-2 md:px-3 md:py-1 mb-3 border border-slate-400 rounded-md">
        <label
          htmlFor="priceRange"
          className="text-sm md:text-md  tracking-[.25em] dark:text-gray-300"
        >
          PRICE RANGE
        </label>
        <div className="flex space-x-4">
          {/* Price Min and Max Inputs */}
          <div className="w-full flex flex-col md:flex-row items-center  my-3">
            <div className="w-full space-x-1 mt-1 md:my-0">
              <span className="text-sm md:text-md ">$</span>
              <input
                type="number"
                value={priceMin}
                onChange={handlePriceMinChange}
                className="bg-black border border-slate-400 rounded-md p-1 w-10/12 text-xs md:text-sm "
                min="0"
                max={priceMax}
                step="1000"
              />
            </div>
            <div className="w-full space-x-1 mt-1 md:my-0">
              <span className="text-sm md:text-md ">$</span>
              <input
                type="number"
                value={priceMax}
                onChange={handlePriceMaxChange}
                className="bg-black border border-slate-400 rounded-md p-1 w-10/12 text-xs md:text-sm "
                min={priceMin}
                max="1000000"
                step="1000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter by Gender */}
      <div className="p-2 md:px-3 md:py-1 mb-3 border border-slate-400 rounded-md">
        <label
          htmlFor="gender"
          className="text-sm md:text-md tracking-[.25em]  dark:text-gray-300"
        >
          GENDER
        </label>
        {genders.map((gender) => (
          <div key={gender} className="mt-2 text-sm md:text-md tracking-wider">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value={gender}
                checked={selectedGenders.includes(gender)}
                onChange={() => handleGendersChange(gender)}
                className="form-checkbox md:h-4 md:w-5 md:ml-2 accent-amber-400 checked:bg-amber-400 checked:border-amber-400 hover:cursor-pointer"
              />
              <span className="ml-2">{gender}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFiltersSidebar;

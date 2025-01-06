import { useState } from "react";
import ProductFiltersSidebar from "../components/Products/ProductFiltersSidebar";
import ProductList from "../components/Products/ProductList";
import { ButtonBurger } from "../components/ui/ButtonBurger";

function ProductsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <div className="block lg:hidden mb-4 absolute top-10 left-2 z-50">
        <ButtonBurger onClick={toggleSidebar} />
      </div>

      {/* Sidebar para pantallas pequeñas */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:hidden absolute top-7 left-0 w-3/5 h-full bg-black bg-opacity-90 z-40 p-2 transition-all duration-300 rounded-r-lg`}
      >
        <ProductFiltersSidebar />
      </div>

      {/* Layout para pantallas grandes */}
      <div className="lg:grid lg:grid-cols-[1fr_4fr] gap-4 lg:ml-6 transition-all duration-300">
        {/* Sidebar para pantallas grandes */}
        <div
          className={"hidden lg:block h-full transition-all duration-300 rounded-r-lg"}
        >
          <ProductFiltersSidebar />
        </div>

        {/* Product List */}
        <div className="w-full lg:w-full">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;

import ProductFiltersSidebar from "../components/Products/ProductFiltersSidebar";
import ProductList from "../components/Products/ProductList";

function ProductsPage() {
  return (
    <div className="flex">
      <div className="w-2/5">
        <ProductFiltersSidebar />
      </div>
      <div className="w-3/4">
        <ProductList />
      </div>
    </div>
  );
}

export default ProductsPage;

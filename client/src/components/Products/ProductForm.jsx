import { useForm } from "react-hook-form";
import { useProducts } from "../../context/ProductContext";
import { Title, Label, Input, Button } from "../ui";

function ProductForm() {
  const { register, handleSubmit } = useForm();
  const { createProduct } = useProducts();
  console.log(createProduct());

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    createProduct(data);
  });

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="border rounded-md shadow-sm shadow-indigo-800 bg-white p-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Title>Create a product</Title>
        <form
          onSubmit={onSubmit}
          className="mt-8 space-y-6"
          data-te-input-wrapper-init
        >
          {/* {authErrors && (
              <span className="text-xs text-orange-500">{authErrors}</span>
            )} */}
          <div>
            <Label htmlFor="brand">Brand</Label>
            <div className="mt-2">
              <Input
                placeholder="Brand"
                {...register("brand")}
                autoComplete="brand"
              />
            </div>

            {/* {errors.brand?.message && (
                <span className="text-xs text-orange-500">
                  {errors.brand?.message}
                </span>
              )} */}
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <div className="mt-2">
              <Input
                placeholder="Category"
                {...register("category")}
                autoComplete="category"
              />
            </div>
            {/* {errors.category?.message && (
                <span className="text-xs text-orange-500">
                  {errors.category?.message}
                </span>
              )} */}
          </div>

          <div>
            <Label htmlFor="subCategory">SubCategory</Label>
            <div className="mt-2">
              <Input
                placeholder="SubCategory"
                {...register("subCategory")}
                autoComplete="subCategory"
              />
            </div>

            {/* {errors.subCategory?.message && (
                <span className="text-xs text-orange-500">
                  {errors.subCategory?.message}
                </span>
              )} */}
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <div className="mt-2">
              <Input
                placeholder="Description"
                {...register("description")}
                autoComplete="description"
              />
            </div>
            {/* {errors.description?.message && (
                <span className="text-xs text-orange-500">
                  {errors.description?.message}
                </span>
              )} */}
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <div className="mt-2">
              <Input
                placeholder="Gender"
                {...register("gender")}
                autoComplete="desgendercription"
              />
            </div>
            {/* {errors.gender?.message && (
                <span className="text-xs text-orange-500">
                  {errors.gender?.message}
                </span>
              )} */}
          </div>

          <div>
            <Label htmlFor="image">Image</Label>
            <div className="mt-2">
              <Input
                placeholder="Image"
                {...register("image")}
                autoComplete="image"
              />
            </div>

            {/* {errors.image?.message && (
                <span className="text-xs text-orange-500">
                  {errors.image?.message}
                </span>
              )} */}
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <div className="mt-2">
              <Input
                placeholder="Name"
                {...register("name")}
                autoComplete="name"
              />
            </div>

            {/* {errors.name?.message && (
                <span className="text-xs text-orange-500">
                  {errors.name?.message}
                </span>
              )} */}
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <div className="mt-2">
              <Input
                placeholder="Price"
                {...register("price")}
                autoComplete="price"
              />
            </div>

            {/* {errors.price?.message && (
                <span className="text-xs text-orange-500">
                  {errors.price?.message}
                </span>
              )} */}
          </div>

          <div>
            <Button>Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;

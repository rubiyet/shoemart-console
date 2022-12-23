import ProductCard from "../products/ProductCard";
import DropDown from "../header/downHeader/DropDown";

export default function TopProducts() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "/shoe1.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "/shoe2.png",
    },
    {
      id: 3,
      name: "Product 3",
      price: 100,
      image: "/shoe3.png",
    },
    {
      id: 4,
      name: "Product 4",
      price: 200,
      image: "/shoe4.png",
    },
    {
      id: 5,
      name: "Product 5",
      price: 100,
      image: "/shoe5.png",
    },
    {
      id: 6,
      name: "Product 6",
      price: 2000,
      image: "/shoe6.png",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3">
        <div className="flex items-center justify-center">
          <DropDown icon={"faBars"} options={["Man", "Women", "Kids"]} />
        </div>
        <div className="flex flex-col items-center space-y-5">
          <span className="text-xl font-bold text-gray-800">TOP PRODUCTS</span>
          <span className="text-3xl font-bold text-gray-800">
            TRENDING THIS WEEK
          </span>
        </div>
        <div className="flex items-center justify-center">
          <DropDown icon={"faBars"} options={["Man", "Women", "Kids"]} />
        </div>
      </div>
      <div className="grid grid-cols-9">
        <div className="col-span-1"></div>
        <div className="col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

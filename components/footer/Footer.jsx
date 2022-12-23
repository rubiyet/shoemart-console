import AboutUs from "./AboutUs";
import ProductsList from "./ProductsList";
import Legals from "./Legals";
import Contacts from "./Contacts";

export default function Footer() {
  return (
    <div className="px-36 mt-20 mb-10 border-t border-gray-200">
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-5">
          <AboutUs />
        </div>
        <div className="col-span-2">
          <ProductsList
            list={["Trending", "My Account", "Vendors", "Brands", "Storefront"]}
          />
        </div>
        <div className="col-span-2">
          <Legals list={["License", "Refund Policy", "About Us", "Contacts"]} />
        </div>
        <div className="col-span-3">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

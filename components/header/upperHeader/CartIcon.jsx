import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function CartIcon({ itemsOfCart }) {
  const handleCart = (e) => {
    e.preventDefault();
    window.location.href = "/cart";
    console.log("Cart");
  };

  return (
    <div className="relative p-1.5">
      <FontAwesomeIcon icon={faShoppingCart} onClick={handleCart} className="text-2xl" />
      <div className="absolute top-0 right-0 bg-orange-600 rounded text-[0.60rem] text-white w-4 flex justify-center">{itemsOfCart}</div>
    </div>
  );
}

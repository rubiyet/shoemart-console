import DropDown from "./downHeader/DropDown";
import NavigationMenu from "./downHeader/NavigationMenu";
import CartIcon from "./upperHeader/CartIcon";
import LogInButton from "./upperHeader/LogInButton";
import Logo from "./upperHeader/Logo";
import SearchBox from "./upperHeader/SearchBox";

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between px-36 h-20 border-b border-gray-200">
        <Logo />
        <SearchBox />
        <div className="flex items-center space-x-8">
          <CartIcon itemsOfCart={15} /> 
          <LogInButton isLoggedIn={"isLogOut"} />
        </div>
      </div>
      <div className="flex items-center justify-center px-36 h-14 space-x-3">
        <DropDown icon={"faBars"} options={["Man", "Women", "Kids"]} />
        <NavigationMenu options={["HOME", "MEN", "WOMEN", "KIDS", "GIFT VOUCHER", "WEEKEND FLASH SALE", "NEW ARRIVAL"]} />
      </div>
    </div>
  );
}

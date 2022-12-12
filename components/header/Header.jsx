import CartIcon from "./upperHeader/CartIcon";
import LogInButton from "./upperHeader/LogInButton";
import Logo from "./upperHeader/Logo";
import SearchBox from "./upperHeader/searchBox";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-36 h-20 border-b border-gray-200">
      <Logo />
      <SearchBox />
      <div className="flex items-center space-x-8">
        <CartIcon itemsOfCart={15}/>
        <LogInButton isLoggedIn={"isLogOut"} />
      </div>
    </div>
  );
}

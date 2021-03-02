import Logo from "./Logo";
import BasketIconLink from "./BasketIconLink";
import "../styles/header.scss";
import { ProductType } from "../types/types";

interface HeaderProps {
  basketProductsQuantity: number;
  setIsBasketVisible: (arg: boolean) => void;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <div className="header">
        <Logo />
        <nav>
          <div className="navigation">
            <div className="link navigation__link">Link 1</div>
            <div className="link navigation__link">Link 2</div>
          </div>
        </nav>

        <BasketIconLink
          setIsBasketVisible={props.setIsBasketVisible}
          productsQuantity={props.basketProductsQuantity}
        />
      </div>
    </header>
  );
};

export default Header;

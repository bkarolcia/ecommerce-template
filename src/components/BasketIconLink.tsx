import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "../styles/basket-icon-link.scss";

interface BasketIconLinkProps {
  productsQuantity?: number;
  setIsBasketVisible: (arg: boolean) => void;
}

const BasketIconLink = (props: BasketIconLinkProps) => {
  return (
    <div
      className="basket-icon-link"
      onClick={() => props.setIsBasketVisible(true)}
    >
      <div className="basket-icon-link__container">
        <div className="basket-icon-link__icon">
          <FontAwesomeIcon icon={faShoppingBasket} />
        </div>
        <div className="basket-icon-link__counter">
          {props.productsQuantity || 0}
        </div>
      </div>
    </div>
  );
};

export default BasketIconLink;

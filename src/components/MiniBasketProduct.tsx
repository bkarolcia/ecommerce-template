import React, { useEffect, useState } from "react";
import { ProductType } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "../styles/mini-basket-product.scss";

interface MiniBasketProductProps {
  product: ProductType;
  deleteProduct: (id: number) => void;
  setProductQuantity: (id: number, quantity: number) => void;
}

const MiniBasketProduct = (props: MiniBasketProductProps) => {
  const [image, setImage] = useState("");
  const [quantityInput, setQuantityInput] = useState(props.product.quantity);

  import(`./../images/${props.product.id}.jpg`).then((image: any) =>
    setImage(image.default)
  );

  const handleDecrementButton = () => {
    if (props.product.quantity! == 1) {
      props.deleteProduct(props.product.id);
    } else {
      props.setProductQuantity(props.product.id, props.product.quantity! - 1);
    }
  };

  const handleInputChange = (e: any) => {
    setQuantityInput(e.target.value);

    if (e.target.value.length && /[0-9]/.test(e.target.value)) {
      const valueAsNumber = parseInt(e.target.value);

      props.setProductQuantity(props.product.id, valueAsNumber);
    }
  };
  const productTotalPrice = (
    props.product.price * props.product.quantity!
  ).toFixed(2);

  useEffect(() => {
    setQuantityInput(props.product.quantity);
  }, [props.product.quantity]);

  return (
    <div className="mini-basket-product">
      <div className="mini-basket-product__first-row">
        <div className="mini-basket-product__image">
          <img src={image} />
        </div>
        <div className="mini-basket-product__name">{props.product.name}</div>
        <button
          className="mini-basket-product__button"
          onClick={() => props.deleteProduct(props.product.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>

      <div className="mini-basket-product__second-row">
        <div className="mini-basket-product__quantity-selector">
          <button
            className="mini-basket-product__button mini-basket-product__button--red"
            onClick={() =>
              props.product.quantity! < 999 &&
              props.setProductQuantity(
                props.product.id,
                props.product.quantity! + 1
              )
            }
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>

          <div className="mini-basket-product__quantity">
            <input
              type="text"
              value={quantityInput}
              onChange={handleInputChange}
            />
          </div>

          <button
            className="mini-basket-product__button mini-basket-product__button--red"
            onClick={handleDecrementButton}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>

        <div className="mini-basket-product__price">{productTotalPrice} zł</div>
      </div>
    </div>
  );
};

export default MiniBasketProduct;

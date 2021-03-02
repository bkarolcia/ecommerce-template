import React, { useEffect, useState } from "react";
import { ProductType } from "../types/types";
import "../styles/mini-basket.scss";
import MiniBasketProduct from "./MiniBasketProduct";

interface MiniBasketProps {
  basketProducts: ProductType[];
  isVisible: boolean;
  deleteProduct: (id: number) => void;
  setProductQuantity: (id: number, quantity: number) => void;
  setIsBasketVisible: (arg0: boolean) => void;
}

const MiniBasket = (props: MiniBasketProps) => {
  const totalBasketPrice = props.basketProducts
    .reduce(
      (previousValue, product) =>
        previousValue + product.quantity! * product.price,
      0
    )
    .toFixed(2);

  return (
    <div className={`mini-basket ${props.isVisible && `mini-basket--show`}`}>
      <div className="mini-basket__wrapper">
        <div className="mini-basket__top">
          <button
            className="mini-basket__hide-button"
            onClick={() => props.setIsBasketVisible(false)}
          >
            Hide basket
          </button>
          <h1>Basket</h1>
        </div>

        {props.basketProducts.length ? (
          <div className="mini-basket__products">
            {props.basketProducts.map((basketProduct) => (
              <MiniBasketProduct
                setProductQuantity={props.setProductQuantity}
                product={basketProduct}
                deleteProduct={props.deleteProduct}
              />
            ))}
          </div>
        ) : (
          <h2 className="mini-basket__empty-message">Your basket is empty</h2>
        )}

        <div className="mini-basket__total">Total: {totalBasketPrice} zł</div>
      </div>
    </div>
  );
};

export default MiniBasket;

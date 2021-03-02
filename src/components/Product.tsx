import React, { useEffect, useState } from "react";
import { ProductType } from "../types/types";
import "../styles/product.scss";

interface ProductProps {
  product: ProductType;
  addToBasket: (product: ProductType) => void;
}

const Product = (props: ProductProps) => {
  const [image, setImage] = useState("");

  import(`./../images/${props.product.id}.jpg`).then((image: any) =>
    setImage(image.default)
  );

  return (
    <div className="product">
      <div className="product__price">{props.product.price} zł</div>
      <div className="product__name">{props.product.name}</div>
      <div className="product__image">
        <img src={image} />
      </div>

      <button
        onClick={() => props.addToBasket(props.product)}
        className="product__button"
      >
        Add to basket
      </button>
    </div>
  );
};

export default Product;

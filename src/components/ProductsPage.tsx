import "../styles/products-page.scss";
import { Products } from "./Products";
import Product from "./Product";
import { ProductType } from "../types/types";

interface ProductsPageProps {
  addToBasket: (product: ProductType) => void;
}

const ProductsPage = (props: ProductsPageProps) => {
  return (
    <div className="products-page">
      <div className="products-page__content">
        <h1>All products</h1>
        <div className="products-page__products">
          {Products.map((product) => (
            <Product addToBasket={props.addToBasket} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

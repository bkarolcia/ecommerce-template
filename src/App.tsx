import React, { useState } from 'react';
import './styles/main.scss';
import Header from './components/Header';
import ProductsPage from './components/ProductsPage';
import MiniBasket from './components/MiniBasket';
import { ProductType } from './types/types';

const App = () => {
  const [basketProducts, setBasketProducts] = useState<ProductType[]>([]);
  const [isBaksetVisible, setIsBasketVisible] = useState(false);

  const addToBasket = (product:ProductType) => {
    let newBasketArray = [];

    if(basketProducts.find(basketProducts => basketProducts.id === product.id)) {
      newBasketArray = basketProducts.map(basketProduct => basketProduct.id === product.id ? {...basketProduct, quantity: basketProduct.quantity! + 1 } : basketProduct);
    } else {
      newBasketArray = [
        ...basketProducts,
        {...product, quantity: 1}
      ];
    }

    setBasketProducts(newBasketArray);
    setIsBasketVisible(true);
  }

  const deleteProduct = (id:number) => {
    setBasketProducts(basketProducts.filter(product => product.id !== id));
  };

  const setProductQuantity = (id:number, quantity:number) => {
    setBasketProducts(
      basketProducts.map(product => product.id === id ? {...product, quantity: quantity} : product)
    );
  }

  return (
    <div className="App">
        <Header basketProductsQuantity={basketProducts.length} setIsBasketVisible={setIsBasketVisible}/>
        <ProductsPage addToBasket={addToBasket} />
        <MiniBasket
          basketProducts={basketProducts}
          isVisible={isBaksetVisible}
          deleteProduct={deleteProduct}
          setProductQuantity={setProductQuantity}
          setIsBasketVisible={setIsBasketVisible}
        />
        
    </div>
  );
}

export default App;

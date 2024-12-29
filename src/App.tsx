import { useEffect, useState } from "react";
import "./App.css";
import Products from "./Products";
import Form from "./Form";
import CounterBox from "./CounterBox";
import { CounterProvider } from "./Counter";

export interface IProduct {
  id: number;
  name: string;
  price: number;
}

const productDetail: IProduct[] = [
  { id: 1, name: "soap", price: 1200 },
  { id: 2, name: "body wash", price: 1500 },
];

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setProducts(productDetail);
  }, []);

  const handleAddToCart = (id: number) => {
    console.log("the id is ", id);
  };

  return (
    <>
      <CounterProvider>
        <div>
          {products.map((product) => (
            <Products
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
          <Form />
          <CounterBox />
        </div>
      </CounterProvider>
    </>
  );
}

export default App;

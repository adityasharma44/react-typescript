import { IProduct } from "./App";

interface ProductProps {
  product: IProduct;
  handleAddToCart(id: number): void;
}

export default function Products({ product, handleAddToCart }: ProductProps) {
  return (
    <>
      <div className="uppercase text-4xl font-bold my-5">{product.name}</div>
      <button
        onClick={() => handleAddToCart(product.id)}
        className="p-2 rounded-lg shadow-sm text-xl border-2 border-[#888787]"
      >
        Click to console
      </button>
    </>
  );
}

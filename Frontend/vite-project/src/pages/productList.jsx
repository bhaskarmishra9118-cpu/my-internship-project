import ProductCard from "../components/ProductCart";

function ProductList({ products, onAddToCart }) {
  return (
    <div className="flex gap-5 flex-wrap">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;

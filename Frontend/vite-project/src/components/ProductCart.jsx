function ProductCard({ product, onAddToCart }) {
  const placeholder = "https://via.placeholder.com/300x300?text=No+Image";

  return (
    <div className="border border-gray-300 p-3 w-48 text-center rounded">
      <img
        src={product.image || placeholder}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
        onError={(e) => { e.target.onerror = null; e.target.src = placeholder; }}
      />
      <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
      <p className="font-bold text-red-600">₹{product.price}</p>
      <button
        className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => onAddToCart && onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

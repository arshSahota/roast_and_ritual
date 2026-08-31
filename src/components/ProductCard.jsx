function ProductCard({ product }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-2">
      <div className="text-6xl">
        {product.emoji}
      </div>

      <h3 className="mt-4 text-xl font-bold">
        {product.name}
      </h3>

      <p className="mt-2 text-gray-600">
        {product.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-semibold">
          ${product.price}
        </span>

        <button className="rounded-full bg-green-900 px-4 py-2 text-white">
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
import { useState, useMemo } from "react";
import { CartItem } from "../types/types";
import { server } from "../redux/store";

type ProductCardProps = {
  productId: string;
  photo: string;
  name: string;
  price: string; // JSON string
  stock: number;
  tag: string;
  sale: boolean;
  numOfReviews: number;
  star: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  star,
  numOfReviews,
  sale,
  tag,
  handler,
}: ProductCardProps) => {
  // Parse and type the price options
  const priceOptions = useMemo(() => {
    try {
      return JSON.parse(price) as Record<string, { price: number; mrp: number }>;
    } catch (e) {
      console.error("Invalid price JSON:", price);
      return {};
    }
  }, [price]);

  // Use the first available weight key dynamically (instead of hardcoding "250g")
  const defaultWeight = Object.keys(priceOptions)[0] || "";

  const [selectedWeight, setSelectedWeight] = useState<string>(defaultWeight);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedWeight(e.target.value);
  };

  const finalprice: number = priceOptions[selectedWeight]?.price || 0;
  const finalmrp: number = priceOptions[selectedWeight]?.mrp || 0;

  return (
    <div className="product-card">
      <div className="label best-seller">{tag}</div>
      <div className="label on-sale">{sale ? "On sale" : ""}</div>

      <div className="image-wrapper">
        <img src={`${server}/${photo}`} alt={name} />
      </div>

      <h3 className="product-title">{name}</h3>

      <div className="rating">
        {Array.from({ length: star }).map((_, i) => (
          <span key={i}>⭐</span>
        ))}
        <span className="rating-text">{numOfReviews} | Ratings</span>
      </div>

      <div className="weight-select">
        <select value={selectedWeight} onChange={handleChange}>
          {Object.entries(priceOptions).map(([weight, data]) => (
            <option key={weight} value={weight}>
              {weight} – ₹ {data.price}
            </option>
          ))}
        </select>
      </div>

      <div className="price">
        <span className="final">₹ {finalprice}</span>
        <span className="mrp">MRP ₹ {finalmrp}</span>
      </div>

      <button
        className="add-to-cart"
        onClick={() =>
          handler({
            productId,
            price: finalprice,
            name,
            photo,
            stock,
            quantity: 1,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
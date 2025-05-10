// import { FaPlus } from "react-icons/fa";
type ProductCardProps = {
productId: string;
photo: string;
name: string;
price: string;
stock: number;
// description: string;
tag: string;
sale: boolean;
numOfReviews: number,
star:number,
handler: (cartItem: CartItem) => string | undefined
};



import { useState } from "react";
// const server = "jdlkafdh";

// const ProductCard = ({
//   productId,
//   price,
//   name,
//   photo,
//   stock,
//   handler,
// }: ProductCardProps) => {

//   return(
//   <div className="product-card">

//     <img src={photo} alt={name} />
//     <p>{name}</p>
//     <span>${price}</span>

//   <div>
//   <button onClick={() => handler()}>
//     <FaPlus />
//   </button>
//   </div>
//   </div>
// );
// };
// export default ProductCard;



import { server } from "../redux/store";
import { CartItem } from "../types/types";

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  star,
  numOfReviews,
  // description,
  sale,
  tag,
  handler,
}: ProductCardProps) => {
  // {"250g":{"price":225,"mrp":315},"500g":{"price":400,"mrp":525},"1kg":{"price":750,"mrp":899}}

  const priceOptions: Record<string, { price: number; mrp: number }> = JSON.parse(price);
  

  const [selectedWeight, setSelectedWeight] = useState<keyof typeof priceOptions>("250g");
  let finalprice:number = priceOptions[selectedWeight].price;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedWeight(e.target.value as keyof typeof priceOptions);
    finalprice = priceOptions[selectedWeight].price;
  };

  return (
    <div className="product-card">
      <div className="label best-seller">{tag ? tag : ""}</div>
      <div className="label on-sale">{sale ? "On sale" : ""}</div>

      <div className="image-wrapper">
        <img
          src={`${server}/${photo}`}
          alt={name}
        />
      </div>

      <h3 className="product-title">
        {name}
      </h3>

      <div className="rating">
        {Array.from({ length: star }).map((_, i) => (
          <span key={i}>⭐</span>
        ))}
        <span className="rating-text">{numOfReviews} | Ratings</span>
      </div>

      <div className="weight-select">
        <select value={selectedWeight as string} onChange={handleChange}>
          {Object.entries(priceOptions).map(([weight, data]) => (
            <option key={weight} value={weight}>
              {weight} – ₹ {(data as { price: number; mrp: number }).price}
            </option>
          ))}
        </select>
      </div>

      <div className="price">
        <span className="final">₹ {priceOptions[selectedWeight].price}</span>
        <span className="mrp">MRP ₹ {priceOptions[selectedWeight].mrp}</span>
      </div>

      <button className="add-to-cart" onClick={()=>handler({productId, price: finalprice, name, photo, stock, quantity: 1})}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
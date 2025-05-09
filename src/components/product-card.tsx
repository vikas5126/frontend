// import { FaPlus } from "react-icons/fa";
type ProductCardProps = {
productId: string;
photo: string;
name: string;
price: string;
stock: number;
description: string;
tag: string;
sale: boolean;
numOfReviews: number,
star:number,
handler: () => (cartItem: CartItem) => string | undefined
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



import { FaStar } from "react-icons/fa";
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
  description,
  sale,
  tag,
  handler,
}: ProductCardProps) => {
  // {"250g":{"price":225,"mrp":315},"500g":{"price":400,"mrp":525},"1kg":{"price":750,"mrp":899}}

  const priceOptions = JSON.parse(price);
  

  const [selectedWeight, setSelectedWeight] = useState<keyof typeof priceOptions>("250g");
  let finalprice:number = priceOptions[selectedWeight].price;

  const handleChange = (e) => {
    setSelectedWeight(e.target.value);
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
        <select value={selectedWeight} onChange={handleChange}>
          {Object.entries(priceOptions).map(([weight, data]) => (
            <option key={weight} value={weight}>
              {weight} – ₹ {data.price}
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
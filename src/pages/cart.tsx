import {useState, useEffect} from 'react';
import { VscError } from 'react-icons/vsc';
import CartItem from '../components/cart-item';
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { CartReducerInitialState } from '../types/reducer-types';
import toast from 'react-hot-toast';
import { CartItem as CartItemType } from '../types/types';
import { addToCart, calculatePrice, discountApplied, removeCartItem } from '../redux/reducer/cartReducer';
import axios from 'axios';
import { server } from '../redux/store';

const Cart = () => {
  const {cartItems, subtotal, tax, total, shippingCharges, discount} = useSelector(
    (state: {cartReducer: CartReducerInitialState}) => state.cartReducer
  )

  const dispatch = useDispatch();

  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState(false);

  const addToCardHandler = (cartItem: CartItemType) => {
    if(cartItem.quantity >= cartItem.stock) {
      return toast.error("Out of Stock")
    }
    dispatch(addToCart({...cartItem, quantity: cartItem.quantity + 1}));
  };

  const decrement = (cartItem: CartItemType) => {
    if(cartItem.quantity <= 1) {
      return;
    }
    dispatch(addToCart({...cartItem, quantity: cartItem.quantity - 1}));
  };

  const remove = (productId: string) => {
    dispatch(removeCartItem(productId));
    toast.success("product removed")
  };

  useEffect(()=> {
    dispatch(calculatePrice());
  }, [cartItems])

  useEffect(() => {

    const {token: cancelToken, cancel} = axios.CancelToken.source();

    const timeOutID = setTimeout(() => {
      axios.get(`${server}/api/v1/payment/discount?coupon=${couponCode}`, {cancelToken})
      .then((res)=>{
        dispatch(discountApplied(res.data.discount));
        setIsValidCouponCode(true);
        dispatch(calculatePrice());
      })
      .catch(()=>{
        dispatch(discountApplied(0));
        setIsValidCouponCode(false)
        dispatch(calculatePrice());
      })
      if(Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(timeOutID);
      cancel();
      setIsValidCouponCode(false);
    };
    
  }, [couponCode])
  return (
    <div className="cart">
      <main>

     { cartItems.length > 0 ? (
      cartItems.map((i, idx) => 
        <CartItem key={idx} cartItem={i} increment={addToCardHandler} decrement={decrement} remove={remove}/>
     )
    ) : (
    <div className='flex flex-col justify-center items-center w-full h-full gap-6'>
      <h1 className='flex text-xl'>Your Bag Is Empty &nbsp; <FaTrash/></h1>
      <Link to={'/'}><button className='w-30 h-12 bg-blue-500 rounded-lg'>Add Products </button></Link>
    </div>
    )} 
      </main>
      {cartItems.length>0 && <button className="mobile-checkout-btn" onClick={() => setShowFilters(true)}>
  View Summary
</button>}
      <aside className={`sidebar ${showFilters ? "open" : ""}`}>
        <div className="filterTag">
        <h2>Checkout</h2>
        <button className="filter-cancel" onClick={() => setShowFilters(false)}>
          ✕
        </button>
        </div>
        <div>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>Discount: <em className='red'> - ₹{discount}</em></p>
        <p><b>Total: ₹{total}</b></p>
        <input 
        type="text"
        placeholder="Coupon Code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode && 
        (isValidCouponCode ? (
          <span className="green">
            ₹{discount} off using the <code>{couponCode}</code>

          </span>
        ) : (
          <span className='red'>
            Invalid Coupon <VscError />
          </span>
        
        ))}


        {
        cartItems.length > 0 && <Link to="/shipping" className='w-full h-12 bg-red-600 m-auto flex justify-center items-center text-white rounded-xl'>Checkout</Link>

        }
        </div>
      </aside>

    </div>
  )
}

export default Cart;

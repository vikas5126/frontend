import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingInfo } from "../redux/reducer/cartReducer";
import { server } from "../redux/store";
import { CartReducerInitialState, UserReducerInitialState } from "../types/reducer-types";
const Shipping = () => {

    const {user} = useSelector((state : {userReducer: UserReducerInitialState})=> state.userReducer);

    const {cartItems , total} = useSelector(
        (state: {cartReducer: CartReducerInitialState}) => state.cartReducer
      )

      console.log(user?._id);

      const dispatch = useDispatch();
    const navigate = useNavigate()
    const[shippingInfo, setShippingInfo]= useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
      
    });

    const changeHandler = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => {
            setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };


        const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
        
            dispatch(saveShippingInfo(shippingInfo));
        
            try {
              const { data } = await axios.post(
                `${server}/api/v1/payment/create?id=${user?._id}`,
                {
                //   items: cartItems,
                //   shippingInfo,
                //   coupon,
                amount : total * 100
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
        
              navigate("/pay", {
                state: data.clientSecret,
              });
            } catch (error) {
              console.log(error);
              toast.error("Something went wrong");
            }
          };
        
          useEffect(() => {
            const checkCartItems = () => {
              if (cartItems.length <= 0) navigate("/cart");
            };
            checkCartItems();
          }, [cartItems]);
   
  return (
    <div className="shipping">
        <button className="back-btn" onClick={() => navigate("/cart")}>
            <BiArrowBack />
        </button>
        <form onSubmit={submitHandler}>
            <h1>Shipping Address</h1>

        <input
        required
            type="text"
            placeholder="Address"
            name="address"
            value={shippingInfo.address}
            onChange={changeHandler}
            />

<input
        required
            type="text"
            placeholder="City"
            name="city"
            value={shippingInfo.city}
            onChange={changeHandler}
            />

<input
        required
            type="text"
            placeholder="State"
            name="state"
            value={shippingInfo.state}
            onChange={changeHandler}
            />

            <select 
            name="country"
            required
            value={shippingInfo.country}
            onChange={changeHandler}
            >
                <option value="">Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
            </select>

            <input
        required
            type="number"
            placeholder="Pin Code"
            name="pinCode"
            value={shippingInfo.pinCode}
            onChange={changeHandler}
            />
         
         <button type="submit">Pay Now</button>
        </form>

    </div>
  );
}

export default Shipping;
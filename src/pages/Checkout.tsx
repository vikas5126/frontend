// // import {
// //   Elements,
// //   PaymentElement,
// //   useElements,
// //   useStripe,
// // } from "@stripe/react-stripe-js";
// // import { loadStripe } from "@stripe/stripe-js";
// import { FormEvent, useState } from "react";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import { useNewOrderMutation } from "../redux/api/orderAPI";
// import { resetCart } from "../redux/reducer/cartReducer";
// import { NewOrderRequest } from "../types/api-types";
// import { CartReducerInitialState, UserReducerInitialState } from "../types/reducer-types";
// import { responseToast } from "../utils/features";
// import Razorpay from "razorpay"
  
//   // const stripeKey =
//   //   "pk_test_51PTW6GAp77KFTccsiTOA8UVMmvFcUrAV7RolpbWSahjRy04xiwvTHixhVSIE97Y7gKWn9mPzpEykIkJSBdYiMD7g00WaSLP3FW";
  
//   // const stripePromise = loadStripe(stripeKey);
  
//   const CheckOutForm = () => {
//     // const stripe = useStripe();
//     // const elements = useElements();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const {user} = useSelector((state : {userReducer: UserReducerInitialState})=> state.userReducer);

//     const {
//       shippingInfo,
//       cartItems,
//       subtotal,
//       tax,
//       discount,
//       shippingCharges,
//       total
//     } = useSelector((state: {cartReducer: CartReducerInitialState}) => state.cartReducer);
  
//     const [isProcessing, setIsProcessing] = useState<boolean>(false);
  
//     const [newOrder] = useNewOrderMutation();
  
//     const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
//       // if (!stripe || !elements) return;
//       // setIsProcessing(true);
  
//       const orderData: NewOrderRequest = {
//         shippingInfo,
//         orderItems: cartItems,
//         subtotal,
//         tax,
//         discount,
//         shippingCharges,
//         total,
//         user: user?._id!,
//       };
      
//       // const { paymentIntent, error } = await stripe.confirmPayment({
//       //   elements,
//       //   confirmParams: { return_url: window.location.origin },
//       //   redirect: "if_required",
//       // });



//       const options = {
//           key: import.meta.env.RAZORPAY_API_KEY,
//           amount: total,
//           currency: "INR",
//           name: "6 Pack Programmer",
//           description: "Tutorial of RazorPay",
//           image: "https://avatars.githubusercontent.com/u/25058652?v=4",
//           // order_id: order,
//           callback_url: "http://localhost:4000/api/paymentverification",
//           prefill: {
//               name: "Gaurav Kumar",
//               email: "gaurav.kumar@example.com",
//               contact: "9999999999"
//           },
//           notes: {
//               "address": shippingInfo
//           },
//           theme: {
//               "color": "#121212"
//           }
//       };
//       const razor = new window.Razorpay(options);
//       razor.open();
      
//       // if (error) {
//       //   setIsProcessing(false);
//       //   return toast.error(error.message || "Something Went Wrong");
//       // }
      
//       // if (paymentIntent.status === "succeeded") {
//       //   console.log(orderData);
//       //   const res = await newOrder(orderData)
//       //   dispatch(resetCart());
//       //   responseToast(res, navigate, "/order");
//       // }
//       // setIsProcessing(false);
//     };
//     return (
//       <div className="checkout-container">
//         <form onSubmit={submitHandler}>
//           {/* <PaymentElement /> */}
//           <button type="submit" disabled={isProcessing}>
//             {isProcessing ? "Processing..." : "Pay"}
//           </button>
//         </form>
//       </div>
//     );
//   };
  
//   const Checkout = () => {
//     const location = useLocation();
  
//     const clientSecret: string | undefined = location.state;
  
//     if (!clientSecret) return <Navigate to={"/shipping"} />;
  
//     return (
//       <Elements
//         options={{
//           clientSecret,
//         }}
//         stripe={stripePromise}
//       >
//         <CheckOutForm />
//       </Elements>
//     );
//   };
  
//   export default Checkout;
  








import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useNewOrderMutation } from "../redux/api/orderAPI";
import { resetCart } from "../redux/reducer/cartReducer";
import { NewOrderRequest } from "../types/api-types";
import { CartReducerInitialState, UserReducerInitialState } from "../types/reducer-types";
import { responseToast } from "../utils/features";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const CheckOutForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [phoneNumber, setPhoneNumber] = useState("");

  const { user } = useSelector((state: { userReducer: UserReducerInitialState }) => state.userReducer);
  const {
    shippingInfo,
    cartItems,
    subtotal,
    tax,
    discount,
    shippingCharges,
    total
  } = useSelector((state: { cartReducer: CartReducerInitialState }) => state.cartReducer);

  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const [newOrder] = useNewOrderMutation();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    const orderData: NewOrderRequest = {
      shippingInfo,
      orderItems: cartItems,
      subtotal,
      tax,
      discount,
      shippingCharges,
      total,
      user: user?._id!,
    };

    try {
      // Create Razorpay Order on backend
      const res = await fetch(`${import.meta.env.VITE_SERVER}/api/v1/payment/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total*100 }),
      });

      const { order } = await res.json();
      console.log(res);
      console.log(order);
      console.log(import.meta.env.VITE_RAZORPAY_API_KEY)

      const options = {
        key: import.meta.env.VITE_RAZORPAY_API_KEY,
        amount: order.amount,
        currency: "INR",
        name: "PrabshreeBhog",
        description: "Dryfruit Order Payment",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: `${import.meta.env.VITE_SERVER}/api/v1/payment/verify`, // backend route to verify payment
        prefill: {
          name: user?.name || "Customer",
          email: user?.email || "customer@example.com",
          contact: phoneNumber
        },
        notes: {
          address: `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}`,
        },
        theme: {
          color: "#121212"
        },
        handler: async () => {
          // Optional: You can verify payment client-side or rely on backend webhook
          const result = await newOrder(orderData);
          dispatch(resetCart());
          responseToast(result, navigate, "/order");
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      toast.error("Payment initialization failed");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="checkout-container">
      <form onSubmit={submitHandler}>
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          pattern="[0-9]{10}"
          className="input"
        />
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay"}
        </button>
        </form>
    </div>
  );
};

export default CheckOutForm;

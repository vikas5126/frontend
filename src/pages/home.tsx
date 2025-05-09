import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import bgAlmond from "../assets/images/bg-Almond.png";
import commentImage from "../assets/images/testimonialImg.png";
import Footer from "../components/Footer";
import HomeSlider from "../components/HomeSlider";
import { Skeleton } from "../components/loader";
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import { addToCart } from "../redux/reducer/cartReducer";
import { CartItem } from "../types/types";

const sliderImages = [
  "https://images.unsplash.com/photo-1477506350614-fcdc29a3b157?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1687975124390-65e1be8a6b44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1514537193821-ed4955693802?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const comments = [
  {
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    star: '⭐⭐⭐⭐⭐',
  },
  {
    name: "Jane Smith",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      star: '⭐⭐⭐⭐',
  },
  {
    name: "Alice Johnson",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    star: '⭐⭐⭐⭐',
  },
  {
    name: "Bob Brown",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    star: '⭐⭐⭐⭐⭐',
  },
  {
    name: "Charlie Green",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      star: '⭐⭐⭐⭐⭐',
  },
  {
    name: "David White",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    star: '⭐⭐⭐⭐',
  },
  {
    name: "Eve Black",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    star: '⭐⭐⭐⭐⭐',
  }
]



const Home = () => {
  const {data, isLoading, isError, } = useLatestProductsQuery("");

  const dispatch = useDispatch();

  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // 3 seconds auto-slide
    return () => clearInterval(interval);
  }, []);

  const addToCardHandler = (cartItem: CartItem) => {
    if(cartItem.stock < 1){
      return toast.error("Out of Stock");
    }
    dispatch(addToCart(cartItem))
    toast.success("Added To Cart");
  };

  if(isError){
    toast.error("Error fetching products");
  }

  return (
    <div className="home">
      <section className="slider">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </section>

      <HomeSlider/>

      <section className="latest-products">
      <h1>
        Latest Products 
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        {
          isLoading ? <Skeleton width="80vw"/> : data?.products.map((product, index) =>  (
              <ProductCard
                key={index}
                productId={product._id}
                name={product.name}
                price={product.price}
                stock={product.stock}
                handler={addToCardHandler}
                photo={product.photo}
                description={product.description}
                tag={product.tag || "New"}
                sale={product.sale || false}
                numOfReviews={product.numOfReviews || 0}
                star={product.star || 0}
              />
            )
          )
        }
      </main>
      </section>
      <div className="relative sm:mt-40 w-[100%] bg-[#e5e2e2]">
        <div className="w-[100%] flex justify-end items-center">
          <img src={bgAlmond} alt="coverimage" className="object-cover w-[70%] bg-top hidden lg:block"/>
        </div>
        <div className="lg:absolute lg:left-10 lg:w-[70%] w-[100%] lg:top-[30%] overflow-x-scroll flex justify-around items-center mt-8 gap-4 md:mt-2 box-border h-[18rem] hide-scrollbar" style={{"padding":"1rem"}}>
          {comments.map((comment, index) => {
            return (
              <div key={index} className="w-[90%] sm:[70%] md:w-[50%] lg:w-[33%] p-10 bg-white flex justify-center items-center shrink-0 border-2 border-gray-300 rounded-xl shadow-[0_15px_12px_rgba(0,0,0,0.22)] h-[15rem] ">
                <div className="w-[10rem]">
                  <img src={commentImage} alt="commentImage" className="w-[5rem] md:w-[75%] lg:w-full rounded-full m-auto"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                  <p className="text-lg md:text-xl font-semibold text-center underline">{comment.name}</p>
                  <p className="text-sm md:text-md text-center">"{comment.comment}"</p>
                  <p className="text-sm md:text-md text-center mt-[-1rem]">{comment.star}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
      {/* <Search/> */}
    </div>
  );
}

export default Home;
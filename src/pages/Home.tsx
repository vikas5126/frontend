import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

import { type CarouselApi } from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import styles from "../assets/styles/home.module.css";
import image1 from "../assets/images/maddi-bazzocco-UhrHTmVBzzE-unsplash.jpg";
import image2 from "../assets/images/maksim-shutov-pUa1On18Jno-unsplash.jpg";
import image3 from "../assets/images/marcos-paulo-prado-vhCoBzrZsTg-unsplash.jpg";
import image4 from "../assets/images/peter-f-fZ7-IAReeSo-unsplash.jpg";
import cardImage from "../assets/images/almond-icon.jpg";
import cardImage1 from "../assets/images/dates-icon.jpg";
import cardImage2 from "../assets/images/exclusive-icon.jpg";
import { useNavigate } from "react-router-dom";
// import cardImage3 from '../assets/images/kaju-icon.jpg'

import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import BounceCards from "../../reactBits/bounceCards/BounceCards";
import TiltedCard from "../../reactBits/TiltedCard/TiltedCard";
import section4Image from "../assets/images/rachael-gorjestani-evsoUV1EyXY-unsplash.jpg";
import section5Image from "../assets/images/hayley-maxwell-qubeRW0DiDM-unsplash.jpg";
import commentImage from "../assets/images/testimonialImg.png";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import Footer from "../components/Footer";


const Home = () => {
  const images = [
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/800/800?grayscale",
    "https://picsum.photos/400/400?grayscale",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  const [api, setApi] = React.useState<CarouselApi>();
  const items = [
    {
      name: "Dates",
      image: cardImage1,
    },
    {
      name: "Almonds",
      image: cardImage,
    },
    {
      name: "Cashew",
      image: cardImage1,
    },
    {
      name: "Exclusive",
      image: cardImage2,
    },
    {
      name: 'berries',
      image: cardImage,
    },
    {
      name: 'seeds',
      image: cardImage1,
    }
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

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // Do something on select.
    });
  }, [api]);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <img src={image1} alt="" className="w-[100%] h-[30rem]" />
          </CarouselItem>
          <CarouselItem>
            <img src={image2} alt="" className="w-[100%] h-[30rem]" />
          </CarouselItem>
          <CarouselItem>
            <img src={image3} alt="" className="w-[100%] h-[30rem]" />
          </CarouselItem>
          <CarouselItem>
            <img src={image4} alt="" className="w-[100%] h-[30rem]" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div>
        <section className={styles.ourCategories}>
          <h1>Our Categories</h1>
          <div className={styles.homeCardContainer}>
            {items.map((item, index) => {
              return (
                <TiltedCard
                  imageSrc={item.image}
                  altText={item.name}
                  captionText={item.name}
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  onClick={() => navigate(`/category/${item.name.toLowerCase()}`)}
                  overlayContent={
                    <p className="tilted-card-demo-text text-2xl ml-4 mt-4">
                      {item.name}
                    </p>
                  }
                />
              );
            })}
          </div>
        </section>
      </div>
      <div className={styles.section3}>
        <div className="flex flex-col justify-center items-center ml-12" id={styles.section3Details}>
          <h1 className="text-[3rem] font-semibold leading-[3.5rem]" >
            Latest Gift Boxes Collection
          </h1>
          <p className="mt-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            modi quod laboriosam fuga obcaecati fugit quas dolor tempore
            veritatis officiis facere, est id.
          </p>
          <Button className="bg-red-900 w-[10rem] h-12 mt-4 self-start text-amber-100">
            View More
          </Button>
        </div>
        <div className="bounceCardContainer w-[60%] flex justify-center items-center">
          <BounceCards
            className={`${styles.bounceCards}`}
            images={images}
            containerWidth={600}
            containerHeight={250}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={false}
          />
        </div>
      </div>
      <div className="relative mt-12">
        <div className="w-[90%] mx-auto">
          <img src={section4Image} alt="coverimage" className="aspect-16/9 object-cover rounded-xl"/>
        </div>
        <div className="box-border p-6 absolute bg-white w-[80%]  rounded-xl top-[93%] left-[9.5%] hidden sm:flex justify-around items-center shadow-[0_15px_12px_rgba(0,0,0,0.22)] flex-wrap gap-4">
          <div className="flex flex-col items-center gap-2">
            <RiCustomerService2Line className={styles.icons}/>
            <p className="text-base">Customer Support</p>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <RiSecurePaymentLine className={styles.icons}/>
            <p className="text-base">Secure Shopping</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RiSecurePaymentLine className={styles.icons}/>
            <p className="text-base">Swift Shipping</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RiSecurePaymentLine className={styles.icons}/>
            <p className="text-sm md:text-base">Money Return</p>
          </div>
        </div>
      </div>
      <div className="relative sm:mt-40 w-[100%]">
        <div className="w-[100%] flex justify-end items-center">
          <img src={section5Image} alt="coverimage" className="object-cover w-[70%] bg-top hidden lg:block"/>
        </div>
        <div className="lg:absolute lg:w-[70%] w-[100%] static lg:top-[30%] overflow-x-scroll flex justify-around items-center pl-4 mt-8 md:mt-2 md:ml-12 box-border gap-4 h-[18rem]">
          {comments.map((comment, index) => {
            return (
              <div key={index} className="w-[90%] sm:[70%] md:w-[50%] lg:w-[33%] p-4 flex justify-center items-center shrink-0 border-2 border-gray-300 rounded-xl shadow-[0_15px_12px_rgba(0,0,0,0.22)] h-[15rem]">
                <div className="w-[50%]">
                  <img src={commentImage} alt="commentImage" className="w-[5rem] md:w-[75%] lg:w-full rounded-full m-auto"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                  <p className="text-lg md:text-xl font-semibold text-center underline">{comment.name}</p>
                  <p className="text-sm md:text-md text-center">{comment.comment}</p>
                  <p className="text-sm md:text-md text-center mt-[-1rem]">{comment.star}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Almond from "../assets/images/Almond.png";
import Cashew from "../assets/images/cashew.png";
import Dates from "../assets/images/dates.png";
import Fig from "../assets/images/fig.png";
import Pista from "../assets/images/pista.png";
import Raisin from "../assets/images/raisin.png";


const dryFruits = [
  {
    name: "Almond",
    image: Almond,
    link: "/collection/Almond",
  },
  {
    name: "Pista",
    image: Pista,
    link: "/collection/Pista",
  },
  {
    name: "Dates",
    image: Dates,
    link: "/collection/Dates",
  },
  {
    name: "Raisin",
    image: Raisin,
    link: "/collection/Raisin",
  },
  {
    name: "Fig",
    image: Fig,
    link: "/collection/Fig",
  },
  {
    name: "Cashew",
    image: Cashew,
    link: "/collection/Cashew",
  },
];

const colors = [
  "#FDE68A", // Almond - light yellow
  "#BBF7D0", // Pista - mint green
  "#FCA5A5", // Dates - soft red
  "#C4B5FD", // Raisin - soft violet
  "#FDBA74", // Fig - orange
  "#A5F3FC", // Cashew - light cyan
];


const HomeSlider = () => {
      const containerRef = useRef<HTMLDivElement>(null);
    
      const scrollLeft = () => {
        if (containerRef.current) {
          containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
      };
    
      const scrollRight = () => {
        if (containerRef.current) {
          containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      };
  return (
    <section className="card-slider">
    <button className="arrow left" onClick={scrollLeft}>
      <FaChevronLeft />
    </button>

    <div className="slider-container" ref={containerRef}>
      {dryFruits.map((item, index) => (
        <Link to={item.link} key={index} className="card" style={{ backgroundColor: colors[index % colors.length] }}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
        </Link>
      ))}
    </div>

    <button className="arrow right" onClick={scrollRight}>
      <FaChevronRight />
    </button>
  </section>
  )
}

export default HomeSlider
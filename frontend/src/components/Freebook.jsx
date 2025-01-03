import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards"; // Import the Cards component

function Freebook() {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("/list.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the list");
        }
        return response.json();
      })
      .then((data) => {
        const freeCourses = data.filter((item) => item.category === "Free");
        setFilterData(freeCourses);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  // Slick Carousel settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      {/* Section Header */}
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          dolorem architecto reiciendis quod cum, provident at placeat itaque
          aut totam maiores ipsam dicta nam impedit voluptatum? Itaque sint
          voluptate doloribus.
        </p>
      </div>

      {/* Slick Slider */}
      <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
    </>
  );
}

export default Freebook;

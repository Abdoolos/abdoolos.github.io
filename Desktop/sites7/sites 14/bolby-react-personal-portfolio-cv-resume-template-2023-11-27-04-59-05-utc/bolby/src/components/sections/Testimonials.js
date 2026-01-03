import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "Erik Lindqvist",
    subtitle: "Projektledare på Teknikbolaget AB",
    review:
      "Abdullah levererade ett fantastiskt AI-system som förbättrade vår kundservice avsevärt. Hans expertis inom machine learning och hans professionella arbetssätt imponerade verkligen på hela teamet. Starkt rekommenderad! 🚀",
  },
  {
    id: 2,
    avatar: "images/avatar-2.svg",
    userName: "Anna Bergström",
    subtitle: "IT-chef på DataFlow Solutions",
    review:
      "Vi anlitade Abdullah för att bygga en RAG-lösning för vår kunskapsbas. Resultatet överträffade våra förväntningar. Han är en skicklig utvecklare med djup förståelse för moderna AI-teknologier. Mycket nöjda! ⭐",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Clients & Review" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import render1 from "../../assets/images/slider0.webp";
import render2 from "../../assets/images/slider1.webp";
import render3 from "../../assets/images/slider3.webp";
import render4 from "../../assets/images/slider4.webp";

import "./slider.css";

const slides = [
  {
    image: render4,
    title: "CONSTRUÍ CON SEGURIDAD",
    text: "Pagás mientras ves tu casa avanzar.",
    alt: "Casa construida en 30 días",
  },
  {
    image: render1,
    title: "LA OBRA GRIS MÁS COMPLETA DEL PAÍS",
    text: "En 30 días, con aislación térmica EIFS, base coat y revestimiento plástico de color.",
    alt: "Obra gris con aislación térmica",
  },
  {
    image: render2,
    title: "PAGÁS A MEDIDA QUE CONSTRUIMOS",
    text: "Invertís con seguridad, ves tu casa crecer paso a paso.",
    alt: "Sistema de pago contra entrega",
  },
  {
    image: render3,
    title: "TU CASA, A TU ESTILO",
    text: "Diseños y renders personalizados para hacer realidad lo que soñás.",
    alt: "Diseños personalizados",
  },
];

export const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.image} alt={slide.alt} className="slide-image" />
              <div className="slide-text">
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

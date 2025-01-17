import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/boots.jpg",
    title: "Slide 1 Title",
    description: "This is the description for Slide 1.",
  },
  {
    image: "/montane.jpg",
    title: "Slide 2 Title",
    description: "This is the description for Slide 2.",
  },
  {
    image: "/poles.jpg",
    title: "Slide 3 Title",
    description: "This is the description for Slide 3.",
  },
];

export default function Carousel() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-80"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-2xl font-bold">{slide.title}</h3>
              <p className="mt-2 text-center">{slide.description}</p>
              <a
                href={slide.image}
                className="mt-4 px-6 py-2 bg-[#FF7F00] text-white rounded hover:bg-[#FF4500] transition-colors duration-300"
              >
                Buy It
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

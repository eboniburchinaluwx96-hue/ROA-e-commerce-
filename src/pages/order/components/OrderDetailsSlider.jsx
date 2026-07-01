import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "Swiper/css";
import "swiper/css/pagination";

export const Slider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={16}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          className=""
          style={{
            objectFit: "cover",
            aspectRatio: "1/1",
            width: "115%",
          }}
          src="/images/profile.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          className=""
          style={{
            objectFit: "cover",
            aspectRatio: "1/1",
            width: "115%",
          }}
          src="/images/profile.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

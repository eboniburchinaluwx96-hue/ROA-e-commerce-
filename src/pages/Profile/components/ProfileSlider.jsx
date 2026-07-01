import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "Swiper/css";
import "swiper/css/pagination";

export const ProfileSlider = ({
  overview,
  setOverview,
  wishlist,
  setWishlist,
  orders,
  setOrders,
}) => {
  return (
    <div
      className="p-0"
      style={{
        borderBottom: "1px solid rgba(245, 229, 2, 0.25)",
      }}
    >
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="mySwiper mt-2"
      >
        <SwiperSlide className="d-flex flex-column text-center">
          <div
            onClick={() => {
              setOverview(true);
              setOrders(false);
              setWishlist(false);
            }}
            className={overview ? "active" : ""}
          >
            <h6 className="py-3">OVERVIEW</h6>
            <div
              className="border-list"
              style={{
                border: "3px solid rgb(255, 251, 5)",
              }}
            ></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex-column">
          <div
            onClick={() => {
              setOverview(!true);
              setOrders(false);
              setWishlist(!false);
            }}
            className={wishlist ? "active" : ""}
          >
            <div
              className="d-flex align-items-center gap-3"
              style={{ justifyContent: "center" }}
            >
              <h6 className="py-3">WISHLIST</h6>
              <span
                style={{
                  padding: "4px 8px",
                  background: "#ffffff2d",
                  marginBottom: 7,
                }}
              >
                6
              </span>
            </div>

            <div
              className="border-list"
              style={{
                border: "3px solid rgb(255, 251, 5)",
              }}
            ></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex-column">
          <div
            onClick={() => {
              setOverview(false);
              setOrders(!false);
              setWishlist(false);
            }}
            className={orders ? "active" : ""}
          >
            <div
              className="d-flex align-items-center gap-3"
              style={{ justifyContent: "center" }}
            >
              <h6 className="py-3">ORDERS</h6>
              <span
                style={{
                  padding: "4px 8px",
                  background: "#ffffff2d",
                  marginBottom: 7,
                }}
              >
                12
              </span>
            </div>

            <div
              className="border-list"
              style={{
                border: "3px solid rgb(255, 251, 5)",
              }}
            ></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

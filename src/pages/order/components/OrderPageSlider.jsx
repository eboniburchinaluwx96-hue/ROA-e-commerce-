import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "Swiper/css";
import "swiper/css/pagination";

export const Slider = () => {
  const [allOrder, setAllorder] = useState(true);
  const [processingOrder, setProcessingOrder] = useState(false);
  const [deliveredOrder, setDeliveredOrder] = useState(false);
  const [cancelledOrder, setCancelledOrder] = useState(false);
  return (
    <div
      className="mt-4"
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
        <SwiperSlide className="flex-column">
          <div
            onClick={() => {
              setAllorder(true);
              setCancelledOrder(false);
              setDeliveredOrder(false);
              setProcessingOrder(false);
            }}
            className={allOrder ? "active" : ""}
          >
            <div
              className="d-flex align-items-center gap-2 gap-sm-3 pb-4"
              style={{ justifyContent: "center" }}
            >
              <h6 className="py-3">ALL</h6>
              <span
                style={{
                  padding: "4px 8px",
                  background: "#ffffff2d",
                  marginBottom: 7,
                }}
              >
                14
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
              setAllorder(!true);
              setCancelledOrder(false);
              setDeliveredOrder(false);
              setProcessingOrder(!false);
            }}
            className={processingOrder ? "active" : ""}
          >
            <div
              className="d-flex align-items-center gap-2 gap-sm-3 pb-4"
              style={{ justifyContent: "center" }}
            >
              <h6 className="py-3">PROCESSING</h6>
              <span
                style={{
                  padding: "4px 8px",
                  background: "#ffffff2d",
                  marginBottom: 7,
                }}
              >
                3
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
              setAllorder(!true);
              setCancelledOrder(false);
              setDeliveredOrder(!false);
              setProcessingOrder(false);
            }}
            className={deliveredOrder ? "active" : ""}
          >
            <div
              className="d-flex align-items-center gap-2 gap-sm-3 pb-4"
              style={{ justifyContent: "center" }}
            >
              <h6 className="py-3">DELIVERED</h6>
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

        <SwiperSlide className="flex-column">
          <div
            onClick={() => {
              setAllorder(!true);
              setCancelledOrder(!false);
              setDeliveredOrder(false);
              setProcessingOrder(false);
            }}
            className={cancelledOrder ? "active" : ""}
          >
            <div
              className="d-flex align-items-center gap-2 gap-sm-3 pb-4"
              style={{ justifyContent: "center" }}
            >
              <h6 className="py-3 ">CANCELLED</h6>
              <span
                style={{
                  padding: "4px 8px",
                  background: "#ffffff2d",
                  marginBottom: 7,
                }}
              >
                2
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

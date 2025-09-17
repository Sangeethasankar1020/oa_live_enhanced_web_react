import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import { CourseReview } from "./CourseReview";
import { reviews } from "../review_data/video_testimonials";

export const ReviewSection = () => {
  return (
    <section className="py-10 sm:py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our graduates transformed their careers with our
            training programs
          </p>
        </div>

        {/* Swiper */}
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={2.5}
            spaceBetween={-50}
            speed={600} // 🔹 faster slide transition
            coverflowEffect={{
              rotate: 0,
              stretch: -20,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500, // 🔹 faster autoplay
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 1.2, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2.5, spaceBetween: 30 },
            }}
            className="pb-2 sm:pb-6 !overflow-hidden"
          >
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                className="transition-all duration-300"
              >
                <div className="px-2">
                  <CourseReview {...review} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center mt-2 sm:mt-6 space-x-2"></div>
        </div>
      </div>

      {/* 🔹 Custom Bullet Styles */}
      <style>{`
  .custom-pagination .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #d1d5db; /* gray-300 */
    opacity: 1;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  .custom-pagination .swiper-pagination-bullet-active {
    background: #00aeff; /* 🔹 your custom color */
    transform: scale(1.3);
  }

  /* 🔻 Mobile only (max-width: 640px) */
  @media (max-width: 640px) {
    .custom-pagination .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
    }
    .custom-pagination .swiper-pagination-bullet-active {
      transform: scale(1.1);
    }
  }
`}</style>
    </section>
  );
};

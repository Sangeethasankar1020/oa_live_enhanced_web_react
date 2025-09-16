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
    <section className="py-10 sm:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Success Stories
          </h2>
          <p className="text-md sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our graduates transformed their careers with our
            training programs
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
            }}
            className="pb-12 !overflow-visible max-w-2xl mx-auto"
          >
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                className="transition-all duration-500"
              >
                <div className="max-w-md mx-auto">
                  <CourseReview {...review} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

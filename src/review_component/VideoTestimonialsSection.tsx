import React from "react";
import { Play } from "lucide-react";
import VideoTestimonial from "./VideoTestimonial";
import { videoTestimonials } from "../review_data/video_testimonials";

const VideoTestimonialsSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Play className="w-6 h-6 text-red-600" />
            <span className="text-red-600 font-semibold">Video Stories</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
            Hear Their Stories in Their Own Words
          </h2>
          <p className="text-md sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Watch authentic video testimonials from our customers sharing their
            success stories and experiences
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videoTestimonials.map((testimonial) => (
            <VideoTestimonial
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              thumbnail={testimonial.thumbnail}
              videoUrl={testimonial.videoUrl}
              duration={testimonial.duration}
              previewText={testimonial.previewText}
              impact={testimonial.impact}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;

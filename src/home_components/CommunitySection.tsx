import React from "react";
import { communityFeatures, Feature } from "../home_Data/communityFeatures";
import { Globe, MoveRight } from "lucide-react";
import { SocialLink, socialLinks } from "./social_links";

const CommunitySection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mx-auto max-w-[210px] sm:max-w-[230px] border border-gray-300 hover:shadow-md rounded-2xl p-2">
          <Globe className="text-[#0E90CF]" size={24} />
          <h3 className="text-lg sm:text-xl font-bold text-[#0E90CF]">
            Global Community
          </h3>
        </div>

        <h4 className="text-xl md:text-2xl font-bold mt-6">
          Be Part of the OCEAN{" "}
          <span className="text-[#0E90CF]">Global Community</span>
        </h4>

        <p className="text-gray-600 font-medium mt-3">
          Learn, connect, and grow with a global network of learners and
          professionals. From Puducherry to anywhere in India, our community
          keeps you inspired and career-ready.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
        {communityFeatures.map((item: Feature, idx: number) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col justify-center items-center"
            >
              <div className="bg-white max-w-[100px] shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
                <Icon className="w-6 h-6 mx-auto text-[#0E90CF]" />
              </div>

              <h5 className="font-semibold text-lg text-black mt-3">
                {item.title}
              </h5>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Social Buttons */}
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
        {socialLinks.map((item: SocialLink) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-start border border-gray-300 hover:shadow-md rounded-2xl p-4 w-full sm:w-56 text-center"
            >
              <div className="w-14 h-16">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Desc */}
              <span className="text-gray-800 font-medium text-sm mb-3 mt-3">
                {item.desc}
              </span>

              {/* Button */}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between  px-4 py-2 rounded-lg shadow hover:opacity-90 transition text-white "
                style={{
                  background: item.gradient
                    ? "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)"
                    : item.color,
                }}
              >
                <span className="text-[13px] font-medium">{item.name}</span>
                <MoveRight className="w-5 h-5" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CommunitySection;

import { taglines } from "../service_data/service";
import { StatsSection } from "./StatsSection";

export const Hero = () => {
  return (
    <section className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00AEFF1A,#034E721A)] will-change-transform"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          {/* Heading */}
          <h1 className="text-3xl sm:text-6xl font-bold text-gray-800 mb-6">
            OUR{" "}
            <span className="bg-[linear-gradient(to_right,#00AEFF,#034E72)] bg-clip-text text-transparent">
              SERVICES
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-md sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Empowering IT Careers & Businesses Through career-focused courses
            and real-time software development services, delivered online PAN
            India and offline in Puducherry.
          </p>

          {/* Key Taglines */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {taglines.map((tagline, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 h-full min-h-[200px] flex flex-col items-center text-center"
              >
                <tagline.icon className={`w-8 h-8 ${tagline.color} mb-3`} />
                <h3 className="font-semibold text-gray-800 mb-2">
                  {tagline.title}
                </h3>
                <p className="text-gray-600">{tagline.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Stats Section */}
        <StatsSection />
      </div>
    </section>
  );
};

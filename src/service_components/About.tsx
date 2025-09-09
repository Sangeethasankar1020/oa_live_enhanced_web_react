import { aboutCards } from "../service_data/service";

export const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-xl sm:text-4xl font-bold text-gray-800 mb-6">
            About Ocean Academy
          </h2>
          <p className="text-md sm:text-lg text-gray-600 leading-relaxed">
            Ocean Academy is a leading IT training & software development
            company in Puducherry. We provide career-focused IT courses with
            real-time project exposure and also deliver custom IT solutions for
            businesses across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutCards.map((card) => (
            <div key={card.id} className="text-center">
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${card.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center`}
              >
                <card.icon className="sm:w-8 sm:h-8 w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg  sm:text-xl font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

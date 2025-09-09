import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { advancedServices } from "../service_data/service";

// Memoized icon wrapper
const MemoIcon = React.memo(
  ({ Icon, className }: { Icon: React.ElementType; className?: string }) => (
    <Icon className={className} />
  )
);

const ServicesGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advancedServices.map((service) => {
          const Icon = service.icon;

          return (
            <div key={service.id} className="group relative">
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </div>
                </div>
              )}

              {/* Main card */}
              <div
                className={`relative h-full ${service.bgColor} rounded-2xl p-6 border border-slate-200 shadow-md overflow-hidden will-change-transform`}
              >
                {/* Corner gradient (lightweight) */}
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
                  <div
                    className={`w-full h-full bg-gradient-to-bl ${service.gradient} opacity-20 rounded-bl-full`}
                  />
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 ${service.iconColor} rounded-xl flex items-center justify-center mb-4 text-white shadow-md relative z-10`}
                >
                  <MemoIcon Icon={Icon} className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-left text-xl font-semibold text-slate-900 mb-2 relative z-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-left text-slate-600 mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 relative z-10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle2
                        className={`w-4 h-4 ${service.iconColor.replace(
                          "bg-",
                          "text-"
                        )} mr-2`}
                      />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesGrid;

import React, { useState } from "react";
import { User, Mail, Phone, CheckCircle, Sparkles } from "lucide-react";

interface RegistrationFormProps {
  webinarTitle: string;
  onRegistrationComplete: () => void;
  isRegistered: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  webinarTitle,
  onRegistrationComplete,
  isRegistered,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onRegistrationComplete();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isRegistered) {
    return (
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-6 md:p-8 shadow-2xl">
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            Registration Successful!
          </h3>
          <p className="text-green-100 mb-5 text-sm md:text-base">
            You're all set! We'll send you the webinar link and reminder
            details.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 md:p-4">
            <p className="text-xs md:text-sm font-medium">
              Check your email for:
            </p>
            <ul className="text-xs md:text-sm text-green-100 mt-2 space-y-1">
              <li>• Calendar invite</li>
              <li>• Webinar access link</li>
              <li>• Pre-webinar resources</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#034E72] to-[#00AEFF] text-white px-3 py-2 md:px-4">
        <div className="flex items-center justify-center md:justify-start">
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-300 mr-2" />
          <span className="font-bold text-sm md:text-base">
            FREE REGISTRATION
          </span>
        </div>
      </div>

      {/* Form */}
      <div className="p-4 md:p-6">
        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2.5 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2.5 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2.5 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#034E72] to-[#00AEFF] text-white py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white mr-2"></div>
                Registering...
              </div>
            ) : (
              "Register for FREE"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

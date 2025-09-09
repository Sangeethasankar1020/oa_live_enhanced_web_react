import React from "react";
import { contactDetails } from "../contact_data/contact_data";

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl sm:shadow-lg p-2 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#034E72] mb-8">
        Get In Touch
      </h2>
      <div className="space-y-8">
        {contactDetails.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-[#00AEFF] bg-blue-50 p-3 rounded-lg">
                <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[#034E72] text-lg mb-2">
                  {item.title}
                </h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;

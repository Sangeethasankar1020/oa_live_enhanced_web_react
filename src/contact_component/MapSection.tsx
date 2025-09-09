import React from "react";
import { MapPin } from "lucide-react";

const MapSection: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl sm:shadow-lg p-2 sm:p-8">
      <h3 className="text-2xl font-bold text-[#034E72] mb-6">Find Us</h3>

      {/* Google Map Embed */}
      <div
        className="relative rounded-lg overflow-hidden"
        style={{ height: "300px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.467520574871!2d79.81752567574577!3d11.942098736610976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53616c1e43a73f%3A0xf3758f2502e74f5b!2sOcean%20Academy!5e0!3m2!1sen!2sin!4v1757067138151!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;

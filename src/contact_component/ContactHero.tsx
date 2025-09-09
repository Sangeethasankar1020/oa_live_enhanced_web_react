import React from "react";

const ContactHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#034E72] to-[#00AEFF] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="  sm:text-xl text-blue-100 max-w-2xl mx-auto">
          Get in touch with Ocean Academy. We're here to help you with any
          questions about our programs, admissions, or services.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;

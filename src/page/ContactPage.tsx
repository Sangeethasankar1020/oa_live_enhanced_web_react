import React from "react";
import ContactHero from "../contact_component/ContactHero";
import ContactInfo from "../contact_component/ContactInfo";
import MapSection from "../contact_component/MapSection";
import ContactForm from "../contact_component/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <ContactInfo />
            <MapSection />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

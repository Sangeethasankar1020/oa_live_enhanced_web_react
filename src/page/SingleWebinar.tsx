// src/pages/SingleWebinar.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { mockWebinars } from "../webinar_data/webinardata";
import HeroSection from "../webinar_components/HeroSection";
import BenefitsSection from "../webinar_components/BenefitsSection";
import AgendaSection from "../webinar_components/AgendaSection";
import InstructorSection from "../webinar_components/InstructorSection";
import RegistrationSidebar from "../webinar_components/RegistrationSidebar";
import { main } from "framer-motion/client";
import { DetailedWebinarHeader } from "../webinar_components/DetailedWebinarHeader";

const SingleWebinar: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isRegistered, setIsRegistered] = useState(false);

  const webinar = mockWebinars.find((w) => w.id === id);

  if (!webinar) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">
          Webinar not found 🚫
        </h2>
      </div>
    );
  }

  const targetDate = new Date(`${webinar.date} ${webinar.time}`).getTime();

  return (
    <main>
      <DetailedWebinarHeader />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <HeroSection webinar={webinar} targetDate={targetDate} />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-10 md:space-y-12">
              <BenefitsSection benefits={webinar.benefits} />
              <AgendaSection agenda={webinar.agenda} />
              <InstructorSection instructors={webinar.instructors} />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
              <RegistrationSidebar
                webinarTitle={webinar.title}
                isRegistered={isRegistered}
                onRegister={() => setIsRegistered(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleWebinar;

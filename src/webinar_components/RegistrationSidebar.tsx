// src/webinar_components/RegistrationSidebar.tsx
import React from "react";
import RegistrationForm from "./RegistrationForm";

interface Props {
  webinarTitle: string;
  isRegistered: boolean;
  onRegister: () => void;
}

const RegistrationSidebar: React.FC<Props> = ({
  webinarTitle,
  isRegistered,
  onRegister,
}) => {
  return (
    <div className="sticky top-8">
      <RegistrationForm
        webinarTitle={webinarTitle}
        onRegistrationComplete={onRegister}
        isRegistered={isRegistered}
      />
    </div>
  );
};

export default RegistrationSidebar;

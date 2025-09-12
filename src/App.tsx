import { Route, Routes } from "react-router-dom";

import { ServicePage } from "./page/ServicePage";
import ContactPage from "./page/ContactPage";
import { HomePage } from "./page/HomePage";
import { ReviewPage } from "./page/ReviewPage";
import { AlbumGallery, SpecificAlbum } from "./Photos";
import { WebinarLandingPage } from "./page/WebinarLandingPage";
import { AllWebinarsPage } from "./page/AllWebinarPage";
import SingleWebinar from "./page/SingleWebinar";

function App() {
  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<WebinarLandingPage />} />
        <Route path="/allwebinars" element={<AllWebinarsPage />} />
        <Route path="/webinar/:id" element={<SingleWebinar />} />
        <Route path="/gallery" element={<AlbumGallery />} />
        <Route path="/gallery/:id" element={<SpecificAlbum />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;

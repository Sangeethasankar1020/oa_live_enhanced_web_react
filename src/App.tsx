import { Route, Routes } from "react-router-dom";

import { ServicePage } from "./page/ServicePage";
import ContactPage from "./page/ContactPage";
import { HomePage } from "./page/HomePage";
import { ReviewPage } from "./page/ReviewPage";
import { AlbumGallery, SpecificAlbum } from "./Photos";

function App() {
  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route path="/gallery" element={<AlbumGallery />} />
        <Route path="/gallery/:id" element={<SpecificAlbum />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;

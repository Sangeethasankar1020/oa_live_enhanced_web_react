import { Route, Routes } from "react-router-dom";

import { ServicePage } from "./page/ServicePage";
import ContactPage from "./page/ContactPage";
import { HomePage } from "./page/HomePage";
import { ReviewPage } from "./page/ReviewPage";

function App() {
  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<ReviewPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;

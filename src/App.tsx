import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import { AuthProvider } from "./AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Dashboard } from "./pages/Dashboard";
import SignUpPage from "./pages/SignUpPage";
import BrandLogos from "./components/BrandLogos";
import FutureSection from "./components/FutureSection";
import { CookieBanner } from "./components/CookieBanner";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <AnnouncementBanner />
          <Routes>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<SignUpPage />} />
            {/* <Route path="/product" element={<ProductPage />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/pricing" element={<PricingPage />} />

            <Route path="/contact-sales" element={<ContactSalesPage />} /> */}
          </Routes>
          <HeroSection />
          <BrandLogos />
          <FutureSection />
          <CookieBanner />
        </div>
      </Router>
    </AuthProvider>
  );
};
export default App;

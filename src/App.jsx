import Navbar from "./Components/Navbars/Navbar";
import HeroSlider from "./Components/HeroSlider/HeroSlider";
import ProductsSection from "./Components/ProductsSection/ProductsSection";
import LoanTools from "./Components/LoanTools/LoanTools";
import BankingHero from "./Components/BankingHero/BankingHero";
import PrivilegesSection from "./Components/PrivilegesSection/PrivilegesSection";
import StatsSection from "./Components/StatsSection/StatsSection";
import BusinessBanner from "./Components/BusinessBanner/BusinessBanner";
import CyberBanner from "./Components/CyberBanner/CyberBanner";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <ProductsSection />
      <LoanTools />
      <BankingHero />
      <PrivilegesSection />
      <StatsSection />
      <BusinessBanner />
      <CyberBanner />
      <Footer />
    </>
  );
}

export default App;

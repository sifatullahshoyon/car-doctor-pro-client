import About from "../components/Homepage/About";
import Banner from "../components/Homepage/Banner";
import Info from "../components/Homepage/Info";
import OurTeam from "../components/Homepage/OurTeam";
import Products from "../components/Homepage/Products";
import ServicesArea from "../components/Homepage/ServicesArea";
import Container from "../components/shared/Container";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <Banner />
        <About />
        <ServicesArea />
        <Info />
        <Products />
        <OurTeam />
      </Container>
    </main>
  );
}

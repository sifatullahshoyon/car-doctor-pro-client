import About from "../components/Homepage/About";
import Banner from "../components/Homepage/Banner";
import Info from "../components/Homepage/Info";
import ServicesArea from "../components/Homepage/ServicesArea";
import Container from "../components/shared/Container";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <Banner />
        <About />
        <ServicesArea />
        <Info />
      </Container>
    </main>
  );
}

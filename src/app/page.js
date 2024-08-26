import About from "../components/Homepage/About";
import Banner from "../components/Homepage/Banner";
import ServicesArea from "../components/Homepage/ServicesArea";
import Container from "../components/shared/Container";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <Banner />
        <About />
        <ServicesArea />
      </Container>
    </main>
  );
}

import About from "../components/About";
import Banner from "../components/Banner";
import Container from "../components/shared/Container";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <Banner />
        <About />
      </Container>
    </main>
  );
}

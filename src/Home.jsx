import {
  Navbar,
  Hero,
  Drops,
  Footer,
  Contact,
  About,
} from "./components/index";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Drops />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

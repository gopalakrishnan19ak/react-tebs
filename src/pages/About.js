import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Bgimg from "../assets/night.jpg";
import AboutUs from "../Components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-about" Imgbg={Bgimg} title="About" />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;

import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Bgimg from "../assets/4.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

function Services() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-about" Imgbg={Bgimg} title="Services" />
      <Trip />
      <Footer />
    </>
  );
}
export default Services;

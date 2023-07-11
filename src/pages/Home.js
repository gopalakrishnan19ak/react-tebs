import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Bgimg from "../assets/12.jpg";
import Package from "../Components/Package";
import Packagedata from "../Components/Packagedata";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        Imgbg={Bgimg}
        title="Your Journey Your story"
        text="Choose your destination"
      />
      <Package />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;

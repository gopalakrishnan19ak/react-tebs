import "../Components/Packagestyles.css";
import Packagedata from "../Components/Packagedata";
import Package1 from "../assets/6.jpg";
import Package2 from "../assets/12.jpg";
import Package3 from "../assets/5.jpg";
import Package4 from "../assets/1.jpg";

const Package = () => {
  return (
    <div className="package-sec">
      <h1>Most Popular Packages</h1>
      <p>We are happy to make you happier</p>

      <Packagedata
        className="package-des"
        heading="Travel Tips And Advice"
        text=" This event aims to raise funds for charity trips to disadvantaged
            areas. There will be a variety of fun activities for all ages,
            including carnival games, face painting, and a bouncy castle. Live
            entertainment will be provided throughout the day by local
            performers, Admission is free, but attendees are encouraged to bring
            non-perishable food items or make a monetary donation to support the
            cause. The event promises to be a wonderful day of family-friendly
            fun while giving back to the community."
        img1={Package1}
        img2={Package2}
      />

      <Packagedata
        className="package-des-reverse"
        heading="Our Travel Guideline"
        text="The secret journey of Tonkin is designed for travelers who want to touch, taste and feel the souls of Northern Vietnam through their unique highlights and experiences. More than simple whirlwind tours, the secret journey of Tonkin of Tonkin marry iconic destinations and must-see spots with the hidden corners and below-the-skin experiences to discover some of the famous and unique places around the Halong region.

Comprised of a dozen islands in the Discovery Passage between Vancouver Island and the mainland in British Columbia, we will take you kayaking throughout this sparsely inhabited remote group of islands on this kayaking tour."
        img1={Package3}
        img2={Package4}
      />
    </div>
  );
};

export default Package;

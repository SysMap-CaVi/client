import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import marcaBat from "../../assets/imgs/MARCA-BAT.png";
import marcaBrt from "../../assets/imgs/MARCA-BRT.png";
import marcaCat from "../../assets/imgs/MARCA-CAT.png";
import marcaGma from "../../assets/imgs/MARCA-GMA.png";
import marcaOba from "../../assets/imgs/MARCA-OBA.png";
import marcaPda from "../../assets/imgs/MARCA-PDA.png";
import marcaPra from "../../assets/imgs/MARCA-PRA.png";
import marcaSad from "../../assets/imgs/MARCA-SAD.png";
import marcaTat from "../../assets/imgs/MARCA-TAT.png";
import "./Style.css";

function Partners() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container">
      <Carousel
        responsive={responsive}
        infinite={true}
        className="partners-slider"
        autoPlay={true}
      >
        <div className="item">
          <img src={marcaBat} alt="" />
        </div>
        <div className="item">
          <img src={marcaBrt} alt="" />
        </div>
        <div className="item">
          <img src={marcaCat} alt="" />
        </div>
        <div className="item">
          <img src={marcaGma} alt="" />
        </div>
        <div className="item">
          <img src={marcaOba} alt="" />
        </div>
        <div className="item">
          <img src={marcaPda} alt="" />
        </div>
        <div className="item">
          <img src={marcaPra} alt="" />
        </div>
        <div className="item">
          <img src={marcaSad} alt="" />
        </div>
        <div className="item">
          <img src={marcaTat} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Partners;

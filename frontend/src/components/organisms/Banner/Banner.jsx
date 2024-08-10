import banner from "../../../assets/images/banner.png";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner animated tada">
      <h1 className="big-text">Adopt, don't shop</h1>
      <img src={banner} alt="Banner" className="banner-image" />
    </div>
  );
}

export default Banner;

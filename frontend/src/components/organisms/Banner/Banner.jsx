import banner from "../../../assets/images/banner.png";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1>
          <span className="adopt">Adopt</span>, don&apos;t shop
        </h1>
      </div>
      <div className="banner-image">
        <img src={banner} alt="Dog laying down" />
      </div>
    </div>
  );
}

export default Banner;

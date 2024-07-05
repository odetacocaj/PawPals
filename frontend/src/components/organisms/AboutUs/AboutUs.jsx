import "./AboutUs.scss";
import aboutUsImage from "../../../assets/images/AboutUsImage.jpg";
import PeopleIcon from "@mui/icons-material/People";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { SvgBlob } from "react-svg-blob";
function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-section sm:flex-row flex-col-reverse">
        <div className="mission-text">
          <h4 className="mission-title">Our Mission</h4>
          <p className="mission-content">
            Welcome to PawPals, where every wagging tail finds a loving home. Founded with a passion
            for dog welfare, we are dedicated to creating lasting bonds between humans and dogs,
            ensuring that every pup gets the chance to experience a forever family. Our mission is
            simple yet profound: to rescue, rehabilitate, and rehome dogs in need. We believe that
            every dog deserves a loving family and a place to call home. Through our dedicated team
            of volunteers and staff, we provide compassionate care and support to dogs who have
            faced hardship or abandonment.
          </p>
        </div>
        <div className="abstract-image">
          <SvgBlob variant="image" image={aboutUsImage} />
        </div>
      </div>
      <div className="our-story-container">
        <h4 className="our-story-title ">Our story</h4>
        <div className="our-story-content flex-wrap lg:flex-nowrap justify-center">
          <div className="video-container md:w-auto w-full">
            <iframe
              className="md:w-[560px] w-full h-full md:h-[315px]"
              src="https://www.youtube.com/embed/5U7xOxaVz0Y?rel=0&modestbranding=1&showinfo=0&controls=0&"
              title="Our Story Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <p className="text-lg">
              PawPals was founded in 2015 by Jane Doe with a heartfelt mission to rescue and provide
              loving homes for dogs in need. What started as a small initiative to help local strays
              has grown into a community-driven organization committed to improving the lives of
              dogs across Kosovo.Today, PawPals continues to expand its efforts in dog welfare
              through adoption events, educational programs, and community outreach. We remain
              steadfast in our commitment to advocate for the well-being of dogs and to foster a
              world where every dog is cherished and loved
            </p>
          </div>
        </div>
      </div>
      <div className="choose-us p-5">
        <div className="container">
          <div>
            <div className="section-head">
              <h4>
                <span>Why Choose</span> Us?
              </h4>
            </div>
            <div className="choose-us-cards-conatiner md:flex-nowrap flex-wrap">
              <div className="">
                <div className="item">
                  <span className="icon feature_box_col_one">
                    <PeopleIcon />
                  </span>
                  <h6>Community Engagement</h6>
                  <p>
                    We actively engage with our community through partnerships with local businesses
                    and organizations.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="item">
                  <span className="icon feature_box_col_two">
                    <VolunteerActivismIcon />
                  </span>
                  <h6>Compassionate Care</h6>
                  <p>
                    Each dog in our care receives individualized attention, veterinary care, and
                    training to prepare them for their forever homes.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="item">
                  <span className="icon feature_box_col_three">
                    <HealthAndSafetyIcon />
                  </span>
                  <h6>Health Guarantees</h6>
                  <p>
                    Each dog undergoes thorough veterinary examinations, vaccinations, and necessary
                    treatments before adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

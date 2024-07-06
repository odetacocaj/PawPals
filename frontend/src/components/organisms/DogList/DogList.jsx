import ReusableCard from "../../molecules/ReusableCard/ReusableCard";
import dogs from "../../../assets/static/dummydata/dogs";
import "./DogList.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const DogList = () => {
  return (
    <div className="dog-container">
      <div className="card-container-text">
        <h1 className="card-container-title">Meet Our Friends</h1>
        <p className="card-container-info">
          Explore our adorable friends looking for their forever homes. Each one has a unique story
          and is waiting to bring joy to your family.
        </p>
      </div>
      <div className="dog-list">
        {dogs.slice(0, 6).map((dog, index) => (
          <ReusableCard
            isClickable={false}
            key={index}
            image={dog.image}
            name={dog.name}
            age={dog.age}
            breed={dog.breed}
            gender={dog.gender}
          />
        ))}
      </div>
      <div className="flex justify-end pr-[50px]">
        <Link to="/dogs" className="flex flex-row gap-1 items-center">
          <span className="font-medium font-sans">View All</span>
          <ArrowForwardIcon />
        </Link>
      </div>
    </div>
  );
};

export default DogList;

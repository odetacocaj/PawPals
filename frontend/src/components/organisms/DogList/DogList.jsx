import ReusableCard from "../../molecules/ReusableCard/ReusableCard";
import dogs from "../../../assets/static/dummydata/dogs";
import "./DogList.scss";

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
        {dogs.map((dog, index) => (
          <ReusableCard
            key={index}
            image={dog.image}
            name={dog.name}
            age={dog.age}
            breed={dog.breed}
            gender={dog.gender}
          />
        ))}
      </div>
    </div>
  );
};

export default DogList;

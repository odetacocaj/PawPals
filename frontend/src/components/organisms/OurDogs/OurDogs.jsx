import { useState } from "react";
import ReusableCard from "../../molecules/ReusableCard/ReusableCard";
import dogs from "../../../assets/static/dummydata/dogs";
import { Pagination } from "@mui/material";
import { Alert } from "@mui/material";
import "./OurDogs.scss";

const OurDogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [alertType, setAlertType] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  const handleAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setTimeout(() => {
      setAlertType(null);
      setAlertMessage("");
    }, 6000);
  };

  const dogsPerPage = 9;

  const pageCount = Math.ceil(dogs.length / dogsPerPage);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="dog-container">
      <div className="flex items-center justify-center p-5 flex-col gap-4">
        <h1 className="our-dogs-title">Our Dogs</h1>
        {alertType && (
          <Alert severity={alertType} onClose={() => setAlertType(null)}>
            {alertMessage}
          </Alert>
        )}
      </div>
      <div className="dog-list">
        {currentDogs.map((dog, index) => (
          <div key={index} className="dog-card">
            <ReusableCard
              isClickable
              onAlert={handleAlert}
              id={dog.id}
              image={dog.image}
              name={dog.name}
              age={dog.age}
              breed={dog.breed}
              gender={dog.gender}
              description={dog.description}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
};

export default OurDogs;

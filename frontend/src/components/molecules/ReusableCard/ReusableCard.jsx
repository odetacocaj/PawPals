import { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Male, Female } from "@mui/icons-material";
import ModalComponent from "../Modal/Modal";
import Button from "../../atoms/Button/Button";

import "./ReusableCard.scss";

const ReusableCard = ({
  image,
  name,
  age,
  breed,
  gender,
  description,
  id,
  onAlert,
  isClickable,
}) => {
  const [hoveredDog, setHoveredDog] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [scheduledMeetings, setScheduledMeetings] = useState({});

  const handleMouseEnter = () => {
    setHoveredDog(name);
  };

  const handleMouseLeave = () => {
    setHoveredDog(null);
  };

  const handleMeetClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleScheduleMeeting = (dog, dateTime, formData) => {
    const success = Math.random() < 0.8;

    if (success) {
      const newMeeting = { ...scheduledMeetings, [dog.name]: { dateTime, visitorInfo: formData } };
      setScheduledMeetings(newMeeting);
      onAlert("success", `Meeting with ${dog.name} scheduled successfully!`);
      console.log("Scheduled meetings:", newMeeting);
    } else {
      onAlert("error", `Failed to schedule meeting with ${dog.name}. Please try again.`);
    }

    setModalOpen(false);
  };

  return (
    <Card className="reusable-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CardMedia component="img" height="200" image={image} alt={name} className="polaroid-image" />
      <CardContent className="polaroid-content">
        <Typography variant="h5" component="div" className="polaroid-title">
          {name}
        </Typography>
        <div className={hoveredDog && isClickable ? "polaroid-details-active" : "polaroid-details"}>
          {!hoveredDog || !isClickable ? (
            <>
              <Typography variant="body2" color="text.secondary" className="polaroid-detail">
                <strong>Breed:</strong> {breed}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="polaroid-detail">
                <strong>Age:</strong> {age}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="polaroid-detail">
                <strong>Sex:</strong> {gender === "Male" ? <Male /> : <Female />}
              </Typography>
            </>
          ) : (
            <div className="meet-dog-data">
              <Typography variant="body2" color="text.secondary" className="polaroid-detail">
                {description}
              </Typography>
              <Button className="meet-me-button" onClick={handleMeetClick}>
                Meet me
              </Button>
            </div>
          )}
        </div>
      </CardContent>

      <ModalComponent
        open={modalOpen}
        onClose={handleCloseModal}
        dog={{ name, id }}
        onSchedule={handleScheduleMeeting}
      />
    </Card>
  );
};

export default ReusableCard;

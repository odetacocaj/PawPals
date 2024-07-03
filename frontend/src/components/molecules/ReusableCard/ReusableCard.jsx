import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Male, Female } from "@mui/icons-material";
import "./ReusableCard.scss";

const ReusableCard = ({ image, name, age, breed, gender }) => {
  return (
    <Card className="reusable-card">
      <CardMedia component="img" height="200" image={image} alt={name} className="polaroid-image" />
      <CardContent className="polaroid-content">
        <Typography variant="h5" component="div" className="polaroid-title">
          {name}
        </Typography>
        <div className="polaroid-details">
          <Typography variant="body2" color="text.secondary" className="polaroid-detail">
            <strong>Breed:</strong> {breed}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="polaroid-detail">
            <strong>Age:</strong> {age}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="polaroid-detail">
            <strong>Sex:</strong> {gender === "Male" ? <Male /> : <Female />}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReusableCard;

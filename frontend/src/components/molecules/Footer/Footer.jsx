import { Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#f0f0f0",
    padding: "2rem",
    textAlign: "center",
    marginTop: "auto",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#333",
  };

  return (
    <footer style={footerStyle}>
      <Typography variant="h6" gutterBottom>
        Connect with us
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <IconButton>
            <Link to="https://www.facebook.com">
              <FacebookIcon style={iconStyle} />
            </Link>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <Link to="https://www.twitter.com">
              <TwitterIcon style={iconStyle} />
            </Link>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <Link to="https://www.instagram.com">
              <InstagramIcon style={iconStyle} />
            </Link>
          </IconButton>
        </Grid>
      </Grid>
      <Typography variant="body2" color="textSecondary" style={{ marginTop: "1rem" }}>
        For inquiries, contact us at:
        <br />
        Email: contact@pawpals.com
        <br />
        Phone: +1 (123) 456-7890
      </Typography>
      <Typography variant="body2" color="textSecondary" style={{ marginTop: "1rem" }}>
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;

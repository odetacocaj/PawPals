import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { TextField, Typography, Grid, Card, CardContent, Alert, Button } from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const DonateForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [donationAmount, setDonationAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: "Donor Name",
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      setDonationComplete(true);
      setAlertSeverity("success");
      setAlertMessage("Thank you for your donation!");
      setAlertOpen(true);

      setTimeout(() => {
        setAlertOpen(false);
      }, 10000);
    } catch (error) {
      setError(error.message);
      setAlertSeverity("error");
      setAlertMessage(error.message);
      setAlertOpen(true);

      setTimeout(() => {
        setAlertOpen(false);
      }, 10000);
    }

    setLoading(false);
  };

  // eslint-disable-next-line no-unused-vars
  const [donationComplete, setDonationComplete] = useState(false);

  return (
    <div className="p-[40px]">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Donate
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      label="Donation Amount ($)"
                      fullWidth
                      required
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                  </Grid>
                  {error && (
                    <Grid item xs={12}>
                      <Typography variant="body2" color="error">
                        {error}
                      </Typography>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={!stripe || loading || !donationAmount}
                    >
                      {loading ? "Processing..." : "Donate"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
              {alertOpen && (
                <Alert severity={alertSeverity} sx={{ mt: 2 }} onClose={() => setAlertOpen(false)}>
                  {alertMessage}
                </Alert>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

const Donate = () => {
  return (
    <Elements stripe={stripePromise}>
      <DonateForm />
    </Elements>
  );
};

export default Donate;

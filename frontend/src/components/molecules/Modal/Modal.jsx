import { useState } from "react";
import { Modal, Button, Select, MenuItem, FormControl, InputLabel, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Alert from "@mui/material/Alert";
const ModalComponent = ({ open, onClose, dog, onSchedule }) => {
  const [selectedDateTime, setSelectedDateTime] = useState({ date: null, time: null });
  const [hiddenAlert, setHidden] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
  ];

  const handleSchedule = () => {
    const { fullName, email, phoneNumber } = formData;

    if (selectedDateTime.date && selectedDateTime.time && fullName && email && phoneNumber) {
      const dateTime = `${selectedDateTime.date.format("YYYY-MM-DD")} ${selectedDateTime.time}`;
      onSchedule(dog, dateTime, formData);
      onClose();
    } else {
      setHidden(false);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDateTime((prevDateTime) => ({
      ...prevDateTime,
      date: date.isValid() ? date : null,
    }));
    console.log(selectedDateTime);
  };

  const handleTimeChange = (e) => {
    setSelectedDateTime((prevDateTime) => ({
      ...prevDateTime,
      time: e.target.value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      closeAfterTransition
      className="flex content-center items-center justify-center p-10"
    >
      <div className="modal-paper bg-white flex flex-col justify-center content-center items-center md:w-[50%] w-full h-fit p-5">
        <div className="flex flex-col justify-center content-center items-center w-[90%] md:gap-4 gap-6">
          <h1 id="parent-modal-title">Schedule a meeting with {dog.name}</h1>
          {!hiddenAlert && (
            <Alert severity="warning" hidden={hiddenAlert}>
              Please make sure to fill in all the required information.
            </Alert>
          )}

          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select a date"
                value={selectedDateTime.date}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Select Time</InputLabel>
            <Select value={selectedDateTime?.time} onChange={handleTimeChange} fullWidth required>
              {timeSlots.map((slot) => (
                <MenuItem key={slot} value={slot}>
                  {slot}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            required
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            required
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <Button variant="contained" color="primary" onClick={handleSchedule}>
            Schedule
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Snackbar,
  Alert
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 60px;
  height: 80vh;
`;

const ContactContent = styled.div`
  padding-left: 40px;
  width: 40%;
`;

const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const StyledTextField = styled(TextField)`
  margin: 10px;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setCompany('');
    setMessage('');
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, company, message);
    clearForm();
    setOpen(true);
  }

  return (
    <StyledBox
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
    >
      <ContactContent>
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ textAlign: 'center', fontWeight: 'bold' }}
          >
            Contact us
          </Typography>
          <Typography variant="h6" component="h1" color="#898d91">
            We're here to answer your questions and discuss the decentralized
            future of films
          </Typography>
          <StyledTextField
            required
            label="First name"
            variant="outlined"
            sx={{ width: '47%' }}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <StyledTextField
            required
            label="Last name"
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <StyledTextField
            required
            fullWidth
            label="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <StyledTextField
            required
            fullWidth
            label="Company"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
          <StyledTextField
            required
            id="outlined-multiline-flexible"
            label="Message"
            multiline
            fullWidth
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <FormGroup>
            <FormControlLabel
              required
              control={
                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
              }
              label="I agree to the terms of use and privacy policy"
            />
          </FormGroup>
          <StyledButton
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
          >
            Send
          </StyledButton>
        </form>
      </ContactContent>
      <Image
        src="https://runforthehillslondon.files.wordpress.com/2013/08/film-wallpaper-square-close.jpg"
        alt="Contact us"
      />
       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thank you. We will get back to you shortly.
        </Alert>
      </Snackbar>
    </StyledBox>
  );
};

export default Contact;

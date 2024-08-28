import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import image from './image1.png';
import studentImage from './image2.png';
import passwordImage from './password.png';
import building from './building.png';
import emailImage from './email.png';
import mobileImage from './mobileNumber.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  formContainer: {
    width: '50%',
  },
  formTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  terms: {
    marginTop: '20px',
  },
  termsText: {
    fontSize: '14px',
    color: '#555',
    marginTop: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
  imageContainer: {
    width: '40%',
    textAlign: 'center',
  },
  verticalLine: {
    borderLeft: '1px solid #ccc',
    height: '100%',
  },
  inputImage: {
    height: '24px',
    marginRight: '8px',
  },
}));

function Test() {
  const classes = useStyles();

  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [checkTerms, setTerms] = useState(false);

  const saveToLocalstorage = () => {
    if (companyName === '' || email === '' || password === '' || mobileNumber === '') {
      alert('Please fill all the details!');
      return;
    }

    if (!checkTerms) {
      alert('Accept the terms and conditions!');
      return;
    }

    const userDetails = {
      email,
      companyName,
      password,
      mobileNumber,
    };

    localStorage.setItem(email, JSON.stringify(userDetails));
    alert('Sign up successfully');

    setCompanyName('');
    setEmail('');
    setMobileNumber('');
    setPassword('');
    setTerms(false);
  };

  return (
    <Container className={classes.mainContainer}>
      <div className={classes.formContainer}>
        <Typography className={classes.formTitle} variant="h4" gutterBottom>
          Sign up
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                variant="outlined"
                className={classes.inputField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                className={classes.inputField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                className={classes.inputField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mobile Number"
                type="number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                variant="outlined"
                className={classes.inputField}
              />
            </Grid>
            <Grid item xs={6}>
              <Select fullWidth defaultValue="Country" variant="outlined" className={classes.inputField}>
                <MenuItem value="Country" disabled>
                  Country
                </MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="Japan">Japan</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select fullWidth defaultValue="State" variant="outlined" className={classes.inputField}>
                <MenuItem value="State" disabled>
                  State
                </MenuItem>
                <MenuItem value="Jharkhand">Jharkhand</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Typography variant="body2" color="textSecondary" className={classes.termsText}>
            Your data will be in the INDIA data center.
          </Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={checkTerms}
                onChange={(e) => setTerms(e.target.checked)}
                color="primary"
                className={classes.terms}
              />
            }
            label="I agree to the Terms of service and Privacy Policy."
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={saveToLocalstorage}
          >
            CREATE ACCOUNT
          </Button>
        </form>
      </div>

      <div className={classes.verticalLine}></div>

      <div className={classes.imageContainer}>
        <img src={image} alt="three-person" />
        <img src={studentImage} alt="student" />
      </div>

      <div>
        <img src={mobileImage} className={classes.inputImage} alt="mobile" />
        <img src={building} className={classes.inputImage} alt="building" />
        <img src={passwordImage} className={classes.inputImage} alt="password" />
        <img src={emailImage} className={classes.inputImage} alt="email" />
      </div>
    </Container>
  );
}

export default Test;

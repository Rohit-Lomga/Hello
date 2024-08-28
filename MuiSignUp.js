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
  InputAdornment,
} from '@mui/material';
import { styled } from '@mui/system';
import image from './image1.png';
import studentImage from './image2.png';
// import passwordImage from './password.png';
// import building from './building.png';
// import emailImage from './email.png';
// import mobileImage from './mobileNumber.png';

import BusinessIcon from '@mui/icons-material/Business';

// import SendIcon from '@mui/icons-material/Send'

const MainContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '20px',
  border: '1px solid black',
  width: '1140px',
  height: '500px',
  margin: '100px 0 0 195px',
  backgroundColor: '#E6E6ED',
  border: 'none',
});

const FormContainer = styled('div')({
  width: '410px',
});

const FormTitle = styled(Typography)({
  fontSize: '40px',
  marginBottom: '20px',
  textAlign: 'center',
});

const InputField = styled(TextField)({
  width: '405px',
  marginBottom: '0px',
  backgroundColor: 'white',
});

const TermsText = styled(Typography)({
  fontSize: '14px',
  color: '#555',
  marginTop: '10px',
});

const CustomButton = styled(Button)({
  padding: '10px 65px 10px 65px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#3D3D4E',
  color: 'white',
  wordSpacing: '5px',
  margin: '17px 0 0 65px',
  '&:hover': {
    backgroundColor: '#3D3D4E',
  },
});

// const ImageContainer = styled('div')({
//   width: '40%',
//   textAlign: 'center',
// });

const VerticalLine = styled('div')({
  borderLeft: '1px solid #ccc',
  height: '100%',
});

// const InputImage = styled('img')({
//   height: '24px',
//   marginRight: '8px',
// });

// Styling images by their IDs
const StyledImage = styled('img')(({ theme }) => ({
  // '&#three-students': {
  //   width: '10px',
  //   height: 'auto',
  //   marginBottom: theme.spacing(2),
  // },
  '&#student': {
    marginTop: '110px',
    marginRight: '70px',
    width: '250px',
    height: 'auto',
  },
}));

function MuiSignUp() {
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
    <div>
    <MainContainer>
      <FormContainer>
        <FormTitle variant="h4" gutterBottom>
          Sign up
        </FormTitle>
        <form noValidate autoComplete="off">
          <Grid container spacing={1.5}>
            <Grid item xs={12}>
              <InputField
                fullWidth
                label="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                variant="outlined"
                size='small'

                // InputProps={
                //   {
                //     startAdornment:<InputAdornment position='start' ><BusinessIcon /></InputAdornment>
                //   }
                // }
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                fullWidth
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                fullWidth
                label="Mobile Number"
                type="number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                variant="outlined"
                size='small'
              />
            </Grid>
            <Grid item xs={6}>
              <Select defaultValue="Country" variant="outlined" size='small' sx={{
                width:'200px', backgroundColor: 'white' 
              }}>
                <MenuItem value="Country" disabled>
                  Country
                </MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="Japan">Japan</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select defaultValue="State" variant="outlined" size='small' sx={{
                width:'200px', backgroundColor: 'white' 
              }}>
                <MenuItem value="State" disabled>
                  State
                </MenuItem>
                <MenuItem value="Jharkhand">Jharkhand</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <TermsText variant="body2" color="textSecondary">
            Your data will be in the INDIA data center.
          </TermsText>

          <FormControlLabel
            control={
              <Checkbox
                checked={checkTerms}
                onChange={(e) => setTerms(e.target.checked)}
                color="primary"
              />
            }
            label="I agree to the Terms of service and Privacy Policy."
          />

          <CustomButton
            variant="contained"
            onClick={saveToLocalstorage}
          >
            CREATE ACCOUNT
          </CustomButton>
        </form>
      </FormContainer>

      <VerticalLine />

      <div>
        <StyledImage src={studentImage} alt="student" id='student' />
      </div>

      {/* <div>
        <InputImage src={mobileImage} alt="mobile" />
        <InputImage src={building} alt="building" />
        <InputImage src={passwordImage} alt="password" />
        <InputImage src={emailImage} alt="email" />
      </div> */}
    </MainContainer>

    {/* <StyledImage src={image} alt="three-person" id='three-students' /> */}
    </div>
  );
}

export default MuiSignUp;

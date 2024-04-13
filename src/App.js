import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import {qbeContext }from './context';
import MobileHeader from './components/MobileHeader'

export default function App() {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [postCodeNumber, setPostCodeNumber]=useState("");
  const [postCodeErrorNumber, setPostCodeErrorNumber] = useState(false);
  const [registrationNumberError, setRegistrationNumberError] = useState(false);
  const [value, setValue] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  return (
    <qbeContext.Provider value={{ postCodeErrorNumber, setPostCodeErrorNumber,completed, setCompleted, activeStep, setActiveStep, value, setValue, registrationNumber, setRegistrationNumber ,postCodeNumber, setPostCodeNumber,registrationNumberError, setRegistrationNumberError}}>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" disableGutters>
      <Header />  
      <MobileHeader/>
      <Content/>    
      <Footer />
      </Container>
    </React.Fragment>
    </qbeContext.Provider>
  );
} 
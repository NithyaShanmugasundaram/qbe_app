import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { StepLabel } from '@mui/material';
import { styled } from "@mui/material/styles";
import{ steps }from './../utils';
import { useContext } from "react";
import { qbeContext } from "./../context";


const StepContainer = styled(Step)(({ theme }) => ({
  '& .MuiStepLabel-root .Mui-active': {
    color: theme.palette.green.main, // circle color (ACTIVE)
    fontWeight:'medium'
  },
  '& .MuiStepLabel-root .Mui-disabled': {
    color: theme.palette.white.main, // circle color (ACTIVE)
    fontWeight:'medium',
    border:"1px solid white",
    borderRadius:"50%"
  },
  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
    {
      mt:'0px' // Just text label (ACTIVE)
    },
    '& .MuiStepLabel-label.Mui-disabled.MuiStepLabel-alternativeLabel':
    {
      mt:'0px', // Just text label (ACTIVE)
      border:"1px solid transparent",
      
    },
  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
    fill: theme.palette.white.main, // circle's number (ACTIVE)
  },
  
  '& .MuiStepLabel-root .Mui-disabled .MuiStepIcon-text': {
    fill: theme.palette.white.main, // circle's number (DIsabled)
  },
  '& .MuiStepConnector-line':{
    display: 'block',
    borderColor: theme.palette.white.main,
    borderTopStyle: 'dotted',
    borderTopWidth: '2px'
  }
}));

export default function StepperComponent() {
  const {
    completed, setCompleted, activeStep, setActiveStep
  } = useContext(qbeContext);
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '50%' ,mx:'auto',}} >
      <Stepper  alternativeLabel  activeStep={activeStep}>
        {steps.map((label, index) => (
          <StepContainer
          key={label} completed={completed[index]} >
            <StepButton  onClick={handleStep(index)} >
              <StepLabel >{label}</StepLabel>
            </StepButton>
          </StepContainer>
        ))}
      </Stepper>
    </Box>
  );
}
 
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
const ButtonContainer = styled(Button)(({ theme }) => ({
 color:"White",
 border:"1px solid transparent",
 borderRadius:'35px',
 textTransform:"none"
 
}));

export default function ButtonComponent({variant,size,disabled,label}) {
  return (
    <ButtonContainer size={size} variant={variant} disabled={disabled}>{label}</ButtonContainer> 
  );
}
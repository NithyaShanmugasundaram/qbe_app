import * as React from 'react';
import {Typography} from '@mui/material';
import { styled } from "@mui/material/styles";
import IconButtonComponent from './Iconbutton';

const TypographyContainer = styled(Typography,)(( ) => ({
    textDecoration: "none", 
}));

export default function TypographtComponent  ({variant,component,label,color,icon,fontWeight})  {
    return ( <TypographyContainer
        variant={variant}
        component={component}
        color={color}
        fontWeight={fontWeight}
      >
        <>{label}<IconButtonComponent icon={icon}/></>
      </TypographyContainer> );
}
 
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
const IconButtonContainer = styled(IconButton)(({ theme }) => ({
 color:theme.palette.white.main,
 margin:'2px 0'
}));

export default function IconButtonComponent({
  icon,
  size,
  color,
  ariaLabel
}) {
  return (
    <IconButtonContainer aria-label={ariaLabel} size={size} color={color}>
      {icon}
    </IconButtonContainer>
  );
}

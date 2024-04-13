import * as React from "react";
import TypographtComponent from "./Typography";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import StepperComponent from "./Stepper";
import AdbIcon from "@mui/icons-material/Adb";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Stack,Divider,Grid,IconButton} from "@mui/material";
import IconButtonComponent from "./Iconbutton";

const GridContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "20px",
  textAlign: "center",
  position: "sticky",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function Header() {
  return (
    <GridContainer
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item md={2}>
        <Stack direction="row" justifyContent="center" alignItems="center">
        <IconButtonComponent aria-label="delete" color="white.main" icon={<AdbIcon fontSize="large"/>}>
       
      </IconButtonComponent>
          <TypographtComponent
            variant="h4"
            label="QBE"
            component="a"
            color="white.main"
            fontWeight="bold"
          />
        </Stack>
      </Grid>
      <Grid item md={6}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <StepperComponent />
        </Stack>
      </Grid>
      <Grid item md={2}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          divider={
            <Divider orientation="vertical" flexItem  color="white" />
          }
        >
          <IconButtonComponent
            ariaLabel="previous"
            icon={<ArrowBackIosIcon fontSize="large" />}
          />
          <IconButtonComponent
            ariaLabel="close"
            icon={<CloseIcon fontSize="large" />}
          />
        </Stack>
      </Grid>
    </GridContainer>
  );
}

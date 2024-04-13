import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TypographtComponent from "./Typography";
import CloseIcon from "@mui/icons-material/Close";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack, Box } from "@mui/material";
import IconButtonComponent from "./Iconbutton";
const FirstStepContainer = styled(Box)(({ theme }) => ({
  borderBottom: "2px solid green",
  color: theme.palette.green.main,
  textAlign: "start",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
const SecondStepContainer = styled(Box)(({ theme }) => ({
  borderBottom: "2px solid white",
  color: theme.palette.white.main,
  textAlign: "end",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
const GridContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "20px",
  textAlign: "center",
  position: "sticky",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
export default function MobileHeader() {
  return (
    <GridContainer
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={10}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <IconButtonComponent
            ariaLabel="close_icon"
            icon={<AdbIcon fontSize="large" />}
          />
          <TypographtComponent
            variant="h4"
            label="QBE"
            component="a"
            color="white.main"
          />
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <IconButtonComponent
            ariaLabel="close"
            icon={<CloseIcon fontSize="large" />}
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <FirstStepContainer>Confirm your details</FirstStepContainer>
          </Grid>
          <Grid item xs={6}>
            <SecondStepContainer>1 of 2</SecondStepContainer>
          </Grid>
        </Grid>
      </Grid>
    </GridContainer>
  );
}

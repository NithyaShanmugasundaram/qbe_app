import * as React from "react";
import { styled } from "@mui/material/styles";
import { Stack, Grid,Typography} from "@mui/material";

const GridContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  padding: "10px 40px",
  position: "relative",
  bottom:0,
  color:theme.palette.primary.main,
}));

export default function Footer() {
  return (
    <GridContainer
      container
      spacing={2}
      direction="row"
    >
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="start">
          <Typography
            sx={{textDecoration:'underline'}}           
            variant="caption"
            component="a"
            color="blue.main"
          >Terms and Conditions</Typography>
        </Stack>
      </Grid>
    </GridContainer>
  );
}

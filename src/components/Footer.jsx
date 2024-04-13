import * as React from "react";
import { styled } from "@mui/material/styles";
import { Stack, Box ,Grid,Typography} from "@mui/material";

const GridContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.white.light,
  padding: "20px 40px",
  bottom:0,
  color:theme.palette.primary.main,
  [theme.breakpoints.up("sm")]: {
    position: "absolute",
  },
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
            color="primary.main"
          >Terms and Conditions</Typography>
        </Stack>
      </Grid>
    </GridContainer>
  );
}

import * as React from "react";
import TypographtComponent from "./Typography";
import { Stack ,Paper,Grid} from "@mui/material";
import { styled } from "@mui/material/styles";
import TabComponent from "./Tab";
const Item = styled(Paper)(({ theme }) => ({ 
  margin:"25px",
  padding: theme.spacing(2),
  textAlign: 'center',
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2)
  },
}));

export default function Content() {
  return (
      <Grid container 
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Grid item xs={12} md={8}>
      <Item  elevation={3}>
      <Stack spacing={2} justifyContent="center" alignItems="center">     
          <TypographtComponent variant="h6" label="One more thing"  color="secondary.main" fontWeight="bold"/>
          <TypographtComponent variant="h6" fontWeight="medium" label="What is your vehicle registration number or garaging postcode?" color="secondary.main"  />
         <TabComponent/>
        </Stack></Item>
      </Grid>  
      </Grid>
  );
}

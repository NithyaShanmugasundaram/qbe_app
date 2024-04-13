import * as React from 'react';
import { createTheme} from '@mui/material/styles';

const qbeTheme = createTheme({
  palette: {
    primary:{
      main: '#191970',
    },
    secondary:{
    main:"#191970"
    },
    green:{
      main:"#32CD32"
    },
    white:{
      main:"#fff",
      light:"#F5F5F5"
    },
    blue:{
      main:"#2196f3"
    }
      
    
  },
});
export default qbeTheme;
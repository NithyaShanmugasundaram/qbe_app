import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material';
import TypographtComponent from "./Typography";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Stack ,Tabs,Tab,Typography,Box,TextField,InputAdornment} from "@mui/material";
import { useContext } from 'react';
import { qbeContext } from './../context';
import ButtonComponent from './Button';
import WarningIcon from "@mui/icons-material/Warning";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    fontWeight: "regular",
    backgroundColor: theme.palette.white.light,
    borderTopLeftRadius: "7px",
    borderTopRightRadius: "7px",
    "&:before": {
      borderColor: theme.palette.secondary.main,
      borderWidth: "1px",
    },
  },
  "& .MuiInputLabel-filled": {
    fontWeight: "Medium",
  },
  "& .MuiFormHelperText-root": {
    color: theme.palette.secondary.main,
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: theme.palette.error.main,
  },
}));

const AntTabs = styled(Tabs)(({ theme }) => ({
    border: "1px solid #151E3D",
    borderRadius:"4px",
    boxShadow:"3px",
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7",
    },
    "& .MuiTab-root.Mui-selected": {
      border: "1px solid #151E3D",
      margin: "5px 5px",
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "4px",
      color: theme.palette.white.main,
      
    },
  }));
  const AntTab = styled((props) => <Tab tabIndex={0}{...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      minWidth: 0,
      fontWeight: theme.typography.fontWeightMedium,
      marginRight: theme.spacing(1),
      color: theme.palette.secondary.main,
      "&.Mui-selected": {   
        fontWeight: theme.typography.fontWeightMedium,
      }, 
    })
  );

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const ALPHA_NUMERIC_DASH_REGEX = /^(0|[1-9]\d*)$/;
export default function TabComponent() {
  
  const {
    value, setValue,
    registrationNumber,
    setRegistrationNumber,
    postCodeNumber,
    setPostCodeNumber,
    registrationNumberError,
    setRegistrationNumberError,
    postCodeErrorNumber,
    setPostCodeErrorNumber
  } = useContext(qbeContext);
 
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    if (name == "registrationNumber") {
      setRegistrationNumber(value)
      setPostCodeErrorNumber(false)
      setPostCodeNumber("")
      if (value !== "" && ALPHA_NUMERIC_DASH_REGEX.test(value)) {
        setRegistrationNumberError(false);  
      } else {
        setRegistrationNumberError(true);  
      }
    } else if (name == "postCodeNumber") {
      setPostCodeNumber(value)
      setRegistrationNumberError(false)
      setRegistrationNumber("") 
      if (value !== "" && ALPHA_NUMERIC_DASH_REGEX.test(value)) {
        setPostCodeErrorNumber(false);   
      } else {
        setPostCodeErrorNumber(true);  
      }
    }
   
  };


  const handleChange = (event, newValue) => {   
    if(newValue ==1){
     console.log("1")
      setRegistrationNumberError(false);
      setRegistrationNumber("");
    }else {
      setPostCodeErrorNumber(false)
      setPostCodeNumber("")
    }
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <AntTabs value={value} onChange={handleChange} aria-label="tabs"  allowScrollButtonsMobile>
          <AntTab label="Registration Number" />
          <AntTab label="Postcode" />
        </AntTabs> 
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Stack spacing={3} justifyContent="center" alignItems="center">     
      <TypographtComponent variant="h6" label="What's your vehicle registration number?"  color="secondary.main" fontWeight="bold" icon={<InfoOutlinedIcon fontSize="medium" sx={{color:"#151E3D",mb:"5px"}}/>}/>
   <StyledTextField name="registrationNumber" variant="filled" onChange={handleTextChange}  error={registrationNumberError} 
   value={registrationNumber} helperText="Please enter the registration number of the insured vehicle"
   label="Registration Number" InputProps={{
    endAdornment: (
      <InputAdornment position="start">
        {registrationNumberError && <WarningIcon color="error" />}
      </InputAdornment>
    ),
  }}/>
    <ButtonComponent size="large" variant="contained"  disabled={true} label="Continue"/>  
    </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Stack spacing={3} justifyContent="center" alignItems="center">     
      <TypographtComponent variant="h6" label="What's your post code?"  color="secondary.main" fontWeight="bold" icon={<InfoOutlinedIcon fontSize="medium" sx={{color:"secondary.main"}}/>}/>
      <StyledTextField name="postCodeNumber" 
      variant="filled"
      label="Postcode Number"
      fullWidth
      onChange={handleTextChange} 
      error={postCodeErrorNumber} 
      value={postCodeNumber}
      helperText="Please enter the post code where your car is garaged"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            {postCodeErrorNumber && <WarningIcon color="error" />}
          </InputAdornment>
        ),
      }}
      />
    <ButtonComponent size="large" variant="contained"  disabled={true} label="Continue"/>    
    </Stack>
      </CustomTabPanel>
      </>
  );
}

